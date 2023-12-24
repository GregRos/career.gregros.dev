import { default as slugify } from "slugify";
import { readFileSync, readSync, rmSync, writeFileSync } from "fs";
import { filter, groupBy, map, maxBy } from "lodash-es";
import dayjs, { Dayjs } from "dayjs";
import { dump } from "js-yaml";
import { globby, globbySync } from "globby";
import { rm } from "fs/promises";

const options = {};

class Achievement {
    readonly id: string;
    readonly title: string;
    readonly text: string;
    readonly tags: string[];
    readonly date: Dayjs;
    readonly icon: string;
    constructor(
        icon: string,
        id: string,
        title: string,
        text: string,
        tags: string[],
        dateLastEdited: string
    ) {
        this.id = id;
        this.icon = icon;
        this.title = title.trim();
        this.text = text.trim();
        this.tags = tags;
        this.date = dayjs(dateLastEdited);
    }
}

function getRandomBase36() {
    return Math.random().toString(36).substring(6);
}

function importAllEntries(x: any) {
    return x.actions.map(x => importOneEntry(x.data)).filter(x => x) as Achievement[];
}

function importOneEntry(data: any) {
    if (!data.card || !data.list || !data.text) {
        return undefined;
    }
    const lastEdited = data.dateLastEdited;

    const card = slugify.default(data.card.name, {
        lower: true,
        strict: true
    });
    const section = slugify.default(data.list.name, {
        lower: true,
        strict: true
    });
    const txt = data.text;
    let icon = "";
    let [, title, text] = /^(?:([\s\S]*?)---)?([\s\S]*)$/.exec(txt);
    if (title) {
        title = title.replaceAll("**", "");
        const split = /^\s*([\u200D\p{Emoji}\uFE0F]*)\s*(.*)\s*$/gu.exec(title);
        if (split) {
            title = split[2];
            icon = split[1];
        }
        return new Achievement(icon, slugify.default(title, {
            lower: true,
            strict: true
        }), title, text, [card, section], lastEdited);
    }
    const id = getRandomBase36();
    return new Achievement(icon, "_" + id, id, txt, [card, section], lastEdited);
}

const content = JSON.parse(readFileSync("./trello-iVLMzaQD.json", "utf8"));

const achievements = importAllEntries(content);
const uniqAchievements = map(groupBy(achievements, x => x.title), x => maxBy(x, y => y.date.unix()));
for (const x of globbySync("./vault/Achievements/*.md", {
    absolute: true
})) {
    console.log(x);
    rmSync(x);
}
for (const x of uniqAchievements) {
    const frontmatter = {
        title: x.title,
        tags: x.tags,
        icon: x.icon,
    };
    const yaml = `---\n${dump(frontmatter, {
        indent: 2
    })}\n---\n`;

    const text = `${yaml}${x.text}`;

    writeFileSync(`./vault/Achievements/${x.id}.md`, text);
}
