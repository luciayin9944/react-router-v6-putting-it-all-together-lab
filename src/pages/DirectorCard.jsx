import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
    // Replace me
    // const director = null

    {/* get value of directors from outlet context */}
    {/* destructure updatedDirector as well for DirectForm */}
    const { directors, updatedDirector} = useOutletContext()
    
    {/* get id of director from route params */}
    const { id } = useParams()

    {/* find director id and all directors */}
    const director = directors.find(b => b.id === id)


    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                <li key={movie.id}>
                    {/* <a>{movie.title}</a> */}
                    {/* update to Link component */}
                    <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                </li>
                ))}
            </ul>
            <Link to={`movies/new`}>Add New Movie</Link>
            {/* Movie compoenents should render here depending on route */}

            {/* <Outlet context={{ directors, updatedDirector }}/> */}
            <Outlet context={{ directors, updateDirector: useOutletContext().updateDirector }} />

        </div>
    )
}

export default DirectorCard
