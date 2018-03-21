import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {IProps} from "../props";
import {App} from "../performance/app";
import {UriAction,setShortUri,changeLongUri} from "../../actionsCreator/index";
import { IStoreState } from "../../types/index";
import RegistrationFrom from "../containers/registrationFromContainer";
import LoginForm from "../containers/loginFormContainer";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";

class AppContainer extends  React.Component<any, object> {
    constructor(props:any) {
        super(props);
    }
    render():any {
        return <Router fullSet={this.props.uriReducer.fullSet}
        shortUri={this.props.uriReducer.shortUri}
        longUri={this.props.uriReducer.longUri}
        onLongUriChange={this.props.onLongUriChange}
        onLongUriSubmit = {this.props.onLongUriSubmit} />;
    }
}

class Router extends React.Component<any, object> {
    constructor(props:any) {
        super(props);
    }
    render():any {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={()=> <div>
                                                        <App fullSet={this.props.fullSet}
                                                            shortUri={this.props.shortUri}
                                                            longUri={this.props.longUri}
                                                            onLongUriChange={this.props.onLongUriChange}
                                                            onLongUriSubmit = {this.props.onLongUriSubmit}/>
                                                        <Link to="/signup">SignUp</Link><br/>
                                                        <Link to="/signin">SignIn</Link>
                                                        </div> } />
                <Route exact path="/signup" children={()=> <RegistrationFrom />} />
                <Route exact path="/signin" children={()=> <LoginForm />} />
            </Switch>
        </BrowserRouter>);
    }
}

function mapStateToProps(state:any): any {
    if(state.uriReducer.shortUri==="" && state.fileUpload.shortUri!==undefined) {
        return {
            uriReducer:{
                shortUri : state.fileUpload.shortUri,
                fullSet : true
            }
        };
    }
    return {
        uriReducer:{
            fullSet:state.uriReducer.fullSet,
            shortUri:state.uriReducer.shortUri,
            longUri:state.uriReducer.longUri
        }
    };
}
function mapDispatchToProps(dispatch: Dispatch<UriAction>):any {
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
