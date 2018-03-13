import * as React from "react";
import { connect } from "react-redux";
import { App } from "../performance/app";
import * as actions from "../../actionsCreator";
class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(App, { fullSet: this.props.fullSet, shortUri: this.props.shortUri, longUri: this.props.longUri, onLongUriChange: this.props.onLongUriChange, onLongUriSubmit: this.props.onLongUriSubmit });
    }
}
function mapStateToProps(state) {
    console.log("MapState", state);
    return {
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
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
//# sourceMappingURL=appContainer.js.map