import  IStoreState  from "./iStoreState";
import ILongUriFormContainerProps from "./iLongUriFormContainerProps";
import IShortUriFormProps from "./iShortUriFormProps";

interface IAppProps {
    fullSet: boolean;
    shortUriFormProps: IShortUriFormProps;
    longUriFormProps: ILongUriFormContainerProps;
}

export default IAppProps;