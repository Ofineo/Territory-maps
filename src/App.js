import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import AddressTable from './AddressTable';

class App extends Component {

  state = {
    markers: [
      {
        id: 1,
        address: 'Flat 21 Coniston Court, Langstone Way',
        postcode: 'NW7 1GP',
        notes: 'NC'
      },
      {
        id: 2,
        address: 'Watchtower House, The Ridgeway',
        postcode: 'NW7 1RS',
        notes: 'NC'
      }
    ]
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
      <article>
        <header>
          <h2>Welcome to Map It</h2>
        </header>
        <section>
          <Map
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            mapReference={(ref) => this.setMapCenter(ref)}
          />
        </section>
        <section>
          <AddressTable
            markers={this.state.markers}
          />
        </section>
      </article>
    );
  }
}

export default App;
