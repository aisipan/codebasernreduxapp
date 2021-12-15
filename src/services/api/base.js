import axios from 'axios';
import { store } from '../../redux/store';

export default class RequestApi {
    static Request() {
        axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                // const originalRequest = error.config;
                if (error.response.status === 307 || error.response.status === 403) {
                    console.log(error.response);
                }

                return Promise.reject(error);
            }
        );

        return axios;
    }

    static Header() {
        let header = {
            headers: {
                "Content-Type": "application/json",
                // 'Cache-Control': 'no-cache'
            }
        }
        return header;
    }

    static HeaderWithToken() {
        const { token }  = store.getState().userReducer.user
        let header = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                // 'Cache-Control': 'no-cache',
            }
        }
        return header;
    }
}
