import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";

function LoginButton():JSX.Element {
    return (
    <Link to="/signin">
    <FlatButton label="Sign In"/>
    </Link>
    );
}
export default LoginButton;