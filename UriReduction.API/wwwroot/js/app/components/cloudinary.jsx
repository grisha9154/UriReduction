const React = require('react');
const {CloudinaryContext,Image,Video,Transformation} = require('cloudinary-react');

class Cloudinary extends React.Component{
    render(){
        return (
        <CloudinaryContext cloudName="dwvdvjlas">
            <div>
                <Image publickId="sample" />
            </div>
        </CloudinaryContext>);
    }
}