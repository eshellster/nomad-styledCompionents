import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 30px;
`;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };
  render() {
    return (
      <Container>
        <Title>Open up App.js to start working on your app!</Title>
      </Container>
    );
  }
}
