import styled from 'styled-components';

export const Box = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const Paragraph = styled.p`
  font-size: 17px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;
