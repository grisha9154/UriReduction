import * as React from "react";
import {IProps} from "../props";

export function ShortUriForm ({shortUri}: IProps): any {
        return <div>
             <input id="post-shortlink" defaultValue={shortUri} />
             <button id="copy-button" data-clipboard-target="#post-shortlink">Copy</button>
        </div>;
}