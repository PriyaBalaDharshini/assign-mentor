import mongoose from "./index.js";

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    handlingCourses: {
        type: [String],
        required: true
    },
    students: {
        type: [String],
        default: []
    }
})

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;
