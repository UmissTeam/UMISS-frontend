import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  chartOptions: Ember.computed('labels', function() {
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Temperatura corporal do paciente.'
      },
      xAxis: {
        categories: this.get('labels')
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    }
  }),

  data: function() {
    var arr = this.get('model').sortBy('created').map(function(item) { return item.get('temperature') })
    var length = arr.length
    while (length > 40) {
      arr.removeAt(0)
      length = arr.length
    }
    return arr
  }.property('model'),

  labels: Ember.computed('model', function() {
    return this.get('model').sortBy('created').map(function(item) { return moment(item.get('created')).format("DD-MM, HH:mm:ss") })
  }),

  chartData: Ember.computed('data', 'model', 'labels', function() {
    return [
      {
        name: 'Paciente',
        data: this.get('data')
      }
    ]
  })
});
