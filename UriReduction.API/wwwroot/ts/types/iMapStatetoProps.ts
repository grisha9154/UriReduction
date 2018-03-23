import IAssociatedUri from "./iAssociatedUri";

interface IMapStateToProps {
    appPropsState: {
        shortUriFormProps: {
            shortUri: string
        },
        longUriFormProps: {
            longUri: string
            },
        fullSet: boolean,
     },
     signIn: boolean,
     userName: string,
     uri: IAssociatedUri[]
}
export default IMapStateToProps;