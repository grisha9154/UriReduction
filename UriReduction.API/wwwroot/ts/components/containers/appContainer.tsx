import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IProps} from "../props";
import {App} from "../performance/app";
import * as actions from "../../actionsCreator";
import { IStoreState } from "../../types/index";

export class AppContainer extends  React.Component<IProps, object> {
    fullSet:boolean;
    shortUri:string;
    longUri:string;
    constructor(props:IProps) {
        super(props);
        this.fullSet = props.fullSet;
        this.shortUri = props.shortUri;
        this.longUri = props.longUri;
    }
    render():any {
        return <App
                        fullSet={this.fullSet}
                        shortUri={this.shortUri}
                        longUri={this.longUri} />;
    }
}


function mapStateToProps(state:IStoreState): any {
    return {
        fullSet:state.fullSet,
        shortUri:state.shortUri,
        longUri:state.longUri
    };
}
function mapDispatchToProps(dispatch: Dispatch<actions.UriAction>):any {
    return{
        setShortUri:(longUri:string)=> {
            dispatch(actions.setShortUri(longUri));
        },
        changeLongUri:(longUri: string)=> {
            dispatch(actions.changeLongUri(longUri));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
