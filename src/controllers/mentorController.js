import Mentor from "../models/mentorModel.js";
import Student from "../models/studentModel.js";


const createMentor = async (req, res) => {

    try {
        const { name, handlingCourses, students } = req.body;
        const newMentor = new Mentor({
            name,
            handlingCourses,
            students
        });
        await newMentor.save()

        res.status(200).send({
            message: "New Mentor added Successfylly",
            newMentor
        })

    } catch (error) {

        res.status(500).send({
            message: "Internal Server Error"
        })

    }
}

const getAllMentors = async (req, res) => {
    try {
        let mentors = await Mentor.find();
        res.status(200).send({
            message: "All Mentors Data Fetched Successfully",
            mentors
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const assignStudentToMentor = async (req, res) => {
    try {
        const { mentorId, studentId } = req.params;

        const mentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if (!mentor || !student) {
            res.status(401).send({
                message: "Student or Mentor not Found"
            })
        } else {
            student.mentor = mentor;
        }
        await student.save()
        res.status(200).send({
            message: "Mentor assigned Succefully"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const allStudentsForPerticularMentor = async (req, res) => {
    try {
        const { mentorId } = req.params;

        const studentsList = await Student.find({ mentor: mentorId })
        res.status(200).send({
            message: "List of students fetched successfully",
            studentsList
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }

}

const changeMentorForStudent = async (req, res) => {
    try {
        const { mentorId, studentId } = req.params;

        const newMentor = await Mentor.findById(mentorId);
        const student = await Student.findById(studentId);

        if (!newMentor || !student) {
            res.status(401).send({
                message: "Student or Mentor not Found"
            })
        } else {
            student.mentor = newMentor._id;
        }
        await student.save()
        res.status(200).send({
            message: "Mentor assigned Succefully"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const showPreviousMentorForStudent = async (req, res) => {
    try {
        const { studentId } = req.params
        const student = await Student.findById(studentId);

        if (!student) {
            res.status(404).send({
                message: "Student not found"
            })
        }

        let previousMentor = null
        if (student.mentor) {
            previousMentor = await Mentor.findById(student.mentor)
        }

        const responseData = {
            studentId: student._id,
            studentName: student.name,
            previousMentor: previousMentor ? {
                mentorId: previousMentor._id,
                mentorName: previousMentor.name
            } : null
        };

        res.status(200).send({
            message: "Previous mentor for the student fetched successfully",
            data: responseData
        });

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default {
    createMentor,
    getAllMentors,
    assignStudentToMentor,
    allStudentsForPerticularMentor,
    changeMentorForStudent,
    showPreviousMentorForStudent
}