import styled from "styled-components";

export const Wrap = styled.div`
  margin: 30px auto;
  background-color: #eff5f6;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
  color: #8f8e8e;
  border-radius: 4px;
  width: 450px;
  overflow: hidden;
`
export const Image = styled.img`
  margin-top: 16px;
  margin-bottom: 12px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`
export const UserName = styled.p`
  font-weight: 700;
  font-size: 36px;
  color: #383737;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  border-top: 1px solid #ccc;

  & > li {
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #dae4e8;
    width: 100%;
  }
`

export const Quantity = styled.span`
  margin-top: 12px;
  font-weight: 700;
  font-size: 22px;
  color: #383737;
`;