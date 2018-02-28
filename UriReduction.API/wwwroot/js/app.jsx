const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const axios = require('axios');

class LongUriForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {longUri:""};

        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }

    onLongUriChange(e){
        this.setState({longUri: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        var longUri = this.state.longUri;
        if(longUri<=0){
            return;
        }
        this.props.onSubmit(longUri);        
    }
    render() {
        return <form onSubmit={this.onSubmit}>
                <input type="text" 
                placeholder="Long Uri" 
                value={this.state.longUri} 
                onChange={this.onLongUriChange} />
           <input type="submit" value="Short Uri" />
        </form>;
    }
};
class ShortUriForm extends React.Component{
       render(){
        return <div>
            <input id="post-shortlink" value={this.props.uri} />
            <button class="button" id="copy-button" data-clipboard-target="#post-shortlink">Copy</button>
            </div>
    }
}

function sendRequest(longUri){
    let data = JSON.stringify({'Id':0,'LongUri':longUri,'ShortUri':""});
    axios.post('/SUGC',data,{headers:{'Content-Type':'application/json'}})
    .then((result)=>{
        console.log(result);
        ReactDOM.render(
            <AssociatedUri fullSet={true} shortUri={result.data}/>,
            document.getElementById("content")
        );
    });
}

class AssociatedUri extends React.Component{
    render(){
        if(this.props.fullSet){
            return <div> 
                <LongUriForm onSubmit={sendRequest} />
                <ShortUriForm uri={this.props.shortUri} />
            </div>;
        }else{
            return  <LongUriForm onSubmit={sendRequest} />;
        }
    }
}

ReactDOM.render(
    <AssociatedUri fullSet={false}/>,
    document.getElementById("content")
);