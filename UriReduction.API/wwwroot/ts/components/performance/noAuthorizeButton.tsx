import * as React from "react";
import LoginButton from "./LoginButton";
import RegistrationButton from "./RegistrationButtons";

function NoAuthorizeButtons(): JSX.Element {
return (
<div>
    <LoginButton />
    <RegistrationButton />
</div>);
}
export default NoAuthorizeButtons;