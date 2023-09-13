import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/navbar'
import States from './components/class28';
import Garage from './components/class29';
import Computer from './components/class 27';
import EmployeeDetails from './components/state';
import Test from './components/class 30';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import React, { Component } from 'react';
import AutoCompletedText from './class43'
import './App.css';
import Axiosexample from './NoPage';
import WeatherScreen from './weather';
import Music from './music'
import RollDice from './roll-dice/RollDice';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {
  return (
    <>
    <NavBar></NavBar>
    <Music></Music>
    <RollDice></RollDice>
    <WeatherScreen></WeatherScreen>
    <Axiosexample>np</Axiosexample>
    <AutoCompletedText></AutoCompletedText>
     <EmployeeDetails></EmployeeDetails>
     <States></States>
     <Garage></Garage>
     <Computer></Computer>
     <Test></Test>
  
    </>
  );
}


