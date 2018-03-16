import { actions, reducer } from "redux-file-upload";

function fileUploadReducer (state:any,action:any):any {
    switch (action.type) {
        case actions.FILE_UPLOAD_COMPLETE:{
          return {...state,...action.payload.response};
        }
        default: return reducer(state,action);
    }
}

export default fileUploadReducer;