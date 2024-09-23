import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/Types/movie.types'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					src={movie.poster}
					alt={movie.title}
					draggable={false}
					priority
				></Image>
			</Link>

			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
              {genre.name}
            </Link>
					))}
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdOutlineStar" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
