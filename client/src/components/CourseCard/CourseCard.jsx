import { Link } from "react-router-dom";
function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course._id}`}>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>

        <p className="text-gray-600 mb-4">{course.description}</p>

        <p className="font-medium">Lessons: {course.totalLessons}</p>
      </div>
    </Link>
  );
}

export default CourseCard;
