import { Grid, Typography } from "@mui/material";
import React from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import CommonCard from "../../../common/card/CommonCard";

/// Contributor Photos
import contributor1 from "../../../assets/images/client1.jpg";
import contributor2 from "../../../assets/images/client2.jpg";

export default function LatestNews() {
  return (
    <div className="latest-news-container" style={{paddingBottom : '60px'}}>
      <div className="third-card-container">
        <div className="card">
          <Grid container direction="column">
            <Grid item lg={12}>
              <Typography variant="h4" fontWeight="bold" align="center">
                Latest News
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography
                variant="subtitle1"
                align="center"
                paddingTop="20px"
                paddingBottom="50px"
              >
                Welcome! Please check our latest news and article here...
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" columnSpacing={3} rowSpacing={2} >
                <Grid item xs={12} sm={12} md={5} lg={4}>
                  <CommonCard
                    contributorPhoto={contributor1}
                    contributorName="Ibrahim Khilji..."
                    dateIcon={<CalendarTodayIcon fontSize="sm"/>}
                    date='30 Nov,2020'
                    contributorInfo="Ibrahim Khilji 10 Nov, 2021 Ibrahim Khilji Founder and CEO A
          first-generation direct-sales entrepreneur, Ibrahim Khilji is
          passionate about inspiring new generations of entrepreneurs. Sha..."
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4}>
                  <CommonCard
                    contributorPhoto={contributor2}
                    contributorName="Melalecua CEO F..."
                    dateIcon={<CalendarTodayIcon fontSize="sm"/>}
                    date='10 Nov,2021'
                    photoHeight='240'
                    contributorInfo="In an interview with East Idaho News today, Melalecua CEO Frank Vandersloot promised to resign his executive position with the company if his world record rowin..."
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
