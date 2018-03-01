const React = require ('react');
const Cloudinary = require('../components/cloudinary.jsx');

class CloudinaryContainer extends React.Component{
    render(){
        return (
            <Cloudinary />
        );
    }
}

module.exports = CloudinaryContainer;