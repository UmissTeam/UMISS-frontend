import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  chartOptions: Ember.computed('labels', function() {
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Batimentos cardíacos do Paciente'
      },
      xAxis: {
        categories: this.get('labels')
      },
      yAxis: {
        title: {
          text: 'Batimentos por minuto (BPM)'
        }
      },
      tooltip: {
        valueSuffix: ' BPM'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    }
  }),

  data: Ember.computed('model', function() {
    return this.get('model').map(function(item) { return item.get('beats') })
  }),

  labels: Ember.computed('model', function() {
    return this.get('model').map(function(item) { return moment(item.get('created')).format("DD-MM, HH:mm:ss") })
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
