import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import { scrollEv } from "../scrolling";

import './footer.css';

export default function Footer() {
    return <div class="shoe">
        <footer class="feet">
            <Fade>
                <p>
                    Copyright (c) 2021 Ashhhleyyy
                </p>
                <p>
                    Powered by <a href="https://vitejs.dev">Vite</a>, <a href="https://preactjs.com">Preact</a>, <a href="https://pages.github.io">GitHub Pages</a>, 💖 and ✨
                </p>
                <p>
                    <a href="#home" onClick={scrollEv('home')}>Back to top <FontAwesomeIcon icon={faChevronUp} /></a>
                </p>
                feet.
            </Fade>
        </footer>
    </div>
}
