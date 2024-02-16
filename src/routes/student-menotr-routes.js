import express from 'express'
import studentController from '../controllers/studentController.js';
import mentorController from '../controllers/mentorController.js';

const route = express.Router()
route.post("/create-mentor", mentorController.createMentor);
route.post("/create-student", studentController.createStudent);

route.get("/mentors", mentorController.getAllMentors);
route.get("/students", studentController.getAllStudents);
route.get("/previous-mentor/:studentId", mentorController.showPreviousMentorForStudent);

route.post("/assign-mentor/:mentorId/:studentId", mentorController.assignStudentToMentor)
route.post("/studentslist/:mentorId", mentorController.allStudentsForPerticularMentor)

route.put("/assign-mentor/:newMentorId/:studentId", mentorController.changeMentorForStudent)

export default route

