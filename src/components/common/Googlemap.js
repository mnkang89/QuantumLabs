import _ from "lodash";
import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 37.566957, lng: 126.938326 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class Googlemap extends Component {
  state = {
    markers: [{
      position: {
        lat: 37.566957,
        lng: 126.938326,
      },
      key: `Yonsei Univ.`,
      defaultAnimation: 2,
    }],
  };

  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  render() {
    return (
      <div style={{height: `60%`}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}
