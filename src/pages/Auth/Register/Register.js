import React from "react";
import "../SignIn/SignInStyle.css";
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

export default function Register() {
  const { colors } = useSelector((state) => {
    return state;
  });

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <div className="signIn-section">
      <HeroSection pageName="Register" />
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
                  Already have an account ?
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
                    Log In
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
                        Create Your Account
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="justify"
                        paddingTop="1rem"
                        paddingBottom="3rem"
                      >
                       Haven't registered yet! don't worry just fillup all the information below and get your account now.
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
                            inputType = 'text'
                            />
                        </Grid>
                        <Grid item>
                          <InputField
                            placeholder=" E-Mail"
                            fieldOutline="0"
                            fieldBorder="0"
                            fieldWidth={responsive ? "70vw" : "40vw"}
                            fieldPadding="1.5rem 0.5rem"
                            fieldBackGroundColor="#f0f8ff"
                            inputType = 'email'
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
                            inputType = 'password'
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
                              Create an Account
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
