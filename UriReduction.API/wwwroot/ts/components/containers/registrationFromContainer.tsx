import * as React from "react";

import RegistrationForm from "../performance/registrationForm";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import IStoreState from "../../types/iStoreState";
import IPayload from "../../types/iPayload";
import IRegistrationForm from "../../types/iRegistrationForm";

class RegistrationContainer extends React.Component<IAuthorizationFormProps, object> {
    errorTextConfirm: string;
    errorTextUserName: string;
    constructor(props: IAuthorizationFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event: React.FormEvent<IRegistrationForm>): void {
        event.preventDefault();
        let data: string = JSON.stringify({
            Login: event.currentTarget.UserName.value,
            Password: event.currentTarget.Password.value
        });
        if (event.currentTarget.Password.value !== event.currentTarget.ConfirmPassword.value) {
            this.errorTextConfirm = "Passwords do not match";
            this.errorTextUserName = "";
            this.props.switchLocation("/signup");
            return;
        }
        fetch("/signup", {
            body: data,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((response) => {
            response.json().then((data) => {
                if (data.value) {
                    this.props.onUserLoginIn(data.value);
                    this.props.switchLocation("/");
                }
            }).catch(() => {
                this.errorTextUserName = "Wrong user name";
                this.errorTextConfirm = "";
                this.props.switchLocation("/signup");
            })
        });
    }
    render(): JSX.Element {
        return <RegistrationForm onSubmit={this.onSubmit} loginError={this.errorTextConfirm} userNameError={this.errorTextUserName} />;
    }
}
export default RegistrationContainer;