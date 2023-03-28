import React from 'react'

import styles from './Footer.module.css'

import { LINKS } from '../constants/LINKS.js'
import { TEXTS } from '../constants/TEXTS.js'

const Link = ({ children, ...props }) => {
	return (
		<a
			target="_blank"
			{...props}
		>
			{children}
		</a>
	)
}

const Footer = () => {
	return (
		<footer className={styles.container}>
			<p>{TEXTS.footer.copyright}</p>
			<Link
				className={styles.link}
				href={LINKS.repository}
			>
				{TEXTS.footer.sourceCode}
			</Link>
		</footer>
	)
}

export default Footer
