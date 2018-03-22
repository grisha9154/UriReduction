import * as React from "react";
import {LongUriFormContainer} from "../containers/longUriFormContainer";
import {ShortUriForm} from "./shortUriForm";
import {FileUploadContainer} from "../containers/reduxFileLoadContainer";
import IAppProps from "../../types/iAppProps";
import ILongUriFormContainerProps from "../../types/iLongUriFormContainerProps";

export function App (appProps: IAppProps): any {
    if(appProps.fullSet) {
        return <GetFullForm {...appProps}/>;
    } else {
        return  <GetLongForm {...appProps.longUriFormProps}/>;
    }
}

function GetFullForm(appProps:IAppProps):any {
    return (
        <div id="FullFrom">
            <GetLongForm {...appProps.longUriFormProps}/>
            <ShortUriForm {...appProps.shortUriFormProps} />
        </div>);
}

function GetLongForm(LongUriProps:ILongUriFormContainerProps):any {
    return  (
        <div id="LessForm">
            <LongUriFormContainer {...LongUriProps} />
            <FileUploadContainer />
        </div>);
}
