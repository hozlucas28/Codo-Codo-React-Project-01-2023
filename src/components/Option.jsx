import React from 'react'

import './Option.css'

import robot from '../static/robot.webp'

const Option = ({ children, playerOpt, machineOpt, setPlayerOpt, value, image, imageAlt }) => {
	const shouldChecked = playerOpt === value
	const shoudlDisabled = playerOpt !== 'null'
	const shouldShowRobot = playerOpt !== 'null' && machineOpt === children.toLowerCase()

	const handleOnChange = ({ target }) => {
		setPlayerOpt(target.value)
	}

	return (
		<label className={'option' + (shoudlDisabled ? ' disabled' : '')}>
			<h3 className="header">{children}</h3>
			<img
				className="image"
				src={image}
				alt={imageAlt}
			/>
			<input
				type="radio"
				name="option"
				value={value}
				className="input"
				onChange={handleOnChange}
				disabled={shoudlDisabled}
				checked={shouldChecked}
				hidden
			/>
			{shouldShowRobot ? (
				<img
					className="robot"
					src={robot}
					alt="TODO"
				/>
			) : (
				''
			)}
		</label>
	)
}

export default Option
