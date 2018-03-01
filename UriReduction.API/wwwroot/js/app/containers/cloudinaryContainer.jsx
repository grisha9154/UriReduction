const React = require ('react');
const Cloudinary = require('../components/cloudinary.jsx');
const axios = require('axios');

class CloudinaryContainer extends React.Component{
    onClick(event){
        document.getElementById('fileElem').click();
        event.preventDefault(); 
    }
    onInputChange(event){
        let files  = document.getElementById('fileElem').files;
        console.log(files);
    }
    uploadFile(file){
        let url = `https://api.cloudinary.com/v1_1/${this.props.cloudName}/upload`;
    }
    render(){
        return (
            <Cloudinary onChange = {this.onInputChange} onClick={this.onClick} />
        );
    }
}

module.exports = CloudinaryContainer;