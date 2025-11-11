import React from "react";
import Banner from "./Banner";
import AchieveGoals from "./AchieveGoals";
import FinancialOverview from "./FinancialOverview";

const Home = () => {
  return <div>
    <Banner></Banner>
    <FinancialOverview></FinancialOverview>
    <AchieveGoals></AchieveGoals>
  </div>;
};

export default Home;
