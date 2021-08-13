import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Ladodireito = styled.div`
  margin: 2rem auto !important;
  max-width: 60%;
  text-align: center;
  padding: 2rem !important;
  color: #333;
  font-size: 1.2rem;
  border: 1px solid #ddd;

  @media (max-width: 720px) {
    max-width: 90%;
  }
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
    text-align: center;

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

      img {
        width: 50%;
      }
    }
  }
`;

export const Default = styled.small`
  border: 0;
  padding: 0.8rem;
  background: #135c58;
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
  margin: 0 auto 3rem !important;
  text-align: center;
`;

export const Titulo3 = styled.h1`
  font: 20px Trebuchet, Arial, Verdana !important;
  text-transform: none !important;
  color: #333 !important;
  margin: 1rem 0 0 !important;
  display: flex;

  img {
    margin: 0.5rem;
  }

  a {
    border: 0 !important;
    margin: 0 auto !important;
    width: 65%;
  }
`;

export const Titulo4 = styled.div`
  font: 20px Trebuchet, Arial, Verdana !important;
  text-transform: none !important;
  color: #333 !important;
  /* margin: 1rem 0 0 !important; */
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1.7rem 8.2rem !important;

  img {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }

  a {
    border: 0 !important;
    margin: 0 !important;
    align-items: center;
    justify-content: flex-start;
  }

  ul {
    margin: 0 !important;

    li {
      margin: 0 !important;
    }
  }

  @media (max-width: 720px) {
    margin: 0 0 0 2rem !important;

    img {
      width: 16px !important;
    }
  }
`;

export const Box1 = styled.div`
  margin: 2rem auto !important;
  max-width: 60%;
  padding: 2rem !important;

  span {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    margin: 1rem 0;

    div {
      text-align: left !important;

      P {
        color: #999;
        font-size: 1.7rem;
      }
    }

    a {
      margin-right: 2rem;
      color: red;
      font-size: 3rem;
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
    max-width: 90%;
  }
`;
