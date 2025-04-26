const express = require("express");
const router = express.Router()
const studentController = require("../controllers/student.controller")


router.get("/", studentController.getAllStudents);
router.post("/add", studentController.AddNewStudent);
router.post("/edit", studentController.updateStudent);
router.post("/delete", studentController.deleteStudent);

module.exports = router;