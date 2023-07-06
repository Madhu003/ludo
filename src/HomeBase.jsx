import React, { useContext } from "react";
import { storeForLudo } from "./store";

function HomeBase({ color }) {
  const context = useContext(storeForLudo);
  const playerTokenCount = context?.homeBasePlayerTokenCount[color];

  const doNeedToMarkPlayer = (count) => {
    return playerTokenCount - count >= 0;
  };
  return (
    <div className={`homebase ${color}`}>
      <div className="innerbox">
        <table>
          <tbody>
            <tr>
              <td>
                {doNeedToMarkPlayer(1) && <div className="player-token"></div>}
              </td>
              <td>
                {doNeedToMarkPlayer(2) && <div className="player-token"></div>}
              </td>
            </tr>
            <tr>
              <td>
                {doNeedToMarkPlayer(3) && <div className="player-token"></div>}
              </td>
              <td>
                {doNeedToMarkPlayer(4) && <div className="player-token"></div>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeBase;
