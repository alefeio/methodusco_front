import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Ladodireito = styled.div`
  background: #efefef;
  margin: 2rem auto !important;
  max-width: 60%;
  text-align: center;
  border-radius: 5px;
  padding: 2rem !important;
  background: #f0f1f4;
  color: green;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ModUl = styled.ul`
  display: flex;
`;

export const ModUl2 = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Prod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px;

    div {
      padding: 0;
      margin: 0;
      border-left: 0;

      img {
        width: 50%;
      }
    }
  }

  div {
    width: 100%;
    padding: 0 2rem;

    h1 {
      font: 28px Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: green;
    }

    h3 {
      margin-left: 1rem;
      color: green;
    }

    ul {
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 7px;
        margin: 3px;
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;

        a {
          display: flex;
          align-items: center;

          small {
            color: green;
            font-size: 1.1rem !important;
            margin: 0 0 0 0.5rem;
          }

          img {
            margin-left: 1rem;
            width: 15px;
          }
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }

    h3 {
      margin-top: 10px;
    }

    h1 {
      margin-bottom: 25px;
    }
  }

  div:first-child {
    border-left: 0;
  }
`;

export const Default = styled.small`
  border: 0;
  padding: 0.8rem;
  background: #004b85;
  border-radius: 4px;
  color: #fff;
  padding: 1.5rem;
  font-size: 2rem;
  margin: 1rem;
  cursor: pointer;

  a {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Danger = styled.small`
  border: 0;
  padding: 0.8rem;
  background: red !important;
  border-radius: 4px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
`;

export const Titulo = styled.h1`
  font: 24px Georgia, 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #2e55a3 !important;
  margin: 3rem auto 1rem !important;
  text-align: center;
`;

export const Titulo2 = styled.h1`
  font: 20px Georgia, 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #2e55a3 !important;
  margin: 0 auto 3rem !important;
  text-align: center;
`;

export const Titulo3 = styled.h1`
  font: 18px Georgia, 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #2e55a3 !important;
  margin: 2rem 0 0 !important;
`;

export const Box1 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 2rem auto !important;
  text-align: center;
  border: 1px solid #2e55a3;
  padding: 0 !important;
  background: #efefef;
  position: relative;

  strong {
    position: absolute;
    left: -3%;
    top: 3%;
    transform: rotate(270deg);
  }

  strong:first-child {
    left: 95% !important;
    top: 101% !important;

    transform: rotate(0deg);
  }

  small {
    position: absolute;
    top: 30%;
  }

  div {
    margin: 0;
    padding: 0;
  }

  a {
    color: #000;
  }

  h2 {
    margin: 4rem 0;
  }

  @media (max-width: 720px) {
    strong {
      left: -8%;
    }

    strong:first-child {
      left: 87% !important;
    }

    div {
      overflow: scroll;
    }
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: #efefef;
    height: 50px;
    color: black;
    border-top: 1px solid blue;
    width: 100%;
    margin: 0 auto;
  }

  span:first-child {
    color: white;
    min-height: 2rem;
    height: ${(props) => props.height}px;
    background: ${(props) => props.bg};
    width: 90%;
    border: 0;
  }

  @media (max-width: 720px) {
    p {
      transform: rotate(270deg);
      margin-top: 0.4rem;
    }

    span {
      align-items: center;
    }

    span:first-child {
      align-items: flex-start;
      width: 80%;
    }
  }
`;

export const Numeros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 50px;
  background: blue;
  color: white;
  border-top: 1px solid white;
  border-left: 1px solid blue;

  :first-child {
    border-top: 0;
  }

  :last-child {
    background: #efefef;
    border-top: 1px solid blue;
  }

  @media (max-width: 720px) {
    p {
      transform: rotate(270deg);
    }

    span {
    }
  }
`;

export const Voltar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f0f1f4;

  ul {
    display: flex;
  }

  a {
    color: #000;
  }

  small {
    padding: 0.5rem 1rem;
    color: #555;
  }
`;
