const React =require( 'react');
const LongUriForm =require ('../components/longUriForm.jsx');
const Actions = require('../actions.jsx');
const axios = require('axios');
const reduce = require('../shared/uriDerucer.js');

class LongUriFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLongUriChange = this.onLongUriChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        var longUri = this.props.longUri;
        if(longUri<=0){
            return;
        }
        reduce(longUri,this.props.onSubmit);
      /*  let data = JSON.stringify({'Id':0,'LongUri':longUri,'ShortUri':""});
        console.log('before axios', data);
        axios.post('/SUGC',data,{headers:{'Content-Type':'application/json'}}).then((result)=>{
            console.log('reducer.GETSHORTURI getShortUri',result);
            this.props.onSubmit(result.data); 
        });  */   
    }
    onLongUriChange(e){
        this.props.onLongUriChange(e.target.value);
    }    

    render(){
        return <LongUriForm onSubmit={this.onSubmit} onLongUriChange={this.onLongUriChange} longUri={this.props.longUri}/>
    }
}

module.exports= LongUriFormContainer;