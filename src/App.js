import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

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
          <Button danger rotationTime={5}>
            hello
          </Button>
          <Button danger>hello</Button>
          <Anchor href="https://google.com">Go to Google</Anchor>
          <AsAnchor as="a" href="https://naver.com">
            Go to Naver
          </AsAnchor>
          <Button as="a" href="https://Daum.net">
            Go to Daum
          </Button>
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
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotatinon} ${props => props.rotationTime || 2}s linear
          infinite;
      `;
    }
  }};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const AsAnchor = styled(Button)`
  text-decoration: none;
`;

const rotatinon = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export default App;
