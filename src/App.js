import React from "react";
import './App.css';
import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import AddUpdate from "./pages/AddUpdate";

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <ToastContainer position="top-center"/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/add" component={AddEdit}/>
        <Route  path="/update/:id" component={AddEdit}/>
        <Route  path="/view/:id" component={View}/>
        <Route  path="/about" component={About}/>
        <Route  path="/addUpdate/:id" component={AddUpdate}/>
      </Switch>
    </div>
    </>
  );
}

export default App;
