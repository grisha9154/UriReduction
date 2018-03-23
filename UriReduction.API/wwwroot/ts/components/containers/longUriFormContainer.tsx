import * as React from "react";
import { LongUriForm } from "../performance/longUriForm";
import { sendToServer } from "../../shared/sendToServer";
import  ILongUriFormProps  from "../../types/iLongUriFormProps";
import ILongUriFormContainerProps from "../../types/iLongUriFormContainerProps";

export class LongUriFormContainer extends  React.Component<ILongUriFormContainerProps, object> {
    longUriFormProps: ILongUriFormProps;
    constructor(props: ILongUriFormContainerProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit (event: any): void {
        event.preventDefault();
        if (this.props.longUri.length <= 0) {
            this.render();
            return;
        }
        sendToServer(this.props.longUri, this.props.onLongUriSubmit);
    }
    onLongUriChange(event: any): void {
        this.props.onLongUriChange(event.target.value);
    }
    render(): any {
        return <LongUriForm
            onLongUriSubmit={this.onSubmit}
            onLongUriChange={this.onLongUriChange}
            longUri={this.props.longUri} />;
    }
}
