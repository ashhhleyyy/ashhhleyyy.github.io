import { FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";

import './highlight.css';

const H: FunctionalComponent = ({ children }) => {
    return <span class="highlight">
        <b>{children}</b>
    </span>
};

export const HA: FunctionalComponent<JSXInternal.HTMLAttributes<HTMLAnchorElement>> = ({ children, class: className, ...props }) => {
    return <a class={className ? "highlight " + className : "highlight"} {...props}>
        <b>{children}</b>
    </a>
}

export default H;
