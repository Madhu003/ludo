import React, { useState } from "react";

function HomeBase({ color }) {
  const [playerTokenCount, setPlayerTokenCount] = useState(4);

  const doNeedToMarkPlayer = (count) => {
    return playerTokenCount - count >= 0
  }
  return (
    <div className={`homebase ${color}`}>
      <div className="innerbox">
        <table>
          <tbody>
            <tr>
              <td>{doNeedToMarkPlayer(1) && <div className="player-token"></div>}</td>
              <td>{doNeedToMarkPlayer(2) && <div className="player-token"></div>}</td>
            </tr>
            <tr>
              <td>{doNeedToMarkPlayer(3) && <div className="player-token"></div>}</td>
              <td>{doNeedToMarkPlayer(4) && <div className="player-token"></div>}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeBase;
