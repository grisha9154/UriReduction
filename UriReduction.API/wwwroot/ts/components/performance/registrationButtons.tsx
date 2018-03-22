import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";

function RegistrationButton():JSX.Element {
    return (
    <Link to="/signUp">
    <FlatButton label="Sign Up"/>
    </Link>
    );
}
export default RegistrationButton;