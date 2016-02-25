import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  content: Ember.computed.alias('controllers.application.content'),
  
  actions: {
    addChecklistItem(card){
      let checklist = card.checklist || Ember.A([]);
      checklist.pushObject(Ember.Object.create({
        done: false,
        text: ''
      }));
    },
    
    clearDone(card) {
      let checklist = card.checklist || Ember.A([]);
      
      checklist.forEach((item, index, array) => {
        if (Ember.get(item, 'done')) {
          array.removeObject(item);          
        }
      });
    },
    
    deleteCard(card) {
      let content = this.get('content');
      content.removeObject(card);
    }
  }
});