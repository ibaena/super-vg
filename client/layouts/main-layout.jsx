import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../app/partials/Nav.jsx';
import Footer from '../app/partials/Footer.jsx';

export const MainLayout = ({content}) => (

<div className="wrapper-main">
    <header className="navigation" role="banner">
        <Nav />
    </header>
    <div className="wrapper-for-content-outside-of-footer">
        <main>
            {content}
        </main>
    </div>
        
    <footer className="footer-2" role="contentinfo">
        <Footer />
    </footer>


</div>

)
