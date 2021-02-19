import styled from 'styled-components';

export const Bar = styled.div`
  background: #e6e6e6;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 1rem 3rem;

  ul {
    display: flex;

    @media (max-width: 400px) {
      li {
        display: none;
      }

      li:first-child {
        display: block;
      }
    }
  }

  ul li {
    margin: 2px;
    padding: 5px 2px;
  }

  ul li a {
    color: #4d4d4d;

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    font-family: 'Trebuchet MS', 'Times New Roman', Times, serif;
    color: green !important;
  }
`;
