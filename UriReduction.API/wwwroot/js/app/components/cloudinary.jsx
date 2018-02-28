const React = require('react');
const {CloudinaryContext,Image,Video,Transformation} = require('cloudinary-react');

class Cloudinary extends React.Component{
    render(){
        return (
        <CloudinaryContext cloudName="dwvdvjlas">
            <div>
                <Image publicId="sample" width="300"/>
            </div>
        </CloudinaryContext>);
    }
}

module.exports = Cloudinary;