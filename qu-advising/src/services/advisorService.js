import http from "./httpService";

const apiUrl="http://localhost:9000/"
const apiEndpoint = apiUrl + "advisor";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getStudentByID(personId) {
    return http.get(userUrl(personId));
  }