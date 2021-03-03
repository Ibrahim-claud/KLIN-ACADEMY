const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Schooldb = require("../db/main");

router.use(express.urlencoded({ extended: true })); //Body Parser
router.use(express.json()); //Body Parser

//All students from the db
let allStudents = [];

//Get All Students from the Database
const getStudents = async () => {
  allStudents = await Schooldb.find({});
};

//Get Request for all students
router.get("/", async (req, res) => {
  await getStudents();
  console.log("All students", allStudents);
  return res.send(allStudents);
});

//Get request for student per the cousre
router.get("/:course", async (req, res) => {
  await getStudents();
  student = allStudents.filter((std) => std.course == req.params.course);
  student == null || undefined
    ? res.send("Cousre Not Found!!").status(404)
    : res.send(student);
  return console.log(`${req.params.genre} students are `, student);
});

//Creating a New Student in the Database
const createStudent = async (data) => {
  const student = new Schooldb({
    firstName: data.firstName,
    lastName: data.lastName,
    course: data.course,
  });

  const result = await student.save(); //method for saving to Database
  console.log("students save to Database", result);
};

//Post Request for  A New Movie
router.post("/", (req, res) => {
  //Movie Object from Request Body
  const studentData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    cousre: req.body.cousre,
  };

  //Joi Schema for Input Validation
  const schema = Joi.object({
    firstName: Joi.string().max(10).required(),
    lastName: Joi.string().max(10).required(),
    cousre: Joi.string().max(7).required(),
  });

  const validator = async () => {
    try {
      const value = await schema.validateAsync(studentData);
      createStudent(studentData);
      return res.send(student).status(200);
    } catch (err) {
      return res.send(err).status(400);
    }
  };

  validator(); //an async function to validate the req.body
});

//app.listen(port, () => console.log(`Listening on Port ${port}....`));
module.exports = router;
