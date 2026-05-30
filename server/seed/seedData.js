require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");

const User = require("../models/User");
const Course = require("../models/Course");
const Lesson = require("../models/Lesson");
const Progress = require("../models/Progress");
const Activity = require("../models/Activity");

const seedData = async () => {
  try {
    await connectDB();

    console.log("Database Connected");

    await User.deleteMany();
    await Course.deleteMany();
    await Lesson.deleteMany();
    await Progress.deleteMany();
    await Activity.deleteMany();

    console.log("Old Data Removed");

    const user = await User.create({
      name: "Anand",
      email: "anand@gmail.com",
      password: "123456",
      role: "student",
    });

    // STEP 6
    const courses = await Course.insertMany([
      {
        title: "React Fundamentals",
        description: "Learn React from scratch",
        totalLessons: 10,
      },
      {
        title: "Node.js Backend",
        description: "Express and APIs",
        totalLessons: 8,
      },
      {
        title: "MongoDB Mastery",
        description: "Database design",
        totalLessons: 6,
      },
    ]);

    // STEP 7
    await Lesson.insertMany([
      {
        title: "React Basics",
        courseId: courses[0]._id,
        duration: 45,
      },
      {
        title: "JSX and Components",
        courseId: courses[0]._id,
        duration: 60,
      },
      {
        title: "Hooks",
        courseId: courses[0]._id,
        duration: 50,
      },
      {
        title: "Express Introduction",
        courseId: courses[1]._id,
        duration: 40,
      },
      {
        title: "MongoDB CRUD",
        courseId: courses[2]._id,
        duration: 55,
      },
    ]);

    // STEP 8
    await Progress.create({
      userId: user._id,
      courseId: courses[0]._id,
      completedLessons: 8,
      completionPercentage: 80,
      timeSpent: 25,
    });

    // STEP 9
    await Activity.insertMany([
      {
        userId: user._id,
        activityType: "lesson_completed",
        description: "Completed React Basics",
      },
      {
        userId: user._id,
        activityType: "lesson_completed",
        description: "Completed JSX and Components",
      },
      {
        userId: user._id,
        activityType: "quiz_completed",
        description: "Finished MongoDB Quiz",
      },
    ]);

    // STEP 10
    console.log("Seed Data Inserted Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
