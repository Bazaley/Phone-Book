import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { RxUpdate } from 'react-icons/rx';

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border: 2px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  background: linear-gradient(
    130deg,
    #008080 50%,
    #20b2aa,
    #00ffff,
    #48d1cc,
    #00ced1
  );
  opacity: 0.9;

  @media screen and (min-width: 767px) {
    width: calc((100% - 90px) / 4);
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: transparent;

  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ImCrossStyled = styled(ImCross)`
  color: black;
  transition: color 250ms linear;

  &:hover {
    color: red;
  }
`;

export const GrUpdateStyled = styled(RxUpdate)`
  color: black;
  transition: color 250ms linear;

  &:hover {
    color: white;
  }
`;
