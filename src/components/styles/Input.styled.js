import styled from "styled-components";

export const StyledInput = styled.input`
  width: 490px;
  border-radius: 2px;
  color: #fff;
  padding: 10px;
  background-color: #32353c;
  outline: none;
  font-size: 15px;
  grid-area: input;
  border: 1px solid #32353c;
  margin: 10px 5px;
  border: 1px solid ${({ isError }) => (isError ? "red" : "gray")};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 290px;
  }
`;
