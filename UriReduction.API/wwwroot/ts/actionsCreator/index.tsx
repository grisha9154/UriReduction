import { CHANGE_LONG_URI, SET_SHORT_URI } from "../constants/uriActions";
import { SIGN_OUT, SIGN_IN, GET_STATISTIC } from "../constants/accountActions";
import IAssociatedUri from "../types/iAssociatedUri";

export interface IChangeLongUri {
    type: CHANGE_LONG_URI;
    value: string;
}

export interface ISetShortUri {
    type: SET_SHORT_URI;
    value: string;
}

export interface ISignIn {
    type: SIGN_IN;
    value: string;
}

export interface ISignOut {
    type: SIGN_OUT;
}

export interface IGetStatistic {
    type: GET_STATISTIC;
    value: IAssociatedUri[];
}

export type AccountAction = ISignIn | ISignOut | IGetStatistic;
export type UriAction = IChangeLongUri | ISetShortUri;

export function getStatistic(uri: IAssociatedUri[]): IGetStatistic {
    return{
        type: GET_STATISTIC,
        value: uri
    };
}

export function signIn(userName: string): ISignIn {
    return {
        type: SIGN_IN,
        value: userName
    };
}

export function signOut(): ISignOut {
    return {
        type: SIGN_OUT
    };
}

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