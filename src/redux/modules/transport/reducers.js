import {
    SET_HISTORY_DATA,
    SET_HISTORY_FILTER_SHOWN,
    SET_HISTORY_CONFIRM_WIN_DATA,
    SET_HISTORY_TOTAL_WIN
} from "./actions";

const initialState = {
    historyData: [],
    historyFilterShown: false,
    historyConfirmWinData: [],
    historyTotalWin: 0,
}

function historyReducers(state = initialState, action) {
    switch(action.type) {
        case SET_HISTORY_DATA:
            return {...state, historyData: action.payload }
        case SET_HISTORY_FILTER_SHOWN:
            return {...state, historyFilterShown: action.payload }
        case SET_HISTORY_CONFIRM_WIN_DATA:
            return {...state, historyConfirmWinData: action.payload }
        case SET_HISTORY_TOTAL_WIN:
            return {...state, historyTotalWin: action.payload }
        default:
            return state;
    }
}

export default historyReducers;