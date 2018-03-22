import * as React from "react";
import { Link } from "react-router-dom";
import { FlatButton } from "material-ui";
import * as $ from "jquery";

class UserButton extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.test = this.test.bind(this);
    }
    test():void {
    $.ajax({
        url:"/statistic",
        method:"GET",
        contentType:"application/json",
        success:(result:any)=> {
            this.props.onGetStatistic(result);
        }
    });
    }
    render():any {
        return (
            <Link to="/user">
                <FlatButton
                label={this.props.userName}
                onClick={this.test}>
            </FlatButton>
            </Link>
            );
    }
}
export default UserButton;