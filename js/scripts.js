function Movie(newRelease) {
  this.newRelease = newRelease;
}

function Ticket(age, showTime, movieTitle) {
  this.movieTitle = movieTitle;
  this.age = age;
  this.showTime = showTime;
}

Ticket.prototype.ticketPrice = function() {
  var initialPrice = 5;
  var agePrice = 0;
  var timePrice = 0;
  var newPrice = 0;


  if (this.age > 12 && this.age < 65) {
    agePrice = agePrice + 3;
  }

    if (this.showTime > 4) {
      timePrice = timePrice + 3;
    }

    if (this.movieTitle > 0) {
      newPrice = newPrice + 3;
    }

  var ticketPrice = initialPrice + agePrice + timePrice + newPrice;
  return ticketPrice;
};

var clearThings = function() {
  $("select#showtime_select").val("");
  $("input#age_select").val("");
  $("select#movie_select").val("");
}

$(document).ready(function() {
  $("form#buyTicket").submit(function(event) {
    event.preventDefault();

    var inputtedShowTime = $("select#showtime_select").val();
    var inputtedAge = parseInt($("input#age_select").val());
    var inputtedNew = $("select#movie_select").val();
    var ticketMultiplier = parseInt($("input#ticket-number").val());
    var newTicket = new Ticket(inputtedAge, inputtedShowTime, inputtedNew);


    $(".show-price").show();

    $("span#ticket-price").text("");
    $("span#ticket-price").append("$" + (newTicket.ticketPrice() * ticketMultiplier));

    clearThings();
  });
});
