import * as React from "react";
import { FileUpload } from "redux-file-upload";

export function FileUploadContainer (): JSX.Element {
    return <FileUpload
    allowedFileTypes={["jpg", "jpeg", "pdf"]}
    dropzoneId="fileUpload"
    url="/image"
  >
    <button>
      Click or drag here
    </button>
  </FileUpload>;
}
