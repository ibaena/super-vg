import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
    <div >
      <div className="footer-logo">
        <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo image" />
      </div>
        <ul>
          <li><a href="javascript:void(0)">About</a></li>
          <li><a href="javascript:void(0)">Contact</a></li>
          <li><a href="javascript:void(0)">Products</a></li>
        </ul>

        <div className="footer-secondary-links">
          <ul>
            <li><a href="javascript:void(0)">Terms and Conditions</a></li>
            <li><a href="javascript:void(0)">Privacy Policy</a></li>
          </ul>

          <ul className="footer-social">
            <li><a href="javascript:void(0)">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/facebook-logo-circle.png" alt="Facebook" />
              </a></li>
            <li><a href="javascript:void(0)">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/twitter-logo-circle.png" alt="Twitter" />
            </a></li>
            <li><a href="javascript:void(0)">
              <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/youtube-logo-circle.png" alt="YouTube" />
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}
