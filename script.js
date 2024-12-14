function addMovie() {
    console.log("Button clicked");
    var movieTitle = document.getElementById("movieTitle").value;
    var movieYear = document.getElementById("movieYear").value;
    var movieActors = document.getElementById("movieActors").value;
    if (movieTitle == "" || movieYear == "" || movieActors == "") {
        alert("All fields must be filled out.");
        return;
    }
    
    var li = document.createElement("li");
    li.innerHTML = "<input type =  'checkbox'>" + movieTitle + "," + movieYear + "," + movieActors;
    document.getElementById("moviesList").appendChild(li);
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieYear").value = "";
    document.getElementById("movieActors").value = "";
    alert("New position added!")
}

function deleteMovies() {
    var checkedBoxes = document.querySelectorAll("#moviesList input[type='checkbox']:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        document.getElementById("moviesList").removeChild(checkedBoxes[i].parentNode)
    }
    alert("Removed " + checkedBoxes.length + " positions!")
}