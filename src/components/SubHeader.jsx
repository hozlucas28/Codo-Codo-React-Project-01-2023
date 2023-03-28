import React from 'react'

import styles from './SubHeader.module.css'

import { getWinner } from '../utils/getWinner.js'
import { TEXTS } from '../constants/TEXTS.js'

const SubHeader = ({ playerOpt, machineOpt }) => {
	const result = playerOpt !== 'null' ? getWinner({ firstOpt: playerOpt, secondOpt: machineOpt }) : 'default'

	return <h2 className={styles.container}>{TEXTS.subHeader[result]}</h2>
}

export default SubHeader
