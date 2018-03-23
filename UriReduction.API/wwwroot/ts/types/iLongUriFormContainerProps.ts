import ILongUriFormProps from "./iLongUriFormProps";
import  IStoreState  from "./iStoreState";

interface ILongUriFormContainerProps {
    longUri: string;
    onLongUriSubmit(longUri: string): IStoreState;
    onLongUriChange(longUri: string): IStoreState;
}

export default ILongUriFormContainerProps;