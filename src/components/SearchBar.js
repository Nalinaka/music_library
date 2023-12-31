import { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar(props) {
    // const {term, handleSearch} = useContext(SearchContext)
    const [termState, setTermState] = useState()

    return (
        <form>
            <input onChange={(e)=> setTermState(e.target.value)} type="text" placeholder="Search Here" />
            <button onClick={(e) => props.handleSearch(e, termState)}>Submit</button>
        </form>
    )
}

export default SearchBar



// function SearchBar(props){
//     // We can comment out our searchTerm state variable as we are not using it!
//     // let [searchTerm, setSearchTerm] = useState('')

//     return (
//             <form>
//                 <input type="text" placeholder="Search Here"
//                     onChange={
//                         (e) => props.handleSearch(e, e.target.value)
//                     } />
//                 <input type="submit" />
//             </form>
//     )
// }





