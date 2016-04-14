var ping = [];
var pong = [];
var pingPong = [];
var otherNumbers = [];
var output = [];

function append() {
 for (var index = 1; index <= output.length; index += 1) {
   if (index % 15 === 0) {
     $("#pingpong").append("<p>" + "PingPong" + "</p>");
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

  $(document).ready(function() {
    $("#button").click(function(event) {
      event.preventDefault();

      var newNumber = $("#userInput").val();

      ping(newNumber);
      function ping() {
       for (var index = 1; index <= newNumber; index += 1) {
         if (index % 15 === 0) {
           output.push("PingPong");
         } else if
           (index % 3 === 0) {
           output.push("Ping");
         } else if
           (index % 5 === 0) {
           output.push("Pong");
         } else {
           output.push(index);
         }
       }
     }
     append(output);
    });
});
  $(document).ready(function() {
    $("reset").click(function() {
    });
  });
