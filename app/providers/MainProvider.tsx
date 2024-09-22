import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/screens/home/Layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider
