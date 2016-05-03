var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var PropTypes = React.PropTypes;


function puke(object) {
  return (
    <pre>{JSON.stringify(object, null, ' ')}</pre>
  );
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

function ConfirmBattle (props) {
  var element;
  if (props.isLoading) {
    element = (<p> Loading... </p>);
  } else {
    element = (
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        <h1>Confirm players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'> Reselect Players </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return element;
}

module.exports = ConfirmBattle;
