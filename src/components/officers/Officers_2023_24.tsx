import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid, Box } from "@mui/material";
import { Officer } from "../../shared/types";
import officerData from "./officers_data/officers_2023_24.json";
import "./Officers_2023_24.css";

const Officers_2023_24: React.FC = () => {
  const year = officerData.year;
  const officers = officerData.officerInfo;

  return (
    <div id="officer-page">
      <Box sx={{ backgroundColor: "white", width: "100%" }}>
        <CardMedia sx={{ height: "100vh" }} image={officerData.fullBoardURL} title="full-board" />
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontSize: "100px",
            color: "white",
            textAlign: "left",
            position: "absolute",
            top: "80vh",
            left: "5vw"
          }}
        >
          {year[0]} - {year[1]} Officers
        </Typography>
      </Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#283238",
          fontSize: "1.76em",
          width: "100vw",
          paddingTop: "50px",
          paddingBottom: "50px",
          fontWeight: "600"
        }}
      >
        SASE at VT would not be possible without our wonderful officer board. Meet the team!
      </Typography>
      {officers.map((v) => (
        <>
          <Box sx={{ backgroundColor: "white", width: "100vw", height: "60vh" }}>
            <CardMedia sx={{ height: "60vh" }} image={v.subteamURL} title="full-board" />
            <Typography
              variant="h1"
              sx={{
                textTransform: "uppercase",
                fontSize: "100px",
                color: "white",
                textAlign: "left",
                position: "relative",
                top: "-20vh",
                left: "5vw"
              }}
            >
              {v.subteam}
            </Typography>
          </Box>
          <Grid
            container
            spacing={0.5}
            columns={16}
            sx={{ paddingBottom: "50px" }}
            alignItems="center"
            justifyContent="center"
          >
            {v.cardInfo.map((officer: Officer, index) => (
              <Grid item xs={6}>
                <Card
                  key={index}
                  variant="outlined"
                  sx={{ margin: "20px", width: "600px", backgroundColor: "#283238", borderRadius: "15px" }}
                >
                  <CardMedia sx={{ height: "600px" }} image={officer.imageUrl} title={officer.name} />
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: "white" }}>
                      {officer.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ color: "grey", fontStyle: "italic", fontSize: "1.17em" }}>
                      {officer.role}
                    </Typography>
                    {officer.academicYear && officer.major && (
                      <Typography color="text.secondary" sx={{ color: "grey" }}>
                        {officer.academicYear}, {officer.major}
                      </Typography>
                    )}
                    {officer.minor && (
                      <Typography color="text.secondary" sx={{ color: "grey" }}>
                        Minor in {officer.minor}
                      </Typography>
                    )}
                    <Typography color="text.secondary" sx={{ color: "grey" }}>
                      {officer.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ))}
    </div>
  );
};

export default Officers_2023_24;
