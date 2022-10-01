import React from "react";
import Swiper from "../../../common/Swiper/Swiper";
import Clients from "./Clients";
import InfoSection from "./InfoSection";
import LatestNews from "./LatestNews";
import NewsLetter from "./NewsLetter";

export default function Home() {
  return (
    <>
      <Swiper />
      <InfoSection />
      <Clients />
      <NewsLetter />
      <LatestNews />
    </>
  );
}
