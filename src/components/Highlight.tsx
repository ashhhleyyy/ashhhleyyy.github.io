import { FunctionalComponent } from "preact";

import './highlight.css';

const H: FunctionalComponent = ({ children }) => {
    return <span class="highlight">
        <b>{children}</b>
    </span>
};

export default H;
