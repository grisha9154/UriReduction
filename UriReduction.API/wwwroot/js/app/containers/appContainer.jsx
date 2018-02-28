const React = require('react');
const connect = require('react-redux').connect;
const App = require('../components/app.jsx');
const actions = require('../actions.jsx');

class AppContainer extends React.Component{
    render(){
        return <App fullSet={this.props.fullSet} onSubmit={this.props.GetShortUri} onLongUriChange={this.props.ChangeLongUri} shortUri={this.props.shortUri} longUri={this.props.longUri} />
    }
}


function mapStateToProps(state){
    console.log('mapState', state);
    return {
        fullSet:state.fullSet,
        GetShortUri:state.GetShortUri,
        shortUri:state.shortUri,
        longUri:state.longUri
    };
}
function mapDispatchToProps(dispatch, owner){
    return{
        GetShortUri:(longUri)=>{
            dispatch(actions.GetShortUri(longUri));
        },
        ChangeLongUri:(longUri)=>{
            dispatch(actions.ChangeLongUri(longUri)); 
        }
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(AppContainer);
