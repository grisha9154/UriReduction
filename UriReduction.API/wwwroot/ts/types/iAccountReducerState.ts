import IAssociatedUri from "./iAssociatedUri";

interface IAccountReducer {
    signIn: boolean;
    userName: string;
    uri: IAssociatedUri[];
}
export default IAccountReducer;