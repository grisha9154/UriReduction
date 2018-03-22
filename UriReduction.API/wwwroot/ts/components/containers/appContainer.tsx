import * as React from "react";
import {connect, Dispatch} from "react-redux";

import { Route, Switch } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import {Link} from "react-router-dom";

import {App} from "../performance/app";
import { UriAction,setShortUri,changeLongUri,signIn,signOut, getStatistic} from "../../actionsCreator/index";
import IStoreState from "../../types/iStoreState";
import RegistrationFrom from "../containers/registrationFromContainer";
import LoginForm from "../containers/loginFormContainer";
import IRouterProps from "../../types/IRouterProps";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import IAppProps from "../../types/iAppProps";
import IMapStateToProps from "../../types/iMapStatetoProps";
import ILongUriFormContainerProps from "../../types/iLongUriFormContainerProps";
import IShortUriFormProps from "../../types/iShortUriFormProps";
import AppBar from "../performance/appBar";
import TableSimple from "../performance/userStatistic";

const ConnectedSwitch:any = connect((state:any) => {return {location: state.router.location};})(Switch as any);

class AppContainer extends  React.Component<any, object> {
    routerProps:IRouterProps;
    constructor(props:IRouterProps) {
        super(props);
    }
    render():any {
        this.routerProps = {
            appProps:{
                fullSet:this.props.appPropsState.fullSet as boolean,
                longUriFormProps:{
                    ...this.props.appPropsState.longUriFormProps,
                    ...this.props.appProps.longUriFormProps} as ILongUriFormContainerProps,
                shortUriFormProps:{
                    ...this.props.appPropsState.shortUriFormProps} as IShortUriFormProps
            }as IAppProps,
            authorizationFormProps:this.props.authorizationFormProps as IAuthorizationFormProps,
            signIn:this.props.signIn as boolean,
            userName:this.props.userName as string,
            signOut:this.props.onUserLoginOut,
            onGetStatistic:this.props.onGetStatistic,
            uri:this.props.uri
        };
        console.log("props",this.routerProps);
        return <Router {...this.routerProps}/>;
    }
}

class Router extends React.Component<IRouterProps, object> {
    constructor(props:IRouterProps) {
        super(props);
    }
    render():any {
        return (
        <div>
            <AppBar
            title="UriReduction"
            signIn={this.props.signIn}
            userName={this.props.userName}
            signOut={this.props.signOut}
            onGetStatistic={this.props.onGetStatistic} />
            <ConnectedSwitch>
                    <Route exact path="/" children={()=> <App {...this.props.appProps}/>} />
                    <Route exact path="/signup" children={()=> <RegistrationFrom {...this.props.authorizationFormProps} />} />
                    <Route exact path="/signin" children={()=> <LoginForm {...this.props.authorizationFormProps} />} />
                    <Route exact path="/user" children={()=><TableSimple uri={this.props.uri} />}/>
            </ConnectedSwitch>
        </div>
        );
    }
}


function mapStateToProps(state:any): any {
    console.log("state",state);
 return ({
     appPropsState:{
        shortUriFormProps:{
            shortUri:state.fileUpload.shortUri||state.uriReducer.shortUri
        },
        longUriFormProps:{
            longUri:state.uriReducer.longUri
            },
        fullSet:state.fileUpload.fullSet||state.uriReducer.fullSet,
     },
     signIn:state.accountReducer.signIn,
     userName:state.accountReducer.userName,
     uri:state.accountReducer.uri
 });
}
function mapDispatchToProps(dispatch: Dispatch<UriAction>):any {
    return{
        appProps:{
            longUriFormProps:{
                onLongUriSubmit:(longUri:string)=> {
                    dispatch(setShortUri(longUri));
                },
                onLongUriChange:(longUri: string)=> {
                    dispatch(changeLongUri(longUri));
                },
            }
        },
        authorizationFormProps:{
            onUserLoginIn:(userName:string)=> {
                dispatch(signIn(userName));
            },
            switchLocation:(location:string)=> {
                dispatch(push(location));
            }
        },
        onUserLoginOut:()=> {
            dispatch(signOut());
        },
        onGetStatistic:(uri:any[])=> {
            dispatch(getStatistic(uri));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
