import React, { useEffect, useId, useState } from 'react'
import styles from './MainKotiki.module.css'
import { getApiResource } from '../../utils/network'
import KotikItem from '../../components/KotikItem/KotikItem'
import newHeaders from '../../constants/api'
import Loader from '../../components/Loader/Loader'
import { Transition } from 'react-transition-group'

const MainKotiki = () => {
	const [cats,setCates] = useState([])
	const [loading,setLoading] = useState(true)
	

	const scrollHandler = (e) =>{
		const containerHeight = e.target.documentElement.scrollHeight;
		const viewHeight = window.innerHeight;
		const scrollTop = e.target.documentElement.scrollTop
		if(containerHeight - (viewHeight+scrollTop) < 30){
			setLoading(true)
		}
	}

	const getResource = async(url,headers) => {
		const res = await getApiResource(url,headers)
		if(res){
			const catsList = res.map((cat) =>{
				return {
					id : cat.id,
					url : cat.url
				}
			})
			
			setCates((prevState) => [...prevState,...catsList])
		}else{
			throw new Error('Something is wrong')
		}
	}
	useEffect(() => {
		if(loading){
			getResource(`https://api.thecatapi.com/v1/images/search?limit=15&size=small`,newHeaders)		
		}
		setTimeout(()=>{setLoading(false)},2000)			
	},[loading])
	useEffect(() => {
		getResource(`https://api.thecatapi.com/v1/images/search?limit=15&size=small`,newHeaders)
	},[])


	useEffect(() => {
		document.addEventListener('scroll',scrollHandler)
		return () => {
			document.removeEventListener('scroll',scrollHandler)	
		}
	},[])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{cats && cats.map((url)=>{
					return <KotikItem url={url.url} key={url.id} id={url.id} ></KotikItem>
				})}
			</div>
			{loading && <Loader />}
		</div>
	)
}

export default MainKotiki