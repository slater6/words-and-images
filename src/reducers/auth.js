import {
    UPDATE_USERNAME,
    UPDATE_PASSWORD,
    ADMIN_LOGIN,
    ADMIN_LOGOUT
} from '../actions'

const authState = {
    isAuth: false,
    username:'',
    password:''
}

export default (state = authState,action) => {
    
    switch(action.type){
        case UPDATE_USERNAME:
            return {
                ...state,
                username : action.payload
            }
            

        case UPDATE_PASSWORD:
            return {
                ...state,
                password : action.payload
            }

        case ADMIN_LOGIN:
            return {
                ...state,
                isAuth : true,
                username:'',
                password:''
            }

        case ADMIN_LOGOUT:
            return {
                ...state,
                isAuth :false,
                username:'',
                password:''
            }
            
        

        default:
                return state;
                
    }
       
}