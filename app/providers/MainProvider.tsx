'use client'

import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'


import { store } from '@/store/store'

import ReduxToast from './ReduxToast'
import Layout from '@/components/home/Layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToast></ReduxToast>
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}
export default MainProvider
