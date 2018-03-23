import * as React from "react";
import { FlatButton } from "material-ui";
import * as $ from "jquery";
import style from "../style/FlatButtonStyle";
import IAppBarProps from "../../types/iAppBarProps";

class SignOutButton extends React.Component<IAppBarProps, object> {
    constructor(props: IAppBarProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(): void {
        $.ajax({
            url: "/signout",
            method: "GET",
            contentType: "application/json",
            success: () => {
                this.props.signOut();
                this.props.switchLocation("/");
            }
        });
    }
    render(): JSX.Element {
        return (<FlatButton labelStyle={style} label="Sign Out" onClick={this.onClick}/>);
    }
}
export default SignOutButton;