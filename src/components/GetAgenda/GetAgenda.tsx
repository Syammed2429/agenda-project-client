import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@chakra-ui/react";

const GetAgenda: FC = () => {
  //Hooks
  const [agendaItems, setAgendaItems] = useState<
    | {
        _id: string | number;
        date: string | number | Date;
        description: string;
        statue: boolean;
        title: string;
      }[]
    | null
  >(null);

  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    //Fetching all the agenda items from the backend
    const getAllAgendaItems = async () => {
      const { data } = await axios.get(`${BELink}/agenda`);
      setAgendaItems(data.agendas);
    };
    getAllAgendaItems();
  }, [BELink]);

  return (
    <>
      <Container></Container>
    </>
  );
};

export { GetAgenda };
