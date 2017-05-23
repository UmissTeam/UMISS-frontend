import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from "../config/environment";

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  // authenticatedAjax: Ember.inject.service(),
  sessionAuthenticated() {
    this._super(...arguments);
    this.loadMonitor();
  },
  loadMonitor() {
    if (!this.get('session.isAuthenticated'))
    // {
      return;
    // }
    // const url = ENV.host + '/api/monitors/me';
    // const request = this.get('authenticatedAjax').request(url);
    // request.then((monitorData) => {
      // this.store.pushPayload(monitorData);
      // const monitor = this.store.peekRecord('monitor', monitorData.data.id);
    this.store.findRecord('monitor', 'me').then (monitor => {
      this.set('session.currentMonitor', monitor);

    });
  },
  beforeModel() {
    this.loadMonitor();
  }
});
