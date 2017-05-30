import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10),
      datasets: [{
        label: 'Batimentos cardíacos por minuto',
        data: this.get('model').mapBy('beats').slice(-10)
      }]
    }
  }).property('model')
});
