import http from '../utils/http'
//
let resquest = "http://47.112.127.56:8084"

// 接口请求
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
