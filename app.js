//import axios from "axios";
document.getElementById("allmovies").style.display = "none";
document.getElementById("moviesHeader").style.display = "none";
document.getElementById("closeMovies").style.display = "none";
document.getElementById("closeForm").style.display = "none";
document.getElementById("spinner").style.display = "none";
document.getElementById("movieForm").style.display = "none";
document.getElementById("movieModal").style.display = "none";

//------Request to GET All Movies------
const prod_url =
  "https://reeler.netlify.app/.netlify/functions/index/api/students"; //production url
const dev_url = "http://localhost:9000/.netlify/functions/index/api/students"; //development url
const requestStudents = (path) => {
  axios.get(path).then(
    (response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "All students";
      return show(result);
    },
    (error) => {
      console.log(error);
    }
  );
  return;
};

const getStudents = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestStudents(prod_url), 1000);
  return;
};
//--------------------------------------------

//-------Request to GET All Maths Students------------
const maths_url_prod =
  "https://reeler.netlify.app/.netlify/functions/index/api/students/Maths";
const maths_url_dev =
  "http://localhost:9000/.netlify/functions/index/api/students/Maths";
const requestMaths = () => {
  axios.get(maths_url_prod).then(
    (response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Maths courses";
      return show(result);
    },
    (error) => {
      console.log(error);
    }
  );
};

const getMathsStudents = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestMaths(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All Action Movies------------
const english_url_prod =
  "https://reeler.netlify.app/.netlify/functions/index/api/students/English";
const english_url_dev =
  "http://localhost:9000/.netlify/functions/index/api/students/English";
const requestEnglish = () => {
  axios.get(english_url_prod).then(
    (response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "English Students";
      return show(result);
    },
    (error) => {
      console.log(error);
    }
  );
};

const getEnglishStudents = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestEnglish(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All Comedy Movies------------
const science_url_prod =
  "https://reeler.netlify.app/.netlify/functions/index/api/students/Science";
const science_url_dev =
  "http://localhost:9000/.netlify/functions/index/api/students/Science";
const requestScience = () => {
  axios.get(science_url_prod).then(
    (response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Science Students";
      return show(result);
    },
    (error) => {
      console.log(error);
    }
  );
};

const getScienceStudents = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestScience(), 1000);
  return;
};
//-------------------------------------------------------

//-------Request to GET All Mystery Movies------------
const art_url_prod =
  "https://reeler.netlify.app/.netlify/functions/index/api/students/Art";
const art_url_dev =
  "http://localhost:9000/.netlify/functions/index/api/students/Art";
const requestArt = () => {
  axios.get(art_url_prod).then(
    (response) => {
      var result = response.data;
      console.log(result);
      document.getElementById("spinner").style.display = "none";
      document.getElementById("moviesHeader").innerHTML = "Art Students";
      return show(result);
    },
    (error) => {
      console.log(error);
    }
  );
};

const getArtStudents = () => {
  document.getElementById("subHeadText").style.display = "none";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("dropdownMenuButton").style.display = "none";
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => requestArt(), 1000);
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
  const firstName = document.getElementById("movieTitle").value;
  const lastName = document.getElementById("movieYear").value;
  const course = document.getElementById("selectedGenre").value;
  //return alert(`${title}, ${year}, ${genre}`);
  axios
    .post(
      prod_url,
      {
        firstName: firstName,
        lastName: lastName,
        course: course,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(
      (response) => {
        console.log(response.data);
        document.getElementById("moviesHeader").innerHTML =
          "New Student Added!";
        showModal(response.data);
        return document.getElementById("movieForm").reset();
      },
      (error) => {
        console.log(error);
      }
    );
  return;
};
//-------------------------------------------------------

//----------Function to Display Data-------------------------
function show(data) {
  const item = `
      <a href="#" class="list-group-item list-group-item-action" >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1" id="title"></h5>
          <small id="year"></small>
        </div>
        <small id="genre"></small>
      </a>
  `;

  itemList = data.map(
    (student) => `
  <a href="#" class="list-group-item list-group-item-action" >
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" id="title">${student.firstName}</h5>
    <small id="year">${student.lastName}</small>
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

//--------------SHOW MODAL-----------------------------------------

function showModal(data) {
  newMovie = `
  <a href="#" class="list-group-item list-group-item-action" >
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1" id="title">${data.firstName}</h5>
    <small id="year">${data.lastName}</small>
  </div>
  <small id="genre">${data.course}</small>
</a>
  `;

  //const arrangedList = newMovie.join("");

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

//------Close Button--------------------------------------------
const closeMoviesList = () => {
  document.getElementById("allmovies").style.display = "none";
  document.getElementById("moviesHeader").style.display = "none";
  document.getElementById("closeMovies").style.display = "none";
  document.getElementById("subHeadText").style.display = "block";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("dropdownMenuButton").style.display = "inline";
  document.getElementById("movieForm").style.display = "none";
  document.getElementById("closeForm").style.display = "none";
  document.getElementById("pageTitle").style.display = "block";
  document.getElementById("movieForm").reset();
  return;
};
//-------------------------------------------------------------
