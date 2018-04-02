import * as React from "react";
import { FlatButton } from "material-ui";

import style from "../style/FlatButtonStyle";
import IAppBarProps from "../../types/iAppBarProps";

class SignOutButton extends React.Component<IAppBarProps, object> {
    constructor(props: IAppBarProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(): void {
        fetch("/signout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }).then((response) => {
                this.props.signOut();
                this.props.switchLocation("/");
        });
    }
    render(): JSX.Element {
        return (<FlatButton labelStyle={style} label="Sign Out" onClick={this.onClick} />);
    }
}
export default SignOutButton;