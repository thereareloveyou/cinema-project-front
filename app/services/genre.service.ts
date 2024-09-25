import { axiosClassic } from 'api/interseptors'

import { IGenre } from '@/shared/Types/movie.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
					}
				: {},
			withCredentials: false,
		})
	},
}
