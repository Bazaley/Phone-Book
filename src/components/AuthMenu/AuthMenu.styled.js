import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Button = styled.button`
  display: block;

  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: color 250ms linear;
  min-width: 70px;
  min-height: 33px;

  &:hover {
    color: black;
  }
`;

export const UserBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
