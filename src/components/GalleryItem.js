import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props){
    let [view, setView] = useState(false)

    console.log('THESE r my mprops coming into the gallery item', props)
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>{props.item.trackCensoredName}</p>
            <img src={props.item.artworkUrl100} alt={'test'}></img>
        </div>
    )
}

const detailView = (props) => {
    return (
        <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <Link to={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </Link>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    )
}

export default GalleryItem




// import { useState } from 'react'

// function GalleryItem(props) {
//     let [view, setView] = useState(false)

//     const simpleView = () => {
//         return (
//             <div>
//                 <h3>{props.item.trackName}</h3>
//                 <h4>{props.item.collectionName}</h4>
//             </div>
//         )
//     }

//     const detailView = () => {
//         return (
//             <div>
//                 <h2>{props.item.trackName}</h2>
//                 <h3>{props.item.collectionName}</h3>
//                 <h4>{props.item.primaryGenreName}</h4>
//                 <h4>{props.item.releaseDate}</h4>
//             </div>
//         )
//     }

//     return (
//         <div onClick={() => setView(!view)}
//         style={{'display': 'inline-block'}}>
        
//             {/* This simple ternary shows the simple view when 'view' is false! */}
//             {view ? detailView() : simpleView()}

//         </div>
//     )

// }
// export default GalleryItem
