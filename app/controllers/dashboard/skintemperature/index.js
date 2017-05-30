import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10),
      datasets: [{
        label: 'Temperatura em Celsius',
        data: this.get('model').mapBy('temperature').slice(-10)
      }]
    }
  }).property('model')
});
