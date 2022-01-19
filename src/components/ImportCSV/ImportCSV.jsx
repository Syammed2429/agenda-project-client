import React, { useState } from "react";
import * as XLSX from "xlsx";
import DataTable from "react-data-table-component";
import {
  Text,
  Input,
  Box,
  Center
} from "@chakra-ui/react";

const ImportCSV = () => {
  //Hooks
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: c
    }));

    //Storing the data and headers to the state
    setData(list);
    setColumns(columns);

  };


  // function for importing the files
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      // Parse data 
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      // Get first worksheet 
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      //Convert array of arrays 
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };


  return (
    <>
      <Box py={2}>

        <Center>

          <Text fontSize='lg' m={4}>Import A CSV File</Text>
        </Center>
        <Input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />

        <Box
          m={5}
          color="red">
          {/* Rendering the CSV File data*/}
          <DataTable pagination highlightOnHover columns={columns} data={data} />
        </Box>
      </Box>

    </>
  );
};

export { ImportCSV };
