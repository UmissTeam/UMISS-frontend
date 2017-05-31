import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from "umiss-frontend/config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('skin-temperature');
  },

  afterModel: function(model) {
    var n1 = model.content.length;
    var store = this.store;
    var that = this;
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
        });
        fn();
      }), ENV.requestTime);
    }
    fn()
  },

});
