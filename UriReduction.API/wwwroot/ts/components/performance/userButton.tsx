import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import * as $ from "jquery";
import style from "../style/FlatButtonStyle";
import IUserButton from "../../types/iUserButton";
import IAssociatedUri from "../../types/iAssociatedUri";

class UserButton extends React.Component<IUserButton, object> {
    constructor(props: IUserButton) {
        super(props);
        this.test = this.test.bind(this);
    }
    test(): void {
    $.ajax({
        url: "/statistic",
        method: "GET",
        contentType: "application/json",
        success: (result: IAssociatedUri[]) => {
            this.props.onGetStatistic(result);
        }
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