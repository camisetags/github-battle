var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
      ? <p> Loading... </p>
      : <div> ConfirmBattle </div>
}

module.exports = ConfirmBattle;