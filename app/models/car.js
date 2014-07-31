import DS from 'ember-data';

var Car = DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  brand: DS.attr('string'),

  fullName: function() {
    return "%@ %@".fmt(this.get('brand'), this.get('name'));
  }.property('name', 'brand')
});

Car.reopenClass({
  FIXTURES: [
    { id: 1, name: "Galardo", brand: "Lamborgini", type: 'coupe' },
    { id: 2, name: "Mustang", brand: "Ford", type: 'coupe' },
    { id: 3, name: "A8L", brand: "Audi", type: 'limousine' }
  ]
});


export default Car;
