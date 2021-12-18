import styled from 'styled-components';

export const DataUserStyled = styled.section`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  box-shadow: 0 0 15px gray;
  cursor: pointer;
  transition: 1s;
  color: #553f8f;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 60%;
    padding: 0;
  }

  :hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 50%;
  }
`;
