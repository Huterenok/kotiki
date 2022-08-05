export const getLocalStorage = (key) => {
	let data = localStorage.getItem(key)
	if(data == null){
		let arr = []
		return arr
	}
	let datas = JSON.parse(data)
	return datas
}

export const setLocalStorage = (key,data) => {
	localStorage.setItem(key,JSON.stringify(data))
}