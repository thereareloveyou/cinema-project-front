import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const PopularMovies: FC<SkeletonProps> = ({...rest }) => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies is sidebar',
		() => MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-11">
			<Skeleton {...rest} baseColor="#1F2125"
				highlightColor="#292a2e" count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular movies"
		></MovieList>
	)
}

export default PopularMovies
