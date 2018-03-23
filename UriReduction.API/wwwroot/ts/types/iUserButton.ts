import IAssociatedUri from "./iAssociatedUri";
import IStoreState from "./iStoreState";

interface IUserButton {
    userName: string,
    onGetStatistic( uris: IAssociatedUri[]): void
}
export default IUserButton;