var axios = require('axios');

var id = "7de606791248aca82512";
var sec = "59e8ce4926f95dbe6f27bfd2778692f0cbf95740";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      };
    });
}

function calculateScores(players) {
  return players.map(function(player) {
    return player.followers + 3 + player.totalStars;
  });
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
  },

  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {
        console.warn('Error in getPlayersInfo: ', err);
      });
  }
};

module.exports = helpers;
