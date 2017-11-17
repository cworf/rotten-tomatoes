// -------------------Back-end Logic -----------------------
function Movie (title, year, studio, rating){
  this.title = title;
  this.year = year;
  this.studio = studio;
  this.rating = rating;
}

//global variables
var movies = [];
movies.push(new Movie("The Last Starfighter", 1984, "Universal Pictures", 73));
movies.push(new Movie("Charlie and the Chocolate Factory", 1971, "Warner Bros", 89));
movies.push(new Movie("The Matrix", 1999, "Warner Bros", 87));

//sort movies and put em in a table
var sortTable = function(){
  //sort our movies array
  movies.sort(function(a, b) {
    return b.rating - a.rating
  });
  //populate table
  var tableStuff = "";
  movies.forEach(function(movie){
    tableStuff += `<tr>
                <td class="title-cell">` + movie.title + `</td>
                <td>` + movie.year + `</td>
                <td>` + movie.studio + `</td>
                <td class="score-cell">` + movie.rating + `%</td>
              </tr>`;
  });
  $("tbody").html(tableStuff);
}
// -------------------Front-end Logic -----------------------
$(function(){
  sortTable();

  $('#add-movie').submit(function(event){
    event.preventDefault();
    var title, year, studio, rating;
    title = $("#title").val();
    year = parseInt($("#year").val());
    studio = $("#studio").val();
    rating = parseInt($("#tomatometer").val());
    movies.push(new Movie(title, year, studio, rating));

    sortTable();
  });
});
