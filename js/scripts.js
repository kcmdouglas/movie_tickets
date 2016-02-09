function Movie(movieTitle, newRelease) {
  this.movieTitle = movieTitle;
  this.newRelease = newRelease;
}

function Ticket(age, timeOfDay) {
  this.age = age;
  this.timeOfDay = timeOfDay;
}

Ticket.prototype.ticketPrice = function() {

}
