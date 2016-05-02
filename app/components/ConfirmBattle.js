var React = require('react');
var styles = require('../styles');
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
          <div className='col-sm-6'>
            <p className='lead'>Player 1</p>
            {puke(props.playersInfo[0])}
          </div>
          <div className='col-sm-6'>
            <p className='lead'>Player 2</p>
            {puke(props.playersInfo[1])}
          </div>
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return element;
}

module.exports = ConfirmBattle;
