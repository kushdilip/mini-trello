import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      Ember.Object.create({
        title: 'First card', 
        description: 'This is the most important thing to do today',
        checklist: Ember.A([
          Ember.Object.create({
            done: false,
            text: 'first item'
          }),
          Ember.Object.create({
            done: false,
            text: 'second item'
          })
        ])
      })
    ];
  },
});