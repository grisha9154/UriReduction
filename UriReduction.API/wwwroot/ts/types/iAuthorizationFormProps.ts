import  IStoreState  from "./iStoreState";

interface IAuthorizationFormProps {
    onUserLoginIn(userName: string): IStoreState;
    switchLocation(location: string): IStoreState;
}
export default IAuthorizationFormProps;