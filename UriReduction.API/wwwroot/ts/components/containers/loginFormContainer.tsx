import * as React from "react";
import LoginForm from "../performance/loginForm";
import * as $ from "jquery";
import IAuthorizationFormProps from "../../types/iAuthorizationFormProps";
import IPayload from "../../types/iPayload";
import ILoginForm from "../../types/iLoginForm";

class RegistrationContainer extends React.Component<IAuthorizationFormProps, object> {
    constructor(props: IAuthorizationFormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event:  React.FormEvent<ILoginForm>): void {
        event.preventDefault();
        let data: string = JSON.stringify({
            Login: event.currentTarget.UserName.value, 
            Password: event.currentTarget.Password.value});
        $.ajax({
            url: "/signin",
            data: data,
            method: "POST",
            contentType: "application/json",
            success: (payload: IPayload, status: string) => {
                if (status === "success") {
                    this.props.onUserLoginIn(payload.value);
                    this.props.switchLocation("/");
                }
            }
        });
    }
    render(): JSX.Element {
        return <LoginForm onSubmit={this.onSubmit} />;
    }
}
export default RegistrationContainer;