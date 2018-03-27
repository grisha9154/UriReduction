import * as React from "react";
import { LongUriForm } from "../performance/longUriForm";
import { sendToServer } from "../../shared/sendToServer";
import  ILongUriFormProps  from "../../types/iLongUriFormProps";
import ILongUriFormContainerProps from "../../types/iLongUriFormContainerProps";
import ILongUriForm from "../../types/iLongUriForm";

export class LongUriFormContainer extends  React.Component<ILongUriFormContainerProps, object> {
    longUriFormProps: ILongUriFormProps;
    errorText: string;
    constructor(props: ILongUriFormContainerProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit (event: React.FormEvent<{}>): void {
        event.preventDefault();
        if (this.props.longUri.length <= 0) {
            this.errorText = "Empty long uri field";
        }
        sendToServer(this.props.longUri, this.props.onLongUriSubmit);
    }
    onLongUriChange(event: React.FormEvent<ILongUriForm>): void {
        this.props.onLongUriChange(event.currentTarget.value);
    }
    render(): JSX.Element {
        return <LongUriForm
            onLongUriSubmit={this.onSubmit}
            onLongUriChange={this.onLongUriChange}
            longUri={this.props.longUri}
            errorText={this.errorText}/>;
    }
}
