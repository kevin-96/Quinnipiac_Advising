import http from "./httpService";

const apiUrl="http://localhost:9000/"
const apiEndpoint = apiUrl + "students";



function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

function userUrlWithClassId(id, classId) {
  return `${apiEndpoint}/${id}/${classId}`;
}


export function addCourse(course, id) {
    const body = course;
    console.log(course);
  return http.post(userUrl(id), body);
}

export function deleteCourse(id, courseId) {
  console.log(courseId);
return http.delete(userUrlWithClassId(id, courseId));
}


