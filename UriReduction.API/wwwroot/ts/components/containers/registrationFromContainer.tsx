import * as React from "react";
import RegistrationForm from "../performance/registrationForm";
import { ajax } from "jquery";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import  IStoreState  from "../../types/iStoreState";

class RegistrationContainer extends React.Component<IAuthorizationFormProps, any> {
    constructor(props: IAuthorizationFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event: any): void {
        event.preventDefault();
        let data: string = JSON.stringify({
            Login: event.target.UserName.value,
             Password: event.target.Password.value
            });
        if (event.target.Password.value !== event.target.ConfirmPassword.value) { return; }
        $.ajax({
            url: "/signup",
            data: data,
            method: "POST",
            contentType: "application/json",
            success: (payload: any, status: string) => {
                if (status === "success") {
                    this.props.onUserLoginIn(payload.value);
                    this.props.switchLocation("/");
                }
            }
        });
    }
    render(): any {
        return <RegistrationForm onSubmit={this.onSubmit} />;
    }
}
export default RegistrationContainer;