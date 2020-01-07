import { useState, useEffect } from "react";
import data from "../Data/station_data";
import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const StationGrid = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [stationData, setData] = useState([]);

  const columnDefinitions = [
    { headerName: "ID", field: "id", sortable:true, filter: true  },
    { headerName: "Station Name", field: "stationName", sortable:true, filter: true },
    { headerName: "Available Docks", field: "availableDocks" },
    { headerName: "Available Bikes", field: "availableBikes" },
  ];
  
  useEffect(() => {
    setIsLoading(true);
    //Real world scenario would be fetching data here, but due to cors on provided endpoint I'm using static data instead
    //For this reason I use a timeout to imitate network activity
    setTimeout(function() {
      setData(data.stationBeanList);
      setIsLoading(false);
    }, 2000);
  }, [props.System]);

  const rowHandler = (rowData) => {
    props.history.push("/station?id="+rowData.id);
  }

  let content = <Spinner animation="border" />

  if (!isLoading)
    content = (
      <div className="ag-theme-balham" style={{ height: "500px",cursor: "pointer" }}>
        <AgGridReact
          pagination={true}
          onRowClicked={ (row) => { rowHandler(row.data) } }
          rowStyle={{cursor: 'pointer'}}
          columnDefs={columnDefinitions}
          rowData={stationData}
        ></AgGridReact>
      </div>
    );

  return content;
};

export default StationGrid;
