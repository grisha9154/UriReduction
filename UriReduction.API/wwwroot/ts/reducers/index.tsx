import { UriAction } from "../actionsCreator/index";
import { IStoreState } from "../types/index";
import { SET_SHORT_URI, CHANGE_LONG_URI } from "../constants/index";

export function uriReducer(state: IStoreState = {longUri:"", shortUri:"", fullSet:false}, action: UriAction): IStoreState {
  switch (action.type) {
    case SET_SHORT_URI:
    {
        return Object.assign({},state,{
            shortUri:action.value,
            fullSet: true
        });
    }
    case CHANGE_LONG_URI:
    {
        return Object.assign({},state,{
            longUri:action.value
        });
    }
    default: return state;
  }
}