import * as React from "react";

function LoginForm (props:any): any {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>User Name </label>
                <input type="text" name="UserName" /><br/>
                <label>Password </label>
                <input type="password" name="Password" /><br/>
                <input type="submit" />
            </form>
        </div>);
}

export default LoginForm;