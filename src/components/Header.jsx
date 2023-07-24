import styled from "styled-components";

//шапка с поиском

function Header({ children }) {
  return <HeaderSearch>{children}</HeaderSearch>;
}

const HeaderSearch = styled.header`
  padding: 10px 0px;
`;

export default Header;
