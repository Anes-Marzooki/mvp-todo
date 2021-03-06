import React from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

function App() {
  return (
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              
            </a>
            <Link to="/" className="navbar-brand">Kinda Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">My Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create a new Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
    </Router>
  );
}

export default App;
