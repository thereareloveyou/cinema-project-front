import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10 block flex justify-center">
				<Image
					src={logoImage}
					alt="LogoImage"
					width={200}
					height={200}
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
