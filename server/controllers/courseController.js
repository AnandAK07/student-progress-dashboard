const Course = require("../models/Course");
const Lesson = require("../models/Lesson");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    const lessons = await Lesson.find({
      courseId: req.params.id,
    });

    res.status(200).json({
      course,
      lessons,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
};
