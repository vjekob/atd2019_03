import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { View } from "./components/view/View";
import demoData from "./.demo.data.json";

class App extends Component {
  render() {
    return (
      <View data={demoData} />
    );
  }
}

export default hot(module)(App);
