import * as React from "react";
import { TextField } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";

import IShortUriFormProps from "../../types/iShortUriFormProps";

export function ShortUriForm ({shortUri}: IShortUriFormProps): JSX.Element {
        return <MuiThemeProvider>
                        <TextField
                                id="LongUriTextInput"
                                hintText="ShortUri Uri"
                                value={shortUri} />
                </MuiThemeProvider>;
}