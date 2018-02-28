const GetShortUri= function(longUri){
    return{
        type:"GET_SHORT_URI",
        longUri
    }
};
const ChangeLongUri = function(longUri){
    return{
        type:"CHANGE_LONG_URI",
        longUri
    }
}

module.exports = {GetShortUri,ChangeLongUri};