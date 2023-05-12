import React, { useState, useEffect } from "react";
import TablePart from "../../components/TablePart";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography, Grid, useMediaQuery } from "@mui/material";
import useGet from "../../hooks/useGet";
import Loading from "../Loading";
import { useProSidebar } from "react-pro-sidebar";

<<<<<<< HEAD
const ManuPart = () => {
  //get dataID
  const id = useLocation().state.id;

  //navigate ot catalog if no id
  const navigate = useNavigate();
  if (!id) navigate("../catalog", { replace: true });

  const [data, setData] = useState([]);

  //setup useGet hook
  const { isLoading, error, sendRequest } = useGet(
    `${process.env.REACT_APP_BACKEND}/api/v1/data/${id}`
  );
  const mobile = useMediaQuery("(max-width:600px)");

  //useEffect for making the fetch call to the backend
  useEffect(() => {
    const handleGet = (newdata) => {
      setData((i) => newdata);
    };

    sendRequest(handleGet);
  }, [sendRequest]);

  //close sidebar on loading this page
  const { collapseSidebar } = useProSidebar();
  useEffect(() => {
    collapseSidebar();
  }, [collapseSidebar]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h5" color="error">
          Failed to load.
        </Typography>
      </div>
    );
  }
=======
function createData(name, value) {
  return { name, value };
}

const basicDetails = [
  'Part Name',	
  'Material Composition',
  'Age (years)',
  'Condition',	
  'Location'	,
  'Manufacturer',	
  'Aircraft Model',	
  'Potential Use Cases'
]
const newPartDetail = [
  'New Parts Carbon Footprint (kg CO2e)',
  'Water Usage - New Parts (liters)'	,
  'Landfill Waste - New Parts (kg)'	,
  'Energy Consumption - New Parts (kWh)'	,
  'Toxicity Score - New Parts'	,
]
const recycPartDetail = [
  'Recycled Parts Carbon Footprint (kg CO2e)'	,
  'Water Usage - Recycled Parts (liters)'	,
  'Landfill Waste - Recycled Parts (kg)'	,
  'Energy Consumption - Recycled Parts (kWh)'	,
  'Toxicity Score - Recycled Parts'	,

]
const BenfitTable = [
  'Recycling Rate (%)'	,
  'Remanufacturing Potential'	,
  'Life Cycle Assessment'	,
  'Renewable Material Content (%)'	,
  'Carbon Footprint Saved (kg CO2e)'	,
  'Water Usage Saved (liters)'	,
  'Landfill Waste Saved (kg)'	,
  'Energy Consumption Saved (kWh)'	,
  'Toxicity Score Difference',
  'Remanufacturing Potential (%)'	,
  'Life Cycle Assessment Score'
]

// const rows = columns.map(x=>createData(x,0))

>>>>>>> 4d8898fd77f00d4d167a4bb24c78f4f90d3aa82f

  return (
    <div style={{ padding: "50px" }}>
      <Typography
        style={{ backgroundColor: "turquoise" }}
        variant="string"
        gutterBottom
      >
        India
      </Typography>
      <Typography variant="h1">Engine</Typography>
      <hr
        style={{ borderTop: "1px solid #adacac", margin: "30px 0px 30px 0px" }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: ".40fr 1fr",
          paddingBottom: "30px",
        }}
      >
        <Skeleton
          variant="rectangular"
          style={{ width: "300px", height: "300px" }}
        >
          <Avatar style={{ width: "300px", height: "300px" }} />
        </Skeleton>

        <div>
          <Grid container style={{ padding: "35px" }}>
            <Grid item md={12} style={{ padding: "15px" }}>
              <div>
                <Typography
                  style={{ color: "#adacac" }}
                  variant="p"
                  gutterBottom
                >
                  Manufacturer
                </Typography>
                <br />
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="p"
                  gutterBottom
                >
                  Boeing
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} style={{ padding: "15px" }}>
              <div>
                <Typography
                  style={{ color: "#adacac" }}
                  variant="p"
                  gutterBottom
                >
                  Aircraft Model
                </Typography>
                <br />
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="p"
                  gutterBottom
                >
                  Citation X
                </Typography>
              </div>
            </Grid>
            <Grid item md={12} style={{ padding: "15px" }}>
              <div>
                <Typography
                  style={{ color: "#adacac" }}
                  variant="p"
                  gutterBottom
                >
                  Material Composition
                </Typography>
                <br />
                <Typography
                  style={{ fontWeight: "bold" }}
                  variant="p"
                  gutterBottom
                >
                  Aluminium
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
<<<<<<< HEAD
      {data && <TablePart rows={data} />}
=======
      <TablePart rows={
        basicDetails.map(x=>createData(x,0))
      } title="Basic Details"/>
      <TablePart rows={
        BenfitTable.map(x=>createData(x,0))
      } title="Overall Benifit"/>
      <TablePart rows={
        newPartDetail.map(x=>createData(x,0))
      } title="New Part Data"/>
      <TablePart rows={
        recycPartDetail.map(x=>createData(x,0))
      } title="Recycle Part Data"/>
>>>>>>> 4d8898fd77f00d4d167a4bb24c78f4f90d3aa82f
    </div>
  );
};

export default ManuPart;
