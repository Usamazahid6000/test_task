import React from "react";
import Createtask from "./Components/Createtask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listtaskpage from "./Components/Listtaskpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Createtask />} />
          <Route path="/Listtaskpage" element={<Listtaskpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
