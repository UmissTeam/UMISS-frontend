import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  data: Ember.computed('model.@each', function() {
    return {
      labels: this.get('model').mapBy('created').slice(-10).map(function(hour) { return moment(hour).format("DD-MM, HH:mm:ss") }),
      datasets: [{
        label: 'Temperatura em Celsius',
        data: this.get('model').mapBy('temperature').slice(-10),
        backgroundColor: [
          'rgba(215, 250, 250, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
        ],
      }]
    }
  })
});
