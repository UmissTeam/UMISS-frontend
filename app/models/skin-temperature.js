import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr('string'),
  created: DS.attr('string'),
  temperature: DS.attr('number')
});
