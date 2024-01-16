import { embedTimeline } from "./timeline-embed";

embedTimeline(document.getElementById("timeline")!, () => import("./example-data.json"));
