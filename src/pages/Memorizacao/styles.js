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
    font-family: 'Trebuchet MS', 'Times New Roman', Times, serif;
    color: green !important;
  }
`;

export const Prod = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin-top: auto;
    position: relative;
    text-align: center;

    a {
      background: #135c58;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 1rem 3rem;
      margin: 1rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#135c58')};
      }
    }

    strong {
      position: absolute;
      margin-bottom: 5rem;

      img {
        width: 78%;
      }
    }

    span {
      font: 20rem 'Trebuchet MS', 'Times New Roman', Times, serif;
      color: green;
      margin-bottom: 5rem;
      position: absolute;
    }

    button {
      border: 0;
      padding: 1rem 2rem;
      background: #135c58;
      border-radius: 4px;
      color: #fff;
      font-size: 2rem;
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

      li {
        padding: 7px;
        margin: 3px;
        font-size: 18px;
        font-family: 'Trebuchet MS', 'Times New Roman', Times, serif;

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
  }

  div:first-child {
    border-left: 0;
    padding-bottom: 0;

    strong {
      width: 265px;
      height: 300px;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px;
    text-align: center;

    div {
      padding: 0;
      margin: 0;
      text-align: center;

      strong {
        img {
          width: 80%;
        }
      }

      span {
        font-size: 15rem;
      }
    }
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

export const Span = styled.span`
  color: ${(props) => props.color} !important;
  margin-bottom: 5rem;
  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  font-size: ${(props) => props.size}rem !important;
  font-family: 'Trebuchet MS', 'Times New Roman', Times, serif;

  @media (max-width: 720px) {
    left: ${(props) => props.left}%;
    top: ${(props) => props.top / 8}%;
    font-size: ${(props) => props.size / 2}rem !important;
  }
`;
