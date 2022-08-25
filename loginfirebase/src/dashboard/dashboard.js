import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [ipiInfo, setIpiInfo] = useState([]);

  // static

  const handleData = () => {
    // ipinfo.io / 103.247.6.157 ? token = 992928a8521c5e
    axios.get(`https://ipinfo.io/${data}?token=992928a8521c5e`).then((res) => {
      setIpiInfo(res?.data);
    });
  };

  const handleLogout = () => {
    navigate("/");

    localStorage.clear();
  };
  const username = localStorage.getItem("username");
  return (
    <div className="dashboard-main">
      <div className="user-dashboard">
        <div className="username-wrapper">
          {username ? (
          <h5>  <span>Welcome {username}</span></h5>
          ) : (
            <h5>
              Welcome <span>{localStorage.getItem("name")}</span>
            </h5>
          )}
          {/* <h5>{localStorage.getItem("email")}</h5> */}
          <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="">
        <div className="formcontent">
          <input type="text" onChange={(e) => setData(e.target.value)} />
          <button className="btn" type="submit" onClick={handleData}>
            Submit Data
          </button>
          <ul>
            <li>IP:{ipiInfo.ip}</li>
            <li>City:{ipiInfo.city}</li>
            <li>Country:{ipiInfo.country}</li>
            <li>Postal:{ipiInfo.postal}</li>
            <li>Region:{ipiInfo.region}</li>
            <li>Loc:{ipiInfo.loc}</li>
            <li>Timezone:{ipiInfo.timezone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
