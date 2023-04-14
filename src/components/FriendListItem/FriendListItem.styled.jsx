import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: start;
  padding: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
`;

export const StatusOnline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: green;
  justify-self: end;
`;

export const StatusOffline = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  justify-self: end;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;