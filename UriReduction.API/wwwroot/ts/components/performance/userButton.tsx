import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";

import style from "../style/FlatButtonStyle";
import IUserButton from "../../types/iUserButton";
import IAssociatedUri from "../../types/iAssociatedUri";

class UserButton extends React.Component<IUserButton, object> {
    constructor(props: IUserButton) {
        super(props);
        this.test = this.test.bind(this);
    }
    test(): void {
        fetch("/statistic", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((response) => {
            response.json().then((data) => {
                this.props.onGetStatistic(data);
            });
        });
    }
    render(): JSX.Element {
        return (
            <Link to="/user">
                <FlatButton
                    labelStyle={style}
                    label={this.props.userName}
                    onClick={this.test}>
                </FlatButton>
            </Link>
        );
    }
}
export default UserButton;