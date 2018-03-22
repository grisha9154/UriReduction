import IStoreState from "./iStoreState";

interface IAppBarProps {
    title:string;
    signIn:boolean;
    userName:string;
    signOut():IStoreState;
    onGetStatistic(uri:any[]):IStoreState;
}
export default IAppBarProps;