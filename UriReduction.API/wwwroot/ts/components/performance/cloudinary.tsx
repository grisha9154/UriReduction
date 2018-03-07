import * as React from "react";
import {IProps} from "../props";

export interface IStyle {
    display:string;
}

export function Cloudinary ({onCloudinarySubmit, onCloudinaryChange}:IProps): any {
    let inputStyle:IStyle = { display:"none"};
    return (
        <div>
            <input id="fileElem" type="file" style={ inputStyle} onChange={onCloudinaryChange} />
            <a href="#" onClick={onCloudinarySubmit}>Select Image</a>
        </div>);
}