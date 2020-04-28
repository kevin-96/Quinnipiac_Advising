import http from "./httpService";

const apiUrl="http://localhost:9000/"
const apiEndpoint = apiUrl + "schedule";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getStudent(personId) {
  return http.get(userUrl(personId));
}

export function savePerson(person) {
  if (person._id) {
    const body = { ...person };
    delete body._id;
    return http.put(userUrl(person._id), body);
  }

  return http.post(apiEndpoint, person);
}

export function deletePerson(personId) {
  return http.delete(userUrl(personId));
}