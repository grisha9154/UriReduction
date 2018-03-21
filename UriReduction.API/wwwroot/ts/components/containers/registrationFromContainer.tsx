import * as React from "react";
import RegistrationForm from "../performance/registrationForm";
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
            url:"/signup",
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
        return <RegistrationForm onSubmit={this.onSubmit} />;
    }
}
export default RegistrationContainer;