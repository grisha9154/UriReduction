import { actions, reducer } from "redux-file-upload";
import IFileUploadAction from "../types/iFileUploadAction";

function fileUploadReducer (state: object, action: IFileUploadAction): object {
    switch (action.type) {
        case actions.FILE_UPLOAD_COMPLETE: {
          return {...state, ...action.payload.response};
        }
        default: return reducer(state, action);
    }
}

export default fileUploadReducer;