import mongoose from "./index.js";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    mentor: {
        type: String,
        required: true
    },
    isAssigned: {
        type: String,
        default: true
    },
})

const Student = mongoose.model("Student", studentSchema)
export default Student