import React, { Component } from 'react';
import FlatList from './flat_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <FlatList />
      </div>
    );
  }
}

export default App;
