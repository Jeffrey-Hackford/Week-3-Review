var ping = [];
var pong = [];
var pingPong = [];
var otherNumbers = [];
var output = [];


  $(document).ready(function() {
    $("#button").click(function(event) {
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
      console.log(output);
     }

      output.forEach(function() {
        if (output === "Ping") {
          $("#ping").append("<p>" + "Ping" + "</p>");
        } else if
          (output === "Pong") {
          $("#pong").append("<p>" + "Pong" + "</p>");
        } else if
          (ouput === "PingPong") {
          $("#pingPong").append("<p>" + "PingPong" + "</p>");
        } else {
          $("#none").append("<p>" + index + "</p>");
        }
console.log(output);
event.preventDefault();
      });
    });
});


  $(document).ready(function() {
    $("reset").click(function() {
    });
  });
//
//
// $("#ping").append("<p>" + "Ping" + "</p>");
// $("#pong").append("<p>" + "Pong" + "</p>");
// $("#none").append("<p>" + index + "</p>");
