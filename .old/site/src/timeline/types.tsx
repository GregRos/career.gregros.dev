export interface TimeEvent {
    text: string;
    link: string;
    start: number;
    end: number;
    before: boolean;
    className: string;
    description: string;
    location: string;
}

export function getYearText(year: number) {
    return `${year}`;
}

export function getColumns(events: TimeEvent[]) {
    const cols: TimeEvent[][] = [];
    events.sort((a, b) => a.start - b.start);
    for (const event of events) {
        let col: TimeEvent[];
        for (const r of cols) {
            const lastEvent = r[r.length - 1];
            if (!lastEvent) {
                col = r;
                break;
            }
            if (lastEvent.end <= event.start) {
                col = r;
                break;
            }
        }
        if (!col) {
            col = [];
            cols.push(col);
        }
        col.push(event);
    }
    return cols;
}

export interface TimelineProps {
    events: TimeEvent[];
    yearHeight: number;
    beforeName: string;
    afterName: string;
}
