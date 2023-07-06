import { useContext, useEffect, useState } from "react";
import "./App.css";
import HomeBase from "./HomeBase";
import TrackForPlayer from "./TrackForPlayer";
import FinishGoal from "./FinishGoal";
import constants from "./constants";
import Dice from "./dice/Dice";
import { storeForLudo } from "./store";
import tapAudio from "./assets/tap.mp3";
import { waitFor } from "./utils";

const playerList = [
  constants.BLUE,
  constants.GREEN,
  constants.RED,
  constants.YELLOW,
];

function App() {
  const [chance, setChance] = useState(playerList[0]);
  const [diceResult, setDiceResult] = useState(0);
  let context = useContext(storeForLudo);

  useEffect(() => {
    console.log(context);
    // if (context?.homeBasePlayerTokenCount?.blue) {
    //   context.homeBasePlayerTokenCount.blue = 3;
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const afterRollingDice = async (op) => {
    context.processing = true;
    setDiceResult(op);
    // setTimeout(async () => {
    //   for (let i = 0; i < op; i++) {
    //     new Audio(tapAudio).play();
    //     await waitFor(500);
    //   }
    // }, 1000);

    if (context.homeBasePlayerTokenCount[chance] > 0) {
      context.homeBasePlayerTokenCount[chance]--;
    }

    for (let i = 0; i < op; i++) {
      new Audio(tapAudio).play();
      await waitFor(500);

      if (context.path.blue[4 - i][0]) {
        context.path.blue[4 - i][0] = { player: constants.BLUE, index: 0 };
      }
    }

    // for (let i = 0; i < context.path.blue.length; i++) {
    //   for (let j = 0; j < context.path.blue[0].length; j++) {

    //     context.path.blue[i][j] = { player: constants.BLUE, index: 0 };
    //   }
    // }

    context.processing = false;

    // TODO: for changing chance of player
    // const playerIndex = (playerList.indexOf(chance) + 1) % 4;
    // setChance(playerList[playerIndex]);
  };

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
        <div className="footer">
          <Dice result={(op) => setTimeout(() => afterRollingDice(op), 1000)} />
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
