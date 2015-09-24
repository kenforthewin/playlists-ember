import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playlists', function() {
      this.route('playlist', { path: '/:playlist_id' });
    });
  this.route('login');
  this.route('signup');
  this.route("secret", {path: '/'});
});

export default Router;
