import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
`;

export const Prod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    div {
      display: flex;
      flex-direction: column;
      margin: 1rem;

      div {
        border: 1px solid #a9d18e;
        border-radius: 4px;
        padding: 2rem;
        margin: 1rem;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          li {
            margin: 0.5rem 1rem 0 2rem;

            a {
              color: #111;

              :hover {
                text-decoration: underline;
              }
            }

            small {
              background: green;
              color: white;
              padding: 0.2rem 0.6rem;
              margin: 0 0 0 0.5rem;
              border-radius: 50%;
            }

            span {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    padding: 1rem;
    text-align: center;

    div {
      flex-direction: column;
    }

    div {
      padding: 0;
      margin: 0;
      text-align: center;
      padding: 2rem;

      img {
        width: 50%;
      }
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 720px) {
    form {
      width: 100%;
    }
  }

  form {
    width: 90%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    border: 1px solid #a9d18e;
    border-radius: 4px;
    padding: 10px;

    input {
      background: #a9d18e;
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #111;
      font-weight: bold;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    textarea {
      background: #a9d18e;
      border: 0;
      border-radius: 4px;
      height: 100px;
      padding: 10px 15px;
      color: #111;
      font-weight: bold;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #a9d18e;
      font-weight: bold;
      color: #111;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#a9d18e')};
      }
    }

    a {
      color: #4c4738;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Titulo = styled.h1`
  font: 24px 'Trebuchet MS', 'Times New Roman', Times, serif !important;
  text-transform: none !important;
  color: #135c58 !important;
  margin: 3rem auto 1rem !important;
  text-align: center;
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
