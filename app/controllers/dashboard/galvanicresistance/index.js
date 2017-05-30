import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  moment: Ember.inject.service(),
  data: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10).map(function(hour) { return moment(hour).format("DD-MM, HH:mm") }),
      datasets: [{
        label: 'Variação da resistência em Ohm',
        data: this.get('model').mapBy('resistance').slice(-10)
      }]
    }
  }).property('model')
});
