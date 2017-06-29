import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from "umiss-frontend/config/environment";

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.get('store').findAll('galvanic-resistance');
  },

  afterModel: function(model) {
    var n1 = model.content.length;
    var store = this.store;
    var that = this;
    var fn = function() {
      Ember.run.later((function() {
        that.store.findAll('galvanic-resistance', {reload: true}).then(function(value) {
          var cont = that.controller;
          if (n1 != value.content.length) {
            cont.set('model', [])
            cont.set('model', value);
            n1 = value.content.length;
          }
        }, function(reason) {
        });
        fn();
      }), ENV.requestTime);
    }
    fn()
  }
});
