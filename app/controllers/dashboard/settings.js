import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentMonitor: Ember.computed.alias('session.currentMonitor'),
  monitorData: Ember.Object.create(),

  actions: {
    updateToken(value) {
      this.set('monitorData.token', value);
    },
    save() {
      const attrsToSave = {};
      if (Ember.isPresent(this.get('monitorData.token'))) {
        attrsToSave.token = this.get('monitorData.token');
      }
      this.get('currentMonitor').setProperties(attrsToSave);
      this.get('currentMonitor').save().then(() => {
        this.set('saveMessage', true)
      });
    }
  }
});
