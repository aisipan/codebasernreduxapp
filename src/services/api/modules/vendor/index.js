import { BASE_URL_API, API_RESPONSE } from 'const/ApiConst';
import RequestApi from 'services/api/base';

export default class ApiVendor extends RequestApi {
	static async login(param) {
		const url = `${BASE_URL_API}/vendor/login`;
		const payload = JSON.stringify(param);
        let response = null;

        // baca contoh cara return response nya ada di services/api/docs.md

        const result = await RequestApi.Request()
            .post(url, payload, RequestApi.Header())
            .then((res) => {
                if (res && res.data) {
                    response = res.data; 
                }
                // terkadang res.data itu undefined, jadi ya balikin aja begini
                else {
                    response = {
                        message: "Failed to get API",
                        status: false,
                    }
                }
                return response;
            })
            .catch((err) => {
                console.log('catch error login', err);
                response = {
                    message: err.toString(),
                    // message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;
	}

    static async changePassword(param) {
		const url = `${BASE_URL_API}/vendor/change-password`;
		const payload = JSON.stringify(param);
        let response = null;

        // baca contoh cara return response nya ada di services/api/docs.md

        const result = await RequestApi.Request()
            .put(url, payload, RequestApi.HeaderWithToken())
            .then((res) => {
                if (res && res.data) {
                    response = res.data; 
                }
                // terkadang res.data itu undefined, jadi ya balikin aja begini
                else {
                    response = {
                        message: "Failed to get API",
                        status: false,
                    }
                }
                return response;
            })
            .catch((err) => {
                console.log('catch error change password', err);
                response = {
                    message: err.toString(),
                    // message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        console.log('result change password', result);
        return result;
	}

    static async test() {
        console.log('test vendor api');
    }
}