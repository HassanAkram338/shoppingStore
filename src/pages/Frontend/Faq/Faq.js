import React from "react";
import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

import HeroSection from "./../../../common/heroSection/HeroSection";
// import { useSelector } from "react-redux";

export default function Faq() {
  // const { colors } = useSelector((state) => {
  //   return state;
  // });

  return (
    <div className="faq-section">
      <HeroSection pageName="Faq" />
      <div className="question-section">
        <Grid container display="flex" justifyContent="center">
          <Grid item>
            <Typography
              variant="h3"
              fontWeight="500"
              paddingTop="7rem"
              paddingBottom="5rem"
              align="center"
            >
              A Frequently Asked Questions
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div
        className="accordion-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "3rem",
        }}
      >
        <Accordion
          sx={{
            backgroundColor: "#f0f8ff",
            width: "90%",
            marginBottom: "1rem",
            padding: ".7rem",
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" fontWeight="500">
              I HAVE NOT RECEIVED My Withdrawl
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The processing time for your withdrawal will vary depending on
              your payment method. You can view further information on
              withdrawal clearance times by visiting our Payment Method page. If
              you are unable to locate your withdrawal after the processing time
              has passed, please Contact Us.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#f0f8ff",
            width: "90%",
            padding: ".7rem",
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" fontWeight="500">
              How To Making A Withdrawl ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can make a withdrawal from the Withdraw page. Where possible
              we are required to send funds back to the payment method that was
              used to deposit the original funds. For further details relating
              to processing times and any applicable fees, please refer to the
              Withdrawals section of our Payments page. You can make a
              withdrawal from the Withdraw page. Where possible we are required
              to send funds back to the payment method that was used to deposit
              the original funds. For further details relating to processing
              times and any applicable fees, please refer to the Withdrawals
              section of our Payments page..
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
