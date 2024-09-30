import axios from "axios";

const usersApi = "http://localhost:3000";

const users = {
  getUsers: () => {
    return axios.get(`${usersApi}/users`);
  },
  getSingle: (id: number) => {
    return axios.get(`${usersApi}/users/${id}`);
  },
};
export default users;
