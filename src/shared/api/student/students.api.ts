import axios from "axios";

const studentsApi = "http://localhost:9000";

const students = {
	getStudents: async () => {
		return await axios.get(`${studentsApi}/students/all`);
	},
	getSingle: (id: number) => {
		return axios.get(`${studentsApi}/students/${id}`);
	},
};
export default students;
