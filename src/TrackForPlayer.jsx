import React from "react";

const matrix = new Array(6).fill("").map(() => new Array(3).fill(""));

console.log(matrix);
function TrackForPlayer({ color, roatation }) {
  return (
    <div
      className={`track-for-player ${color}`}
      style={{ fontSize: 20, transform: `rotate(-${roatation}deg)` }}
    >
      <div className="innerbox">
        <table>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      backgroundColor: `${
                        (j === 1 && i !== 5) || (i === 4 && j === 0)
                          ? "var(--box-color)"
                          : "white"
                      }`,
                    }}
                  ></td>
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
