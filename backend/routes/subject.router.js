const router = require("express").Router();
const subjectController = require("./../controllers/subject.controller")

router.get("/", subjectController.getAllSubjects)
router.post("/add", subjectController.addNewSubject)

module.exports = router