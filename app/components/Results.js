var React = require('react');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var styles = require('../styles');
var Link = require('react-router').Link;
var LoadingMessage = require('./LoadingMessage');
var PropTypes = React.PropTypes;


Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

function StartOverButton(props) {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  );
}

function Results(props) {
  if (props.isLoading) {
    return (<LoadingMessage />);
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        <h1>It's a tie!</h1>
        <StartOverButton />
      </div>
    );
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Looser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOverButton />
    </div>
  );
}

module.exports = Results;
