import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub, faMastodon, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionalComponent } from "preact";

interface Props {
    type: string
    url?: string
    username: string
}

interface Type {
    icon: IconProp | null
    name: string
}

const TYPES: { [key: string]: Type } = {
    discord: {
        icon: faDiscord,
        name: "Discord",
    },
    email: {
        icon: faEnvelope,
        name: "Email",
    },
    mastodon: {
        icon: faMastodon,
        name: "Mastodon",
    },
    reddit: {
        icon: faReddit,
        name: "Reddit",
    },
    github: {
        icon: faGithub,
        name: "GitHub",
    },
    matrix: {
        icon: null,
        name: "Matrix",
    },
}

function fromType(type: string): Type | null {
    if (Object.prototype.hasOwnProperty.call(TYPES, type)) {
        return TYPES[type];
    } else {
        return null;
    }
}

const SocialLink: FunctionalComponent<Props> = (props) => {
    const type = fromType(props.type);

    if (type) {
        if (props.url) {
            return <>
                { type.icon && <FontAwesomeIcon icon={type.icon} /> }
                {' '} {type.name}:{' '}
                <a href={props.url} rel="me noreferrer noopener">{props.username}</a>
            </>
        } else {
            return <>
                { type.icon && <FontAwesomeIcon icon={type.icon} /> }
                {' '} {type.name}:{' '} {props.username}
            </>
        }
    } else {
        return <>
            <FontAwesomeIcon icon={faExclamationCircle} /> Error!
        </>
    }
}

export default SocialLink;
