import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { View } from "./components/view/View";

class App extends Component {
  render() {
    return (
      <View data={[]} />
    );
  }
}

export default hot(module)(App);
