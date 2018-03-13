import { CHANGE_LONG_URI, SET_SHORT_URI } from "../constants/index";
export function setShortUri(shortUri) {
    return {
        type: SET_SHORT_URI,
        value: shortUri
    };
}
export function changeLongUri(longUri) {
    return {
        type: CHANGE_LONG_URI,
        value: longUri
    };
}
