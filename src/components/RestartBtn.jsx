import React, { useState } from 'react'
import { TEXTS } from '../constants/TEXTS.js'

import './RestartBtn.css'

const RestartBtn = ({ setPlayerOpt }) => {
	const handleRestart = () => {
		setPlayerOpt('null')
	}

	return (
		<button
			onClick={handleRestart}
			id="restartBtn"
		>
			{TEXTS.restart}
		</button>
	)
}

export default RestartBtn
