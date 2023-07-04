import React, { useEffect, useState } from "react";
import constants from "./constants";

const veticleMatrix = new Array(6).fill("").map(() => new Array(3).fill(""));
const horizontalMatrix = new Array(3).fill("").map(() => new Array(6).fill(""));
const alignments = { VERTICLE: "verticle", HORIZONTAL: "horizontal" };

// const matrix = new Array(6).fill("").map(() => new Array(3).fill(""));
// console.log(matrix);
function TrackForPlayer({ color, roatation, position }) {
  const [matrix, setMatrix] = useState([[]]);
  const [alignment, setAlignment] = useState(alignments.VERTICLE);
  useEffect(() => {
    if (constants.TOP === position || constants.BOTTOM === position) {
      setMatrix(veticleMatrix);
    } else {
      setMatrix(horizontalMatrix);
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
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={getBgColor(i, j)}>
                    {i}, {j}
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
