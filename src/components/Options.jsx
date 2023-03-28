import React from 'react'

import { TEXTS } from '../constants/TEXTS.js'

import styles from './Options.module.css'

import RestartBtn from './RestartBtn.jsx'

import rock from '../static/rock.webp'
import paper from '../static/paper.webp'
import scissors from '../static/scissors.webp'

import Option from './Option.jsx'

const Options = ({ ...props }) => {
	return (
		<>
			<form className={styles.container}>
				<div className={styles.subContainer}>
					<Option
						value={TEXTS.form.options.rock.value}
						image={rock}
						imageAlt={TEXTS.form.options.rock.altImg}
						{...props}
					>
						{TEXTS.form.options.rock.text}
					</Option>
					<Option
						value={TEXTS.form.options.paper.value}
						image={paper}
						imageAlt={TEXTS.form.options.paper.altImg}
						{...props}
					>
						{TEXTS.form.options.paper.text}
					</Option>
					<Option
						value={TEXTS.form.options.scissors.value}
						image={scissors}
						imageAlt={TEXTS.form.options.scissors.altImg}
						{...props}
					>
						{TEXTS.form.options.scissors.text}
					</Option>
				</div>
				{props.playerOpt !== 'null' ? <RestartBtn setPlayerOpt={props.setPlayerOpt} /> : null}
			</form>
		</>
	)
}

export default Options
