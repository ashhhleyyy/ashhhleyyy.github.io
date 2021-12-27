// Onedark theme

import { createContext } from "preact";
import { useContext } from 'preact/hooks';

export const COLOURS = [
    '#E06C75',
    '#98C379',
    '#E5C07B',
    '#61AFEF',
    '#C678DD',
    '#56B6C2',
];

export const RandomColour = createContext(COLOURS[0]);

export function useRandomColour(): string {
    return useContext(RandomColour);
}
