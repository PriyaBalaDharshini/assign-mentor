import Student from "../models/studentModel.js";

const createStudent = async (req, res) => {
    try {
        const { name, course, mentor, isMentorAssigned } = req.body

        const newStudent = new Student({
            name,
            course, mentor,
            isMentorAssigned
        });

        await newStudent.save()
        res.status(200).send({
            message: "New Student added Successfylly",
            newStudent
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

const getAllStudents = async (req, res) => {
    try {
        let students = await Student.find();
        res.status(200).send({
            message: "All Students Data Fetched Successfully",
            students
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default { createStudent, getAllStudents }