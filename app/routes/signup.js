import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Route.extend({

  actions: {
    signup() {
      let {username, password} = this.getProperties(
        'username',
        'password'
      );

      Ember.$.ajax({
        url: ENV.host + '/users',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/vnd.api+json',
        dataType: 'json'
      }).then((response) => {
        this.set('signupComplete', true);
      }, (xhr, status, error) => {
        this.set('error', xhr.responseText);
      });
    }
  }
});
