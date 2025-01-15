import styled from 'styled-components';

export const FormTag = styled.form`
  margin: 0 auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 5px 5px 16px #756a6a;
  background: linear-gradient(
    130deg,
    #008080,
    #20b2aa,
    #00ffff,
    #48d1cc,
    #00ced1
  );
  opacity: 0.9;

  @media screen and (min-width: 1200px) {
    width: 500px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 23px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  outline: none;
  background-color: transparent;
  font-family: Acme;
  font-size: 19px;

  &::placeholder {
    font-family: Acme;
    font-size: 19px;
    color: black;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;

    &::placeholder {
      font-size: 22px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 45px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 35px;
  margin: 0 auto;
  border-radius: 4px;
  border: none;
  background-color: #008080;
  color: white;
  font-size: 17px;
  font-family: Acme;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    height: 45px;
    font-size: 22px;
  }
`;
