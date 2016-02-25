import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  content: Ember.computed.alias('controllers.application.content'),
  
  actions: {
    clearDone(card, cardIndex) {
      let checklist = card.checklist || [];
      let clength = checklist.length;
      
      for(let i = 0; i < clength; i++){
        if (checklist[i].done) {
          checklist.splice(i, 1);
        }
      }
      
      let content = this.get('content');
      content[cardIndex] = card;
    },
    
    deleteCard(/*card*/) {
      
    }
  }
});