import React from 'react';
import SliceList from './SliceList.jsx'
import MapContainer from './GMap.jsx'

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
        <MapContainer />
        <SliceList currentRestaurants={this.state.currentRestaurants} />
      </div>
    );
  }
}

export default App;