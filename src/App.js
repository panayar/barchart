import BarChart from "./Components/BarChart";
import { useState } from "react";

import {UserData} from "./Data/Data";

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(user => user.year),
    datasets: [{
      label:"Users Gain",
      data: UserData.map(user => user.userGain),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }, 
  ]
  });

  return (
    <div className="App">
     <BarChart chartData={userData} />
    </div>
  );
}

export default App;
