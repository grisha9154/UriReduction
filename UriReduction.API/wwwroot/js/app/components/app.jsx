const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../actions.jsx');
const LongUriForm = require('../containers/longUriFormContainer.jsx');
const ShortUriForm = require('../components/shortUriForm.jsx');

class App extends React.Component{
    render(){
        console.log('AppForm',this.props.fullSet);
        if(this.props.fullSet){
            return (
                <div> 
                    <LongUriForm onSubmit={this.props.onSubmit} onLongUriChange={this.props.onLongUriChange} longUri={this.props.longUri} />
                    <ShortUriForm shortUri={this.props.shortUri} />
                </div>);
        }else{
            return  <LongUriForm onSubmit={this.props.onSubmit} onLongUriChange={this.props.onLongUriChange} longUri={this.props.longUri} />;
        }
    }
}

module.exports = App;