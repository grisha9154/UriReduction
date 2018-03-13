import * as React from "react";
import { connect } from "react-redux";
import { App } from "../performance/app";
<<<<<<< HEAD
import * as actions from "../../actionsCreator";
=======
import { setShortUri, changeLongUri } from "../../actionsCreator/index";
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
<<<<<<< HEAD
        return React.createElement(App, { fullSet: this.props.fullSet, shortUri: this.props.shortUri, longUri: this.props.longUri, onLongUriChange: this.props.onLongUriChange, onLongUriSubmit: this.props.onLongUriSubmit });
=======
        console.log(this.props);
        return React.createElement(App, { fullSet: this.props.uriReducer.fullSet, shortUri: this.props.uriReducer.shortUri, longUri: this.props.uriReducer.longUri, onLongUriChange: this.props.onLongUriChange, onLongUriSubmit: this.props.onLongUriSubmit });
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
    }
}
function mapStateToProps(state) {
    console.log("MapState", state);
    return {
<<<<<<< HEAD
        fullSet: state.fullSet,
        shortUri: state.shortUri,
        longUri: state.longUri
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLongUriSubmit: (longUri) => {
            dispatch(actions.setShortUri(longUri));
        },
        onLongUriChange: (longUri) => {
            dispatch(actions.changeLongUri(longUri));
=======
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
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
<<<<<<< HEAD
//# sourceMappingURL=appContainer.js.map
=======
>>>>>>> 8c937d476960c0b1526b013489c05ec8b00811f9
