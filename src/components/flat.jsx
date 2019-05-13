import React, { Component } from 'react';


class Flat extends Component {

  flatSelected = () => {
    this.props.flatSelection(this.props.flat);
  }


  render() {
    return (
      <div className="card" onClick={this.flatSelected} style ={ { backgroundImage: `url(${this.props.flat.imageUrl})` } }>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">{this.props.flat.name}</div>
      </div>
    );
  }
}

export default Flat;
