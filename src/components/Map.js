/*====================== react-map-gl attempt =====================*/
<<<<<<< HEAD

import React, { useState } from 'react'
import ReactMapGl from "react-map-gl"
=======
/* video tutorial: https://www.youtube.com/watch?v=JJatzkPcmoI */

import React, { useState } from 'react'
import ReactMapGl, {Marker} from "react-map-gl"
>>>>>>> 5a80a25c7d281a32f31e1c88ccc176d5df82cddc

export default function MapContainer() {
    const [viewport, setViewport] = useState(
        {
            latitude: 42.361145,
            longitude: -71.057083,
<<<<<<< HEAD
            width: '100vw',
=======
            width: '89vw',
>>>>>>> 5a80a25c7d281a32f31e1c88ccc176d5df82cddc
            height: '100vh',
            zoom: 10
        }
    )

    return <div>
        <ReactMapGl
            {...viewport}
<<<<<<< HEAD
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}>
=======
            mapboxApiAccessToken="pk.eyJ1IjoiY2hlaXNlbnRyb3V0IiwiYSI6ImNrcDhmMTBxZjA2Mm4yb25yY2syZGUwYjkifQ.yI_yCIEk17ky3XHOdWQOgg"
            mapStyle="mapbox://styles/cheisentrout/ckp8h9dgj1zde18low6azf99y"
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            >
>>>>>>> 5a80a25c7d281a32f31e1c88ccc176d5df82cddc
            markers here
        </ReactMapGl>
    </div>
}



/*====================== react-google-maps attempt =====================*/

// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
// // import axios from 'axios'
//
// const mapStyles = {
//   width: '90%',
//   height: '60%'
// };
//
// export class MapContainer extends Component {
//     state = {
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {}
//     }
//
//     onMarkerClick = (props, marker, e) => {
//         this.setState(
//             {
//                 selectedPlace: props,
//                 activeMarker: marker,
//                 showingInfoWindow: true
//             }
//         )
//     }
//
//     onClose = (props) => {
//         if (this.state.showingInfoWindow) {
//             this.setState(
//                 {
//                     showingInfoWindow: false,
//                     activeMarker: null
//                 }
//             )
//         }
//     }
//
//     render() {
//         return (
//             <Map
//                 google={this.props.google}
//                 zoom={14}
//                 style={mapStyles}
//                 initialCenter={
//                     {
//                         lat: 42.3601,
//                         lng: -71.0589
//                     }
//                 }
//             >
//                 <Marker
//                     onClick={this.onMarkerClick}
//                     name={'Boston, MA'}
//                 />
//                 <InfoWindow
//                     marker={this.state.activeMarker}
//                     visible={this.state.showingInfoWindow}
//                     onClose={this.onClose}
//                 >
//                     <div>
//                         <h4>{this.state.selectedPlace.name}</h4>
//                     </div>
//                 </InfoWindow>
//             </Map>
//         )
//     }
// }
//
// export default GoogleApiWrapper({
//     apiKey: "AIzaSyBFvU905wVMfSfWkWW1_8xOGAe-SX-Ea3A"
// })(MapContainer);



/*====================== google maps embed API attempt =====================*/

// class Map extends React.Component {
//     state = {
//         zipcode: '',
//     }
//
//     handleChange = (event) => {
//         this.setState(
//             {
//                 [event.target.id]: event.target.value
//             }
//         )
//     }
//
//     setZip = (event) => {
//         event.preventDefault()
//         this.setState(
//             {
//                 [event.target.id]: event.target.value
//             }
//         )
//         console.log(this.state.zipcode)
//         this.renderMap()
//     }
//
//     renderMap = () => {
//         console.log("renderMap was triggered");
//         return (
//             <div className="map">
//                 <iframe width="560" height="315" title="Dog Park Map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBT9_mprou4lCaUHTuQNhvRCNM8hyim7LE
//                 &q={this.state.zipcode}"></iframe>
//             </div>
//         )
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Map Component</h1>
//                 <form onSubmit={this.setZip}>
//                     <input type="text" id="zipcode" onChange={this.handleChange} />
//                     <input type="submit" value="find parks" />
//                 </form>
//                 <div className="map">
//                     <iframe width="560" height="315" title="Dog Park Map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBT9_mprou4lCaUHTuQNhvRCNM8hyim7LE
//                     &q=48103"></iframe>
//                 </div>
//             </div>
//         )
//     }
// }
