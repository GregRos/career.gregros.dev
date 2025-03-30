import { getColumns, TimeEvent } from "./types";
import React from "react";
import { navigateTo } from "../hidden-api";

export interface TimelineColumnElement {
    start: number;
    end: number;
    element: React.ReactNode;
}

export interface TimelineColumnProps {
    elements: TimelineColumnElement[];
    className?: string;

    getVerticalPos(date: number): number;
}

export function TimelineEventColumn(props: {
    events: TimeEvent[];
    getVerticalPos(date: number): number;
}) {
    const eventBlock = props.events.map(event => {
        return {
            element: (
                <a
                    href={`https://career.gregros.dev/${event.location.replace(".md", "")}`}
                    onClick={e => {
                        e.preventDefault();
                        navigateTo(event.location);
                    }}
                    onMouseOver={e => {
                        window.publish.render.onInternalLinkMouseover(
                            e.nativeEvent,
                            e.currentTarget as HTMLAnchorElement,
                            event.location.replace(".md", "")
                        );
                    }}
                >
                    <div className={`tcol__event tcol__event--${event.className}`}>
                        <span className="tcol__event__text">{event.text}</span>
                    </div>
                </a>
            ),
            end: event.end,
            start: event.start
        } as TimelineColumnElement;
    });
    return <TimelineColumn elements={eventBlock} getVerticalPos={props.getVerticalPos} />;
}

export function TimelineColumn(props: TimelineColumnProps) {
    const timelineEs = props.elements.map((item, i) => {
        const start = props.getVerticalPos(item.start);
        const height = props.getVerticalPos(item.end) - start;
        const widthItem = (
            <div
                key={`a${i}`}
                className="tcol__wspacer"
                style={{
                    height: "0",
                    visibility: "hidden",
                    overflow: "hidden"
                }}
            >
                {item.element}
            </div>
        );
        const eventItem = (
            <div
                key={`b${i}`}
                className="tcol__positioner"
                style={{
                    position: "absolute",
                    top: `${start}px`,
                    height: `${height}px`
                }}
            >
                {item.element}
            </div>
        );
        if (props.className === "yearsss" && i > 0) {
            return [eventItem];
        }
        return [widthItem, eventItem];
    });
    return <div className={`tcol ${props.className ? props.className : ""}`}>{timelineEs}</div>;
}
