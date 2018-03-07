import * as constants from "../constants";

export interface IChangeLongUri {
    type: constants.CHANGE_LONG_URI;
    value: any;
}

export interface ISetShortUri {
    type: constants.SET_SHORT_URI;
    value: any;
}

export type UriAction = IChangeLongUri | ISetShortUri;

export function setShortUri(shortUri: string): ISetShortUri {
    return {
        type: constants.SET_SHORT_URI,
        value: shortUri
    };
}

export function changeLongUri(longUri: string): IChangeLongUri {
    return {
        type: constants.CHANGE_LONG_URI,
        value: longUri
    };
}