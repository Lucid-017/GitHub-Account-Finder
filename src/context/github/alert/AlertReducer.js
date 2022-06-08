 const alertReducer=(state,action)=>{
    switch(action.type){
        case 'SET_ALERT':
            return action.payload; //which returns the message and type
        case 'REMOVE_ALERT':
            return null;
        default:
            return state
    }
}
export default alertReducer