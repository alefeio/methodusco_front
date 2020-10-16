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
      align-items: center;
      justify-content: center;
    }

    h1 {
      font: 28px Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: green;
    }

    h2 {
      display: flex;

      img {
        margin: 0 1rem;
      }
    }

    h3 {
      margin-left: 1rem;
      color: green;
    }

    ul {
      margin: 0 0 1rem 1rem;
      list-style: disc;

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
  margin: 2rem auto !important;
  max-width: 60%;
  text-align: center;
  border: 1px solid #2e55a3;
  border-radius: 5px;
  padding: 2rem !important;
  background: #f0f1f4;
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
