import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IActor {
	_id: string
	name: string
	surname: string
	role: string
	DateOfBirth: string
	country: string
	slug: string
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	slug: string
	description: string
	rating: number
	countOpened: number
	videoUrl: string
	genres: IGenre[]
	actors: IActor[]
	parameters: IParameters[]
}
