import React from "react";
import { ContactProps } from "./props";

export function ContactNavHeader(props: ContactProps) {
    return (
        <header className="contact-nav-header">
            <a className="mail" href={`mailto:${props.email}`}>
                Email
            </a>
            |
            <a className="linkedin" href={props.linkedin}>
                LinkedIn
            </a>
        </header>
    );
}
