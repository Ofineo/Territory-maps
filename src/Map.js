import React from "react";
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { compose } from 'recompose';

const Map = compose(
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{
            lat: 61.5502042,
            lng: -0.163138
        }}
        ref={props.mapReference}
    >
    </GoogleMap>
)

export default Map;

