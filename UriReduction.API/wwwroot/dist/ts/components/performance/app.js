import * as React from "react";
import { LongUriFormContainer } from "../containers/longUriFormContainer";
import { Cloudinary } from "./cloudinary";
import { ShortUriForm } from "./shortUriForm";
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
        React.createElement(ShortUriForm, { shortUri: shortUri })));
}
function GetLongForm({ onLongUriSubmit, onLongUriChange, longUri, onCloudinarySubmit, onCloudinaryChange }) {
    return (React.createElement("div", null,
        React.createElement(LongUriFormContainer, { onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri }),
        React.createElement(Cloudinary, { onCloudinarySubmit: onCloudinarySubmit, onCloudinaryChange: onCloudinaryChange })));
}
//# sourceMappingURL=app.js.map