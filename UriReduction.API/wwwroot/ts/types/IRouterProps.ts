import  IStoreState  from "./iStoreState";
import IAppProps from "./iAppProps";
import IAuthorizationFormProps from "./iAuthorizationFormProps";

interface IRouterProps {
    appProps:IAppProps;
    signIn:boolean;
    userName:string;
    uri:any;
    authorizationFormProps:IAuthorizationFormProps;
    signOut():IStoreState;
    onGetStatistic(uri:any[]):IStoreState;
}

export default IRouterProps;