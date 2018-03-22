import * as React from "react";
import LoginForm from "../performance/loginForm";
import * as $ from "jquery";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";

class RegistrationContainer extends React.Component<IAuthorizationFormProps,any> {
    constructor(props:any) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event:any): void {
        event.preventDefault();
        let data: string = JSON.stringify({Login:event.target.UserName.value,Password:event.target.Password.value});
        $.ajax({
            url:"/signin",
            data:data,
            method:"POST",
            contentType:"application/json",
            success:(payload:any,status:any)=> {
                if(status==="success") {
                    this.props.onUserLoginIn(payload.value);
                    this.props.switchLocation("/");
                }
            }
        });
    }
    render(): any {
        return <LoginForm onSubmit={this.onSubmit} />;
    }
}
export default RegistrationContainer;