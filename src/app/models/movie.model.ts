export interface Movie {
  Title: string;
  Released: string;
  Actors: string;
  Country: string;
  Poster: string;
}
export interface MovieDetails {
  Title: string;
  Genre: string;
  Director: string;
  Writer: string;
  Runtime: string;
  Actors: string;
  imdbRating: string;
  Plot: string;
  Poster:string
  Country: string;
  Released:string
}
export interface JsonMovie {
  id:string
  rate: string;
  review: string;
  movie: MovieDetails;
}
