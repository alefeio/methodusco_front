import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;

  span {
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    background: rgba(255, 255, 255, 1);

    input {
      background: #efefef;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: #4c4738;
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #135c58;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#135c58')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px auto 0;
    height: 44px;
    background: red;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.09, 'red')};
    }
  }
`;

export const Prod = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;

  span {
    width: 90%;
    height: 50rem;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  h2,
  h4,
  p {
    margin: 0 auto;
    color: #3895d6;
  }

  h4 {
    margin: 1rem auto;

    a {
      display: flex;

      img {
        margin: 0 0.5rem 0 0;
      }
    }
  }

  p {
    color: #333;
  }

  div {
    padding: 50px;
    border-radius: 4px;
    width: 100%;
    text-align: center;

    img {
      height: 90%;
      width: 90%;
      margin: 50px auto;
    }

    h1 {
      font-size: 24px;
    }

    ul {
      margin-bottom: 10px;

      li {
        padding: 3px 0;
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
    background: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 3rem 1rem;
    text-align: center;

    span {
      width: 100%;
      height: 30rem;
      margin: 1rem 0 3rem !important;
      border: 0 !important;
      padding: 0 !important;
    }

    div {
      padding: 0;
      margin: 0;
      text-align: center;

      img {
        width: 50%;
      }
    }
  }
`;

export const Barra = styled.div`
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
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
