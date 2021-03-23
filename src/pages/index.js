import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  signup,
} from "../components/InfoSection/Data";
import Founders from "../components/Founders";
import Team from "../components/Team";
import Footer from "../components/Footer";
import SignUp from "../components/InfoSection/signup";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Founders />
      <InfoSection {...homeObjThree} />
      <Team />
      <InfoSection {...homeObjFour} />
      <SignUp {...signup}/>
      <Footer />
    </>
  );
};

export default Home;
