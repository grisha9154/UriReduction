import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IProps} from "../props";
import {App} from "../performance/app";
import {UriAction,setShortUri,changeLongUri} from "../../actionsCreator/index";
import { IStoreState } from "../../types/index";

class AppContainer extends  React.Component<any, object> {
    constructor(props:any) {
        super(props);
    }
    render():any {
        console.log(this.props);
        return <App
                    fullSet={this.props.uriReducer.fullSet}
                    shortUri={this.props.uriReducer.shortUri}
                    longUri={this.props.uriReducer.longUri}
                    onLongUriChange={this.props.onLongUriChange}
                    onLongUriSubmit = {this.props.onLongUriSubmit} />;
    }
}
function mapStateToProps(state:any): any {
    console.log("MapState",state);
    return {
        uriReducer:{
            fullSet:state.uriReducer.fullSet,
            shortUri:state.uriReducer.shortUri,
            longUri:state.uriReducer.longUri
        }
    };
}
function mapDispatchToProps(dispatch: Dispatch<UriAction>):any {
    console.log("Dispatch");
    return{
        onLongUriSubmit:(longUri:string)=> {
            dispatch(setShortUri(longUri));
        },
        onLongUriChange:(longUri: string)=> {
            dispatch(changeLongUri(longUri));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
