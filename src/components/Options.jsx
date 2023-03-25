import React from 'react'

import { TEXTS } from '../constants/TEXTS.js'

import './Options.css'

import RestartBtn from './RestartBtn.jsx'

import rock from '../static/rock.webp'
import paper from '../static/paper.webp'
import scissors from '../static/scissors.webp'

import Option from './Option.jsx'

const Options = ({ ...props }) => {
	return (
		<>
			<form id="form">
				<div id="options">
					<Option
						value={TEXTS.options.rock.value}
						image={rock}
						imageAlt={TEXTS.options.rock.altImg}
						{...props}
					>
						{TEXTS.options.rock.text}
					</Option>
					<Option
						value={TEXTS.options.paper.value}
						image={paper}
						imageAlt={TEXTS.options.paper.altImg}
						{...props}
					>
						{TEXTS.options.paper.text}
					</Option>
					<Option
						value={TEXTS.options.scissors.value}
						image={scissors}
						imageAlt={TEXTS.options.scissors.altImg}
						{...props}
					>
						{TEXTS.options.scissors.text}
					</Option>
				</div>
				{props.playerOpt !== 'null' ? <RestartBtn setPlayerOpt={props.setPlayerOpt} /> : null}
			</form>
		</>
	)
}

export default Options
