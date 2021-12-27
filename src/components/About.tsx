import Fade from "react-reveal/Fade";
import H from './Highlight';
import { socials } from '../data/socials.json';
import SocialLink from "./SocialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { scrollEv } from "../scrolling";

export function About() {
    return <>
        <div id="about" class="page">
            <Fade>
                <div class="updown up">
                    <a href="#home" onClick={scrollEv('home')}>
                        <FontAwesomeIcon icon={faChevronUp} /> Home <FontAwesomeIcon icon={faChevronUp} />
                    </a>
                </div>
            </Fade>

            <div class="page-content">
                <Fade>
                    <h1>About</h1>
                    <p>
                        Hi, I'm <H>Ashley</H> (or <H>Ash</H> for short), and I'm a trans girl from the UK.
                        I go by <a href="https://pronouns.page/@ashhhleyyy"><H>she/they</H></a> pronouns.
                        I make random projects with Minecraft, Rust and other things.
                    </p>

                    <p>
                        You can find me on the internet in quite a few other places:

                        <ul>
                            {socials.map(s => <li>
                                <SocialLink {...s} />
                            </li>)}
                        </ul>

                        I also have several accounts under my old name, so send me a DM on Discord or Matrix if you are interested.
                    </p>
                </Fade>
            </div>

            <Fade>
                <div class="updown down">
                    <a href="#projects" onClick={scrollEv('projects')}>
                        <FontAwesomeIcon icon={faChevronDown} /> Projects <FontAwesomeIcon icon={faChevronDown} />
                    </a>
                </div>
            </Fade>
        </div>
    </>
}
