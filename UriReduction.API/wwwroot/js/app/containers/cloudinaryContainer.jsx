const React = require ('react');
const Cloudinary = require('../components/cloudinary.jsx');
const axios = require('axios');
const reduce = require('../shared/uriDerucer.js');

class CloudinaryContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.uploadFile = this.uploadFile.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onClick(event){
        document.getElementById('fileElem').click();
        event.preventDefault(); 
    }
    onInputChange(event){
        let files  = document.getElementById('fileElem').files
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            this.uploadFile(files[i]);
          }
    }
    uploadFile(file){
        console.log(this.props.cloudName);
        let url = `https://api.cloudinary.com/v1_1/${this.props.cloudName}/upload`;
        let fd = FormData();
        fd.append('upload_preset', this.props.uploadPreset);
        fd.append('tags', 'browser_upload');
        fd.append('file', file);
        axios.post(url,fd).then((resualt)=>{
                reduce(resualt.data.secure_url,this.props.onSubmit);
            });
    }
    render(){
        return (
            <Cloudinary onChange = {this.onInputChange} onClick={this.onClick} />
        );
    }
}

module.exports = CloudinaryContainer;