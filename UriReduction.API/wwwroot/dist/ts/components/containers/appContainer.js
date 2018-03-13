import * as React from "react";
import { connect } from "react-redux";
import { App } from "../performance/app";
import { setShortUri, changeLongUri } from "../../actionsCreator/index";
class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return React.createElement(App, { fullSet: this.props.uriReducer.fullSet, shortUri: this.props.uriReducer.shortUri, longUri: this.props.uriReducer.longUri, onLongUriChange: this.props.onLongUriChange, onLongUriSubmit: this.props.onLongUriSubmit });
    }
}
function mapStateToProps(state) {
    console.log("MapState", state);
    return {
        uriReducer: {
            fullSet: state.uriReducer.fullSet,
            shortUri: state.uriReducer.shortUri,
            longUri: state.uriReducer.longUri
        }
    };
}
function mapDispatchToProps(dispatch) {
    console.log("Dispatch");
    return {
        onLongUriSubmit: (longUri) => {
            dispatch(setShortUri(longUri));
        },
        onLongUriChange: (longUri) => {
            dispatch(changeLongUri(longUri));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
