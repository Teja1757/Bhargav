import React from "react";
import {
  Table,
  Caption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@patternfly/react-table";
import "./Table.css";

interface Repository {
  UserName: string;
  HostName: string | null;
  Firewall: string | null;
  IP_Address: string;
  Last_Edit: string;
}

const TableBasic: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      UserName: "One",
      HostName: "CheckPoint",
      Firewall: "CheckPoint",
      IP_Address: "173.45.34.22",
      Last_Edit: "22.10.2024",
    },
    {
      UserName: "Two",
      HostName: "FortiNet",
      Firewall: "FortiNet",
      IP_Address: "132.87.35.54",
      Last_Edit: "22.10.2024",
    },
    {
      UserName: "Three",
      HostName: "CheckPoint",
      Firewall: "CheckPoint",
      IP_Address: "135.24.22.85",
      Last_Edit: "22.10.2024",
    },
  ];

  const columnNames = {
    UserName: "UserName",
    HostName: "HostName",
    Firewall: "Firewall",
    IP_Address: "IP_Address",
    Last_Edit: "Last Edit",
  };

  return (
    <React.Fragment>
      <Table aria-label="Simple table" variant="compact">
        <Caption>A table for viewing all added hosts.</Caption>
        <Thead>
          <Tr>
            <Th>{columnNames.UserName}</Th>
            <Th>{columnNames.HostName}</Th>
            <Th>{columnNames.Firewall}</Th>
            <Th>{columnNames.IP_Address}</Th>
            <Th>{columnNames.Last_Edit}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repositories.map((repo) => (
            <Tr key={repo.UserName}>
              <Td dataLabel={columnNames.UserName}>{repo.UserName}</Td>
              <Td dataLabel={columnNames.HostName}>{repo.HostName}</Td>
              <Td dataLabel={columnNames.Firewall}>{repo.Firewall}</Td>
              <Td dataLabel={columnNames.IP_Address}>{repo.IP_Address}</Td>
              <Td dataLabel={columnNames.Last_Edit}>{repo.Last_Edit}</Td>
              <button className="hover:text-blue-700">Edit</button>
              <button className="hover:text-red-500">Delete</button>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};

export default TableBasic;
