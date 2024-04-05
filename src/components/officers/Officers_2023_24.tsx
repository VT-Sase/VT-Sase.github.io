import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Officer } from "../../shared/types";
import officerData from "./officers_data/officers_2023_24.json";

const Officers_2023_24: React.FC = () => {
  const year = officerData.year;
  const officers = officerData.officerInfo;

  return (
    <div id="officer-page">
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontSize: "100px",
          color: "white",
          textAlign: "left"
        }}
      >
        {year[0]} - {year[1]} Officers
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "black",
          display: "block",
          fontSize: "1.76em",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px"
          // fontWeight: "bold"
        }}
      >
        SASE at VT would not be possible without our wonderful officer board. Meet the team!
      </Typography>
      {officers.map((v) => (
        <>
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              fontSize: "100px",
              color: "white",
              textAlign: "left"
            }}
          >
            {v.subteam}
          </Typography>
          {v.cardInfo.map((officer: Officer, index) => (
            <Card key={index} variant="outlined" style={{ margin: "20px" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {officer.name}
                </Typography>
                <Typography color="text.secondary">{officer.role}</Typography>
                <Typography color="text.secondary">Academic Year: {officer.academicYear}</Typography>
                <Typography color="text.secondary">Major: {officer.major}</Typography>
                <Typography color="text.secondary">Email: {officer.email}</Typography>
              </CardContent>
            </Card>
          ))}
        </>
      ))}
      ;
      {/* <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontSize: "100px",
          color: "white",
          textAlign: "left"
        }}
      >{subteam[0]}</Typography>
      {leads.map((officer: Officer, index) => (
        <Card key={index} variant="outlined" style={{ margin: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {officer.name}
            </Typography>
            <Typography color="text.secondary">
              {officer.role}
            </Typography>
            <Typography color="text.secondary">
              Academic Year: {officer.academicYear}
            </Typography>
            <Typography color="text.secondary">
              Major: {officer.major}
            </Typography>
            <Typography color="text.secondary">
              Email: {officer.email}
            </Typography>
          </CardContent>
        </Card>
      ))} */}
    </div>
  );
};

export default Officers_2023_24;
