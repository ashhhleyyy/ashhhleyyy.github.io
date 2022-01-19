import Fade from "react-reveal/Fade";
import H, { HA } from './Highlight';
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
                        I go by <HA href="https://pronouns.page/@ashhhleyyy">she/they</HA> pronouns.
                        I make random projects with Minecraft, Rust and other things.
                    </p>

                    <p>
                        You can find me on the internet in quite a few other places:

                        <ul>
                            {socials.map(s => <li>
                                <SocialLink {...s} />
                            </li>)}
                        </ul>

                        I also have several accounts under my old name, so send me an email if you are interested.
                    </p>

                    <p>
                        If you want to encrypt a message you send to me, you can do so using <HA href="/pgp_key.txt">my GPG key for <code>ash@ashhhleyyy.dev</code></HA>.
                        <br />
                        Its fingerprint is <code>3CBB C2C5 E84D 7A5D D072 7D9E 83B7 8908 1A08 78FB</code>.
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
