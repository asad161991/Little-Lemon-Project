import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 2rem;
  padding-top: 5rem;
  padding-bottom: 15rem;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0;
    width: 100%;
  };

`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  height: fit-content;
  display: flex;
  flex-direction: column;
  width:43%;

  @media (max-width: 767px) {
    width:100%;
  };

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    width: fit-content;
  };

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
    width: fit-content;
  };

  p {
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.primary};
  };

  @media (max-width: 966px) {
    align-items: center;
    text-align: center;
  };
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  img {
    object-fit: cover;
    width: 24.7rem;
    height: 33.8rem;
  };

  img:first-of-type {
    left: -12rem;
    top: 12rem;
    z-index: 2;
    /* border: 5px solid red; */
    position: absolute;
  };

  @media (max-width: 996px) {
    display: none;
  };
`;