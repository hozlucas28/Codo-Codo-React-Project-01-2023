import React from 'react'

import './Footer.css'

import { LINKS } from '../constants/LINKS.js'
import { TEXTS } from '../constants/TEXTS.js'

const Link = ({ children, ...props }) => {
	return (
		<a
			className="link"
			target="_blank"
			{...props}
		>
			{children}
		</a>
	)
}

const Footer = () => {
	return (
		<footer id="footer">
			<p>{TEXTS.footer.copyright}</p>
			<Link href={LINKS.repository}>{TEXTS.footer.sourceCode}</Link>
		</footer>
	)
}

export default Footer
