import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Hero extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo Image" className="hero-logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt.</p>
          </div>
        </div>
    )
  }
}
