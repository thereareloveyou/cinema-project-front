'use client'

import { NextPage } from 'next'
import MainProvider from 'providers/MainProvider'
import { PropsWithChildren } from 'react'

const Home: NextPage<PropsWithChildren> = ({ children }) => {
	return <MainProvider>{children}</MainProvider>
}
export default Home
