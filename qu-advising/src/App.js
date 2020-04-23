import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./loginForm";
import NotFound from "./components/notFound";
import Header from "./components/header";
import Footer from "./components/footer";


import './App.css';

 function App() {
    
    return (
      <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" component={LoginForm}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found" />
      </Switch>
      <Footer/>
      </React.Fragment>
    
 );
}


export default App;