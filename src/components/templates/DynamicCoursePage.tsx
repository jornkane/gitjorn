import { useParams } from "react-router-dom";
import CourseTemplate from "./CourseTemplate";
import { getCourseById } from "../../utils/courseLoader";

const DynamicCoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();

  if (!courseId) {
    return (
      <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Kurs ikke funnet</h1>
          <p>Ingen kurs ID spesifisert.</p>
        </div>
      </div>
    );
  }

  const courseData = getCourseById(courseId);

  if (!courseData) {
    return (
      <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Kurs ikke funnet</h1>
          <p>Kurset med ID "{courseId}" finnes ikke.</p>
        </div>
      </div>
    );
  }

  return <CourseTemplate courseData={courseData} />;
};

export default DynamicCoursePage;
