const axios = require('axios');

function reduce(longUri,onSubmit){
    let data = JSON.stringify({'Id':0,'LongUri':longUri,'ShortUri':""});
    console.log('before axios', data);
    axios.post('/SUGC',data,{headers:{'Content-Type':'application/json'}}).then((result)=>{
        console.log('reducer.GETSHORTURI getShortUri',result);
        onSubmit(result.data); 
    }); 
}
module.exports  = reduce;