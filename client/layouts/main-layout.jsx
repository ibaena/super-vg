import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export const MainLayout = ({content}) => (

<div className="wrapper-main">
    <header>
        Header
    </header>

    <main>
      {content}
    </main>

    <footer>
        Footer
    </footer>


</div>

)
