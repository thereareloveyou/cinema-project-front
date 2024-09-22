import type { Metadata } from 'next'

import './globals.scss'
import Home from 'page'

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
				<Home>
					{children}
				</Home>
			</body>
		</html>
	)
}
