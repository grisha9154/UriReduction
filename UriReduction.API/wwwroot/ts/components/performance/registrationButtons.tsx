import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import style from "../style/FlatButtonStyle";

function RegistrationButton(): JSX.Element {
    return (
    <Link to="/signUp">
        <FlatButton labelStyle={style} label="Sign Up"/>
    </Link>
    );
}
export default RegistrationButton;