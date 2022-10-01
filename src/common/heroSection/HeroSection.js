import { Typography } from "@mui/material";
import React from "react";
import "./HeroSectionStyle.css";
import { useSelector } from 'react-redux';

export default function HeroSection(Props) {

  const {pageName} = Props

  const {colors} = useSelector((state)=>{
    return state;
  })

  return (
    <div className="banner-section">
      <div className="content-container">
        <div className="overlay">
          <Typography color={colors.textColor} variant='h2' fontWeight='bold'>
            {pageName}
          </Typography>
        </div>
      </div>
    </div>
  );
}
