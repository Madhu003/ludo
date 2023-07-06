import React, { useState, useContext } from "react";
import { storeForLudo } from "../store";
import diceAudio from "../assets/dice-142528.mp3";
import "./Dice.css";

const Dice = ({ result }) => {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  let context = useContext(storeForLudo);

  const rollDice = () => {
    if (!rolling && !context.processing) {
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
