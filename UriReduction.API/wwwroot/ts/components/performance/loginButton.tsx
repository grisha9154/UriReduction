import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import style from "../style/FlatButtonStyle";

function LoginButton(): JSX.Element {
    return (
    <Link to="/signin">
        <FlatButton labelStyle={style} label="Sign In"/>
    </Link>
    );
}
export default LoginButton;