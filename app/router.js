import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCliFactoryGuyExampleENV.locationType
});

Router.map(function() {
  this.route("cars", {path: '/'});
});

export default Router;
