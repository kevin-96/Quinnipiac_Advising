import http from "./httpService";

const apiUrl="http://localhost:9000/"
const apiEndpoint = apiUrl + "students";



function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}


export function addCourse(course, id) {
    const body = course;
    console.log(course);
  return http.post(userUrl(id), body);
}



