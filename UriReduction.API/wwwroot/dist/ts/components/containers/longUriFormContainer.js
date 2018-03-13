import * as React from "react";
import { LongUriForm } from "../performance/longUriForm";
import { sendToServer } from "../../shared/sendToServer";
export class LongUriFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.props.longUri.length <= 0) {
            return;
        }
        sendToServer(this.props.longUri, this.props.onLongUriSubmit);
    }
    onLongUriChange(event) {
        this.props.onLongUriChange(event.target.value);
    }
    render() {
        return React.createElement(LongUriForm, { onLongUriSubmit: this.onSubmit, onLongUriChange: this.onLongUriChange, longUri: this.props.longUri });
    }
}
