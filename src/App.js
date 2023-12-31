import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { DataContext } from './context/DataContext'

function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                document.title = `${search} Music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found')
                }
            }
            fetchData()
        }
    }, [search])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        console.log('Term we r search!!', term)
        setSearch(term)
    }
    console.log('Data state in app.js', data)
    return (
        <div>
        {message}
        <DataContext.Provider value={data}>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </React.Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
            </DataContext.Provider>
        </div>
    )
    }

    export default App;





// import { useState,useRef } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Gallery from './components/Gallery'
// import SearchBar from './components/SearchBar'
// import { DataContext } from './context/DataContext'
// import { SearchContext } from './context/SearchContext'
// import { AlbumView } from './components/AlbumView'
// import { ArtistView } from './components/ArtistView'

  
// const App = () => {
//   let [search, setSearch] = useState('')
//   let [message, setMessage] = useState('Search for Music!')
//   let searchInput = useRef('')
//   let [data, setData] = useState([])

//   const API_URL = 'https://itunes.apple.com/search?term='

//   useEffect(() => {
//       if(search) {
//           const fetchData = async () => {
//               document.title = `${search} music`
//               const response = await fetch(API_URL + search)
//               const resData = await response.json()
//               if (resData.results.length > 0) {
//                   return setData(resData.results)
//               } else {
//                   return setMessage('Not Found.')
//               }
//           }
//           fetchData()
//       }
//   }, [search])

//   const handleSearch = (e, term) => {
//     e.preventDefault()
//     const fetchData = async () => {
//         document.title = `${term} Music`
//         const response = await fetch(API_URL + term)
//         const resData = await response.json()
//         if (resData.results.length > 0) {
//             return setData(resData.results)
//         } else {
//             return setMessage('Not Found.')
//         }
//     }
//     fetchData()
// }

//   return (
//     <div className="App">
//         <SearchContext.Provider value={{
//             term: searchInput,
//             handleSearch: handleSearch
//         }}>
//             <SearchBar />
//         </SearchContext.Provider>
//         {message}
//         <DataContext.Provider value={data}>
//             <Gallery />
//         </DataContext.Provider>
//     </div>
// )
// }

// export default App




