import * as React from "react";
import {LongUriForm} from "../performance/longUriForm";
import {IProps} from "../props";
import {sendToServer} from "../../shared/sendToServer";

export class LongUriFormContainer extends  React.Component<IProps, object> {
    longUri: string;
    onFormSubmit: ()=> void;
    onLongUriFormChainge: (longUri: string)=>void;
    constructor(props:IProps) {
        super(props);
        this.longUri = props.longUri;
        this.onFormSubmit = props.onLongUriSubmit;
        this.onLongUriFormChainge = props.onLongUriChange;
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit (): void {
        if(this.longUri.length<=0) {
            return;
        }
        sendToServer(this.longUri,this.onFormSubmit);
    }
    onLongUriChange(event:any): void {
        this.onLongUriFormChainge(event.target.value);
    }
    render():any {
        return <LongUriForm onSubmit={this.onSubmit} onLongUriChange={this.onLongUriChange} longUri={this.props.longUri} />;
    }
}
