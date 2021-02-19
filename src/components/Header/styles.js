import styled from 'styled-components';
import { darken } from 'polished';

export const Img = styled.img`
  width: 40px;
  height: 40px;
  display: none;

  @media (max-width: 720px) {
    display: block;
    z-index: 100;
  }
`;

export const Container = styled.div`
  padding: 0 10px;
`;

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    max-height: 90px;
    max-width: 250px;
    min-width: 100px;
    flex: 1;
    margin-right: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Nav = styled.nav`
  z-index: 99 !important;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
  }

  ul li a {
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    margin: 0 2px;
    transition: 0.2s;
    font-weight: bold;

    &:hover {
      color: ${darken(0.2, '#fff')};
    }
  }

  ul li input {
    width: 150px;
    background: transparent;
    border: 1px solid #c2a549;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    font-size: 12px;
    background: url() no-repeat 120px center;
    background-size: 10%;

    &::placeholder {
      color: #222;
    }
  }

  @media (max-width: 720px) {
    display: ${(props) => (props.exibir ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);

    ul {
      flex-direction: column;
    }

    ul li {
      margin: 5px;
      padding: 0.5rem;
    }

    ul li a {
      font-size: 2.4rem;
      color: #fff;

      &:hover {
        color: #c2a549;
      }
    }
  }
`;

export const Profile = styled.div`
  flex: 1;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #00170e;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #00170e;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #00170e;
    }
  }

  img {
    width: 32px !important;
    height: 32px !important;
    border-radius: 50%;
  }
`;
