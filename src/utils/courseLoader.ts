import type { CourseData } from "../types/CourseData";

// Legg inn vei til kursdata her
import pythonStarter from "../data/courses/python-starter.json";
import itOop from "../data/courses/it-oop.json";
import htmlCssBasics from "../data/courses/html-css-basics.json";
import pythonIntro from "../data/courses/python-intro.json";
import pythonGraphs from "../data/courses/python-graphs.json";
import pythonPrograms from "../data/courses/python-programs.json";
import gitIntro from "../data/courses/git-intro.json";

// Legg inn kursdata i denne lista
const allCourses: CourseData[] = [
  pythonStarter as CourseData,
  itOop as CourseData,
  htmlCssBasics as CourseData,
  pythonIntro as CourseData,
  pythonGraphs as CourseData,
  pythonPrograms as CourseData,
  gitIntro as CourseData,
];

export const getAllCourses = (): CourseData[] => {
  return allCourses;
};

export const getCourseById = (id: string): CourseData | undefined => {
  return allCourses.find((course) => course.metadata.id === id);
};

export const getCourseIds = (): string[] => {
  return allCourses.map((course) => course.metadata.id);
};
