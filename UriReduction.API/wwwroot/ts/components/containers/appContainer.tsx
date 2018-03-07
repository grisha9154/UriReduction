import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IProps} from "../props";
import {App} from "../performance/app";
import * as actions from "../../actionsCreator";
import { IStoreState } from "../../types/index";

class AppContainer extends  React.Component<IProps, object> {
    constructor(props:IProps) {
        super(props);
    }
    render():any {
        return <App
                    fullSet={this.props.fullSet}
                    shortUri={this.props.shortUri}
                    longUri={this.props.longUri}
                    onLongUriChange={this.props.onLongUriChange}
                    onLongUriSubmit = {this.props.onLongUriSubmit} />;
    }
}


function mapStateToProps(state:IStoreState): any {
    console.log("MapState",state);
    return {
        fullSet:state.fullSet,
        shortUri:state.shortUri,
        longUri:state.longUri
    };
}
function mapDispatchToProps(dispatch: Dispatch<actions.UriAction>):any {
    return{
        onLongUriSubmit:(longUri:string)=> {
            dispatch(actions.setShortUri(longUri));
        },
        onLongUriChange:(longUri: string)=> {
            dispatch(actions.changeLongUri(longUri));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
