import * as React from "react";
import { connect, Dispatch, InferableComponentEnhancerWithProps, DispatchProp } from "react-redux";

import { Route, Switch, SwitchProps } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";
import { Link } from "react-router-dom";

import { App } from "../performance/app";
import { UriAction, setShortUri, changeLongUri, signIn, signOut, getStatistic } from "../../actionsCreator/index";
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
import { Store } from "redux";
import IAssociatedUri from "../../types/iAssociatedUri";
import { StatelessComponent } from "enzyme";
import IMapDispatchToProps from "../../types/iMapDispatchToProps";
import IAppContainer from "../../types/iAppContainer";

const ConnectedSwitch = connect((state: IStoreState) => {return {location: state.router.location}; })(Switch as null);

class AppContainer extends  React.Component<IAppContainer, object> {
    routerProps: IRouterProps;
    render(): JSX.Element {
        this.routerProps = {
            appProps: {
                fullSet: this.props.appPropsState.fullSet,
                longUriFormProps: {
                    ...this.props.appPropsState.longUriFormProps,
                    ...this.props.appProps.longUriFormProps} as ILongUriFormContainerProps,
                shortUriFormProps: {
                    ...this.props.appPropsState.shortUriFormProps} as IShortUriFormProps
            }as IAppProps,
            authorizationFormProps: this.props.authorizationFormProps as IAuthorizationFormProps,
            signIn: this.props.signIn as boolean,
            userName: this.props.userName as string,
            signOut: this.props.onUserLoginOut,
            onGetStatistic: this.props.onGetStatistic,
            uri: this.props.uri
        };
        return <Router {...this.routerProps}/>;
    }
}


class Router extends React.Component<IRouterProps, object> {
    constructor(props: IRouterProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
        <div>
            <AppBar
            title="UriReduction"
            signIn={this.props.signIn}
            userName={this.props.userName}
            signOut={this.props.signOut}
            onGetStatistic={this.props.onGetStatistic}
            switchLocation={this.props.authorizationFormProps.switchLocation} />
            <ConnectedSwitch>
                    <Route exact path="/" children={() => <App {...this.props.appProps}/>} />
                    <Route exact path="/signup" children={() => <RegistrationFrom {...this.props.authorizationFormProps} />} />
                    <Route exact path="/signin" children={() => <LoginForm {...this.props.authorizationFormProps} />} />
                    <Route exact path="/user" children={() => {
                        if (this.props.signIn) {
                            return<TableSimple uri={this.props.uri} />;
                            } 
                            return <App {...this.props.appProps}/>; }}/>
            </ConnectedSwitch>
        </div>
        );
    }
}


function mapStateToProps(state: IStoreState): IMapStateToProps {
 return ({
     appPropsState: {
        shortUriFormProps: {
            shortUri: state.fileUpload.shortUri || state.uriReducer.shortUri
        },
        longUriFormProps: {
            longUri: state.uriReducer.longUri
            },
        fullSet: state.fileUpload.fullSet || state.uriReducer.fullSet,
     },
     signIn: state.accountReducer.signIn,
     userName: state.accountReducer.userName,
     uri: state.accountReducer.uri
 });
}
function mapDispatchToProps(dispatch: Dispatch<UriAction>): IMapDispatchToProps {
    return{
        appProps: {
            longUriFormProps: {
                onLongUriSubmit: (longUri: string) => {
                    dispatch(setShortUri(longUri));
                },
                onLongUriChange: (longUri: string) => {
                    dispatch(changeLongUri(longUri));
                },
            }
        },
        authorizationFormProps: {
            onUserLoginIn: (userName: string) => {
                dispatch(signIn(userName));
            },
            switchLocation: (location: string) => {
                dispatch(push(location));
            }
        },
        onUserLoginOut: () => {
            dispatch(signOut());
        },
        onGetStatistic: (uri: IAssociatedUri[]) => {
            dispatch(getStatistic(uri));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
