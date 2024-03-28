import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Officer } from '../../shared/types';
import officerDataArr from "./officers_data/officers_2023_24.json"


const Officers_2023_24: React.FC = () => {
  return (
    <div>
      {officerDataArr.map((officer:Officer, index) => (
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
      ))}
    </div>
  );
};

export default Officers_2023_24;
