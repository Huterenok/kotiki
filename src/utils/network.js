import { API_KEY } from "../constants/api"

export const getApiResource = async(url,headers) => {
	try{
		const res = await fetch(url,{headers : headers})

		if(!res.ok){
			console.error('Could not fetch.',res.status)
			return false
		}

		return await res.json()
	}catch(error){
		console.error('Could not fetch',error.message)
		return false
	}
}