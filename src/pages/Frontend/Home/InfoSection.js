import React from "react";
import "./HomeStyle.css";

import sideImage from "../../../assets/images/bg.jpg";
import { Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function InfoSection() {
  const { colors } = useSelector((state) => {
    return state;
  });

  return (
    <div className="info-container">
      <div className="first-card-container">
        <div className="card">
          <Grid container columnSpacing={8}>
            <Grid item xs={12} sm={12} md={12} lg={5}>
              <img src={sideImage} width="100%" height="100%" className="side-image" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Typography variant="h3" fontWeight="600">
                About Us
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2} padding = '1.5rem 0rem'>
                <Typography variant="h6" fontWeight="500">
                  Modified:
                </Typography>
                <Typography variant="body1">
                  Econex – The Economy of Next-generation
                </Typography>
              </Stack>
              <Typography variant="h6" align="center" fontWeight="600" paddingBottom='1.7rem'>
                About the US
              </Typography>
              <Typography variant="body1" align="justify">
                About Us Modified: Econex – The Economy of Next-generation About
                the US Econex is meant to help people everywhere enjoy
                beautiful, work-life balanced, healthy, and fulfilling life
                through our exceptional and organic products along with quality
                services and marketing plan. It’s a pack of fun and rewarding
                business opportunity, and a culture of family, gratitude, and
                quality services. Econex has brought the latest business model
                to Pakistan. We’re looking forward to promoting the concept of
                E-commerce and dropshipping in Pakistan. We will facilitate all
                those people who can spare their time and spend it with this
                project to work part-time and wanted to stable their financial
                position and the existing business holders who are looking
                forward to expanding their business. Because we believe that
                increasing rate of unemployment can only be overwhelmed with the
                good business opportunities just like EcoNex – The Economy of
                Next-generation.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
