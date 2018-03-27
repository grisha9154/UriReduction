import * as React from "react";
import RegistrationForm from "../performance/registrationForm";
import { ajax } from "jquery";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import  IStoreState  from "../../types/iStoreState";
import IPayload from "../../types/iPayload";
import IRegistrationForm from "../../types/iRegistrationForm";

class RegistrationContainer extends React.Component<IAuthorizationFormProps, object> {
    errorTextConfirm: string;
    errorTextUserName: string;
    constructor(props: IAuthorizationFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event: React.FormEvent<IRegistrationForm>): void {
        event.preventDefault();
        let data: string = JSON.stringify({
            Login: event.currentTarget.UserName.value,
             Password: event.currentTarget.Password.value
            });
        if (event.currentTarget.Password.value !== event.currentTarget.ConfirmPassword.value) {
            this.errorTextConfirm = "Passwords do not match";
            this.props.switchLocation("/signup");
            return;
        }
        ajax({
            url: "/signup",
            data: data,
            method: "POST",
            contentType: "application/json",
            success: (payload: IPayload, status: string) => {
                if (status === "success") {
                    this.props.onUserLoginIn(payload.value);
                    this.props.switchLocation("/");
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                this.errorTextUserName = "Wrong user name";
                this.props.switchLocation("/signup");  
            }
        });
    }
    render(): JSX.Element {
        return <RegistrationForm onSubmit={this.onSubmit}  loginError={this.errorTextConfirm} userNameError={this.errorTextUserName}/>;
    }
}
export default RegistrationContainer;