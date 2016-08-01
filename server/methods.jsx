let latestGamesUrl = 'http://www.giantbomb.com/api/games/?api_key=fbe627d6b404be0838e2c8cda8f595c1719eaa6c&format=json&sort=expected_release_month:desc&limit=1';



Meteor.methods({
  latestGames: function(){

    this.unblock();

    return HTTP.get(latestGamesUrl, {});
  },

});
