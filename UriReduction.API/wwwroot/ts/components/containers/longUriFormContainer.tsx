import * as React from "react";
import {LongUriForm} from "../performance/longUriForm";
import {IProps} from "../props";
import {sendToServer} from "../../shared/sendToServer";

export class LongUriFormContainer extends  React.Component<IProps, object> {
    constructor(props:IProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit (event:any): void {
        event.preventDefault();
        if(this.props.longUri.length<=0) {
            return;
        }
        sendToServer(this.props.longUri,this.props.onLongUriSubmit);
    }
    onLongUriChange(event:any): void {
        this.props.onLongUriChange(event.target.value);
    }
    render():any {
        return <LongUriForm onLongUriSubmit={this.onSubmit} onLongUriChange={this.onLongUriChange} longUri={this.props.longUri} />;
    }
}
