import { SyntheticEvent, useState, useEffect } from "react";
import Header from "../header/Header";
import CardList from "../cardList/CardList";
import axios from "axios";
import {getQueryParams} from "../../api/marvel"

const API_KEY = "378d182bcee78a58f1381a55d1c6bc15";
const PRIVATE_KEY = "dfc5fe92cf044a2c4d8fab18baa0e6ae6ffd6a2b";
const BASE_ENDPOINT = 'https://gateway.marvel.com';

console.log(getQueryParams())

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "get",
        url: "https://gateway.marvel.com:443/v1/public/characters?apikey=378d182bcee78a58f1381a55d1c6bc15",
      })
        .then((result) => console.log(result))
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }

    fetch(
      `${BASE_ENDPOINT}/v1/public/characters?${getQueryParams()}`
    )
      .then((res) => res.json())
      .then(({data}) => console.log(data.results));

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleFormSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("hey");
  };

  return (
    <div className="App">
      <Header handleFormSubmit={handleFormSubmit} />
      <CardList />
    </div>
  );
}

export default App;
