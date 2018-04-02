import * as React from "react";

import LoginForm from "../performance/loginForm";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import IPayload from "../../types/iPayload";
import ILoginForm from "../../types/iLoginForm";

class RegistrationContainer extends React.Component<IAuthorizationFormProps, object> {
    loginError: string;
    constructor(props: IAuthorizationFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event: React.FormEvent<ILoginForm>): void {
        event.preventDefault();
        let data: string = JSON.stringify({
            Login: event.currentTarget.UserName.value,
            Password: event.currentTarget.Password.value
        });
        fetch("/signin", {
            body: data,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            credentials: "include"
        }).then((response) => {
            response.json().then((data) => {
                if (data.value) {
                    this.props.onUserLoginIn(data.value);
                    this.props.switchLocation("/");
                }
            }).catch(() => {
                this.loginError = "Wrong login or password";
                this.props.switchLocation("/signin");
            })
        });
    }
    render(): JSX.Element {
        return <LoginForm onSubmit={this.onSubmit} loginError={this.loginError} userNameError="" />;
    }
}
export default RegistrationContainer;