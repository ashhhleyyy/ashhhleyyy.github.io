import { renderToString } from "preact-render-to-string";
import { App } from './app';

export default function prerender(): string {
    return renderToString(<App />);
}
