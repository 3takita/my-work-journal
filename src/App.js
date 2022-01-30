import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import Work from "./Work";
import data from "./data";

export default function App() {
  const works = data.map((item) => {
    return (
      <Work
        employer={item.employer}
        startDate={item.startDate}
        endDate={item.endDate}
        jobTitle={item.jobTitle}
        pros={item.pros}
        cons={item.cons}
        startPay={item.starPay}
        officePic={item.officePic}
        workCulture={item.workCulture}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {works}
    </div>
  );
}
