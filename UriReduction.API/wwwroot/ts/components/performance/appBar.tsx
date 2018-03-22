import * as React from "react";
import MUIAppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import IAppBarProps from "../../types/iAppBarProps";
import NoAuthorizeButtons from "./noAuthorizeButton";
import AuthorizeButtons from "./authorizeUser";

function AppBar(appBarProps:IAppBarProps):JSX.Element {
  return (
    <MuiThemeProvider>
      <MUIAppBar
        title={appBarProps.title}
        showMenuIconButton={false}
        iconElementRight={appBarProps.signIn?<AuthorizeButtons {...appBarProps} />:<NoAuthorizeButtons />}/>
    </MuiThemeProvider>);
}
export default AppBar;