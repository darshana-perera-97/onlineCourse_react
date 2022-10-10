import React from "react";
import Grid from "@mui/material/Grid";
import SingleLink from "./SingleLink";

export default function TopBar() {
  return (
    <div
      style={{
        background: "#0013A5",
        display: "flex",
        justifyContent: "center",
        padding: "0px 7vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8} md={4}>
          <p
            style={{
              margin: "0px",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Online Course Store
          </p>
        </Grid>

        <SingleLink data="Home" />
        <SingleLink data="About Us" />
        <SingleLink data="Courses" />
        <SingleLink data="Teachers" />
        <SingleLink data="Contact Us" />
        <butoon
          style={{
            margin: "0px",
            padding: "10px 20px",
            color: "white",
            background: "#00C64F",
            fontWeight: "bold",
            paddingTop: "26px",
            fontSize:"20px"
          }}
        >
          Register
        </butoon>
      </Grid>
    </div>
  );
}
