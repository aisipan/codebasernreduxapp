export const SET_LOGIN = 'SET_LOGIN';
export const SET_USER = 'SET_USER';
export const SET_FCM_TOKEN = 'SET_FCM_TOKEN';

export const setLogin = auth => dispatch => {
    dispatch({
        type: SET_LOGIN,
        payload: auth
    })
}

export const setUser = obj => dispatch => {
    dispatch({
        type: SET_USER,
        payload: obj
    })
}

export const setFcmToken = obj => dispatch => {
    dispatch({
        type: SET_FCM_TOKEN,
        payload: obj
    })
}