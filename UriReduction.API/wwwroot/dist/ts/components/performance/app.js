import * as React from "react";
import { LongUriFormContainer } from "../containers/longUriFormContainer";
import { ShortUriForm } from "./shortUriForm";
import { FileUploadContainer } from "../containers/reduxFileLoadContainer";
export function App({ fullSet, shortUri, onLongUriSubmit, onLongUriChange, longUri, onCloudinarySubmit, onCloudinaryChange }) {
    console.log("fullSet", fullSet);
    if (fullSet) {
        return React.createElement(GetFullForm, { shortUri: shortUri, onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri, onCloudinarySubmit: onCloudinarySubmit, onCloudinaryChange: onCloudinaryChange });
    }
    else {
        return React.createElement(GetLongForm, { onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri, onCloudinarySubmit: onCloudinarySubmit, onCloudinaryChange: onCloudinaryChange });
    }
}
function GetFullForm({ shortUri, onLongUriSubmit, onLongUriChange, longUri, onCloudinarySubmit, onCloudinaryChange }) {
    return (React.createElement("div", null,
        React.createElement(GetLongForm, { onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri, onCloudinarySubmit: onCloudinarySubmit, onCloudinaryChange: onCloudinaryChange }),
        React.createElement(ShortUriForm, { shortUri: shortUri }),
        React.createElement(FileUploadContainer, null)));
}
function GetLongForm({ onLongUriSubmit, onLongUriChange, longUri, onCloudinarySubmit, onCloudinaryChange }) {
    return (React.createElement("div", null,
        React.createElement(LongUriFormContainer, { onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri }),
        React.createElement(FileUploadContainer, null)));
}
