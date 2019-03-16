import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Button>hello</Button>
          <Button danger>hello</Button>
          <Button as="a" href="http://google.com">
            Go to Google
          </Button>
          <AsAnchor as="a" href="http://naver.com">
            Go to Naver
          </AsAnchor>
        </Container>
      </Fragment>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#ff5722" : "#cddc39")};
`;

const AsAnchor = styled(Button)`
  text-decoration: none;
`;

export default App;
