import * as constants from "../constants";
export function setShortUri(shortUri) {
    return {
        type: constants.SET_SHORT_URI,
        value: shortUri
    };
}
export function changeLongUri(longUri) {
    return {
        type: constants.CHANGE_LONG_URI,
        value: longUri
    };
}
//# sourceMappingURL=index.js.map