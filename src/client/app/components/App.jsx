import React from 'react';
import SliceList from './SliceList.jsx'
import GMap from './GMap.jsx'

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
        <GMap currentRestaurants={this.state.currentRestaurants} apiKey={this.props.apiKey}/>
        <SliceList currentRestaurants={this.state.currentRestaurants} />
      </div>
    );
  }
}

export default App;