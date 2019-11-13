import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { View } from "./components/view/View";
import demoData from "./.demo.data.json";

class App extends Component {
  componentDidMount() {
    // Simulates AL invoking JavaScript
    window.SendData(demoData);
  }

  render() {
    return (
      <View />
    );
  }
}

export default hot(module)(App);
