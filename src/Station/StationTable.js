import { useState } from "react";
import StationGrid from "./StationGrid";
import BaseLayout from "../Layout/BaseLayout";
import React from "react";
import { Form } from "react-bootstrap";

const StationTable = props => {
  const [selectedSystem, setSystem] = useState("nyc");

  let content = (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Label>System: </Form.Label>
          <Form.Control as="select" size='sm' value={selectedSystem} onChange={(e) => { setSystem(e.target.value) }}>
            <option value="nyc">NYC Citi Bike</option>
            <option value="cle">Cleveland Bikes</option>
            <option value="london">London Bikes</option>
          </Form.Control>
        </Form.Group>
      </Form>
      
      <StationGrid System={selectedSystem} history={props.history} />
    </React.Fragment>
  );

  return content;
};

export default BaseLayout(StationTable)
