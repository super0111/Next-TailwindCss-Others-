import React from "react";
import Advantage from "./sessions/advantage";
import Course from "./sessions/course";
import DriverTest from "./sessions/driverTest";
import OnlinePotential from "./sessions/onlinePotential";
import Platform from "./sessions/platform";
import Review from "./sessions/review";
import Welcome from "./sessions/welcome";
import Landing from "./sessions/landing";

export default function Home() {
  return (
    <>
      <Landing />
      {/* <Welcome /> */}
      <Advantage />
      <DriverTest />
      <OnlinePotential />
      <Course />
      <Platform />
      <Review />
    </>
  );
}
