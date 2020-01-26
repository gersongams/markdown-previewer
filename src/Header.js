import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  background: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5rem;
  background: #fcc200;
  box-sizing: border-box;
`;

const Header = ({ title }) => <StyledHeader>{title}</StyledHeader>;

export default Header;
