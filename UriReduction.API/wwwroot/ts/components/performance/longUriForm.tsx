import * as React from "react";
import  ILongUriFormProps  from "../../types/iLongUriFormProps";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "material-ui";

export function LongUriForm (longUri: ILongUriFormProps): JSX.Element {
    const style: React.CSSProperties = {
        margin: 12,
      };
    return(
    <form onSubmit={longUri.onLongUriSubmit}>
        <MuiThemeProvider>
            <TextField
                id="LongUriTextInput"
                hintText="Long Uri"
                floatingLabelText="Long Uri"
                errorText= {longUri.errorText}
                value={longUri.longUri}
                onChange={longUri.onLongUriChange} />
        </MuiThemeProvider>
        <MuiThemeProvider>
            <RaisedButton
                type="submit"
                label="Short Uri"
                primary={true}
                className="button-submit"
                style={style} />
        </MuiThemeProvider>
    </form>);
}