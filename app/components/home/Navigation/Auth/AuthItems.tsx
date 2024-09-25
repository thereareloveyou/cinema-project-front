import React from 'react'

import { useAuth } from '@/hooks/useAuth'

import MenuItem from '../MenuContainer/MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}
		</>
	)
}

export default AuthItems
