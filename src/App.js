import React, { Component } from 'react';
import './App.css';
import Map from './Map';

class App extends Component {

  state = {
  }

  setMapCenter = (ref) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        console.log(ref);
        ref.panTo(center);
      });
    } else {
      // Browser doesn't support Geolocation
    }
  }

  render() {
    return (
      <div>Welcome to Map It
        <Map
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          mapReference={(ref) => this.setMapCenter(ref)}
        />
      </div>
    );
  }
}

export default App;
