import { JSX } from 'preact';

type ScrollFn = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => boolean;

export function scrollEv(target: string): ScrollFn {
    return (e) => {
        e.preventDefault();
        window.history.pushState({}, '', `#${target}`);
        document.getElementById(target)?.scrollIntoView({
            behavior: 'smooth',
        });
        return false;
    };
}
