const Course = require("../models/Course");
const Progress = require("../models/Progress");
const Activity = require("../models/Activity");

const getDashboardData = async (req, res) => {
  try {
    // Fetch data
    const progress = await Progress.findOne();

    const courses = await Course.countDocuments();

    const activities = await Activity.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // Mock trend data for chart
    const trendData = [
      { day: "Mon", hours: 2 },
      { day: "Tue", hours: 3 },
      { day: "Wed", hours: 1 },
      { day: "Thu", hours: 4 },
      { day: "Fri", hours: 2 },
      { day: "Sat", hours: 5 },
      { day: "Sun", hours: 3 },
    ];

    const completionData = [
      {
        name: "Completed",
        value: progress.completionPercentage,
      },
      {
        name: "Remaining",
        value: 100 - progress.completionPercentage,
      },
    ];

    res.status(200).json({
      completedLessons: progress.completedLessons,
      timeSpent: progress.timeSpent,
      coursesEnrolled: courses,
      completionRate: progress.completionPercentage,

      trendData,
      completionData,

      recentActivities: activities,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};