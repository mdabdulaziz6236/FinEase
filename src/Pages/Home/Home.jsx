import React from "react";
import Banner from "./Banner";
import AchieveGoals from "./AchieveGoals";
import FinancialOverview from "./FinancialOverview";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import BlogPreview from "./BlogPreview";
import CTA from "./CTA.jsx";

const Home = () => {
  return <div>
    <title>Home</title>
    <Banner></Banner>
    <FinancialOverview></FinancialOverview>
    <AchieveGoals></AchieveGoals>
    <HowItWorks></HowItWorks>
    <Features></Features>
    <Testimonials></Testimonials>
    <FAQ></FAQ>
    <Newsletter></Newsletter>
    <BlogPreview></BlogPreview>
    <CTA></CTA>
  </div>;
};

export default Home;
