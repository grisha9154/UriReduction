import IStoreState from "./iStoreState";
import IAssociatedUri from "./iAssociatedUri";

interface IAppBarProps {
    title: string;
    signIn: boolean;
    userName: string;
    signOut(): void;
    onGetStatistic(uri: IAssociatedUri[]): void;
    switchLocation(location: string): void;
}
export default IAppBarProps;