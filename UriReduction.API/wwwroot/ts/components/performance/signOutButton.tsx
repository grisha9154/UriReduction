import * as React from "react";
import { FlatButton } from "material-ui";
import * as $ from "jquery";
import style from "../style/FlatButtonStyle";

class SignOutButton extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick():void {
        $.ajax({
            url:"/signout",
            method:"GET",
            contentType:"application/json",
            success:(result:any)=> {
                this.props.onClick();
            }
        });
    }
    render(): JSX.Element {
        return (<FlatButton labelStyle={style} label="Sign Out" onClick={this.onClick}/>);
    }
}
export default SignOutButton;