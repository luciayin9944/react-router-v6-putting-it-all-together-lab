import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
    // Replace me
    //const directors = null
    // const directors = []

    {/* use useOutletContext and destructure directors value */}
    const { directors } = useOutletContext()
    
    const displayDirectors = directors.map(d => (
        <li key={d.id}><Link to={d.id}>{d.name}</Link></li>
        //<li key={d.id}><Link to={`/directors/${d.id}`}>{d.name}</Link></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
