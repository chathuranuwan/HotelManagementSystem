import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import { AspectRatio } from "@chakra-ui/react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <AspectRatio maxW="560px" ml={[550]}>
        <iframe
          src="https://www.youtube.com/embed/6IQCuTEKlCo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </AspectRatio>
      <AspectRatio maxW="560px" ml={[550]} mb={[20]} mt={[20]}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1hPlG1DDduEjwpvBuGn7dGdO0A41u9IAx&ehbc=2E312F"
          width="640"
          height="480"
          alt="demo"
        ></iframe>
      </AspectRatio>
      <Footer />
    </>
  );
}

export default Home;
