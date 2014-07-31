FactoryGuy.define('car', {
  sequences: {
    carName: function(num) {
      return 'Car' + num;
    }
  },
  default: {
    brand: 'Toyota',
    name: FactoryGuy.generate('carName'),
    type: 'sedan'
  }
});

export default {};
