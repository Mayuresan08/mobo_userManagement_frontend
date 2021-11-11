let initialState={
    users:null,
    isFetching:false,
    error:false
}

export const userReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case "fetching":
            {
                return{
                    ...state,
                    isFetching:true
                }
            }
        
        case "fetchSuccess":
            {
                return{
                    ...state,
                    isFetching:false,
                    users:action.payload,
                    error:false
                }
            }

        case "fetchFail":
            {
                return{
                    ...state,
                    isFetching:false,
                    users:null,
                    error:true
                }
            }
            default:return state
    }

}