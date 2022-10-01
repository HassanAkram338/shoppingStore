import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function ClientReviewCard(props) {
  const { cardContentData, clientPhoto, clientName, clientPosition } = props;

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#efefef",
          outline: 0,
          
        }}
        elevation={0}
      >
        <CardContent>
          <Typography sx={{ color : '#555555',paddingLeft : '15px',paddingRight : '15px' }} variant='body2' align="justify">{cardContentData}</Typography>
        </CardContent>
      </Card>
      <div
        className="client-logo"
        style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
      >
        <div className="clients-logo">
          <img
            src={clientPhoto}
            width="60px"
            height="60px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="clients-name" style={{ marginLeft: "15px" }}>
          <Typography variant="h6">
            {clientName}
            <Typography variant="subtitle1" marginTop={0}>
              {clientPosition}
            </Typography>
          </Typography>
        </div>
      </div>
    </>
  );
}
