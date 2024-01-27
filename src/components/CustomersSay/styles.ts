import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  padding-top: 4rem;
  /* background-color: rgba(251, 218, 187, .3); */
  background-color: rgba(251, 218, 187, .3);
  position:relative;
  padding-bottom:6rem;

  @media (max-width:767px) {
    width: 100%;
    padding:2rem;
  }

  ::before, ::after {
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: rgba(251, 218, 187, 0.3);
    z-index: -1;
    left: -50%;
    top: 0;
  };

  @media (max-width:767px) {
    ::before, ::after {
    
      display:none;
    }
  }

   ::after {
    left: auto;
    right:-50%;
  };

`;

export const Title = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-wrap: wrap;
  };

  @media (max-width: 606px) {
    align-items: center;
    flex-direction: column;
  };
`;