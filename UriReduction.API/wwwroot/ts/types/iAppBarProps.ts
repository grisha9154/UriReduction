import IStoreState from "./iStoreState";

interface IAppBarProps {
    title:string;
    signIn:boolean;
    userName:string;
    signOut():IStoreState;
    onGetStatistic(uri:any[]):IStoreState;
    switchLocation(location:string):IStoreState;
}
export default IAppBarProps;