import React from "react";
import "./Card.css";
import { ReactComponent as HeroImage } from "../image/illustration-hero.svg";
import { ReactComponent as MusicIcon } from "../image/icon-music.svg";

const Card = () => {
  return (
    <div id="card">
      <HeroImage id="card-hero" width="100%" viewBox="100% 100% 100% 100%" />
      <div id="card-summery">
        <h1 id="card-summery-title">Order Summery</h1>
        <p id="card-summery-paragraph">
          You can now listen to milions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div id="card-music-box">
        <MusicIcon id="card-music-icon" />
        <div id="card-music-plan">
          <span>Annual Plan</span>
          <br />
          <span>$59.99/year</span>
        </div>
        <a href="/">Change</a>
      </div>
      <div id="card-buttons">
        <div>
          <button>
            <span>Proceed to Payment</span>
          </button>
        </div>
        <div>
          <button>
            <span>Cancel Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
