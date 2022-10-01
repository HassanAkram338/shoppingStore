import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function CommonCard(props) {
  const {
    contributorPhoto,
    contributorName,
    contributorInfo,
    contributorPosition,
    photoHeight,
    dateIcon,
    date,
    alignName,
    cardBgColor
  } = props;

  const { colors } = useSelector((state) => {
    return state;
  });

  return (
    <Card elevation={1}>
      <CardMedia
        component="img"
        height={photoHeight}
        width = '100%'
        image={contributorPhoto}
        alt="green iguana"
        sx={{
          height : "240px"
        }}
      />
      <CardContent sx={{
        backgroundColor : cardBgColor
      }}>
        <Typography
          variant="h5"
          fontWeight='bold'
          sx={{
            "&:hover": {
              color: colors.themeColor,
            },
          }}
          paddingTop="10px"
          paddingBottom="10px"
          align={alignName}
        >
          {contributorName}
        </Typography>
        <Typography align={alignName} variant='body1'>
          {contributorPosition}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom : '18px'
          }}
        >
          <Typography
            sx={{
              marginRight: "10px",
            }}
          >
            {dateIcon}
          </Typography>
          <Typography variant="subtitle1" fontSize="13px">
            {date}
          </Typography>
        </Box>

        <Typography>{contributorInfo}</Typography>
      </CardContent>
    </Card>
  );
}
