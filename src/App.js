import "./App.css";
import HomeBase from "./HomeBase";
import TrackForPlayer from "./TrackForPlayer";
import FinishGoal from "./FinishGoal";

function App() {
  return (
    <div className="App">
      <div className="board">
        <table>
          <tbody>
            <tr>
              <td align="center">
                <HomeBase color="yellow" />
              </td>
              <td>
                <TrackForPlayer color="red" roatation={180} type={}/>
              </td>
              <td>
                <HomeBase color="red" />
              </td>
            </tr>
            <tr>
              <td>
                <TrackForPlayer
                  color="yellow"
                  roatation={90}
                />
              </td>
              <td>
                <FinishGoal />
              </td>
              <td>
                <TrackForPlayer
                  color="green"
                  roatation={270}
                />
              </td>
            </tr>
            <tr>
              <td>
                <HomeBase color="blue" />
              </td>
              <td>
                <TrackForPlayer color="blue" roatation={0} />
              </td>
              <td>
                <HomeBase color="green" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
