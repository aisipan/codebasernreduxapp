import { BASE_URL_API, API_RESPONSE } from 'const/ApiConst';
import RequestApi from 'services/api/base';
import { store } from '../../../../redux/store';

export default class ApiBidding extends RequestApi {
    
	static async getBidding() {
        const param1 = {
            "paging": {"start": 0, "length": 25},
            "columns": [
                {"name": "status", "logic_operator": "=", "value": "open", "operator": "AND"},
                {"name": "number", "logic_operator": "like", "value": "", "operator": "AND", "table_name": "t_sales_order"}
            ],
            "joins": [
                {"name": "company", "column_results": ["name"]},
                {"name": "vehicle_type", "column_results": ["name"]},
                {"name": "sales_order", "column_results": ["number","so_number_internal"]}
            ],
            "orders": {"columns": ["id"], "ascending": false}
        }
		const url = `${BASE_URL_API}/bidding/search`;
		const payload = JSON.stringify(param1);
        let response = null;

        // console.log('payload get bidding', payload);

        // baca contoh cara return response nya ada di services/api/docs.md

        const result = await RequestApi.Request()
            .post(url, payload, RequestApi.HeaderWithToken())
            .then((res) => {
                // console.log('success==================', res)
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
                // console.log('error==================', err)
                response = {
                    // message: err.toString(),
                    message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;
	}

    static async getDetailBiddingById(biddingId) {
        const {id} = store.getState().userReducer.user

        const param1 = {
            "paging": {
                "start": 0,
                "length": 25
            },
            "columns": [
                {
                    "name": "id",
                    "logic_operator": "=",
                    "value": `${biddingId}`,
                    "operator": "AND",
                    "table_name": "t_bidding"
                },
                {
                    "name": "status",
                    "logic_operator": "=",
                    "value": "open",
                    "operator": "AND",
                    "table_name": "t_bidding"
                },
                {
                    "name": "id",
                    "logic_operator": "=",
                    "value": `${id}`,
                    "operator": "AND",
                    "table_name": "m_vendor"
                }
            ],
            "joins": [
                {
                    "name": "vendor",
                    "column_results": [
                        "name"
                    ]
                },
                {
                    "name": "bidding",
                    "column_results": [
                        "status",
                        "company_id",
                        "sales_order_id",
                        "distance",
                        "vehicle_type_id",
                        "vehicle_total",
                        "description",
                        "vendor_winner_ids"
                    ]
                }
            ],
            "orders": {
                "columns": [
                    "id"
                ],
                "ascending": false
            }
        }
		const url = `${BASE_URL_API}/bidding-detail/search`;
		const payload = JSON.stringify(param1);
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

    static async editBiddingDetail(biddingId, param) {
        const url = `${BASE_URL_API}/bidding-detail/edit/${biddingId}`;
        const payload = JSON.stringify(param);
        let response = null;
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
                response = {
                    // message: err.toString(),
                    message: API_RESPONSE.NETWORK_ERROR,
                    status: false
                }
                return response;
            });
        return result;
    }

    
	static async addBiddingDetail(param) {
		const url = `${BASE_URL_API}/bidding-detail/add`;
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

}