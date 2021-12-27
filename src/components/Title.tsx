import pfp from '../pfp.png';
import Fade from 'react-reveal/Fade';
import './title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scrollEv } from '../scrolling';

export default function Title() {
    return <div id="home" class="page">
        <Fade>
            <div class="title">
                <img src={pfp} class="title-avatar" width={256} height={256} alt="My profile picture" />
                <h1 class="title-header">Ashhhleyyy (Ash)</h1>
            </div>
            <div class="updown down">
                <a href="#about" onClick={scrollEv('about')}>
                    <FontAwesomeIcon icon={faChevronDown} /> About <FontAwesomeIcon icon={faChevronDown} />
                </a>
            </div>
        </Fade>
    </div>
}
