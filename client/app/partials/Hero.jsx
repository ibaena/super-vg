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
      <div id="slider">

		    <input defaultChecked type="radio" name="slider" id="slide1" />
		    <input type="radio" name="slider" id="slide2" />
		    <input type="radio" name="slider" id="slide3" />
		    <input type="radio" name="slider" id="slide4" />
		    <input type="radio" name="slider" id="slide5" />


		  <div id="slides">
			  <div id="overflow">
				  <div className="inner">


        {
          this.state.latestGames.map((item) => {
            console.log(item);
              if(item.image === null){
                return <article key={item.id}>
                          <p className="info">{item.name}</p>
                          <img src="http://placehold.it/350x150"alt="Logo Image" className="hero-logo" />
                       </article>
              }else{
              return <article className="hero-content" key={item.id}>
                        <p className="info">{item.name}</p>
                        <img src={item.image.screen_url} alt="Logo Image" className="hero-logo" />
                     </article>
                   }
          })
        }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
