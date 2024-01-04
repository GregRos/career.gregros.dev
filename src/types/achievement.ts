export interface Markdown {
    type: "markdown";
    content: string;
}

export type Text =
    | Markdown
    | {
          type: "???";
      };

export interface Achievement {
    id: string;
    tags: string[];
    title: string;
    icon: string;
    text: Markdown;
}
