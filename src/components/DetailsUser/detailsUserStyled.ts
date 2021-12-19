import styled from 'styled-components';

export const DetailsUserStyled = styled.main`
  padding: 25px;

  .title {
    text-align: center;
    font-size: 35px;
    color: #553f8f;
    font-weight: 300;
  }
`;

export const DataUserStyled = styled.section`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 25px;
  color: #33adab;
  font-weight: 300;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    height: 250px;

    @media (min-width: 800px) {
      height: 350px;
      border-radius: 50%;
    }
  }

  .data {
    p {
    }
  }
`;

export const RepositoryList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ListRepositories = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Repository = styled.li`
  box-shadow: 0 0 10px gray;
  padding: 30px;
  transition: .8s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #33adab;
  font-size: 18px;

  :hover {
    transform: scale(1.03)
  }

  h3 {
    color: #553f8f;
    font-weight: 300;
    font-size: 21px;
  }

  a {
    color: white;
    padding: 10px 20px; 
    background-color: #33adab;
  }

`;
