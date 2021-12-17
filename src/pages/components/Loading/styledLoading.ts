import styled from 'styled-components';


export const LoadingStyled = styled.div`
  .loading {
    font-size: 18px;
    animation: myRotation 2s infinite linear;

    @keyframes myRotation {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }
`