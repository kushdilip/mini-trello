import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: 'First card', 
        description: 'This is the most important thing to do today',
        checklist: [
          {
            done: false,
            text: 'first item'
          },
          {
            done: false,
            text: 'second item'
          }
        ]
      }
    ];
  },
});