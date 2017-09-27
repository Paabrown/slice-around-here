import React from 'react';

class GMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id="map">
      this is where a map should be - but it is not rendering
      </div>
    )
  }

  componentDidMount () {
    var gMapsScript = document.createElement('script');

    gMapsScript.setAttribute('async','true');
    gMapsScript.setAttribute('defer','true');
    gMapsScript.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=' + this.props.apiKey + '&callback=initMap');

    document.body.appendChild(gMapsScript);
  }
}






export default GMap;