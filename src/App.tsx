import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Home from './Home/Home';
import Details from './Details/Details';
import Connect from './Details/Connect';
import ConnectTeacher from './Details/ConnectTeacher';
import ConnectLesson from './Details/ConnectLesson';
import AddTeacher from './Details/AddTeacher';
import AddLesson from './Details/AddLesson';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Details path="/getStudents"/>
        <Details path="/addStudent"/>
        <Connect path="connect/:id"/>
        <ConnectTeacher path="connectTeacher/:id"/>
        <ConnectLesson path="connectLesson/:id"/>
        <AddTeacher path="/addTeacher"/>
        <AddLesson path="/addLesson"/>
      </Router>
    </div>
  );
}

export default App;
