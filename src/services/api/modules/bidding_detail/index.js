import { BASE_URL_API, API_RESPONSE } from 'const/ApiConst';
import RequestApi from 'services/api/base';
import { store } from '../../../../redux/store';

export default class ApiBiddingDetail extends RequestApi {
	static async test() {
        console.log('test bidding detail api');
    }

    static async getHistory(status, startDate, endDate) {
        const vendor_id = store.getState().userReducer.user.id;

        let statusOri = status;
        let statusToApi = status;

        // kalo statusnya winner, ambil dari status closed
        if (statusOri === 'winner') {
            statusToApi = "closed";
        }

        let param = {
            "paging": {"start": 0, "length": 25},
            "columns": [
                {"name": "status", "logic_operator": "=", "value": statusToApi, "operator": "AND", "table_name": "t_bidding"},
                {"name": "id", "logic_operator": "=", "value": vendor_id.toString(), "operator": "AND", "table_name": "m_vendor"},
                {"name": "created_at", "logic_operator": "range", "value": startDate, "value1": endDate, "operator": "AND"}
            ],
            "joins": [
                {"name": "vendor", "column_results": ["name"]},
                {"name": "bidding", "column_results": ["status", "company_id", "sales_order_id", "distance", "vehicle_type_id", "vehicle_total", "description", "vendor_winner_ids"]}
            ],
            "orders": {"columns": ["id"], "ascending": false}
        }

        // kalo statusnya confirm cari status yang accept / reject saja, gausah open
        if (statusToApi === 'confirm') {
            param.columns.push({"name": "status", "logic_operator": "=", "value": "accept", "operator": "OR"});
            param.columns.push({"name": "status", "logic_operator": "=", "value": "reject", "operator": "AND"})
        }

        const url = `${BASE_URL_API}/bidding-detail/search`;
        const payload = JSON.stringify(param);
        let response = null;

        // baca contoh cara return response nya ada di services/api/docs.md

        const result = await RequestApi.Request()
            .post(url, payload, RequestApi.HeaderWithToken())
            .then((res) => {
                if (res && res.data) {
                    response = res.data;
                    if (statusOri === 'winner') {
                        if (res.data.data && res.data.data.length > 0) {
                            let filteredData = res.data.data.filter(x => x.data_bidding.vendor_winner_ids.includes(vendor_id.toString()))
                            response.data = filteredData
                        }
                    }
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
                response = {
                    // message: err.toString(),
                    message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;
    }

    static async getTotalWin() {
        const vendor_id = store.getState().userReducer.user.id;
        let param = {
            "paging": {"start": 0, "length": 25},
            "columns": [
                {"name": "status", "logic_operator": "=", "value": "open", "operator": "AND"},
                {"name": "status", "logic_operator": "=", "value": "confirm", "operator": "AND", "table_name": "t_bidding"},
                {"name": "id", "logic_operator": "=", "value": vendor_id.toString(), "operator": "AND", "table_name": "m_vendor"}
            ],
            "joins": [
                {"name": "vendor", "column_results": ["name"]},
                {"name": "bidding", "column_results": ["status", "company_id", "sales_order_id", "distance", "vehicle_type_id", "vehicle_total", "description", "vendor_winner_ids"]}
            ],
            "orders": {"columns": ["id"], "ascending": false}
        }

        const url = `${BASE_URL_API}/bidding-detail/search`;
        const payload = JSON.stringify(param);
        let response = null;

        // baca contoh cara return response nya ada di services/api/docs.md

        const result = await RequestApi.Request()
            .post(url, payload, RequestApi.HeaderWithToken())
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
                response = {
                    // message: err.toString(),
                    message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;
    }

    // PUT YES / NO (accept / reject) to bidding-detail status (open => accept/reject)
    static async confirmWinner(biddingId, param) {
        console.log('confirmWinner-----------------')
        // console.log('biddingId', biddingId);
        // console.log('status', status);

        const payload = JSON.stringify(param);
        let response = null;

        const result = await RequestApi.Request()
            .put(`${BASE_URL_API}/bidding-detail/edit/${biddingId}`, payload, RequestApi.HeaderWithToken())
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
                response = {
                    // message: err.toString(),
                    message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;


    }
}