import React from "react";
import "./MarketingToolStyle.css";
import HeroSection from "./../../../common/heroSection/HeroSection";
import { Card, Typography, CardMedia, Grid, useTheme, useMediaQuery } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useSelector } from "react-redux";

export default function MarketingTool() {
  const { colors } = useSelector((state) => {
    return state;
  });

  
  const theme = useTheme();
  const responisve = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <div className="marketing-tool-container">
      <HeroSection pageName="Marketing Tool" />
      <div className="marketing-tool-section">
        <div className="my-card-container">
          <Grid
            container
            display="flex"
            justifyContent="center"
            padding="4rem 0rem"
          >
            <Grid item lg={10}>
              <Card
                elevation={0}
                sx={{
                  boxShadow: "-2px -5px 35px 0px #d7d7d7",
                  borderRadius: "1.3rem",
                }}
              >
                <Grid
                  container
                  display="flex"
                  justifyContent="space-around"
                  rowSpacing={3}
                >
                  <Grid item lg={11}>
                    <CardMedia sx={{ display: "flex", alignItems: "center",paddingTop : '1rem' }}>
                      <CampaignIcon
                        sx={{
                          fontSize: "4rem",
                          color: colors.themeColor,
                          marginRight: "1.4rem",
                        }}
                      />
                      <Typography variant="h5" fontWeight="500">
                        Sell on EcoNex
                      </Typography>
                    </CardMedia>
                  </Grid>

                  <Grid item lg={11}>
                    <Grid container rowSpacing={4} display = 'flex' justifyContent='center'>
                      <Grid item xs={10} sm={10} md={10} lg={12}>
                        {" "}
                        <Typography variant="h4" fontWeight="bold">
                          Online Selling Website in Pakistan
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize=".8rem"
                          textAlign="justify"
                        >
                          As more and more people are trying to enter the
                          business side of the world, the trend to start a side
                          business in Pakistan is really picking up. People have
                          now become interested in different ways of starting a
                          small business in Pakistan. One of the most sought out
                          options is to sell online in Pakistan. EcoNex is known
                          to be the best online selling website in Pakistan. If
                          you want to start Apna Karobaar with a reliable
                          organization to back you, then the EcoNex seller
                          center is the best way to go about it. All you’ve to
                          do is go through the EcoNex seller account
                          registration process that’s available on EcoNex.pk,
                          and you’re all set to sell on EcoNex!
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={10} md={10} lg={12}>
                        <Typography variant="h4" fontWeight="bold">
                          Become a EcoNex Seller in Pakistan
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize=".8rem"
                          textAlign="justify"
                        >
                          If you want to start Apna Karobar and become part of a
                          renowned online selling website in Pakistan, then
                          EcoNex.pk is the place for you. With the EcoNex seller
                          center, you can set up an EcoNex seller account and
                          start making online sales in Pakistan! If you’re
                          confused about the process, or how to sell on EcoNex,
                          the rest is easy! The process of becoming an EcoNex
                          seller is very simple. How to sell products online in
                          Pakistan with EcoNex? Three simple steps – register
                          and list your products, receive orders, and sell
                          across Pakistan, get payments and grow your business.
                          For details on the process, just log on to EcoNex.pk
                          and check the sell-on EcoNex page. Is it worth it to
                          sell on EcoNex.pk? Absolutely!! With the EcoNex seller
                          account, you get to reach millions of customers. In
                          addition, EcoNex helps your business by assisting with
                          fast and reliable shipping, professional services to
                          help you, no listing fee, fast and reliable shipping,
                          secure and timely payment, and so much more! So,
                          download your seller center app now, and begin your
                          online selling journey in Pakistan!
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={10} md={10} lg={12}>
                        <Typography variant="h4" fontWeight="bold">
                          About EcoNex Online Shopping
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize=".8rem"
                          textAlign="justify"
                          paddingBottom='3rem'
                        >
                          As the largest Online Shopping platform in Pakistan,
                          EcoNex provides a variety of products in all kinds of
                          categories. Customers can browse through the catalog
                          and find their favorite picks at the best possible
                          rates. EcoNex makes a promise of giving you affordable
                          prices, reliable products, safe shopping, secure
                          payments, prompt deliveries, and easy return/exchange.
                          Offering the benefit of convenience and increased
                          affordability, EcoNex is your most reliable online
                          shopping store. You can also learn how to become an
                          affiliate marketer with the EcoNex Affiliate Program
                          and start earning money today!
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
