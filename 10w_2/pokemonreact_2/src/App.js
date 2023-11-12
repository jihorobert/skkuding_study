import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

import DetailPage from "./components/DetailPage";
import MainPage from "./components/MainPage";
import MainDetail from "./components/MainDetail";
import {
  Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

// Error
/*
- setData(response.data.results);
- setData(response.data); 이렇게써서 계속 에러뜸.(배열형태가 아니여서)
- dataAll 순서가자꾸바뀜
  - fetchedData.sort((a, b) => a.id - b.id);
  - id 오른차순으로 정렬해줌

*/

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://beta.pokeapi.co/graphql/v1beta" }),
  cache: new InMemoryCache(),
});

function App() {
  // axios 이용
  let [dataAll, setDataAll] = useState([]);
  useEffect(() => {
    let fetchedData = [];
    // 데이터를 가져올 API 엔드포인트
    for (let id = 1; id <= 10; id++) {
      let apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      axios
        .get(apiUrl)
        .then(function (response) {
          // console.log(response);
          fetchedData.push(response.data);
          if (fetchedData.length === 10) {
            fetchedData.sort((a, b) => a.id - b.id);
            setDataAll(fetchedData);
          }
        })
        .catch(function (error) {
          console.error("데이터 가져오기 실패:", error);
        });
    }
    console.log(fetchedData);
  }, []);

  let navigate = useNavigate();

  return (
    // <ApolloClient>
    <div className="m-0 bg-black pt-10 text-center pd-[100px]">
      <ApolloProvider client={client}>
        <nav className="flex h-16 items-center border-b-2 border-yellow-300">
          {/* <h1 style={{ color: "sandybrown", marginLeft: "340px" }}> */}
          {/* ml-340 안됨 */}
          <h1 className="text-sandybrown ml-[340px] text-2xl font-bold no-underline">
            <a
              href="./"
              className="text-yellow-300 no-underline visited:text-yellow-300 hover:text-yellow-300 active:text-yellow-300"
            >
              Pokemon List
            </a>
          </h1>
          <hr />
        </nav>

        <Routes>
          <Route path="/" element={<MainPage data={dataAll} />}></Route>
          {dataAll.map((pokemon, index) => (
            <Route
              key={index}
              path={`/detail&id=${index + 1}`}
              element={<DetailPage data={dataAll} id={index + 1} />}
            />
          ))}
        </Routes>
      </ApolloProvider>
    </div>
    // </ApolloClient>
  );
}

export default App;
