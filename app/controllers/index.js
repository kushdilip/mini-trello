import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  content: Ember.computed.alias('controllers.application.content'),
  
  actions: {
    clearDone(card) {
      let checklist = card.checklist || [];
      
      checklist.forEach((item, index, array) => {
        if (Ember.get(item, 'done')) {
          array.removeObject(item);          
        }
      });
    },
    
    deleteCard(/*card*/) {
      
    }
  }
});