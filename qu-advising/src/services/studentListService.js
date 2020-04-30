import http from "./httpService";

const apiUrl="http://localhost:9000/"
const apiEndpoint = apiUrl + "users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}