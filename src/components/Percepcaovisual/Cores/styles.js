import styled from 'styled-components';
import { darken } from 'polished';

export const Prod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 10rem;
  white-space: nowrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 5rem;

    span {
      font: 3rem Georgia, 'Times New Roman', Times, serif;
      color: green;
      margin-bottom: 5rem;
    }

    button {
      border: 0;
      padding: 1rem 2rem;
      background: #004b85;
      border-radius: 4px;
      color: #fff;
      font-size: 2rem;
    }

    h1 {
      font: 4rem Georgia, 'Times New Roman', Times, serif;
      text-transform: uppercase;
      color: green;
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
        font: 3rem Georgia, 'Times New Roman', Times, serif;
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

    div {
      display: flex;
      flex-direction: row;

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

  @media (max-width: 720px) {
    padding: 10px;
    text-align: center;

    div {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
`;

export const ListaProdutos = styled.ul`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  grid-gap: 50px !important;
  padding: 50px;

  strong {
    color: ${(props) => props.cor};
    font: 6rem Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
  }

  li {
    display: flex;
    align-items: center;

    button {
      background: #004b85;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 1rem 3rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#004b85')};
      }
    }

    span {
      font-size: 5rem;
      color: green;
    }

    img {
      margin-left: 1rem;
    }
  }
`;

export const ListaCores = styled.div`
  background: #000055;
  border-radius: 4px;
  padding: 5rem;

  li {
    display: flex;
    align-items: center;

    button {
      background: #004b85;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 1rem 3rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#004b85')};
      }
    }

    span {
      font-size: 5rem;
      color: green;
    }

    img {
      margin-left: 1rem;
    }
  }

  @media (max-width: 720px) {
    padding: 1rem 3rem !important;
  }
`;

export const Strong = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  color: #41ad49;

  img {
    margin-left: 1rem;
  }
`;

export const Strong2 = styled.strong`
  color: ${(props) => props.cor};
  font: 6rem Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
`;
