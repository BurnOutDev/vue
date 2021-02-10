import axios from "axios";

const state = () => {
  return { users: [] };
};

const actions = {
  registerApiCall(context, user) {
    return axios.post("http://localhost:3000/insert", user).then((res) => {
      debugger;
      if (res.data.ok) {
        context.commit("registerApiCall", user);
      }
    });
  },
  fetchUsers(context) {
    return axios.get("http://localhost:3000/users").then((res) => {
      context.commit("fetchUsers", res.data.users);
    });
  },
};
const mutations = {
  registerApiCall(state, user) {
    state.users = [...state.users, user];
  },
  fetchUsers(state, users) {
    state.users = users;
  },
};

export const store = {
  state,
  mutations,
  actions,
};
