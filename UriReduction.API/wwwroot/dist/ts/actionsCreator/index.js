<<<<<<< HEAD
import * as constants from "../constants";
export function setShortUri(shortUri) {
    return {
        type: constants.SET_SHORT_URI,
=======
import { CHANGE_LONG_URI, SET_SHORT_URI } from "../constants/index";
export function setShortUri(shortUri) {
    return {
        type: SET_SHORT_URI,
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
        value: shortUri
    };
}
export function changeLongUri(longUri) {
    return {
<<<<<<< HEAD
        type: constants.CHANGE_LONG_URI,
        value: longUri
    };
}
//# sourceMappingURL=index.js.map
=======
        type: CHANGE_LONG_URI,
        value: longUri
    };
}
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
