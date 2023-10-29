import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
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

function App() {
  let [datas] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <nav>
        <h1 style={{ color: "sandybrown", marginLeft: "340px" }}>
          <a href="./">Pokemon List</a>
        </h1>
        <hr />
      </nav>

      <Routes>
        <Route path="/" element={<MainPage data={datas} />}></Route>
        {datas.map((pokemon, index) => (
          <Route
            key={index}
            path={`/detail&id=${index + 1}`}
            element={<DetailPage data={datas} id={index + 1} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
