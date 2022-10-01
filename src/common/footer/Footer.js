import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "./FooterStyle.css";
import companyLogo from "../../assets/images/logo2.png";
import { useSelector } from "react-redux";

//// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  const { colors } = useSelector((state) => {
    return state;
  });

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors.mainColor,
        color: colors.textColor,
      }}
    >
      <Grid container justifyContent="center" maxWidth="md">
        <Grid item>
          <div className="logo">
            <img src={companyLogo} width="200px" />
          </div>
        </Grid>
        <Grid item>
          <div className="company-decription">
            <Typography variant="subtitle1" align="center">
              We are a worldwide trusted company . This secured website with a
              user-friendly interface and support of various languages is a
              breeze to use. Additionally, this site has both desktop and
              mobile. This secured website with a user-friendly interface and
              support of various languages is a breeze to use. Additionally,
              this site has both desktop and mobile.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className="icons-group">
            <div className="facebook-icon">
              <div className="icon-box-wrapper">
                <FacebookIcon />
              </div>
            </div>
            <div className="twitter-icon">
              <div className="icon-box-wrapper">
                <TwitterIcon />
              </div>
            </div>
            <div className="youtube-icon">
              <div className="icon-box-wrapper">
                <YouTubeIcon />
              </div>
            </div>
            <div className="instagram-icon">
              <div className="icon-box-wrapper">
                <InstagramIcon />
              </div>
            </div>
            <div className="telegram-icon">
              <div className="icon-box-wrapper">
                <TelegramIcon />
              </div>
            </div>
          </div>
          <hr style={{width : '98vw'}}/>
          <Typography color="white" align="center" variant="body2" padding='13px 0px'>
            Copyright © 2022. All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
