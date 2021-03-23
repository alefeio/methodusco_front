import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Ladodireito = styled.div`
  max-width: 25%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem !important;
  font-weight: bold;
  font-size: 16px;
  color: green;
  border-radius: 5px;
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

  div {
    width: 100%;
    padding: 0 2rem;

    div {
      display: flex;
    }

    h1 {
      font: 28px 'Trebuchet MS', 'Times New Roman', Times, serif;
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
        font-family: 'Trebuchet MS', 'Times New Roman', Times, serif;

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

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px;

    div {
      padding: 0;
      margin: 0;
      border-left: 0;
    }
  }
`;

export const Default = styled.small`
  border: 0;
  padding: 0.8rem;
  /* border: 1px solid #ddd; */
  background: #135c58;
  color: #fff;
  padding: 1.5rem;
  font-size: 1.5rem;
  margin: 1rem;
  cursor: pointer;

  a {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    padding: 3rem;
    width: 90%;

    a {
      flex-direction: row;
    }
  }
`;

export const Default2 = styled.small`
  border: 0;
  /* border: 1px solid #ddd; */
  background: #135c58;
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 4px;
  margin: 1rem;
  cursor: pointer;

  a {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    padding: 3rem;
    width: 90%;

    a {
      flex-direction: row;
    }
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
  font: 24px 'Trebuchet MS', 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #135c58 !important;
  margin: 3rem auto 1rem !important;
  text-align: center;
`;

export const Titulo2 = styled.h1`
  font: 20px 'Trebuchet MS', 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #135c58 !important;
  margin: 2rem auto 0 !important;
  text-align: center;
`;

export const TituloVermelho = styled.h1`
  font: 16px 'Trebuchet MS', 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  background: red;
  color: #fff !important;
  width: 50%;
  margin: 0 auto !important;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

export const Titulo3 = styled.h1`
  font: 18px 'Trebuchet MS', 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #000 !important;
  margin: 2rem auto !important;
  text-align: center;
`;

export const Box1 = styled.div`
  margin: 2rem auto !important;
  max-width: 60%;
  text-align: center;
  padding: 2rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  p {
    margin: 0.5rem 0;
    text-align: left;

    a {
      padding: 0.3rem 0.7rem;
      margin: 0.2rem;
      border-radius: 3px;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin: 0 0.5rem 0 0;
      }
    }
  }

  @media (max-width: 720px) {
    max-width: 90%;

    div {
      flex-direction: column;
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
