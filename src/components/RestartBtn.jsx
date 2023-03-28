import React, { useState } from 'react'
import { TEXTS } from '../constants/TEXTS.js'

import styles from './RestartBtn.module.css'

const RestartBtn = ({ setPlayerOpt }) => {
	const handleRestart = () => {
		setPlayerOpt('null')
	}

	return (
		<button
			onClick={handleRestart}
			className={styles.container}
		>
			{TEXTS.form.restart}
		</button>
	)
}

export default RestartBtn
