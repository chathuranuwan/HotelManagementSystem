import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Choose a Room that Suits for Your Needs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Room.jpg"
              text="Come and experience our services"
              path="/services"
            />
            <CardItem
              src="images/Room2.jpg"
              text="Choose a Room that Suits Your Needs"
              path="/vehicles"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Room3.jpg"
              text="Choose a Room that Suits Your Needs"
              path="/vehicles"
            />
            <CardItem
              src="images/Room4.jpg"
              text="we have a large collection of Rooms"
              path="/vehicles"
            />
            <CardItem
              src="images/Room5.jpg"
              text="Choose a Room that Suits Your Needs"
              path="/vehicles"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
