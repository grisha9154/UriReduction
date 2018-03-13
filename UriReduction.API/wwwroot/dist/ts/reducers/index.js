import { SET_SHORT_URI, CHANGE_LONG_URI } from "../constants/index";
export function uriReducer(state = { longUri: "", shortUri: "", fullSet: false }, action) {
    switch (action.type) {
        case SET_SHORT_URI:
            {
                console.log("OnSubmitData", state, action);
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
        default: return state;
    }
}
