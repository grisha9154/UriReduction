import * as React from "react";

function RegistrationForm (props:any): any {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>User Name </label>
                <input type="text" name="UserName" /><br/>
                <label>Password </label>
                <input type="text" name="Password" /><br/>
                <label>Confirm Password </label>
                <input type="text" name="" /><br />
                <input type="submit" />
            </form>
        </div>);
}

export default RegistrationForm;