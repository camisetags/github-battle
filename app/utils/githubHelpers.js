var axios = require('axios');

var id = "7de606791248aca82512";
var sec = "59e8ce4926f95dbe6f27bfd2778692f0cbf95740";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersinfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      });
    }).catch(function(err) {
      console.warn('Error in getPlayersinfo', err);
    });
  }
};

module.exports = helpers;
