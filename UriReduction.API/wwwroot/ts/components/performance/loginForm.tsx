import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "material-ui";

function LoginForm (props:any): JSX.Element {
    const style:React.CSSProperties = {
        margin: 12,
      };
    return (
            <form onSubmit={props.onSubmit}>
                <MuiThemeProvider>
                    <TextField
                    id="UserName"
                    hintText="User Name"
                    floatingLabelText="User Name"/>
                </MuiThemeProvider><br/>
                <MuiThemeProvider>
                    <TextField
                    id="Password"
                    hintText="Password"
                    type="password"
                    floatingLabelText="Password"/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton
                    type="submit"
                    label="Sign In"
                    primary={true}
                    className="button-submit"
                    style={style} />
                </MuiThemeProvider>
            </form>);
}

export default LoginForm;