import React, { useEffect, useState } from 'react'
import styles from './Favorites.module.css'
import { useSelector } from 'react-redux/es/exports'
import KotikItem from '../../components/KotikItem/KotikItem'

const Favorites = () => {
	const favoriteCats = useSelector(state => state.favorites)
	const [favorites,setFavorites] = useState([])
	useEffect(()=>{
		if(favoriteCats.length){
			setFavorites(favoriteCats)
		}
	},[])
	return (
		<div className={styles.container}>
			{favorites.length ? favorites.map(elem => <KotikItem id={elem.id} key={elem.id} url={elem.url}></KotikItem>) : <p className={styles.loading}>...добавьте своих любимых котиков в избранное...</p> }
			
		</div>
	)
}
export default Favorites
