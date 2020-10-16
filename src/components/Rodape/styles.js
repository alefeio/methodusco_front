import styled from 'styled-components';

export const Rod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2e55a3;
  padding: 20px 30px;

  span {
    color: #000 !important;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;

    ul {
      width: 100%;
    }

    ul li img {
      margin: 0 auto;
    }
  }

  ul {
    max-width: 250px;
    margin: 20px;
  }

  ul:first-child {
    border-left: 6px solid #487f2b;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li a {
    color: #000;
    font-size: 16px;
    text-transform: uppercase;
    padding: 5px;
  }

  ul li img {
    margin: 4px 8px 0 0;
  }

  ul li h2 {
    font-size: 22px;
    text-transform: uppercase;
  }
`;
