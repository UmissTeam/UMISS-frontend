import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' }, function() {
    this.route('skintemperature', function() {});
    this.route('galvanicresistance', function() {});
    this.route('heartbeat', function() {});
  });
  this.route('login');
  this.route('signup');
  this.route('foo');
});

export default Router;
