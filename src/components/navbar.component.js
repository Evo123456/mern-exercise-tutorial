// you would have to do this for every react component you create
import React, { Component } from 'react';
// Using React Router using link allows us to link to different routes
import { Link } from 'react-router-dom';

// CLASS EXTENDS THE COMPONENT OBJ.
export default class Navbar extends Component {

  render() {
    return (
      // Instead of CLASS we have CLASSNAME
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* NOTE USING <Link> TAG INSTEAD OF <a> TAG HERE 
            "To" instead of href 
            "ClassName" instead of "Class"
        */}
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}