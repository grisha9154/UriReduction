import { UriAction } from "../actionsCreator/index";
import  IStoreState  from "../types/iStoreState";
import { SET_SHORT_URI, CHANGE_LONG_URI } from "../constants/uriActions";

export function uriReducer(state: IStoreState = {longUri: "", shortUri: "", fullSet: false, userName: "", signIn: false},
 action: UriAction): IStoreState {
  switch (action.type) {
    case SET_SHORT_URI:
    {
        return Object.assign({}, state, {
            shortUri: action.value,
            fullSet: true
        });
    }
    case CHANGE_LONG_URI:
    {
        return Object.assign({}, state, {
            longUri: action.value
        });
    }
    default: return {...state, shortUri: "", fullSet: false, };
  }
}