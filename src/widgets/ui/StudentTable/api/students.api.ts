import axios from "axios";

const studentsApi = "http://localhost:3000";

const students = {
  getStudents: () => {
    return axios.get(`${studentsApi}/students`);
  },
  getSingle: (id: number) => {
    return axios.get(`${studentsApi}/students/${id}`);
  },
};
export default students;
