import axios from './service'
const base = 'http://127.0.0.1:3030';

export function axiosPost(url,params) {
	return axios({
		method: 'post',
		url: `${base}${url}`,
		data: params || {},
	})
}

export function axiosGet(url,params) {
	return axios({
		method: 'get',
		url: `${base}${url}`,
		data: params || {},
	})
}