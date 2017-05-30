import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10),
      datasets: [{
        label: 'Variação da resistência em Ohm',
        data: this.get('model').mapBy('resistance').slice(-10)
      }]
    }
  }).property('model')
});
