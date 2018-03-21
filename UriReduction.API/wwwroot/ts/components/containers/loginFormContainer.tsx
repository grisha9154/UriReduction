import * as React from "react";
import LoginForm from "../performance/loginForm";
import * as $ from "jquery";

class RegistrationContainer extends React.Component {
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
            success:(error:any,result:any)=> {
                if(result) {
                    window.location.href = "http://localhost:63303/";
                }
            }
        });
    }
    render(): any {
        return <LoginForm onSubmit={this.onSubmit} />;
    }
}
export default RegistrationContainer;