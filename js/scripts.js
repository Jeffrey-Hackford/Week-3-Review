// Start User Logic
 function ping(input) {
  for (var index = 1, userNumber = input; index <= userNumber; index += 1) {
    if (index % 15 === 0) {
      $("#pingpong").append("<p>" + "Ping-Pong" + "</p>");
    } else if
      (index % 3 === 0) {
      $("#ping").append("<p>" + "Ping" + "</p>");
    } else if
      (index % 5 === 0) {
      $("#pong").append("<p>" + "Pong" + "</p>");
    } else {
      $("#none").append("<p>" + index + "</p>");
    }
  }
}
// End User Logic

// Start Business Logic
  $(document).ready(function() {
    $("#button").click(function(event) {
      var newNumber = $("#userInput").val();
      ping(newNumber);

      event.preventDefault();
    });
  });
  
// Dummy click function to activate default behavior
  $(document).ready(function() {
    $("reset").click(function() {
    });
  });
