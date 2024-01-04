import { Achievement } from "../types/achievement.js";
import React from "react";
import Markdown from "react-markdown";
import "../../public/achievements.scss";

export interface AchievementProps {
    achievement: Achievement;
}

export default function CmpAchievement({ achievement }: AchievementProps) {
    return (
        <section className="achievement">
            <header className="achievement-header">
                <h2 className="achievement-header__title">{achievement.title}</h2>
                <div className="achievement-header__icon">{achievement.icon}</div>
            </header>
            <div className="achievement-content">
                <Markdown className="achievement-content_markdown">
                    {achievement.text.content}
                </Markdown>
            </div>
            <ul className="achievement-tags">
                {achievement.tags.map(x => (
                    <li className="achievement-tags_tag" key={x}>
                        x
                    </li>
                ))}
            </ul>
        </section>
    );
}
