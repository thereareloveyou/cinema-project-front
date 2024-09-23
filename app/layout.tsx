import type { Metadata } from 'next'
import MainProvider from 'providers/MainProvider'

import './assets/styles/globals.scss'

export const metadata: Metadata = {
	title: 'Cinema-project',
	description: 'Platform for watching movies online',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
