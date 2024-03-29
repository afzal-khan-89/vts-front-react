import React from "react";
import Achievement from "../Achievement";
import CTA from "../CTA";
import Categories from "../Categories";
import Companies from "../Companies";
import Courses from "../Courses";
import Feedback from "../Feedback";
// import Footer from "../Footer";
import Hero from "../Hero";
// import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
