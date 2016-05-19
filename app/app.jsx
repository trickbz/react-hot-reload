import React from "react";
import { render } from 'react-dom';
import Greeting from "./greeting.jsx";

render(
  <Greeting name="World"></Greeting>,
  document.getElementById('app')
);