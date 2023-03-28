import React from 'react'

import { TEXTS } from '../constants/TEXTS.js'

import styles from './Instructions.module.css'

const Instructions = () => {
	return <p className={styles.container}>{TEXTS.instructions}</p>
}

export default Instructions
