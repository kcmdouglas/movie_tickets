function Movie(movieTitle, newRelease) {
  this.movieTitle = movieTitle;
  this.newRelease = newRelease;
}

function Ticket(age, showTime) {
  this.age = age;
  this.showTime = showTime;
}

Ticket.prototype.ticketPrice = function() {
  var initialPrice = 5;
  var agePrice = 0;
  var timePrice = 0;


  if (this.age < 13 || this.age > 64) {
    agePrice = agePrice + 0;
  } else if (this.age > 12 && this.age) {
    agePrice = agePrice + 3;
  }

    if (this.showTime < 6) {
      timePrice = timePrice + 0;
    } else if (this.showTime > 4) {
      timePrice = timePrice + 3;
    }
  var ticketPrice = initialPrice + agePrice + timePrice;
  return ticketPrice;
};


$(document).ready(function() {
  $("form#buyTicket").submit(function(event) {
    event.preventDefault();

    var inputtedShowTime = $("select#showtime_select").val();
    var inputtedAge = parseInt($("input#age_select").val());
    var newTicket = new Ticket(inputtedAge, inputtedShowTime);

    $(".show-price").show();

    $("span#ticket-price").append(newTicket.ticketPrice());
  });
});
