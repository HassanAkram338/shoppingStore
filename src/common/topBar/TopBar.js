import React from "react";
import { Button, Container, useMediaQuery, useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { ExpandMore } from "@mui/icons-material";

export default function TopBar() {
  const { colors } = useSelector((state) => {
    return state;
  });

  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.only('lg'))
  const responsive2 = useMediaQuery(theme.breakpoints.only('xs'))

  return (
    <div className="topbar-section" style={{
      backgroundColor : colors.themeColor,
      padding : '1rem 0rem'
    }}>
      <Grid container justifyContent='space-around' alignItems='center'>
        <Grid item sx={{
          marginLeft : responsive ? "-12rem" : "0rem",
        }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "25px",
              }}
            >
              <EmailIcon
                sx={{
                  color: colors.textColor,
                  marginRight: "6px",
                  fontSize: "18px",
                }}
              />
              <span
                style={{
                  color: colors.textColor,
                  fontSize: "16px",
                }}
              >
                info@hassan.com.pk
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SmartphoneIcon
                sx={{
                  color: colors.textColor,
                  marginRight: "6px",
                  fontSize: "18px",
                }}
              />
              <span
                style={{
                  color: colors.textColor,
                  fontSize: "16px",
                }}
              >
                +92 303 5383338
              </span>
            </div>
          </div>
        </Grid>
        <Grid
          item sx={{
            marginRight : responsive ? "-12rem" : "0rem",
          }}
          display = {responsive2 ? "none" : 'inline-block'}
        >
          <Button
          
            sx={{
              backgroundColor: colors.textColor,
              color: "#000000",
              fontSize: "13px",
              padding: "7px",
              '&:hover' : {
                backgroundColor : colors.textColor
              }
            }}
            endIcon = {<ExpandMore />}
          >
            English
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
