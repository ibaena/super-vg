import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Hero extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

    this.state = {
      latestGames: [],
     };

  }

 componentDidMount(){
   Meteor.call("latestGames",  {}, (error, res) => {
     if(error || res === undefined) {
       console.log("error:", error);
       Bert.alert( 'Something went wrong. Call Ivan!!', 'danger', 'fixed-top', 'fa-frown-o' );
     }else{
       console.log(res.data.results);
       this.setState ({
         latestGames: res.data.results,

       })
     }
   });

 }

  render() {
    return (
      <div className="hero">

        {
          this.state.latestGames.map((item) => {
            console.log(item);

              return <div className="hero-content" key={item.id}>
                        <p>{item.aliases}</p>
                        <img src={item.image.medium_url} alt="Logo Image" className="hero-logo" />
                     </div>

          })
        }

      </div>
    )
  }
}
