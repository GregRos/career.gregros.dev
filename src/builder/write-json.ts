import { getAchievements } from "./build-index.js";
import { promises as fs } from "fs";
async function run() {
    const achievements = await getAchievements("vault/Achievements");
    await fs.writeFile("public/achievements.json", JSON.stringify(achievements, null, 4));
}

run()
