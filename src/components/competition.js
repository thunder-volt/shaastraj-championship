import React from "react";
import "../components/Championship.css";
import Gold from "../gold.png"
import Silver from "../silver.png"
import Bronze from "../bronze.png"

function Championship() {
  var j = 0;
  var arr = [{ name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }
    , { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }
    , { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }
    , { name: "Akshay", totalPoints: 100 }, { name: "Akshay", totalPoints: 100 }
  ]
  return (
    <>
      <div className="LeaderBoard">
        <h1 style={{ color: "#fff" }}>LEADER BOARD</h1>
        <div className="Leaderboard_toppers">
          <div className="card">
            <div className="imgBox">
              <img src={Silver} alt="" />
              <span className="silver">2</span>
            </div>
            {
              arr !== undefined &&
              arr[1] && <div>
                <h3 style={{ color: "#fff" }}>{arr[1].name}</h3>
                <p className="points">
                  {arr[1].totalPoints} Points
                </p>
              </div>
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Gold} alt="" />
              <span className="gold">1</span>
            </div>
            {
              arr !== undefined &&
              arr[0] && <div>
                <h3 style={{ color: "#fff" }}>{arr[0].name}</h3>
                <p className="points">
                  {arr[0].totalPoints} Points
                </p>
              </div>
            }
          </div>
          <div className="card">
            <div className="imgBox">
              <img src={Bronze} alt="" />
              <span className="bronze">3</span>
            </div>
            {
              arr !== undefined &&
              arr[2] && <div>
                <h3 style={{ color: "#fff" }}>{arr[2].name}</h3>
                <p className="points">
                  {arr[2].totalPoints} Points
                </p>
              </div>
            }
          </div>
        </div>
        <ul className="Leaderboard_container">
          {
            arr !== undefined &&
            arr.map((user) => {
              j++;
              if (j > 3 && user)
                return (
                  <li>
                    <div className="left">
                      <p className="sl-no">{j}&nbsp;</p>
                      <h4 style={{ color: "#fff" }}>{user.name}</h4>
                    </div>
                    <p className="points">{user.totalPoints} Points</p>
                  </li>
                );
              else return null
            })}
        </ul>
      </div>
    </>
  );
}

export default Championship;
