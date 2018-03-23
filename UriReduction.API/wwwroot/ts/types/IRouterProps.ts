import  IStoreState  from "./iStoreState";
import IAppProps from "./iAppProps";
import IAuthorizationFormProps from "./iAuthorizationFormProps";
import IAssociatedUri from "./iAssociatedUri";

interface IRouterProps {
    appProps: IAppProps;
    signIn: boolean;
    userName: string;
    uri: IAssociatedUri[];
    authorizationFormProps: IAuthorizationFormProps;
    signOut(): void;
    onGetStatistic(uri: IAssociatedUri[]): void;
}

export default IRouterProps;