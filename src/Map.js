import React from "react";
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{
            lat: 51.5502042,
            lng: -0.163138
        }}
    >
    </GoogleMap>
)

export default Map;

