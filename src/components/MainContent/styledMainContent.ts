import styled from 'styled-components';

export const MainContentStyled = styled.section`
  margin: 50px;
  display: flex;
  flex: 1;
  justify-content: center;

  .loading {
    font-size: 100px;
    color: #553f8f;
  }
`;

export const InitialPreview = styled.article`
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  p {
    font-size: 20px;
    color: #553f8f;
  }

  .icon-github {
    margin: 0 10px;
    font-size: 30px;
  }
`;
