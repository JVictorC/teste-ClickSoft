import styled from 'styled-components';

export const DataUserStyled = styled.section`
  display: flex;
  width: 80%;
  padding: 15px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  box-shadow: 0 0 15px gray;
  cursor: pointer;
  transition: 1s;
  color: #553f8f;
  text-align: center;
  height: 500px;
  border-radius: 15px;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 70%;
    padding: 0;
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 50%;
    padding: 0;
  }

  h1 {
    font-weight: 300;
  }

  :hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 15px;
    @media (min-width: 800px) {
      border-radius: 50%;
    }
  }
`;
