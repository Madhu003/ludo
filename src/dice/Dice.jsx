import React, { useState } from "react";
import diceAudio from "../assets/dice-142528.mp3";
import "./Dice.css";

const Dice = ({ result }) => {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      if (result) result(newValue);
      setTimeout(() => {
        new Audio(diceAudio).play();
      }, 200);
      setTimeout(() => {
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <div className={`dice ${rolling ? "rolling" : ""}`} onClick={rollDice}>
      <span className="dot"></span>
      {diceValue}
    </div>
  );
};

export default Dice;
