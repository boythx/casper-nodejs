/*
  List of the actions to execute
*/

var AL = {
  
  actions: [],
  
  add: function(type, arg1, arg2) {
    
    var action = {type: type};
  
    if(action.type == 'then') {
      action.callbacks = [ 
        arg1, 
        arg2
      ];
    }

    AL.actions.push(action);

    // console.log(AL.actions.length + ' actions enregistrées');

    return AL;
  },

  next: function() {
    return (AL.actions.length > 0) ? AL.actions.splice(0, 1)[0] : null;
  }

};

module.exports = AL;
