import React from "react";
import { ContactProps } from "./props";

export function NavFooter(props: ContactProps) {
    return (
        <footer className="contact-nav-footer">
            <a href={`mailto${props.email}`}>Mail</a> | <a href={props.linkedin}>LinkedIn</a>
        </footer>
    );
}
