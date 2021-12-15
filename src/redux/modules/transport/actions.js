export const SET_HISTORY_DATA = 'SET_HISTORY_DATA';
export const SET_HISTORY_FILTER_SHOWN = 'SET_HISTORY_FILTER_SHOWN';
export const SET_HISTORY_CONFIRM_WIN_DATA = 'SET_HISTORY_CONFIRM_WIN_DATA'
export const SET_HISTORY_TOTAL_WIN = 'SET_HISTORY_TOTAL_WIN';

export const setHistoryData = obj => dispatch => {
    dispatch({
        type: SET_HISTORY_DATA,
        payload: obj
    })
}

export const setHistoryFilterShown = obj => dispatch => {
    dispatch({
        type: SET_HISTORY_FILTER_SHOWN,
        payload: obj
    })
}

export const setHistoryConfirmWinData = obj => dispatch => {
    dispatch({
        type: SET_HISTORY_CONFIRM_WIN_DATA,
        payload: obj
    })
}

export const setHistoryTotalWin = obj => dispatch => {
    dispatch({
        type: SET_HISTORY_TOTAL_WIN,
        payload: obj
    })
}