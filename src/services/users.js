(function() {
  const baseURL = 'http://localhost:3000';
  function getAllUsers() {
    return axios.get(`${baseURL}/users`);
  }
  function getUserById(id){
    return axios.get(`${baseURL}/users/${id}`);
  }
  window.getAllUsers = getAllUsers;
  window.getUserById = getUserById;
})();
