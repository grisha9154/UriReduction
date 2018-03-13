import * as React from "react";
import { FileUpload } from "redux-file-upload";
export function FileUploadContainer() {
    return React.createElement(FileUpload, { allowedFileTypes: ["jpg", "pdf"], data: { type: "picture" }, dropzoneId: "fileUpload", url: "https:/url.org/api/docs/upload" },
        React.createElement("button", null, "Click or drag here"));
}
