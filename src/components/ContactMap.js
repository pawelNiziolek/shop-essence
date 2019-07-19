import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import styled from "styled-components";

const mapStyles = {
  top: "-50%",
  height: "100%",
  width: "60%"
};

class ContactMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 45.554, lng: -123.176 }}
      >
        <Marker position={{ lat: 45.554, lng: -123.176 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC79rlyFXO_AvoZKU5bSvZb9HW6blpRNag"
})(ContactMap);
