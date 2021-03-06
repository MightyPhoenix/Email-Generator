import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;

// const Routes = [{exact:true,path:"",component:Home}]
