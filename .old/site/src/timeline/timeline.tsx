import { range } from "lodash-es";
import React from "react";
import { getColumns, getYearText, TimelineProps } from "./types";
import { TimelineColumn, TimelineColumnElement, TimelineEventColumn } from "./column";

export function Timeline(props: TimelineProps) {
    const events = props.events;
    const firstEvent = events.reduce((a, b) => (a.start < b.start ? a : b));
    const lastEvent = events.reduce((a, b) => (a.end > b.end ? a : b));
    let start = Math.floor(firstEvent.start);
    let end = Math.floor(lastEvent.end);
    const yearBlocks = range(start, end + 1).map(year => {
        const text = getYearText(year);
        const element = <div className="timeline__year">{text}</div>;
        return {
            element,
            start: year,
            end: year + 1
        } as TimelineColumnElement;
    });
    const eventsBefore = getColumns(events.filter(event => event.before));
    const eventsAfter = getColumns(events.filter(event => !event.before));

    function getVerticalPos(date: number) {
        return (date - start) * (props.yearHeight - 5) + 5;
    }

    const beforeColumns = eventsBefore.map((events, i) => {
        return (
            <TimelineEventColumn events={events} getVerticalPos={getVerticalPos} key={`a${i}`} />
        );
    });
    const afterColumns = eventsAfter.map((events, i) => {
        return (
            <TimelineEventColumn events={events} getVerticalPos={getVerticalPos} key={`b${i}`} />
        );
    });
    const timelineColumn = (
        <TimelineColumn getVerticalPos={getVerticalPos} elements={yearBlocks} className="yearsss" />
    );
    const fullHeight = getVerticalPos(end) - getVerticalPos(start) + props.yearHeight;
    return (
        <div
            className="timeline"
            style={{
                height: `${fullHeight}px`
            }}
        >
            <div className="timeline__before">
                <div className="timeline__before__name timeline__name">{props.beforeName}</div>
                <div className="timeline__before__columns">{beforeColumns}</div>
            </div>
            {timelineColumn}
            <div className="timeline__after">
                <div className="timeline__after__name timeline__name">{props.afterName}</div>
                <div className="timeline__after__columns">{afterColumns}</div>
            </div>
        </div>
    );
}
