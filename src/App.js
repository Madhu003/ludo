import "./App.css";
import HomeBase from "./HomeBase";
import TrackForPlayer from "./TrackForPlayer";
import FinishGoal from "./FinishGoal";
import constants from "./constants";
import Dice from "./dice/Dice";
import { useEffect, useState } from "react";

const playerList = [
  constants.BLUE,
  constants.GREEN,
  constants.RED,
  constants.YELLOW,
];
function App() {
  const [chance, setChance] = useState(playerList[0]);
  const [diceResult, setDiceResult] = useState(0);

  useEffect(() => {
    debugger;
    const playerIndex = (playerList.indexOf(chance) + 1) % 4;
    setTimeout(() => setChance(playerList[playerIndex]), 100);
  }, [diceResult]);

  return (
    <div className="App">
      <div className="board">
        <table>
          <tbody>
            <tr>
              <td
                align="center"
                style={{ backgroundColor: "var(--yellow-color)" }}
              >
                <HomeBase color="yellow" position={constants.TOP_LEFT} />
              </td>
              <td>
                <TrackForPlayer color="red" position={constants.TOP} />
              </td>
              <td
                align="center"
                style={{ backgroundColor: "var(--red-color)" }}
              >
                <HomeBase color="red" position={constants.TOP_RIGHT} />
              </td>
            </tr>
            <tr>
              <td>
                <TrackForPlayer color="yellow" position={constants.LEFT} />
              </td>
              <td>
                <FinishGoal />
              </td>
              <td>
                <TrackForPlayer color="green" position={constants.RIGHT} />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{ backgroundColor: "var(--blue-color)" }}
              >
                <HomeBase color="blue" position={constants.BOTTOM_LEFT} />
              </td>
              <td>
                <TrackForPlayer color="blue" position={constants.BOTTOM} />
              </td>
              <td
                align="center"
                style={{ backgroundColor: "var(--green-color)" }}
              >
                <HomeBase color="green" position={constants.BOTTOM_RIGHT} />
              </td>
            </tr>
          </tbody>
        </table>

        <Dice result={(op) => setDiceResult(op)} />
        <div className="">
          <h1>Chance</h1>
          <div
            style={{
              backgroundColor: `var(--${chance}-color)`,
              width: "50px",
              height: "50px",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
