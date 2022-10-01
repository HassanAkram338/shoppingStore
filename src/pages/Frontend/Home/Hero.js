import React from "react";
import "./HomeStyle.css";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function Hero() {
  const { colors } = useSelector((state) => {
    return state;
  });

  return (
    <div className="banner-container ">
      <div className="container bg-overlay">
        <div className="banner-content">
          <div className="sub-title" style={{ color: colors.themeColor }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              SHOP ONLINE
            </Typography>
          </div>
          <div className="title" style={{ color: colors.textColor }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", fontSize: "5rem" }}
            >
              Econex Best Online <br /> Selling Platform
            </Typography>
          </div>
          <div className="button-area">
            <div className="button-top">
              <Typography variant="h6" sx={{ color: colors.textColor }}>
                Groceries
              </Typography>
            </div>
            <div className="button-group">
              <Button
                variant="outlined"
                sx={{
                  marginRight: "15px",
                  color: colors.textColor,
                  padding: "12px 30px",
                  borderColor: colors.textColor,
                  "&:hover": {
                    backgroundColor: colors.themeColor,
                    outline: 0,
                    border: 0,
                  },
                }}
              >
                HOME ITEM
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "10px",
                  color: colors.textColor,
                  padding: "12px 30px",
                  borderColor: colors.textColor,
                  "&:hover": {
                    backgroundColor: colors.themeColor,
                    outline: 0,
                    border: 0,
                  },
                }}
              >
                FASHION
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
