declare global {
    interface Window {
        publish: {
            nav: {
                treeView: any;
            };
            render: {
                onInternalLinkMouseover(e: MouseEvent, link: HTMLAnchorElement, path: string): void;
            };
            site: {
                cache: {
                    cache: Record<string, any>;
                };
            };
        };
    }
}

function navigateToInNode(target: any, path: string[]) {
    if (path.length === 0) {
        target.onSelfClick(new MouseEvent("click"));
        return;
    }
    const first = path.shift();
    for (const child of target.children) {
        if (child.file.name.toLowerCase() === first.toLowerCase()) {
            navigateToInNode(child, path);
            return;
        }
    }
    throw new Error(`Could not find child ${first} in ${target.file.name}`);
}

export function navigateTo(path: string) {
    const pathParts = path.split("/");
    try {
        navigateToInNode(window.publish.nav.treeView.rootFolder, pathParts);
    } catch (e) {
        console.error(`Could not navigate to ${path} using API, will do it manually`, e);
        window.location.href = `https://career.gregros.dev/${path.replace(".md", "")}`;
    }
}

// example:
// nevigateTo("Places/thingy.md")
