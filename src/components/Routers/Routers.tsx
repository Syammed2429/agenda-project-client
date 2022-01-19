import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { AddAgenda } from "../AddAgenda/AddAgenda";
import { GetAgenda } from "../GetAgenda/GetAgenda";
import { Navbar } from "../Navbar/Navbar";
const Routers: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<AddAgenda />} />
        <Route path="/get-agenda" element={<GetAgenda />} />
      </Routes>
    </>
  );
};

export { Routers };
