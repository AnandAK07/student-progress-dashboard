import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getCourses } from "../../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();

      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Courses;