
// import useOutletContext and useParams
import { useOutletContext, useParams } from "react-router-dom"

function MovieCard() {
  // Replace director and movie
  // const director = null
  // const movie = null

  // destructure directors from outlet context
  const { directors } = useOutletContext()
    // get id and movieId from params
  const { id, movieId } = useParams()

  {/* find director id and all directors */}
  const director = directors.find(b => b.id === id)

  if (!director) return <h2>Director not found.</h2>

  // find movie from bookId and director
  const movie = director.movies.find(b => b.id === movieId)
  
  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
