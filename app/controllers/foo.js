import Ember from 'ember';

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

  data: Ember.computed('model', function() {
    return this.get('model').map(function(item) { return item.get('temperature') })
  }),

  labels: Ember.computed('model', function() {
    return this.get('model').map(function(item) { return moment(item.get('created')).format("DD-MM, HH:mm:ss") })
  }),

  chartData: Ember.computed('data', function() {
    return [
      {
        name: 'Paciente',
        data: this.get('data')
      }
    ]
  })
});
