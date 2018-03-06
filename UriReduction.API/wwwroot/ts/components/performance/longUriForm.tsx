import * as React from "react";
import {IProps} from "../props";

export function LongUriForm ({longUri,onLongUriSubmit,onLongUriChange}:IProps): any {
    return  <form onSubmit={onLongUriSubmit}>
                <input type="text"
                    placeholder="Long Uri"
                    value={longUri}
                    onChange={onLongUriChange}/>
                <input type="submit" value="Short Uri" />
             </form>;
}