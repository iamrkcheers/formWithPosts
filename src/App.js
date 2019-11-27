import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FacebookPlugin from "./components/FacebookPlugin";
import Form from "./components/Form";
import Posts from "./components/Posts";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FacebookPlugin} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/posts" component={Posts} />
    </BrowserRouter>
  );
}

export default App;
