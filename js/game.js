// anonymous function to put all variables local scope by default.
(function(){
  var game = window.colorQuestGame = window.colorQuestGame || {};

  // Entry Point
  var init = function() {
  	console.log("Welcome to Color Quest Game.");
  }

  // window.onload = init; // use window.onload (or when DOM ready) if the script is not placed at the end of the HTML file.
  init();

})();
