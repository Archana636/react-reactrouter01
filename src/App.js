import React from "react";
import { Link, Route,Switch } from "react-router-dom";
import Category from"./Category";
import Products from"./Products";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import "./style.css";

const Home = () => (
  <div>
  <h2>Home</h2>
  </div>
);
const Admin =() => (
  <div>
  <h2>Welcome Admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
    <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
    <li>
    <Link to ="/">Home</Link>
    </li>
    <li>
    <Link to ="/category">Category</Link>
    </li>
    <li>
    <Link to ="/products">products</Link>
    </li>
    <li>
    <Link to ="/admin">Admin Area</Link>
    </li>
    </ul>
     </nav>

     <Switch>
     <Route exact path="/"><Home/>
     </Route>
     <Route path="/category"><Category/>
     </Route>
      <Route path="/login"><Login/>
     </Route>
      <Route path="/products"><Products/>
     </Route>
     <PrivateRoute path="/admin" component={Admin}/>
     </Switch>
    </div>
  );
}
