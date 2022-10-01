import { Grid, Typography } from "@mui/material";
import React from "react";
import ClientReviewCard from "../../../common/card/ClientReviewCard";

import client1 from "../../../assets/images/client1.jpg";
import client2 from "../../../assets/images/client2.jpg";

export default function Clients() {
  return (
    <div className="clientInfo-container">
      <div className="second-card-container">
        <div className="clientInfo-card">
          <div className="clientInfo-title">
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              paddingBottom="23px"
            >
              Our Happy Client
            </Typography>
          </div>
          <div className="clientInfo-subtitle">
            <Typography variant="body1" align="center" paddingBottom="35px">
              We always care for our clients, lets see what's their opinion
              about us.
            </Typography>
          </div>
          <div className="clientSlider-cards">
            <div className="card-section">
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className="first-card">
                    <ClientReviewCard
                      cardContentData="EcoNex goes above and beyond with its customer service and
              support. They are constantly updating their software to keep up
              with technology and products. I highly recommend this company
              because the company has been around a long time and stands by
              their product. As a social activist, this company is up to our
              high standards, and yet it is also good for individuals looking to
              build their future and become an entrepreneur"
                      clientPhoto={client1}
                      clientName="JOHN"
                      clientPosition="Social Worker"
                    />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <div className="second-card">
                    <ClientReviewCard
                      cardContentData="EcoNex goes above and beyond with its customer service and
              support. They are constantly updating their software to keep up
              with technology and products. I highly recommend this company
              because the company has been around a long time and stands by
              their product. As a social activist, this company is up to our
              high standards, and yet it is also good for individuals looking to
              build their future and become an entrepreneur"
                      clientPhoto={client2}
                      clientName="HARRY"
                      clientPosition="Crown Ambassador"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
