import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  teamword,
  homeObjOne,
  foundersword,
  history,
  signup,
} from "../components/InfoSection/Data";
import Founders from "../components/Founders";
import Team from "../components/Team";
import Footer from "../components/Footer";
import SignUp from "../components/InfoSection/signup";
import History from "../components/InfoSection/history";
import FoundersWord from "../components/InfoSection/foundersword";
import TeamWord from "../components/InfoSection/teamword";

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
      <History {...history} />
      <Founders />
      <FoundersWord {...foundersword} />
      <Team />
      <TeamWord {...teamword} />
      <SignUp {...signup} />
      <Footer />
    </>
  );
};

export default Home;
