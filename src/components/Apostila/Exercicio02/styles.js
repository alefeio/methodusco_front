import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
`;

export const Barra = styled.div`
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  ul {
    display: flex;
  }

  ul li {
    margin: 2px;
    padding: 5px 2px;
  }

  ul li a {
    color: #4d4d4d;
  }

  h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: green !important;
  }
`;

export const Prod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 10rem;

  @media (max-width: 720px) {
    padding: 10px;
    text-align: center;

    div {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    strong {
      width: 100%;
      max-width: 265px;
      height: 300px;
    }

    span {
      font: 3rem Georgia, 'Times New Roman', Times, serif;
      color: green;
      font-weight: bold;
    }

    p {
      font: 5rem Georgia, 'Times New Roman', Times, serif;
      color: red;
      margin-bottom: 2rem;
      font-weight: bold;
    }

    button {
      border: 0;
      padding: 1rem 2rem;
      background: #004b85;
      border-radius: 4px;
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      font: 3rem Georgia, 'Times New Roman', Times, serif;
      color: green;
    }

    h3 {
      margin-left: 1rem;
      color: green;
    }

    ul {
      margin-bottom: 10px;
      display: flex;

      li {
        padding: 7px;
        margin: 3px;
        font-size: 18px;
        font-family: Georgia, 'Times New Roman', Times, serif;

        &:hover {
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

    small {
      margin: 3rem 0 0;
    }

    img {
      width: 100%;
    }

    div {
      a {
        background: #004b85;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 1rem 3rem;
        margin: 1rem;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.07, '#004b85')};
        }
      }
    }
  }

  div:first-child {
    padding: 5rem 0 2rem;
  }
`;

export const Strong = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem !important;
  padding: 0 !important;
  color: #41ad49;

  width: auto !important;
  max-width: auto !important;
  height: auto !important;

  img {
    margin-left: 1rem;
    width: 2.5rem !important;
    height: 2.5rem !important;
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
