import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    signup(username, password, token) {
      this.controller.set('isSigningUp', true);
      Ember.$.ajax({
        url: ENV.host + '/api/monitors',
        type: 'POST',
        data: {
          username: username,
          password: password,
          token: token
        },
      }).then((response) => {
          this.get('session').authenticate('authenticator:drf-token-authenticator', username, password)
          this.controller.set('SignedUp', true);
      })
        .catch((response) => {
          this.controller.set('error', true)
          this.controller.set('isSigningUp', false);
        });
      // .finally((response) => this.controller.set('isSigningUp', false));
    }
  }
});
