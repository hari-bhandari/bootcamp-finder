import{
    GET_TOKEN,REMOVE_TOKEN,LOAD_USER,UPDATE_DETAILS,REQUEST_DENIED,CLEAR_ERRORS
} from '../types'
export default (state,action)=>{
    switch(action.type){
        case LOAD_USER:
        case UPDATE_DETAILS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user:action.payload
            }
        case GET_TOKEN:
            localStorage.setItem('token',action.payload)
            return{
                ...state,
                token:action.payload,
                isAuthenticated:true,
                loading:false
            }
        case REMOVE_TOKEN:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user:null,
                error:action.payload
        
        }
        case REQUEST_DENIED:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user:null,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
         return state
    }
}