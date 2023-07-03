import React from "react";

function HomeBase({color}) {
  return (
    <div className={`homebase ${color}`}>
      <div className="innerbox">
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeBase;
