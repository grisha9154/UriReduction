import * as React from "react";
import {FileUpload} from "redux-file-upload";

export function FileUploadContainer (): any {
    return <FileUpload
    allowedFileTypes={["jpg","jpeg", "pdf"]}
    dropzoneId="fileUpload"
    url="http://localhost:63303/image"
  >
    <button>
      Click or drag here
    </button>
  </FileUpload>;
}
