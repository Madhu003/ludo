import React, { useContext, useEffect, useState } from "react";
import constants from "./constants";
import { storeForLudo } from "./store";

const alignments = { VERTICLE: "verticle", HORIZONTAL: "horizontal" };

// const matrix = new Array(6).fill("").map(() => new Array(3).fill(""));
// console.log(matrix);
function TrackForPlayer({ color, roatation, position }) {
  const [matrix, setMatrix] = useState([[]]);
  const [alignment, setAlignment] = useState(alignments.VERTICLE);
  const context = useContext(storeForLudo);

  useEffect(() => {
    setMatrix(context.path[color]);
    if (constants.TOP === position || constants.BOTTOM === position) {
    } else {
      setAlignment(alignments.HORIZONTAL);
    }
  }, []);
  const getBgColor = (i, j) => {
    let str;

    if (
      // for remove bottom color
      (position === constants.TOP && i !== 0 && j === 1) ||
      (position === constants.BOTTOM && i !== 5 && j === 1) ||
      (position === constants.LEFT && i === 1 && j !== 0) ||
      (position === constants.RIGHT && i === 1 && j !== 5) ||
      // start point
      (position === constants.TOP && i === 1 && j === 2) ||
      (position === constants.BOTTOM && i === 4 && j === 0) ||
      (position === constants.LEFT && i === 0 && j === 1) ||
      (position === constants.RIGHT && i === 2 && j === 4)
    ) {
      str = "var(--box-color)";
    } else if (
      (position === constants.TOP && i === 2 && j === 0) ||
      (position === constants.BOTTOM && i === 3 && j === 2) ||
      (position === constants.LEFT && i === 2 && j === 2) ||
      (position === constants.RIGHT && i === 0 && j === 3)
    ) {
      str = "rgb(196 195 195)";
    } else {
      str = "#ffffff";
    }

    return { backgroundColor: str };
  };
  return (
    <div
      className={`track-for-player ${color} ${alignment}`}
      //   style={{ fontSize: 20, transform: `rotate(${roatation}deg)` }}
    >
      <div className="innerbox">
        <table>
          <tbody>
            {context.path[color].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={getBgColor(i, j)}>
                    {i}, {j}
                    {/* {JSON.stringify(cell)} */}
                    {cell?.player && <div className="player-token"></div>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrackForPlayer;
