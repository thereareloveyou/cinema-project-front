'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMenuItem } from './Menu.interface'
import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const path = usePathname()

	return (
		<li className={cn({ [styles.active]: path == item.link })}>
				<Link href={item.link}>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</Link>
		</li>
	)
}

export default MenuItem
