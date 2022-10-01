import React from "react";
import HeroSection from "../../../common/heroSection/HeroSection";
import CommonCard from "./../../../common/card/CommonCard";

import leader1 from "../../../assets/images/client2.jpg";

import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="about-page">
      <HeroSection pageName="About" />
      <div className="company-leaders">
        <Grid container direction="column">
          <Grid item display="flex" justifyContent="center">
            <Typography
              variant="h3"
              fontWeight="bold"
              paddingTop="6.3rem"
              paddingBottom="1.5rem"
            >
              LEADERSHIP
            </Typography>
          </Grid>
          <Grid item display="flex" justifyContent="center">
            <Typography align="center" variant="body1" paddingBottom='3.5rem'>
              The company empowers our team members to impact the company
              mission, grow <br /> personally and professionally, and reach an
              optimal work-life balance. So, meet with our <br /> awesome
              members!
            </Typography>
          </Grid>
          <Grid item >
            <Grid container columnSpacing={2} rowSpacing={2} display = 'flex' justifyContent='center' paddingBottom='4rem'>
              <Grid item >
                <CommonCard contributorPhoto={leader1} contributorName='John' alignName='center' contributorPosition='Founder and CEO' cardBgColor='#f0f8ff'/>
              </Grid>
              <Grid item >
                <CommonCard contributorPhoto={leader1} contributorName='John' alignName='center' contributorPosition='Founder and CEO' cardBgColor='#f0f8ff'/>
              </Grid>
              <Grid item >
                <CommonCard contributorPhoto={leader1} contributorName='John' alignName='center' contributorPosition='Founder and CEO' cardBgColor='#f0f8ff'/>
              </Grid>
              <Grid item >
                <CommonCard contributorPhoto={leader1} contributorName='John' alignName='center' contributorPosition='Founder and CEO' cardBgColor='#f0f8ff'/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
