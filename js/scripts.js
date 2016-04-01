
 function ping(input) {
  for (var index = 1, userNumber = input; index <= userNumber; index += 1) {
    if (index % 15 === 0) {
      $("#output").append("<p>" + "Ping-Pong" + "</p>");
    } else if
      (index % 3 === 0) {
      $("#output").append("<p>" + "Ping" + "</p>");
    } else if
      (index % 5 === 0) {
      $("#output").append("<p>" + "Pong" + "</p>");
    } else {
      $("#output").append("<p>" + index + "</p>");
    }
  }
}
  $(document).ready(function() {
    $("#button").click(function(event) {
      event.preventDefault();
      var newNumber = $("#userInput").val();
      ping(newNumber);

    });
  });
