import { SyntheticEvent, useState, useEffect, ChangeEvent } from "react";
import Header from "../header/Header";
import CardList from "../cardList/CardList";
import { Layout } from "antd";
import axios from "axios";
import { getQueryParams } from "../../api/marvel";

const { Content } = Layout;

const BASE_ENDPOINT = "https://gateway.marvel.com";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>("")

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "get",
        url: `${BASE_ENDPOINT}/v1/public/comics?${getQueryParams()}`,
      })
        .then((result) => setData(result.data.data.results))
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleFormSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log(searchValue);
  };

	const handleChangeField = (fieldValue: string) => {
		console.log(fieldValue)
		setSearchValue(fieldValue)
	}

  return (
    <div className="App">
      <Layout
				className="layout"
				style={{
					height: "100vh"
				}}	
			>
        <Header 
					handleFormSubmit={handleFormSubmit} 
					handleChangeField={handleChangeField}
				/>
        <Content style={{padding: "20px 0 0 0"}}>
          <div className="container">
            <CardList comics={data} />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
