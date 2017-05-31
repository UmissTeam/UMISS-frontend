import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from "umiss-frontend/config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('heart-beat');
  },

  afterModel: function(model) {
    console.log('after model');
    var n1 = model.content.length;
    var that = this;
    console.log(that.controllerFor('dashboard.heartbeat.index'));
    var fn = function() {
      Ember.run.later((function() {
        that.store.findAll('heart-beat').then(function(value) {
          var cont = that.controller;
          if (n1 != value.content.length) {
            cont.set('model', 0);
            that.controllerFor('dashboard.heartbeat.index').set('model', value);
            n1 = value.content.length;
          }
        }, function(reason) {
          console.log("reject");
        });
        fn();
      }), ENV.requestTime);
    }
    fn()
  },

});
