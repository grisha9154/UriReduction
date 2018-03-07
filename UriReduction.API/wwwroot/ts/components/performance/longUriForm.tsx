import * as React from "react";
import {IProps} from "../props";

export interface ILongUriFormProps {
    longUri:string;
    onLongUriSubmit:()=>void;
    onLongUriChange: (event:any)=> void;
}

export function LongUriForm ({onLongUriSubmit,longUri,onLongUriChange}:ILongUriFormProps): any {
    return  <form onSubmit={onLongUriSubmit}>
                <input type="text"
                    placeholder="Long Uri"
                    value={longUri}
                    onChange={onLongUriChange}/>
                <input type="submit" value="Short Uri"/>
             </form>;
}