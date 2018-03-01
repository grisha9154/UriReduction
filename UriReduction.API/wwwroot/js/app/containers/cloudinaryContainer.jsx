const React = require ('react');
const Cloudinary = require('../components/cloudinary.jsx');
const axios = require('axios');

class CloudinaryContainer extends React.Component{
    onClick(event){
        document.getElementById('fileElem').click();
        event.preventDefault(); 
    }
    onInputChange(event){
        let files  = document.getElementById('fileElem').files
        console.log(files);
        files.forEach(file => {
            this.uploadFile(file);
        });
    }
    uploadFile(file){
        let url = `https://api.cloudinary.com/v1_1/${this.props.cloudName}/upload`;
        let data = {
            upload_preset:this.props.uploadPreset,
            tags:'browser_upload',
            file: file
        };
        axios.post(url,data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }}).then((resualt)=>{
                console.log(resualt);
            });
    }
    render(){
        return (
            <Cloudinary onChange = {this.onInputChange} onClick={this.onClick} />
        );
    }
}

module.exports = CloudinaryContainer;