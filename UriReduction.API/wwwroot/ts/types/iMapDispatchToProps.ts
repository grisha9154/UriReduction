import {  UriAction } from "../actionsCreator";
import { RouterAction } from "react-router-redux";
import IAssociatedUri from "./iAssociatedUri";
import { Dispatch } from "react-redux";

interface IMapDispatchToProps {
    appProps: {
        longUriFormProps: {
            onLongUriSubmit: (longUri: string) => void,
            onLongUriChange: (longUri: string) => void,
        }
    },
    authorizationFormProps: {
        onUserLoginIn: (userName: string) => void,
        switchLocation: (location: string) => void,
    },
    onUserLoginOut: () => void,
    onGetStatistic: (uri: IAssociatedUri[]) => void
}
export default IMapDispatchToProps;