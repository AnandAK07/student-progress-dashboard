import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { getCourseById } from "../../services/courseService";

function CourseDetails() {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourseById(id);

      setCourseData(data);
    };

    fetchCourse();
  }, [id]);

  if (!courseData) {
    return (
      <DashboardLayout>
        <h2>Loading...</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-2">
        {courseData.course.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {courseData.course.description}
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Lessons
        </h2>

        <ul className="space-y-3">
          {courseData.lessons.map((lesson) => (
            <li
              key={lesson._id}
              className="border-b pb-2"
            >
              📚 {lesson.title}
              <span className="ml-2 text-gray-500">
                ({lesson.duration} mins)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}

export default CourseDetails;