import React, { FC, useState } from "react";
import * as XLSX from "xlsx";
import DataTable from "react-data-table-component";
import { Text } from "@chakra-ui/react";

const ImportCSV: FC = () => {
  //Hooks
  const [columns, setColumns] = useState<string[] | null>(null);
  const [data, setData] = useState<string[] | null>(null);

  // process CSV data
  const processData = (dataString: any) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list: string[] | undefined = [];
  };

  return (
    <>
      <Text>Import CSV</Text>
    </>
  );
};

export { ImportCSV };
