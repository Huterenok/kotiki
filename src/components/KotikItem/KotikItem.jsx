import React, { useEffect, useState } from 'react'
import emptyHeart from './img/emptyHeart.png'
import fullHeart from './img/fullHeart.png'
import { useDispatch,useSelector} from 'react-redux'
import styles from './KotikItem.module.css'
import { addToFavorite,removeFromFavorite } from '../../store/favoriteSlice'

const KotikItem = ({url,id}) => {
	const [favorite,setFavorite] = useState(false)
	const favorites = useSelector(state => state.favorites)
	const dispatch = useDispatch()

	const checkFavorite = () =>{
		for(let i of favorites){
			if(i.id == id) return setFavorite(true)
		}
		return setFavorite(false)
	}

	useEffect(() => {
		checkFavorite()
	},[])

	const dispatchFavorite = () => {
		if(favorite){
			dispatch(removeFromFavorite({id}))
			setFavorite(false)
		}else{
			dispatch(addToFavorite({url,id}))
			setFavorite(true)
		}
	}
	return (
		<div className={styles.container} >
			<img src={url} alt="Kotik" className={styles.kotik}/> 
			<img src={favorite ? fullHeart : emptyHeart} onClick={()=> dispatchFavorite()} alt={favorite ? 'Убрать из любимых' : 'Добавить в любимые'} className={styles.heart} />
		</div>
	)
}
export default KotikItem
