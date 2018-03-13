import * as React from "react";
import { LongUriFormContainer } from "../containers/longUriFormContainer";
<<<<<<< HEAD
import { Cloudinary } from "./cloudinary";
import { ShortUriForm } from "./shortUriForm";
=======
import { ShortUriForm } from "./shortUriForm";
import { FileUploadContainer } from "../containers/reduxFileLoadContainer";
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
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
<<<<<<< HEAD
        React.createElement(ShortUriForm, { shortUri: shortUri })));
=======
        React.createElement(ShortUriForm, { shortUri: shortUri }),
        React.createElement(FileUploadContainer, null)));
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
}
function GetLongForm({ onLongUriSubmit, onLongUriChange, longUri, onCloudinarySubmit, onCloudinaryChange }) {
    return (React.createElement("div", null,
        React.createElement(LongUriFormContainer, { onLongUriSubmit: onLongUriSubmit, onLongUriChange: onLongUriChange, longUri: longUri }),
<<<<<<< HEAD
        React.createElement(Cloudinary, { onCloudinarySubmit: onCloudinarySubmit, onCloudinaryChange: onCloudinaryChange })));
}
//# sourceMappingURL=app.js.map
=======
        React.createElement(FileUploadContainer, null)));
}
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
