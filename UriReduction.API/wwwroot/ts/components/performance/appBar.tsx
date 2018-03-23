import * as React from "react";
import MUIAppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import IAppBarProps from "../../types/iAppBarProps";
import NoAuthorizeButtons from "./noAuthorizeButton";
import AuthorizeButtons from "./authorizeUser";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import style from "../style/FlatButtonStyle";

function AppBar(appBarProps: IAppBarProps): JSX.Element {
  return (
    <MuiThemeProvider>
      <MUIAppBar
        title={<Link to="/"><FlatButton labelStyle={style} label={appBarProps.title} hoverColor="rgba(0, 0, 0, 0)"/></Link>}
        showMenuIconButton={false}
        iconElementRight={appBarProps.signIn ? <AuthorizeButtons {...appBarProps} /> : <NoAuthorizeButtons />}/>
    </MuiThemeProvider>);
}
export default AppBar;