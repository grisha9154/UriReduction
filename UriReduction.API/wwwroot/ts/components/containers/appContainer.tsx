import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IProps} from "../props";
import {App} from "../performance/app";
import * as actions from "../../actionsCreator";
import { IStoreState } from "../../types/index";

class AppContainer extends  React.Component<IProps, object> {
    fullSet:boolean;
    shortUri:string;
    longUri:string;
    onLongUriChange:(longUri:string)=>void;
    constructor(props:IProps) {
        super(props);
        this.fullSet = props.fullSet;
        this.shortUri = props.shortUri;
        this.longUri = props.longUri;
        this.onLongUriChange = props.onLongUriChange;
    }
    render():any {
        return <App
                        fullSet={this.props.fullSet}
                        shortUri={this.props.shortUri}
                        longUri={this.props.longUri}
                        onLongUriChange={this.props.onLongUriChange} />;
    }
}


function mapStateToProps(state:IStoreState): any {
    return {
        fullSetTest:state.fullSet,
        shortUri:state.shortUri,
        longUri:state.longUri
    };
}
function mapDispatchToProps(dispatch: Dispatch<actions.UriAction>):any {
    return{
        setShortUri:(longUri:string)=> {
            dispatch(actions.setShortUri(longUri));
        },
        onLongUriChange:(longUri: string)=> {
            dispatch(actions.changeLongUri(longUri));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
