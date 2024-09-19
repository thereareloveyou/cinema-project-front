"use client"

import MainProvider from 'providers/MainProvider'

import { FC } from 'react'

import Layout from './components/screens/home/Layout/Layout'

const Home: FC = () => {
	return (
		<MainProvider>
			<Layout />
		</MainProvider>
	)
}
export default Home
