import "./App.css";
import HomeBase from "./HomeBase";
import TrackForPlayer from "./TrackForPlayer";
import FinishGoal from "./FinishGoal";
import constants from "./constants";

function App() {
  return (
    <div className="App">
      <div className="board">
        <table>
          <tbody>
            <tr>
              <td align="center">
                <HomeBase color="yellow" position={constants.TOP_LEFT} />
              </td>
              <td>
                <TrackForPlayer
                  color="red"
                  position={constants.TOP}
                />
              </td>
              <td align="center">
                <HomeBase color="red" position={constants.TOP_RIGHT} />
              </td>
            </tr>
            <tr>
              <td>
                <TrackForPlayer
                  color="yellow"
                  position={constants.LEFT}
                />
              </td>
              <td>
                <FinishGoal />
              </td>
              <td>
                <TrackForPlayer
                  color="green"
                  position={constants.RIGHT}
                />
              </td>
            </tr>
            <tr>
              <td align="center">
                <HomeBase color="blue" position={constants.BOTTOM_LEFT} />
              </td>
              <td>
                <TrackForPlayer
                  color="blue"
                  position={constants.BOTTOM}
                />
              </td>
              <td align="center">
                <HomeBase color="green" position={constants.BOTTOM_RIGHT} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
