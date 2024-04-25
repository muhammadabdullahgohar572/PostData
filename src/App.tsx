import React from "react";

import "./App.css";
import { Navbar } from "./components/Lesson no1/Navbar";
import { Page } from "./pages/Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="md:flex hidden">
          <br />
          <br />
          <br />
        </div>

        <div>
          
        </div>
      </div>

      <Routes>
        <Route path="/">
          <Route path="/" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
