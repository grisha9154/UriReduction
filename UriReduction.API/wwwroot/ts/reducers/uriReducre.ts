import { UriAction } from "../actionsCreator/index";
import  IStoreState  from "../types/iStoreState";
import { SET_SHORT_URI, CHANGE_LONG_URI } from "../constants/uriActions";
import IAccountReducer from "../types/iAccountReducerState";
import IUriReducer from "../types/iUriReducer";

export function uriReducer(state: IUriReducer = null,
    action: UriAction): IUriReducer {
        switch (action.type) {
            case SET_SHORT_URI: {
                return {
                    shortUri: action.value,
                    fullSet: true,
                    longUri: state.longUri
                };
            }
            case CHANGE_LONG_URI: {
                return {
                    shortUri: state.shortUri,
                    fullSet: state.fullSet,
                    longUri: action.value
                };
            };
            default: {
                return {
                    shortUri: "",
                    fullSet: false,
                    longUri: ""
                };
            };
        }
    };