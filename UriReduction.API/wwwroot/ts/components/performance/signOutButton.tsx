import * as React from "react";
import { FlatButton } from "material-ui";

class SignOutButton extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    deleteCookie( name:string ):void {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      }
    onClick():void {
        this.deleteCookie(".AspNetCore.Identity.Application");
        this.props.onClick();
    }
    render(): JSX.Element {
        return (<FlatButton label="Sign Out" onClick={this.onClick}/>);
    }
}
export default SignOutButton;