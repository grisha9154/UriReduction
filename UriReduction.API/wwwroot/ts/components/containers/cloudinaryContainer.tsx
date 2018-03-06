import * as React from "react";
import * as Cloudinary from "../performance/cloudinary";
import {sendToServer}  from "../../shared/sendToServer";
import {IProps} from "../props";

export interface IFiles {
    files: any[];
}

export class CloudinaryContainer extends React.Component {
    files: any[];
    constructor(props:IProps) {
        super(props);
    }
    onClick():void {
        document.getElementById("fileElem").click();
    }
    render(): any {
        return (
            <div>
            </div>
            // <Cloudinary onCloudinarySubmit={()=>console.log(1)} onCloudinaryChange ={()=>console.log(1)}  />
        );
    }
}