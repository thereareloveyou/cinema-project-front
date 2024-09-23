import React, { FC } from 'react'

import styles from './Sidebar.module.scss'
import Search from './Search/Search'
import MoviesContainer from './Search/MoviesContainer/MoviesContainer'

const Sidebar: FC = () => {
	return <div className={styles.sidebar}>
       <Search></Search>
       <MoviesContainer/>
    </div>
}

export default Sidebar
