import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('skin-temperature');
  },

  afterModel: function(model) {
    var that = this;
    var fn = function() {
      Ember.run.later((function() {
        var resp = that.store.findAll('skin-temperature');
        that.controller.set('model', resp);
        fn();
      }), 500);
    }
    fn()
  },

});
