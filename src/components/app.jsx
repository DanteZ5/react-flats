import React, { Component } from 'react';
import Marker from './marker.jsx';
import FlatList from './flat_list.jsx';
import GoogleMapReact from 'google-map-react';
import flats from '../data/flats.js'

class App extends Component {
  static defaultProps = {
    center: {
      lat: 48.85,
      lng: 2.34
    },
    zoom: 13
  };

  constructor(props) {
    super(props);
     this.state = {
      selectedFlat: flats[0]
    };
  }

  flatSelection = (flat) => {
    this.setState({selectedFlat: flat});
  }

  renderMarker = () => {
    return <Marker
      lat={this.state.selectedFlat.lat}
      lng={this.state.selectedFlat.lng}
      text={this.state.selectedFlat.name}
    />
  }


  render() {
    return (
      <div>
        <FlatList flatSelection={this.flatSelection}/>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCWKcyzmwZLNQXRB_B9H4V5pobgnhaVWWg" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.renderMarker()}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
