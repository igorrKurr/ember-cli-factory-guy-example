import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Cars', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Index', function() {
  visit('/');

  andThen(function() {
    equal($('.cars li').length, 3);
  });
});
