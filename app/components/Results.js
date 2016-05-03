var React = require('react');
var PropTypes = React.PropTypes;

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

function puke(obj) {
  return <pre> {JSON.stringify(obj, 2, ' ')} </pre>
}

function Results(props) {
  return (
    <div>Results: {puke(props)}</div>
  );
}

module.exports = Results;
