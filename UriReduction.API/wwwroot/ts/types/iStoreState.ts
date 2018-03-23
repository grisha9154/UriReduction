import IAccountReducer from "./iAccountReducerState";
import { RouterState } from "react-router-redux";
import IUriReducer from "./iUriReducer";
import IFileUploadAction from "./iFileUploadAction";
import IFileUploadState from "./IFileUploadState";

interface IStoreState {
    accountReducer: IAccountReducer;
    router: RouterState;
    uriReducer: IUriReducer;
    fileUpload: IFileUploadState
}
export default IStoreState;