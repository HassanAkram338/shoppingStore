import React from "react";
import { Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import InputField from "../../../common/InputField";

import "./HomeStyle.css";
import { useSelector } from 'react-redux';

export default function NewsLetter() {

  const {colors} = useSelector((state)=>{
    return state;
  })

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="content-section-overlay">
          <div className="content-section">
            <Typography
              variant="h6"
              sx={{ color: colors.textColor, paddingBottom: "2.3rem" }}
              alignItems="center"
            >
              DON'T FORGET TO SUBSCRIBE OUR NEWSLETTER
            </Typography>
            <div className="email-address-box">
              <InputField fieldWidth='90%' fieldBorder='0px' fieldBorderRadius='30px' fieldPadding = '20px' fieldOutline='0px' placeholder='Enter Your email address' inputType = 'email'/>
              <TelegramIcon sx={{
                color: colors.themeColor,
                transform : 'rotate(9deg)',
                fontSize : '20px',
                marginRight : '20px'
              }} 
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
