import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('beats').slice(-10),
      datasets: [{
        label: 'test',
        data: this.get('model').mapBy('beats').slice(-10)
      }]
    }
  }).property('model')
});
