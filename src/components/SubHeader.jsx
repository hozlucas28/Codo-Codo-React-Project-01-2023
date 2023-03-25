import React from 'react'

import './SubHeader.css'

import { getWinner } from '../utils/getWinner.js'
import { TEXTS } from '../constants/TEXTS.js'

const SubHeader = ({ playerOpt, machineOpt }) => {
	const result = playerOpt !== 'null' ? getWinner({ firstOpt: playerOpt, secondOpt: machineOpt }) : 'default'

	return <h2 id="subHeader">{TEXTS.subHeader[result]}</h2>
}

export default SubHeader
