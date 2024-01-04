import { Achievement } from "../types/achievement.js";
import React from "react";
import CmpAchievement from "./achievement.js";

export interface AchievementListProps {
    achievements: Achievement[];
}

export default function CmpAchievementList({ achievements }: AchievementListProps) {
    return (
        <ul className="achievements">
            {achievements.map(achievement => (
                <li className="achievements_item" key={achievement.id}>
                    <CmpAchievement achievement={achievement} />
                </li>
            ))}
        </ul>
    );
}
