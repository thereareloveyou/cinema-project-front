import React, { FC } from 'react'

import Navigation from '../Navigation/Navigation'
import Sidebar from '../Sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}></div>
			<Sidebar />
		</div>
	)
}

export default Layout
