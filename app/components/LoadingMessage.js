var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;

var LoadingMessage = React.createClass({

  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },

  getDefaultProps: function () {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    };
  },

  componentDidMount: function () {
    var stopper = this.originalText + '...';
    this._addDots(stopper);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  _addDots: function (stopper) {
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this._setText(this.originalText);
      } else {
        this._setText(this.state.text + '.');
      }
    }.bind(this), this.props.speed);
  },

  _setText: function(text) {
    this.setState({
      text: text
    });
  },

  render: function functionName() {
    return (
      <div style={styles.container}>
        <h1 style={styles.content}>{this.state.text}</h1>
      </div>
    );
  }
});

module.exports = LoadingMessage;
