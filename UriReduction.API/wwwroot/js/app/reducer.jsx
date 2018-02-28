const reduser = (state = {}, action)=>{
    switch(action.type){
        case 'GET_SHORT_URI':
        {     
            console.log('action',action);
            return Object.assign({},state,{
                shortUri:action.longUri,
                fullSet:true
            });
        }
        case 'CHANGE_LONG_URI':{
            return Object.assign({},state,{
                longUri:action.longUri
            });;
        }
        default:
            return state
    }
};

module.exports = reduser;

