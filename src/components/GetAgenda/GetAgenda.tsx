import React, { FC, useEffect } from "react";
import axios from "axios";

const GetAgenda: FC = () => {
  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    //Fetching all the agenda items from the backend
    const getAllAgendaItems = async () => {
      const response = await fetch(`${BELink}/agenda`);
      const result = await response.json();
      console.log("result:", result);
    };
    getAllAgendaItems();
  }, [BELink]);

  return <></>;
};

export { GetAgenda };
