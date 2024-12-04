import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content">
        <h1>About Us</h1>
        <section className="about-section">
        <p>
          At TTBest, we aim to provide the best table tennis products for players of all levels. 
          From beginners to professionals, we are dedicated to enhancing your game with top-quality gear.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          TTBest was founded by passionate table tennis enthusiasts who wanted to share their love for the sport with the world. 
          Over the years, we have built a community of players who trust us for their table tennis needs.
        </p>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;
