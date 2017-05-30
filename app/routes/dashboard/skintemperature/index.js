import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('skin-temperature');
  },

  afterModel: function(model) {
    // console.log('after model');
    var n1 = model.content.length;
    var that = this;
    // console.log(that.controllerFor('dashboard.skintemperature.index'));
    var fn = function() {
      Ember.run.later((function() {
        that.store.findAll('skin-temperature').then(function(value) {
          var cont = that.controller;
          if (n1 != value.content.length) {
            cont.set('model', 0);
            that.controllerFor('dashboard.skintemperature.index').set('model', value);
            n1 = value.content.length;
          }
        }, function(reason) {
          // console.log("reject");
        });
        fn();
      }), 1000);
    }
    fn()
  },

});
