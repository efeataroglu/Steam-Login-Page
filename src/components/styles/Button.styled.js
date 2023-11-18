import styled from "styled-components";

export const StyledButton = styled.button`
  background: linear-gradient(90deg, #06bfff 0%, #2d73ff 100%);
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  margin: 10px 0px;
  width: 94%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
