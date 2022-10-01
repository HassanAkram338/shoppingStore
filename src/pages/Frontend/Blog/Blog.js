import React from "react";
import { Grid } from "@mui/material";
import HeroSection from "./../../../common/heroSection/HeroSection";

import "./BlogStyle.css";
import CommonCard from "./../../../common/card/CommonCard";

/// Photos
import contributor1 from "../../../assets/images/client1.jpg";
import contributor2 from "../../../assets/images/client2.jpg";

/// Icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
export default function Blog() {
  return (
    <div className="blog-section">
      <HeroSection pageName="Blog" />
      <div className="blog-data-card">
        <div className="cards-sections">
          <Grid container columnSpacing={3} rowSpacing={2} display = 'flex' justifyContent='center'>
            <Grid item xs={10} sm={5} md={4} lg={3}>
              <CommonCard
                contributorPhoto={contributor1}
                contributorName="Ibrahim Khilji..."
                dateIcon={<CalendarTodayIcon fontSize="sm" />}
                date="30 Nov,2020"
                contributorInfo="Ibrahim Khilji 10 Nov, 2021 Ibrahim Khilji Founder and CEO A
   first-generation direct-sales entrepreneur, Ibrahim Khilji is
   passionate about inspiring new generations of entrepreneurs. Sha..."
              />
            </Grid>
            <Grid item xs={10} sm={5} md={4} lg={3}>
              <CommonCard
                contributorPhoto={contributor2}
                contributorName="Ibrahim Khilji..."
                dateIcon={<CalendarTodayIcon fontSize="sm" />}
                date="30 Nov,2020"
                contributorInfo="Ibrahim Khilji 10 Nov, 2021 Ibrahim Khilji Founder and CEO A
   first-generation direct-sales entrepreneur, Ibrahim Khilji is
   passionate about inspiring new generations of entrepreneurs. Sha..."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
