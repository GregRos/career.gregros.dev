import { promises as fs } from "fs";
import { Achievement } from "../types/achievement.js";
import grayMatter from "gray-matter";
import path from "node:path";
import {globby} from "globby";
export async function getAchievements(root: string) {
    const files = await globby(`${root}/*/*.md`);
    const achievements = files.map(async file => {
        const contents = await fs.readFile(file, "utf8");
        if (file.endsWith(".md")) {
            const parsed = grayMatter(contents);
            return {
                id: path.relative(root, file).replaceAll(path.sep, "/").replace(/\.md$/, ""),
                title: parsed.data.title,
                tags: parsed.data.tags,
                icon: parsed.data.icon,
                text: {
                    type: "markdown",
                    content: parsed.content
                }
            } as Achievement;
        } else {
            return {
                type: "???"
            };
        }
    });

    return await Promise.all(achievements)
}
