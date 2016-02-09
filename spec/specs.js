describe('Movie', function(){
  var testMovie = new Movie("Movie Title", true);

  it('creates a new movie object with title and newRelease boolean', function() {
      expect(testMovie.movieTitle).to.equal("Movie Title");
      expect(testMovie.newRelease).to.equal(true);
  });
});

describe('Ticket', function() {
  var testTicket = new Ticket (65, 12);

  it('creates a new ticket object with user-age and show-time parameters', function() {
    expect(testTicket.age).to.equal(65);
    expect(testTicket.timeOfDay).to.equal(12);
  });
});
