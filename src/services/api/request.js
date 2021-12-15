/* 
* This is only example from OSLOG 6 FE
*/

import { BASE_URL_API } from 'const/ApiConst';
import RequestApi from './base';

export default class RequestModule extends RequestApi {
    moduleName = '';

    constructor(name) {
        super();
        this.moduleName = name;
    }

    async getData() {
        const url = `${BASE_URL_API}/${this.moduleName}`;
        const result = await RequestApi.Request()
            .get(url)
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }

    async getDataById(id) {
        const url = `${BASE_URL_API}/${this.moduleName}/${id}`;
        const result = await RequestApi.Request()
            .get(url)
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }

    async getDataWithPayload(param) {
        const payload = encodeURI(JSON.stringify(param));
        const url = `${BASE_URL_API}/${this.moduleName}?flt=${payload}`;
        const result = await RequestApi.Request()
            .get(url)
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }

    async addData(param) {
        const payload = JSON.stringify(param);
        const url = `${BASE_URL_API}/${this.moduleName}`;
        const result = await RequestApi.Request()
            .post(url, payload, { headers: { 'Content-Type': 'application/json' } })
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }

    async updateData(id, param) {
        const payload = JSON.stringify(param);
        const url = `${BASE_URL_API}/${this.moduleName}/${id}`;
        const result = await RequestApi.Request()
            .put(url, payload, { headers: { 'Content-Type': 'application/json' } })
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }

    async deleteData(id) {
        const url = `${BASE_URL_API}/${this.moduleName}/${id}`;
        const result = await RequestApi.Request()
            .delete(url)
            .then((res) => res)
            .catch((err) => err.response);
        return result;
    }
}
