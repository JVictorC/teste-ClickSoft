import styled from 'styled-components';

export const HistoryUsersStyled = styled.main`
  margin: 45px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;

  .clear-history {
    display: flex;
    align-items: center;
    position: absolute;
    right: 30px;
    border: none;
    background-color: white;
    font-size: 20px;
    cursor: pointer;
    transition: 1s;

    :hover {
      color: #372763;
      font-size: 23px;
    }
  }

  .title {
    color: #372763;
    font-weight: 300;
    font-size: 45px;
  }

  .subTitle {
    color: #33adab;
    font-weight: 500;
    font-size: 25px;
  }
`;

export const ListUsersHistory = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const DataUserStyled = styled.li`
  display: flex;
  position: relative;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px gray;
  min-width: 350px;
  min-height: 350px;
  border-radius: 15px;
  transition: 0.5s;

  img {
    border-radius: 15px;
  }

  .excluir {
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 25px;
    color: red;
  }

  :hover {
    transform: scale(1.03);
  }
`;
