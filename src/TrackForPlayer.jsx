import React from "react";

const veticleMatrix = new Array(6).fill("").map(() => new Array(3).fill(""));
const horizontalMatrix = new Array(3).fill("").map(() => new Array(6).fill(""));


// console.log(matrix);
function TrackForPlayer({ color, roatation }) {
  const getBgColor = (i, j) => {
    let str;
    if ((j === 1 && i !== 5) || (i === 4 && j === 0)) {
      str = "var(--box-color)";
    } else if (i == 3 && j == 2) {
      str = "#d4d4d4";
    } else {
      str = "#ffffff";
    }
    return { backgroundColor: str };
  };
  return (
    <div
      className={`track-for-player ${color}`}
      style={{ fontSize: 20, transform: `rotate(${roatation}deg)` }}
    >
      <div className="innerbox">
        <table>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={getBgColor(i, j)}></td>
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
