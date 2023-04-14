import styled from "styled-components";

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 40px;
  table-layout: fixed;
  width: 450px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border-collapse: collapse;
  text-align: center;
  background-color: #2aa1c5;
`;

export const TableHead = styled.thead`
  color: #ecf6f8;
  text-transform: uppercase;
  margin: 0;
  padding: 16px;
`;

export const TableBody = styled.tbody`
  color: grey;
  text-transform: capitalize;
  margin: 0;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 16px;
`;

export const TRows = styled.tr`
  &:nth-of-type(odd) {
    background-color: #fafafa;
  }
  &:nth-of-type(even) {
    background-color: #e9e9e9;
  }
`;

export const Td = styled.td`
  padding: 16px;
  border: 1px solid #ddd;
`;