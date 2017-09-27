import React from 'react';
import SliceList from './SliceList.jsx'
import Map from './Map.jsx';
import Container from './MapContainer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRestaurants: props.exampleData
    }
  }

  render () {

    return (
      <div>
        <p> Find a Slice Around Here! </p>
        <Container />
        <SliceList currentRestaurants={this.state.currentRestaurants} />
      </div>
    );
  }
}

export default App;