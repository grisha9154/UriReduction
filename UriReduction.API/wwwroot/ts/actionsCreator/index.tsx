import {CHANGE_LONG_URI, SET_SHORT_URI} from "../constants/index";

export interface IChangeLongUri {
    type: CHANGE_LONG_URI;
    value: any;
}

export interface ISetShortUri {
    type: SET_SHORT_URI;
    value: any;
}

export type UriAction = IChangeLongUri | ISetShortUri;

export function setShortUri(shortUri: string): ISetShortUri {
    return {
        type: SET_SHORT_URI,
        value: shortUri
    };
}

export function changeLongUri(longUri: string): IChangeLongUri {
    return {
        type: CHANGE_LONG_URI,
        value: longUri
    };
}