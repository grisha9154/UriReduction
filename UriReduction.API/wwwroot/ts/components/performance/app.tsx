import * as React from "react";
import {IProps} from "../props";
import {LongUriForm} from "./longUriForm";
import {Cloudinary} from "./cloudinary";
import {ShortUriForm} from "./shortUriForm";

export function App ({fullSet, shortUri, onLongUriSubmit, onLongUriChange, longUri,onCloudinarySubmit,onCloudinaryChange}:IProps): any {
    if(fullSet) {
        return <GetFullForm shortUri={shortUri} onLongUriSubmit={ onLongUriSubmit}
        onLongUriChange = {onLongUriChange}
        longUri= {longUri}
        onCloudinarySubmit ={ onCloudinarySubmit}
        onCloudinaryChange={ onCloudinaryChange}/>;
    } else {
        return  <GetLongForm onLongUriSubmit={ onLongUriSubmit}
        onLongUriChange = {onLongUriChange}
        longUri= {longUri}
        onCloudinarySubmit ={ onCloudinarySubmit}
        onCloudinaryChange={ onCloudinaryChange}/>;
    }
}


function GetFullForm({shortUri,onLongUriSubmit,onLongUriChange,longUri, onCloudinarySubmit, onCloudinaryChange}:IProps):any {
    return (
        <div>
            <GetLongForm onLongUriSubmit={ onLongUriSubmit}
                          onLongUriChange = {onLongUriChange}
                          longUri= {longUri}
                          onCloudinarySubmit ={ onCloudinarySubmit}
                          onCloudinaryChange={ onCloudinaryChange}/>
            <ShortUriForm shortUri={shortUri} />
        </div>);
}

function GetLongForm({onLongUriSubmit,onLongUriChange,longUri, onCloudinarySubmit, onCloudinaryChange}:IProps):any {
    return  (
        <div>
            <LongUriForm onLongUriSubmit={onLongUriSubmit} onLongUriChange={onLongUriChange} longUri={longUri} />
            <Cloudinary onCloudinarySubmit={onCloudinarySubmit} onCloudinaryChange = {onCloudinaryChange} />
        </div>);
}
