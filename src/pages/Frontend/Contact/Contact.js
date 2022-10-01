import React from "react";
import "./ContactStyle.css";
import HeroSection from "./../../../common/heroSection/HeroSection";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

import sideImage from "../../../assets/images/contact.jpg";

/// Icons
import MailIcon from "@mui/icons-material/Mail";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useSelector } from "react-redux";
import InputField from "./../../../common/InputField";

export default function Contact() {
  const { colors } = useSelector((state) => {
    return state;
  });

  const theme = useTheme();
  const responisve = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  // console.log(alignText);

  return (
    <div className="contact-section">
      <HeroSection pageName="Contact Us" />
      <div className="contact-section-container">
        <div className="address-with-icons">
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={11} sm={10} md={5} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem 3rem",
                  "&:hover": {
                    boxShadow: `10px 10px 10px ${colors.themeColor} `,
                  },
                }}
                elevation={0}
              >
                <CardMedia>
                  <MailIcon
                    sx={{
                      fontSize: "100px",
                      color: colors.themeColor,
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography align="center" variant="h5" fontWeight="bold">
                    Email Address
                  </Typography>
                  <Typography variant="body2" align="center">
                    info@hassan.com.pk
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={10} md={5} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem 3rem",
                  "&:hover": {
                    boxShadow: `10px 10px 10px ${colors.themeColor} `,
                  },
                }}
                elevation={0}
              >
                <CardMedia>
                  <ApartmentIcon
                    sx={{
                      fontSize: "100px",
                      color: colors.themeColor,
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography align="center" variant="h5" fontWeight="bold">
                    Office Address
                  </Typography>
                  <Typography variant="body2" align="center">
                    Econex Office No. 14/A, 1st Floor, Taj Mahal <br /> Plaza,
                    6th Road, Rawalpindi.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={11} sm={10} md={5} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem 3rem",
                  "&:hover": {
                    boxShadow: `10px 10px 10px ${colors.themeColor} `,
                  },
                }}
                elevation={0}
              >
                <CardMedia>
                  <PhoneEnabledIcon
                    sx={{
                      fontSize: "100px",
                      color: colors.themeColor,
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    Phone Number
                  </Typography>
                  <Typography variant="body2" align="center">
                    051-8908800
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className="contact-info-section" style={{
          margin : responisve ? "0 auto" : "0"
        }}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            columnSpacing={3}
          >
            <Grid item lg={6}>
              <Typography
                variant="h3"
                fontWeight="500"
                sx={{
                  textAlign: responisve ? "center" : "start",
                }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="subtitle1"
                padding="1.3rem 0rem"
                sx={{
                  textAlign: responisve ? "center" : "start",

                }}
              >
                We are here for you always! please fill up the information and
                feel <br />  free ask if you have any query.
              </Typography>
              <Grid container direction="column" rowSpacing={3}>
                <Grid item>
                  <InputField
                    placeholder="Your Name"
                    fieldPadding="23px 10px"
                    fieldOutline="0"
                    fieldBorder="0"
                    fieldWidth="100%"
                    inputType="text"
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder="Write Your Subject"
                    fieldPadding="23px 10px"
                    fieldOutline="0"
                    fieldBorder="0"
                    fieldWidth="100%"
                    outlineColor="red"
                    inputType="text"
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder="Enter E-Mail Address"
                    fieldPadding="23px 10px"
                    fieldOutline="0"
                    fieldBorder="0"
                    fieldWidth="100%"
                    inputType="email"
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder="Write Your Message"
                    fieldPadding="37px 10px"
                    fieldOutline="0"
                    fieldBorder="0"
                    fieldWidth="100%"
                    inputType="text"
                  />
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      padding: "20px 72px",
                      backgroundColor: colors.themeColor,
                      color: colors.textColor,
                      "&:hover": {
                        background: colors.themeColor,
                      },
                    }}
                  >
                    Submit Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4}>
              <img
                src={sideImage}
                style={{
                  width: "100%",
                  height: "85%",
                }}
                className="side-image"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
