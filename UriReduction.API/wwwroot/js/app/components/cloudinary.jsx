const React = require('react');

class Cloudinary extends React.Component{
    constructor(props){
        super(props);

        this.inputStyle = {
            display:'none'
        }
    }

    render(){
        return (
        <div>
            <input id='fileElem' type='file' style={this.inputStyle} onChange={this.props.onChange} />
            <a href="#" onClick={this.props.onClick}>Select Image</a>
        </div>);
    }
}

module.exports = Cloudinary;