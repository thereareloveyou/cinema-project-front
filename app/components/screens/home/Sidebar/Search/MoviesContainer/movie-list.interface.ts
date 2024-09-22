import { IMovie } from "@/shared/Types/movie.types"

export interface IMovieList {
    title: string
    link: string
    movies: IMovie[]
}