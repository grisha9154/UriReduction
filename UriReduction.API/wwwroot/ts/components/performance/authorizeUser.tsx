import * as React from "react";
import IAppBarProps from "../../types/iAppBarProps";
import SignOutButton from "./signOutButton";
import UserButton from "./userButton";

function AuthorizeButtons(props: IAppBarProps): JSX.Element {
return (<div>
    <UserButton userName={props.userName} onGetStatistic={props.onGetStatistic} />
    <SignOutButton {...props} />
</div>);
}
export default AuthorizeButtons;