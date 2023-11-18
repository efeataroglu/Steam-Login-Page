import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 500px;
  background-color: #181a21;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 320px;
  }
`;

export const Logo = styled.img`
  width: 270px;
  margin-bottom: 10px;
  margin-left: 35px;
`;

export const StyledDiv = styled.div`
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label``;
