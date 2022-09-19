import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import alanBtn from "@alan-ai/alan-sdk-web";

import {
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const { Header, Content, Footer } = Layout;

const alanKey =
  "a24284a56350b1d1aa65ef9b72153eac2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("Alan AI supports serves as your voice assistant!");
        }
      },
    });
  });

  return (
    <div className="app">
      <Layout>
        <Header>
          <div className="navbar">
            <Navbar />
          </div>
        </Header>
        <Content>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              <Link to="/">Crypto Logix</Link> © 2022<br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
