import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { AddAgenda } from "../AddAgenda/AddAgenda";
import { Navbar } from "../Navbar/Navbar";
const Routers: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<AddAgenda />} />
      </Routes>
    </>
  );
};

export { Routers };
