var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  clearInterval: function() {
    this.intervals.forEach(clearInterval);
  }
};

export default SetIntervalMixin;