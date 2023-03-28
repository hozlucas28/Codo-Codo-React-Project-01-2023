import React from 'react'

import styles from './Header.module.css'

import { TEXTS } from '../constants/TEXTS.js'

const Header = () => {
	return <h1 className={styles.container}>{TEXTS.header}</h1>
}

export default Header
