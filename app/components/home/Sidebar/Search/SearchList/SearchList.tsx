import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { IMovie } from '@/shared/Types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<Image
							src={movie.poster}
							width={50}
							height={50}
							alt={movie.title}
							style={{ objectFit: 'cover', objectPosition: 'top', maxHeight: '50px' }}
							draggable={false}
						></Image>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found</div>
			)}
		</div>
	)
}

export default SearchList
