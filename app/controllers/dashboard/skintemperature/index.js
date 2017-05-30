import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10).map(function(hour) { return moment(hour).format("DD-MM, HH:mm") }),
      datasets: [{
        label: 'Temperatura em Celsius',
        data: this.get('model').mapBy('temperature').slice(-10)
      }]
    }
  }).property('model')
});
