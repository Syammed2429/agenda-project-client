import React, { useEffect, useState } from "react";
import { Button, Center } from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import axios from "axios";

const ExportCSV = () => {
  const [agendaItems, setAgendaItems] = useState([]);
  //Backend link
  const BELink: string | undefined = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const getAllItems = async () => {
      const { data } = await axios.get(`${BELink}/agenda/all-items`);
      setAgendaItems(data.agendas);
    };
    return () => {
      getAllItems();
    };
  }, [BELink, agendaItems]);

  //Headings for the csv file
  const headers = [
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    { label: "Status", key: "status" },
    { label: "Date", key: "date" },
  ];

  //CSV Data
  const CSV = {
    data: agendaItems,
    headers: headers,
    filename: "agendaItems.csv",
  };

  return (
    <>
      <Center>
        <Button>
          {agendaItems && <CSVLink {...CSV}>Export to CSV</CSVLink>}
        </Button>
      </Center>
    </>
  );
};

export { ExportCSV };
