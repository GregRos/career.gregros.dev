import { createRoot } from "react-dom/client";
import { Timeline } from "./timeline/timeline.js";
import React from "react";
import { TimeEvent } from "./timeline/types";
import { getTypedData } from "./get-data";

export async function embedTimeline(
    root: HTMLElement,
    getData: () => Promise<Record<string, any>>
) {
    const data = await getTypedData(getData);
    createRoot(root).render(
        <Timeline events={data} yearHeight={50} afterName="Projects" beforeName="Work" />
    );
}
