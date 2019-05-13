import React, { Component } from 'react';
import Flat from './flat.jsx'
import flats from '../data/flats.js'

class FlatList extends Component {

  renderList = () => {
    return flats.map(flat => {
      return <Flat key={flat.name} flat={flat} flatSelection={this.props.flatSelection}/>
    })
  }



  render() {
    // renvoie une liste de flats
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
