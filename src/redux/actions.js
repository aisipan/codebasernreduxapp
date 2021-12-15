/*
* All actions should be import and exported first
* to make components / pages are easy to use
*/

import { 
    setLogin, 
    setUser, 
    setFcmToken 
} from './modules/login/actions';

import { 
    setHistoryData,
    setHistoryFilterShown,
    setHistoryConfirmWinData,
    setHistoryTotalWin
} from './modules/transport/actions';

export { 
    setLogin,
    setUser,
    setFcmToken,
    setHistoryData,
    setHistoryFilterShown,
    setHistoryConfirmWinData,
    setHistoryTotalWin
}