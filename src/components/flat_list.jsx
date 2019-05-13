import React, { Component } from 'react';
import Flat from './flat.jsx'

class FlatList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // renvoie une liste de flats
    return (
      <div className="flat-list">
        <Flat />
      </div>
    );
  }
}

export default FlatList;
