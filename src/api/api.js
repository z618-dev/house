import http from '../utils/http'
//
let resquest = "/testIp/request/"

// get请求
export default{
 	getListAPI(params){
    	return http.get(`${resquest}/getList.json`,params)
	},
	 postFormAPI(params){
    	return http.post(`${resquest}/postForm.json`,params)
	},
	login(params){
    	return http.post(`${resquest}/kangotechappadmin/login`,params)
	}
}
