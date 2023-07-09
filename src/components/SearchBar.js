import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term)}>Submit</button>
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





