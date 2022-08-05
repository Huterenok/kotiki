import React from 'react'
import loader from './img/loader.svg'
import styles from './Loader.module.css'

const Loader = () => {
	return (
		<div className={styles.container}>
			<img src={loader} alt="" />
			<p>...грузим котиков...</p>
		</div>
	)
}
export default Loader
