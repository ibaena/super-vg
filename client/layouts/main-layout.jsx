import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../app/partials/Nav.jsx';

export const MainLayout = ({content}) => (

<div className="wrapper-main">
    <header className="navigation" role="banner">
        <Nav />
    </header>

    <main>
      {content}
    </main>

    <footer>
        Footer
    </footer>


</div>

)
