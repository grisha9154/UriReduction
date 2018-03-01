const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../actions.jsx');
const LongUriForm = require('../containers/longUriFormContainer.jsx');
const ShortUriForm = require('../components/shortUriForm.jsx');
const Cloundinary = require('../containers/cloudinaryContainer.jsx');

class App extends React.Component{
    render(){
        if(this.props.fullSet){
            return (
                <div> 
                    <LongUriForm onSubmit={this.props.onSubmit} onLongUriChange={this.props.onLongUriChange} longUri={this.props.longUri} />
                    <ShortUriForm shortUri={this.props.shortUri} />
                    <Cloundinary uploadPreset='mfpiaktj' cloudName="dwvdvjlas" />
                </div>);
        }else{
        return  (
        <div>
            <LongUriForm onSubmit={this.props.onSubmit} onLongUriChange={this.props.onLongUriChange} longUri={this.props.longUri} />
            <Cloundinary uploadPreset='mfpiaktj' cloudName="dwvdvjlas"/>
        </div>);
        }
    }
}

module.exports = App;