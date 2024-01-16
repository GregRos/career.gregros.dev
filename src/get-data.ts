import { TimeEvent } from "./timeline/types";

export interface Thing {
    type: "Project" | "Place";
    name: string;
    frontmatter: any;
    location: string;
}

function frontmatterToVents(thing: Thing): TimeEvent[] {
    let fm = thing.frontmatter;
    const periods = fm.periods ?? fm.period;
    return periods.map(x => {
        let myFm = fm;
        const split = x.split("-");
        const [start, end] = split
            .map(y => y.trim())
            .map(x => (x === "now" ? 2024 : parseFloat(x)));
        if (thing.name.includes("Reflectiz") && start < 2020) {
            myFm = Object.assign({}, fm);
            myFm.position = "Sr. Backend Developer";
        }
        return {
            start,
            end,
            text: thing.name,
            link: myFm.link,
            location: thing.location,
            description: myFm.position ?? myFm.desc,
            before: thing.type === "Place",
            className: thing.type === "Place" ? thing.name : myFm.type
        } satisfies TimeEvent;
    });
}

export async function getTypedData(getData: () => Promise<Record<string, any>>) {
    const data = await getData();
    const kvps = Object.entries(data);
    const events = [];
    const projectOrPlace = /^(Projects|Places)\/([^\/]*).md$/;
    for (const [key, value] of kvps) {
        const result = projectOrPlace.exec(key);
        if (!result) {
            continue;
        }

        const thing = {
            type: result[1] === "Projects" ? "Project" : "Place",
            name: result[2],
            frontmatter: value.frontmatter,
            location: key
        } satisfies Thing;

        events.push(...frontmatterToVents(thing));
    }
    return events;
}
