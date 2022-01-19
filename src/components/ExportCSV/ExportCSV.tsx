import React from "react";
import { Container, Button } from "@chakra-ui/react";
import { CSVLink } from "react-csv";

const ExportCSV = ({ agendaItems }: any) => {
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
      <Container>
        <Button>
          <CSVLink {...CSV}>Export to CSV</CSVLink>
        </Button>
      </Container>
    </>
  );
};

export { ExportCSV };
