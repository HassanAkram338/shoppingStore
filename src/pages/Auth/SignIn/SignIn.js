import React from "react";
import "./SignInStyle.css";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeroSection from "./../../../common/heroSection/HeroSection";
import { useSelector } from "react-redux";
import InputField from "./../../../common/InputField";

export default function SignIn() {
  const { colors } = useSelector((state) => {
    return state;
  });

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <div className="signIn-section">
      <HeroSection pageName="Sign In" />
      <div className="light-background-container">
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Grid
            item
            lg={10}
            sx={{
              paddingTop: "9rem",
              paddingBottom: "5rem",
            }}
          >
            <div className="signIn-container">
              <div className="image-container">
                <div className="content-overlay">
                  <Typography
                    variant="h4"
                    fontWeight="500"
                    color="white"
                    align="center"
                  >
                    WelCome To EcoNex
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    align="center"
                    paddingBottom="1.5rem"
                    paddingLeft=".3rem"
                    paddingRight=".3rem"
                  >
                    Haven't registered yet? Don't worry just fill all the
                    information below and get account now.
                  </Typography>
                  <Button
                    sx={{
                      padding: ".8rem 2.3rem",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: colors.themeColor,
                        outline: `1px solid ${colors.textColor}`,
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <Grid
                container
                sx={{
                  backgroundColor: colors.textColor,
                  padding: "5rem 3rem",
                }}
              >
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4" fontWeight="500">
                        Login Account
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="justify"
                        paddingTop="1rem"
                        paddingBottom="3rem"
                      >
                        To login into the site please enter your username and{" "}
                        <br />
                        password
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" rowSpacing={4}>
                        <Grid item>
                          <InputField
                            placeholder="Username"
                            fieldOutline="0"
                            fieldBorder="0"
                            fieldWidth={responsive ? "70vw" : "40vw"}
                            fieldPadding="1.5rem 0.5rem"
                            fieldBackGroundColor="#f0f8ff"
                          />
                        </Grid>
                        <Grid item>
                          <InputField
                            placeholder="Password"
                            fieldOutline="0"
                            fieldBorder="0"
                            fieldWidth={responsive ? "70vw" : "40vw"}
                            fieldPadding="1.5rem 0.5rem"
                            fieldBackGroundColor="#f0f8ff"
                          />
                        </Grid>
                        <Grid item textAlign="end">
                          <Button
                            sx={{
                              padding: "1rem",
                              backgroundColor: colors.themeColor,
                              color: colors.textColor,
                              borderRadius: "2rem",

                              "&:hover": {
                                backgroundColor: colors.textColor,
                                color: colors.themeColor,
                                outline: `1px solid ${colors.themeColor}`,
                              },
                            }}
                          >
                            <Typography fontWeight="bold">
                              Login Account
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
