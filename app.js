document.getElementById("allmovies").style.display = "none";
document.getElementById("alldelmovies").style.display = "none";
document.getElementById("movieUpdateForm").style.display = "none";
document.getElementById("moviesHeader").style.display = "none";
document.getElementById("delmoviesHeader").style.display = "none";
document.getElementById("closeMovies").style.display = "none";
document.getElementById("closeMovies2").style.display = "none";
document.getElementById("closeForm").style.display = "none";
document.getElementById("spinner").style.display = "none";
document.getElementById("movieForm").style.display = "none";
document.getElementById("movieModal").style.display = "none";

var delMovies;

//----------Function to Display Data-------------------------
function show(data) {
  itemList = data.map(
    (student) => `
  <a href="#" id="link" class="list-group-item list-group-item-action" >
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" id="title">${student.fullname}</h5>
    <small id="year">${student.year}</small>
  </div>
    <small id="genre">${student.course}</small>
</a>
  `
  );

  const arrangedList = itemList.join("");

  // Setting innerHTML as tab variable
  document.getElementById("allmovies").style.display = "block";
  document.getElementById("moviesHeader").style.display = "block";
  document.getElementById("closeMovies").style.display = "block";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("allmovies").innerHTML = arrangedList;
  return;
}
//------------------------------------------------

//----------Function to Display All Data - DELETE-------------------------
function showDel(data) {
  itemList = data.map(
    (student) =>
      `<a href="#" id="link" class="list-group-item list-group-item-action" id="alldelmovies">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1" id="deltitle">${student.fullname}</h5>
      <small id="delyear">${student.year}</small>
    </div>
    <div class="d-flex w-100 justify-content-between">
      <small id="delgenre">${student.course}</small>
      <button
        class="btn btn-sm btn-danger fw-bold border-white text-center"
        onclick='deleteMovie("${student._id}")'
      >
        Delete
      </button>
    </div>
  </a>
  `
  );

  const arrangedList = itemList.join("");

  // Setting innerHTML as tab variable
  document.getElementById("alldelmovies").style.display = "block";
  document.getElementById("allmovies").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("delmoviesHeader").style.display = "block";
  document.getElementById("closeMovies").style.display = "block";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("alldelmovies").innerHTML = arrangedList;
  return;
}
//------------------------------------------------

//----------Function to Display All Data - UPDATE-------------------------
function showUpdate(data) {
  itemList = data.map(
    (student) => `
    <a href="#" id="link" class="list-group-item list-group-item-action" id="alldelmovies">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1" id="uptitle">${student.fullname}</h5>
      <small id="upyear">${student.year}</small>
    </div>
    <div class="d-flex w-100 justify-content-between">
      <small id="upgenre">${student.course}</small>
      <button
        class="btn btn-sm btn-primary fw-bold border-white text-center"
        onclick='showUpdateForm("${student._id}","${student.fullname}")'
      >
        Update
      </button>
    </div>
  </a>
  `
  );

  const arrangedList = itemList.join("");

  // Setting innerHTML as tab variable
  document.getElementById("alldelmovies").style.display = "block";
  document.getElementById("allmovies").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("delmoviesHeader").style.display = "block";
  document.getElementById("closeMovies").style.display = "block";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("alldelmovies").innerHTML = arrangedList;
  return;
}
//------------------------------------------------

//----------Function to Display All Data - UPDATE-------------------------
function showUpdateForm(id, fullname) {
  item = `
  <p
    class="h3 text-center pb-2 pt-2 mb-4 bg-dark text-white"
    id="subHeadText"
  >
    Update Student Details
  </p>
  <p class="lead" id="subHeadText"><bold>ID: </bold>${id}</p>
  <p class="lead" id="subHeadText"><bold>FullName: </bold>${fullname}</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"
      ><h5 class="ml-4">Enter New FullName</h5></label
    >
    <input type="text" class="form-control" id="updateTitle" required />
  </div>
  <button onclick="updateMovie('${fullname}','${id}')" class="btn btn-primary w-100 mb-3">
  Submit
</button>
  `;

  //const arrangedList = item.join("");

  // Setting innerHTML as tab variable
  document.getElementById("alldelmovies").style.display = "none";
  document.getElementById("closeForm").style.display = "block";
  document.getElementById("allmovies").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("delmoviesHeader").style.display = "none";
  document.getElementById("closeMovies").style.display = "none";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("movieUpdateForm").style.display = "block";
  document.getElementById("movieUpdateForm").innerHTML = item;
  return;
}
//------------------------------------------------

//------Request to GET All Students------
const prod_url = "https://klinacademy.herokuapp.com/api/students"; //production url
const dev_url = "http://localhost:3500/api/movies"; //development url
const requestMovies = (path) => {
  axios
    .get(path)
    .then((response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "All Students";
      return show(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
  return;
};

const getMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  requestMovies(prod_url);
  return;
};
//--------------------------------------------

//-------Request to GET All MATHS STUDENTS------------
const anime_url_prod = "https://klinacademy.herokuapp.com/api/students/Maths";
const anime_url_dev = "http://localhost:3500/api/movies/Animation";
const requestAnime = () => {
  axios
    .get(anime_url_prod)
    .then((response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Maths Students";
      return show(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
};

const getAnimationMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestAnime(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All ENGLISH STUDENTS------------
const action_url_prod =
  "https://klinacademy.herokuapp.com/api/students/English";
const action_url_dev = "http://localhost:3500/api/movies/Action";
const requestAction = () => {
  axios
    .get(action_url_prod)
    .then((response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "English Students";
      return show(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
};

const getActionMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestAction(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All SCIENCE STUDENTS------------
const comedy_url_prod =
  "https://klinacademy.herokuapp.com/api/students/Science";
const comedy_url_dev = "http://localhost:3500/api/movies/Comedy";
const requestComedy = () => {
  axios
    .get(comedy_url_prod)
    .then((response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Science Students";
      return show(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
};

const getComedyMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestComedy(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All ARTS STUDENTS------------
const mystery_url_prod = "https://klinacademy.herokuapp.com/api/students/Arts";
const mystery_url_dev = "http://localhost:3500/api/movies/Mystery";
const requestMystery = () => {
  axios
    .get(mystery_url_prod)
    .then((response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Arts Students";
      return show(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
};

const getMysteryMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestMystery(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to Submit New Movie(POST REQUEST)------------

//Show The Form to Receive Movie Details
const showForm = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("movieForm").style.display = "block";
  document.getElementById("closeForm").style.display = "block";
  //document.getElementById("pageTitle").style.display = "none";
  return;
};

const getForm = (event) => {
  event.preventDefault();
  const mfullname = document.getElementById("movieTitle").value;
  const myear = document.getElementById("movieYear").value;
  const mcourse = document.getElementById("selectedGenre").value;

  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("movieForm").style.display = "none";
  document.getElementById("closeForm").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  axios
    .post(
      prod_url,
      {
        fullname: mfullname,
        year: myear,
        course: mcourse,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "New Student Added!";
      document.getElementById("closeForm").style.display = "block";
      showModal(response.data);
      return document.getElementById("movieForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        (document.getElementById("closeForm").style.display = "block");
      showError(error);
    });
  return;
};
//-------------------------------------------------------

//--------------SHOW MODAL-----------------------------------------

function showModal(data) {
  newMovie = `
  <a href="#" class="list-group-item list-group-item-action" >
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" id="title">${data.fullname}</h5>
    <small id="year">${data.year}</small>
  </div>
  <small id="genre">${data.course}</small>
</a>
  `;

  // Setting innerHTML as tab variable
  document.getElementById("allmovies").style.display = "block";
  document.getElementById("moviesHeader").style.display = "block";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("movieForm").style.display = "none";
  document.getElementById("allmovies").innerHTML = newMovie;
  return;
}
//-------------------------------------------------------

//--------------SHOW MODAL-----------------------------------------

//--------------SHOW ERROR-----------------------------------------

function showError(data) {
  newError = `
  <a href="#" class="list-group-item list-group-item-action" >
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" id="title">Error</h5>
    <small id="year"></small>
  </div>
  <small id="genre">${data}</small>
</a>
  `;

  //const arrangedList = newMovie.join("");

  // Setting innerHTML as tab variable
  document.getElementById("allmovies").style.display = "block";
  document.getElementById("moviesHeader").innerHTML = "Error Message";
  document.getElementById("moviesHeader").style.display = "block";
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("movieForm").style.display = "none";
  document.getElementById("alldelmovies").style.display = "none";
  document.getElementById("allmovies").innerHTML = newError;
  return;
}
//-------------------------------------------------------

//--------------SHOW ERROR-----------------------------------------

//actual deletemovie
function deleteMovie(id) {
  const delete_url_prod = `https://klinacademy.herokuapp.com/api/students/${id}`;
  console.log(id, "has been clicked to DELETE");

  document.getElementById("delmoviesHeader").style.display = "none";
  document.getElementById("alldelmovies").style.display = "none";
  document.getElementById("closeMovies").style.display = "none";
  document.getElementById("spinner").style.display = "block";

  axios
    .delete(delete_url_prod, {
      id: id,
    })
    .then((response) => {
      console.log(response.data);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Student Deleted!";
      document.getElementById("closeMovies").style.display = "block";
      return showModal(response.data);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        (document.getElementById("closeForm").style.display = "block");
      showError(error);
    });
  return;
}
//-------------------------------------------------------

//------Request to DELETE Movies------
const getdelMovies = (path) => {
  axios
    .get(path)
    .then((response) => {
      var result = response.data;
      delMovies = result;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("delmoviesHeader").innerHTML =
        "Select Student To Delete";
      return showDel(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
  return;
};

const showdeleteMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => getdelMovies(prod_url), 1000);
  return;
};
//--------------------------------------------

//actual deletemovie
function updateMovie(oldname, updateid) {
  const update_url_prod = `https://klinacademy.herokuapp.com/api/students/${updateid}`;
  console.log(oldname, "with id:", updateid, "has been clicked to UPDATE");

  document.getElementById("delmoviesHeader").style.display = "none";
  document.getElementById("alldelmovies").style.display = "none";
  document.getElementById("movieUpdateForm").style.display = "none";
  document.getElementById("closeMovies").style.display = "none";
  document.getElementById("spinner").style.display = "block";

  const newname = document.getElementById("updateTitle").value;

  axios
    .put(
      update_url_prod,
      {
        fullname: newname,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Student Updated!";
      return showModal(response.data);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        (document.getElementById("closeForm").style.display = "block");
      showError(error);
    });
  return;
}
//-------------------------------------------------------

//------Request to UPDATE Movies------
const getUpdateMovies = (path) => {
  axios
    .get(path)
    .then((response) => {
      var result = response.data;
      delMovies = result;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("delmoviesHeader").innerHTML =
        "Select Students To Update";
      return showUpdate(result);
    })
    .catch((error) => {
      console.error("Error:", error),
        (document.getElementById("spinner").style.display = "none"),
        showError(error);
    });
  return;
};

const showupdateMovies = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => getUpdateMovies(prod_url), 1000);
  return;
};
//--------------------------------------------

//------Close Button--------------------------------------------
const closeMoviesList = () => {
  document.getElementById("allmovies").style.display = "none";
  document.getElementById("alldelmovies").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("delmoviesHeader").style.display = "none";
  document.getElementById("closeMovies").style.display = "none";
  document.getElementById("subHeadText").style.display = "block";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("dropdownMenuButton").style.display = "inline";
  document.getElementById("movieForm").style.display = "none";
  document.getElementById("closeForm").style.display = "none";
  document.getElementById("pageTitle").style.display = "block";
  document.getElementById("movieUpdateForm").style.display = "none";
  document.getElementById("movieForm").reset();
  return;
};
//-------------------------------------------------------------
