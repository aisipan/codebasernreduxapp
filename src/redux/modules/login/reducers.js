import { 
    SET_LOGIN,
    SET_USER,
    SET_FCM_TOKEN
} from "./actions";

const initialState = {
    isLogin: false,
    user: null, // the payload after request login to API
    fcmToken: null
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_LOGIN:
            return {...state, isLogin: action.payload }
        case SET_USER:
            return {...state, user: action.payload }
        case SET_FCM_TOKEN:
            return {...state, fcmToken: action.payload }
        default:
            return state;
    }
}

export default userReducer;