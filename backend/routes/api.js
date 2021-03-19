const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Studentsdb = require("../db/main"); //Mongo DB Database
const db = require("../db/connect");

router.use(express.urlencoded({ extended: true })); //Body Parser
router.use(express.json()); //Body Parser

//Array to Store All Students after Query from DB
let allStudents = [];

//Get All Students from the Database
const getStudents = async () => {
  db.Connect();
  allStudents = await Studentsdb.find({});
};

//Get Request for all students
router.get("/", async (req, res) => {
  await getStudents();
  console.log("All Students: ", allStudents);
  return res.send(allStudents);
});

//Get request for students per the course
router.get("/:course", async (req, res) => {
  await getStudents(); //get all students first
  students = allStudents.filter(
    (student) => student.course == req.params.course
  );
  students == null || undefined
    ? res.status(404).send("Student Not Found!!")
    : res.status(200).send(students);
  return console.log(`${req.params.course} students are:`, students);
});

//Creating a New Student in the Database
const createStudent = async (data) => {
  const student = new Studentsdb({
    fullname: data.fullname,
    course: data.course,
    year: data.year,
  });

  const result = await student.save(); //method for saving to database
  console.log("Student Details stored in DB:", result);
};

//Post Request for A New Student
router.post("/", (req, res) => {
  //Student Object from Request Body
  const student = {
    fullname: req.body.fullname,
    course: req.body.course,
    year: req.body.year,
  };

  //Joi Schema for Input Validation
  const schema = Joi.object({
    fullname: Joi.string().max(30).required(),
    course: Joi.string().max(30).required(),
    year: Joi.number().min(4).required(),
  });

  const validator = async () => {
    try {
      await schema.validateAsync(student); //Validates Post Request
      await createStudent(student); //Saves Student to the DB
      return res.status(200).send(student);
    } catch (err) {
      return res.status(400).send(err);
    }
  };
  validator(); //an async function to validate the req.body & post new movie to db
});

//Delete Request for a Student using the ID
router.delete("/:id", async (req, res) => {
  await getStudents(); //get all students first
  student = allStudents.filter((student) => student.id == req.params.id);
  if (student == null || undefined) {
    return res.status(404).send("Student Not Found!!");
  } else {
    return await Studentsdb.findByIdAndDelete(req.params.id)
      .then((student) => res.status(200).send(student))
      .catch((error) => res.status(400).send(error));
  }
});

//Put Request for a Movie using the ID
router.put("/:id", async (req, res) => {
  await getStudents(); //get all students first
  student = allStudents.filter((student) => student.id == req.params.id);
  if (student == null || undefined) {
    return res.status(404).send("Student Not Found!!");
  } else {
    return await Studentsdb.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(() =>
        Studentsdb.findOne({ _id: req.params.id }).then((student) =>
          res.status(200).send(student)
        )
      )
      .catch((error) => res.status(400).send(error));
  }
});

module.exports = router;
