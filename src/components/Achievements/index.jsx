import React, { useEffect, useState } from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "./Achievements.css";

const Achievement = () => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProjects(50);
      setSatisfaction(40);
      setExperience(20);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex achievements">
      <div className="achievement__card">
        <h3 className="title">Projects Completed</h3>
        <div className="flex">
          <ReactOdometer value={projects} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Successfully delivered a wide range of projects.</p>
      </div>

      <div className="achievement__card">
        <h3 className="title">Customer Satisfaction</h3>
        <div className="flex">
          <ReactOdometer value={satisfaction} className="heading" />
          <h1 className="heading">%</h1>
        </div>
        <p>Ensuring top-notch quality and happy clients.</p>
      </div>

      <div className="achievement__card">
        <h3 className="title">Years of Experience</h3>
        <div className="flex">
          <ReactOdometer value={experience} className="heading" />
          <h1 className="heading">+</h1>
        </div>
        <p>Bringing decades of expertise to every project.</p>
      </div>
    </div>
  );
};

export default Achievement;
