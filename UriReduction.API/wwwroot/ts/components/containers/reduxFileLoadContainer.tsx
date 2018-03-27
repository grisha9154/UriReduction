import * as React from "react";
import { FileUpload } from "redux-file-upload";
import style from "../style/DragAndDropButton";
import divStyle from "../style/divStyle";

export function FileUploadContainer (): JSX.Element {
    return <div style ={divStyle}><FileUpload
    allowedFileTypes={["jpg", "jpeg", "pdf"]}
    dropzoneId="fileUpload"
    url="/image"
  >
    <button style={style}>
      Click or drag your image here
    </button>
  </FileUpload></div>;
}
