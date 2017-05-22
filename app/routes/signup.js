import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Route.extend({

  actions: {
    signup(username, password, token) {
      Ember.$.ajax({
        url: ENV.host + '/api/monitors',
        type: 'POST',
        data: {
          username: username,
          password: password,
          token: token
        },
      }).then((response) => {
        this.controller.set('signupComplete', true);
      }, (xhr, status, error) => {
        this.set('error', error);
        console.log(error)
        this.controller.set('error', true)
      });
    }
  }
});
