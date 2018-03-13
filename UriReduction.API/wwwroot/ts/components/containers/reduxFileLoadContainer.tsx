import * as React from "react";
import {FileUpload} from "redux-file-upload";

export function FileUploadContainer (): any {
    return <FileUpload
    allowedFileTypes={["jpg", "pdf"]}
    data={{ type: "picture" }}
    dropzoneId="fileUpload"
    url="https:/url.org/api/docs/upload"
  >
    <button>
      Click or drag here
    </button>
  </FileUpload>;
}
