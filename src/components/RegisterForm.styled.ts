import styled from 'styled-components';

export const Form = styled.form`
  margin: auto;
  border: 2px solid black;
  width: fit-content;
  border-radius: 5px;
  padding: 10px 40px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  label {
    text-align: left;
  }
`;
export const Input = styled.input`
  margin: 10px 0;
  width: 250px;
  padding: 4px 10px;
`;

export const RegisterBtn = styled.button`
  margin-top: 20px;
`;
