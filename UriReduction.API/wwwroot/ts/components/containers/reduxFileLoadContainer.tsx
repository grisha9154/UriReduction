import * as ReduxFile  from "redux-file-upload";
import * as React from "react";

export function FileUploadContainer (): any {
    return <ReduxFile.FileUpload
    allowedFileTypes={["jpg", "pdf"]}
    data={{ type: "picture" }}
    dropzoneId="fileUpload"
    url="https:/url.org/api/docs/upload"
  >
    <button>
      Click or drag here
    </button>
  </ReduxFile.FileUpload>;
}
