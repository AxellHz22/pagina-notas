import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavContainer>
      <h1>Colmena de <span>Tareas</span></h1>  
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`  
  padding: 1em;
  font-size: 12px;
  text-align: left;
  color: white;
`;