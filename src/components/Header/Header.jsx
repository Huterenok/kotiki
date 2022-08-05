import React, { useState } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const [all,setAll] = useState(true)
	const [favorite,setFavorite] = useState(false)

	return (
		<div className={styles.container}>
			<ul className={styles.list__container}>
				<li><NavLink className={all && styles.active} onClick={() => {setAll(true);setFavorite(false)}}  to='/kotiki'>Все котики</NavLink></li>
				<li><NavLink className={favorite && styles.active} onClick={() => {setFavorite(true);setAll(false)}}  to='/favorites'>Любимые котики</NavLink></li>
			</ul>
		</div>
	)
}
export default Header