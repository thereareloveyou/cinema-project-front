import React, {SyntheticEvent } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton = () => {
	const { logout } = useActions()

	const handleLogout = (event: SyntheticEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
        <span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
