
import firebase from '../services/firebase'

export const ADMIN_LOGIN = 'ADMIN_LOGIN'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const FOCUS_INPUT = 'FOCUS_INPUT'
export const BLUR_INPUT = 'BLUR_INPUT'


export const loginAdmin = (username,password) => {
    return (dispatch) => {
       
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((response) =>{
            dispatch({
                type: ADMIN_LOGIN
            })
        })
        .catch((error) => {
            
        });
            
    }
}

export const logoutAdmin = () => {
    return (dispatch) => {
        return firebase.auth().signOut()
        .then(function() {
            dispatch({
                type: ADMIN_LOGOUT
            })
          }).catch(function(error) {
            // An error happened.
          });
        
    }
}

export const checkAuthStatus = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch({
                    type: ADMIN_LOGIN
                })
            }
          });
    }
}

export const updateLoginCredentials = (inputName,value) => {
    return (dispatch) => {
        switch(inputName){
            case 'username':
                dispatch({
                    type: UPDATE_USERNAME,
                    payload:value
                })
                break;
            
            default:
            dispatch({
                    type: UPDATE_PASSWORD,
                    payload:value
                })
                break;
        }
    }
}

export const focusInputs = (inputName) => {
    return (dispatch) => {
        dispatch({
            type: FOCUS_INPUT
        })
               
    }
}

export const blurInputs = (inputName) => {
    return (dispatch) => {
        dispatch({
            type: BLUR_INPUT
        })
    }
}
