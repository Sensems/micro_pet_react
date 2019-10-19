export function getLocalStorage(key) {
	return JSON.parse(window.localStorage.getItem(key))
}

export function setLocalStorage(key,data) {
	if(data instanceof Object) {
		window.localStorage.setItem(key,JSON.stringify(data))
	}else {
		window.localStorage.setItem(key,data)
	}
}