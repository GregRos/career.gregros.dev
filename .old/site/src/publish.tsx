import { embedTimeline } from "./timeline-embed";
import { ContactNavHeader } from "./contact/contact-nav-header";
import { ContactProps } from "./contact/props";
import React from "react";
import { createRoot } from "react-dom/client";

function makeNoIndex() {
    const noindex = document.createElement("meta");
    noindex.name = "robots";
    noindex.content = "noindex";
    return noindex;
}

const pushState = history.pushState;
history.pushState = function () {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event("pushstate"));
};

function makeGtm() {
    const gtm = document.createElement("script");
    gtm.src = "https://career.gregros.dev/g_t_m.js";
    gtm.async = true;
    return gtm;
}

function embedNonContent() {
    renderNavHeader();
    renderNavFooter();
}

async function onDetectedRendering() {
    mut.disconnect();
    await renderComponents();
}

async function onNavigate() {
    embedNonContent();
    await renderComponents();
}

const contact: ContactProps = {
    email: "work.gregr@gmail.com",
    linkedin: "https://www.linkedin.com/in/greg-ros"
};

function getContactHtml() {
    const html = `
    <section class="contact-me">
<a href="mailto:${contact.email}">Email</a> | <a href="${contact.linkedin}">LinkedIn</a>
</section>    
    `;
    return html;
}

function renderNavHeader() {
    const siteHeader = document.querySelector(".site-header");
    if (!siteHeader || siteHeader.querySelector(".contact-me")) {
        return;
    }
    const div = document.createElement("div");
    div.innerHTML = getContactHtml();
    siteHeader.appendChild(div.children[0] as HTMLElement);
}

function renderNavFooter() {
    const navSidebar = document.querySelector(".site-body-left-column");
    if (!navSidebar || navSidebar.querySelector(".contact-me")) {
        return;
    }
    const div = document.createElement("div");
    div.innerHTML = getContactHtml();
    navSidebar.appendChild(div.children[0] as HTMLElement);
}

async function renderComponents() {
    await new Promise(resolve => setTimeout(resolve, 300));


}

window.addEventListener("pushstate", onNavigate);
window.addEventListener("popstate", onNavigate);
embedNonContent();
const mut = new MutationObserver(onDetectedRendering);
mut.observe(document.querySelector(".markdown-preview-view"), { childList: true, subtree: true });
