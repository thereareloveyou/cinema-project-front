import cn from 'classnames'
import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Menu from '../MenuContainer/Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC<SkeletonProps> = ({ className, ...rest }) => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<Skeleton
				{...rest}
				baseColor="#1F2125"
				highlightColor="#292a2e"
				width={170}
				height={30}
				containerClassName='flex flex-col gap-0'
				className={cn('rounded-lg', className)}
				count={5}
			/>
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }}></Menu>
	)
}

export default GenreMenu
