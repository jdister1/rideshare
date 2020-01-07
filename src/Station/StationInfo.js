import { useState, useEffect } from "react";
import BaseLayout from "../Layout/BaseLayout";
import data from "../Data/station_data";
import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'


const StationInfo = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [station, setStation] = useState({});

  useEffect(() => {
    let params = new URLSearchParams(window.location.search)
    setIsLoading(true);
    //Real world scenario would be fetching data here, but due to cors on provided endpoint I'm using static data instead
    //For this reason I use a timeout to imitate network activity
    setTimeout(function() {
      setStation(data.stationBeanList.find(s=>s.id === parseInt(params.get("id")) ));
      setIsLoading(false);  
    }, 2000);

  }, []);

  let content = <Spinner animation="border" />

  if (!isLoading)
    content = (
      <React.Fragment>
        <ListGroup>
          <ListGroup.Item><b>ID:</b> {station.id}</ListGroup.Item>
          <ListGroup.Item><b>Station Name:</b> {station.stationName}</ListGroup.Item>
          <ListGroup.Item><b>Available Docks:</b> {station.availableDocks}</ListGroup.Item>
          <ListGroup.Item><b>Total Docks:</b> {station.totalDocks}</ListGroup.Item>
          <ListGroup.Item><b>Latitude:</b> {station.latitude}</ListGroup.Item>
          <ListGroup.Item><b>Longitude:</b> {station.longitude}</ListGroup.Item>
          <ListGroup.Item><b>Status Value:</b> {station.statusValue}</ListGroup.Item>
          <ListGroup.Item><b>Station Key:</b> {station.statusKey}</ListGroup.Item>
          <ListGroup.Item><b>Available Bikes:</b> {station.availableBikes}</ListGroup.Item>
          <ListGroup.Item><b>Street Address 1:</b> {station.stAddress1}</ListGroup.Item>
          <ListGroup.Item><b>Street Address 2:</b> {station.stAddress2}</ListGroup.Item>
          <ListGroup.Item><b>City:</b> {station.city}</ListGroup.Item>
          <ListGroup.Item><b>Postal Code:</b> {station.postalCode}</ListGroup.Item>
          <ListGroup.Item><b>Location:</b> {station.location}</ListGroup.Item>
          <ListGroup.Item><b>Altitude:</b> {station.altitude}</ListGroup.Item>
          <ListGroup.Item><b>Test Station:</b> {station.testStation}</ListGroup.Item>
          <ListGroup.Item><b>Last Communication Time:</b> {station.lastCommunicationTime}</ListGroup.Item>
          <ListGroup.Item><b>Landmark:</b> {station.landMark}</ListGroup.Item>

        </ListGroup>
      </React.Fragment>
    );

  return content;
};

export default BaseLayout(StationInfo)
