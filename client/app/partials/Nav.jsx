import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (

        <div className="navigation-wrapper">
          <a href="javascript:void(0)" className="logo">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="Logo Image" />
          </a>
          <a href="javascript:void(0)" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
          <nav role="navigation">
            <ul id="js-navigation-menu" className="navigation-menu show">
              <li className="nav-link"><a href="javascript:void(0)">Products</a></li>
              <li className="nav-link"><a href="javascript:void(0)">About Us</a></li>
              <li className="nav-link"><a href="javascript:void(0)">Contact</a></li>
              <li id="js-navigation-more" className="nav-link more"><a href="javascript:void(0)">More</a>
                <ul className="submenu">
                  <li><a href="javascript:void(0)">Submenu Item</a></li>
                  <li><a href="javascript:void(0)">Another Item</a></li>
                  <li className="more"><a href="javascript:void(0)">Item with submenu</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
                      <li><a href="javascript:void(0)">Another Item</a></li>
                    </ul>
                  </li>
                  <li className="more"><a href="javascript:void(0)">Another submenu</a>
                    <ul className="submenu">
                      <li><a href="javascript:void(0)">Sub-submenu</a></li>
                      <li><a href="javascript:void(0)">An Item</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="navigation-tools">
            <div className="search-bar">
              <form role="search">
                <input type="search" placeholder="Enter Search" />
                <button type="submit">
                  <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png" alt="Search Icon" />
                </button>
              </form>
            </div>
          </div>
        </div>


    )
  }
}
