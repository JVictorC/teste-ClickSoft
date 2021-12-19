import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const mainColor = '#553f8f';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  .search-form {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
      width: 80%;
    }
  }

  label {
    flex: 1;
    width: 90%;
    color: ${mainColor};
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15px 0;

    .menu-art {
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 800px) {
        width: 40%;
      }

      @media (min-width: 1200px) {
        width: 20%;
      }
    }

    .menu {
      font-size: 30px;
      margin: 0 15px;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        transform: scale(1.08);
      }
    }

    @media (min-width: 800px) {
      flex-direction: row;
      margin: 0;
    }
  }

  #search-input {
    margin: 0px 15px;
    width: 100%;
    padding: 15px 10px;
    border-radius: 15px;
    border-color: ${mainColor};
    font-size: 15px;
    @media (min-width: 1200px) {
      width: 60%;
    }
  }

  .search-button {
    padding: 10px 10px;
    width: 90%;
    border-radius: 15px;
    background-color: ${mainColor};
    color: white;
    border: none;

    @media (min-width: 1200px) {
      width: 150px;
      padding: 20px 10px;
    }
  }
`;
