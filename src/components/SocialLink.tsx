import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faDiscord, faGithub, faMastodon, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FunctionalComponent } from "preact";

interface Props {
    type: string
    url: string
    username: string
}

interface Type {
    icon: IconProp | null
    name: string,
}

const TYPES: { [key: string]: Type } = {
    discord: {
        icon: faDiscord,
        name: "Discord",
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
        return <>
            { type.icon && <FontAwesomeIcon icon={type.icon} /> }
            {' '}
            <a href={props.url}>{ type.name } ({props.username})</a>
        </>
    } else {
        return <>
            <FontAwesomeIcon icon={faExclamationCircle} /> Error!
        </>
    }
}

export default SocialLink;
