import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('heart-beat');
  },

  afterModel: function(model) {
    var that = this;
    var fn = function() {
      Ember.run.later((function() {
        var resp = that.store.findAll('heart-beat');
        that.controller.set('model', resp);
        fn();
      }), 500);
    }
    fn()
  },

});
