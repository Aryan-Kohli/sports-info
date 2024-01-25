import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Match from "./match";

function App() {
  const [allData, setAllData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cricket-live-data.p.rapidapi.com/fixtures",
          {
            headers: {
              "X-RapidAPI-Key":
                "6a0c48af3fmsh8281f0fd9f8eb29p1f7686jsn3d9df644606f",
              "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
            },
          }
        );
        setAllData(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mt-4"> Upcoming Match fixtures</h1>

        {allData
          ? allData.map((match) => (
              <Match
                key={match.id}
                home={match.home.name}
                away={match.away.name}
                venue={match.venue}
                date={match.date}
              />
            ))
          : "DATA is loading"}
      </div>
    </>
  );
}

export default App;
