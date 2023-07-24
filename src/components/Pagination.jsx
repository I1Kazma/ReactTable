import React from "react";
import styled from "styled-components";

//Пагинация страниц

export default function Pagination({ activePage, countPages, toPage }) {
  const getWindowWidth = () => {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  };

  const isSmallScreen = getWindowWidth() <= 500;

  return (
    <PaginationWrapper style={isSmallScreen ? { padding: "15px 20px 15px 10px" } : { fontSize: "24px" }}>
      <Left>
        <Button
          
          onClick={() => toPage(activePage - 1)}>
          Назад
        </Button>
      </Left>
      <Center>
        {Array.from({ length: countPages }, (v, k) => k + 1).map((page) => {
          if (page === activePage)
            return (
              <ButtonLink key={page} style={{ color: "#7EBC3C" }}>
                {page}
              </ButtonLink>
            );
          else
            return (
              <ButtonLink key={page} onClick={() => toPage(page)}>
                {page}
              </ButtonLink>
            );
        })}
      </Center>
      <Right>
        <Button
        
          onClick={() => toPage(activePage + 1)}>
          Далее
        </Button>
      </Right>
    </PaginationWrapper>
  );
}

const ButtonLink = styled.button`
  border: none;
  background-color: transparent;
  color: #474955;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #474955;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

const Center = styled.div`
  font-size: 18px;
  color: #000;
  display: flex;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
`;
