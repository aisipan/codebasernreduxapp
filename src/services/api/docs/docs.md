## API OSLOG BIDDING

# VENDOR - LOGIN
[POST] https://oslog.id/apiv5/vendor/login
username
password
fcm_token

# VENDOR - ADD
[POST] https://oslog.id/apiv5/vendor/new

# VENDOR - EDIT
[PUT] https://oslog.id/apiv5/vendor/edit/{id:[0-9]+}
username //string
password //string
role_name //string di ambil dari master role seperti role_name yang di master user
locked //boolean defaultnya false

# BIDDING - ADD
[POST] https://oslog.id/apiv5/bidding/add
{
	"status": "open", //open, cancel, closed //mandatory string
	"company": 0, //mandatory int
	"sales_order": 0, //mandatory int
	"distance": 0, //mandatory float
	"vehicle_type": 0, //mandatory int
	"vehicle_total": 0, //mandatory int
	"description": "", //tidak mandatory string
}

# BIDDING - EDIT
[PUT] https://oslog.id/apiv5/bidding/edit/{id:[0-9]+}
{
	"status": "closed", //open, cancel, closed //mandatory string
	"company": 0, //mandatory int
	"sales_order": 0, //mandatory int
	"distance": 0, //mandatory float
	"vehicle_type": 0, //mandatory int
	"vehicle_total": 0, //mandatory int
	"description": "", //tidak mandatory string
	"vendor_winner_ids": [], //array string dari id vendor, di ambil dari info bidding detail
}

# BIDDING - DELETE
[DELETE] https://oslog.id/apiv5/bidding/delete/{id:[0-9]+}

# BIDDING - GET BY ID
[GET] https://oslog.id/apiv5/bidding/{id:[0-9]+}

# BIDDING - SEARCH
[POST] https://oslog.id/apiv5/bidding/search
{
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

# BIDDING DETAIL - ADD
[POST] https://oslog.id/apiv5/bidding-detail/add
{
	"bidding": 1, //mandatory int, di ambil dari info id nya bidding
	"vendor": 0, //mandatory int, id vendor di ambil dari master vendor
	"total_cost": 0, //mandatory float
	"vehicle_total": 0, //mandatory int
}

# BIDDING DETAIL - EDIT
[PUT] https://oslog.id/apiv5/bidding-detail/edit/{id:[0-9]+}
{
	"bidding": 1, //mandatory int, di ambil dari info id nya bidding
	"vendor": 0, //mandatory int, id vendor di ambil dari master vendor
	"total_cost": 0, //mandatory float
	"vehicle_total": 0, //mandatory int
}

# BIDDING DETAIL - DELETE
[DELETE] https://oslog.id/apiv5/bidding-detail/delete/{id:[0-9]+}

# BIDDING DETAIL - SEARCH
[POST] https://oslog.id/apiv5/bidding-detail/search
{
	"paging": {"start": 0, "length": 25},
	"columns": [
		{"name": "status", "logic_operator": "=", "value": "open", "operator": "AND", "table_name": "t_bidding"},
		{"name": "name", "logic_operator": "like", "value": "", "operator": "AND", "table_name": "m_vendor"}
	],
	"joins": [
		{"name": "vendor", "column_results": ["name"]},
		{"name": "bidding", "column_results": ["status", "company_id", "sales_order_id", "distance", "vehicle_type_id", "vehicle_total", "description", "vendor_winner_ids"]}
	],
	"orders": {"columns": ["id"], "ascending": false}
}


## CONTOH RESPONSE KE FRONT END NYA

/*
    contoh response to front end,
    supaya nge if else nya seragam gitu lhoo
    if success: 
    {
        "code": 200,
        "message": "OK",
        "status": true,
        "data": [] // data from api
    }

    if failed get API (API nya mati atau ada salah syntax): 
    {
        "code": 400, 
        "message": "pq: syntax error at or near \"dSIr_nZ2TG\"", 
        "status": false
    }

    if res.data undefined:
    {
        "message": "Failed to get API"
        "status": false,
        
    }
    
    if failed network catch error: 
    {
        "message": err.toString() // error dari catch(err)
        "status": false,
    }

    jadi intinya, untuk ngebandingin success atau gak nya dapet API dari statusnya
*/