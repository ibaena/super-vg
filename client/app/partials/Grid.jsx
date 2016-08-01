import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Grid extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="grid-items">
        <a href="javascript:void(0)" className="grid-item">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Grid Item</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item grid-item-big grid-item-image">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Grid Item With an Image</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item grid-item-big">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Another Wide Item</h1>
          <p>Lorem ipsum consectetur dolor sit amet, consectetur adipisicing elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Last Grid Item</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Last Grid Item</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>A Grid Item</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
        <a href="javascript:void(0)" className="grid-item">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
          <h1>Item</h1>
          <p>Lorem ipsum dolor sit amet, elit. Rem, illum.</p>
        </a>
      </div>
    )
  }
}
