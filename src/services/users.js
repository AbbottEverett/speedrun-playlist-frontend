(function() {
  const baseURL = 'https://stormy-coast-63832.herokuapp.com';
  function getAllUsers() {
    return axios.get(`${baseURL}/users`);
  }
  function getUserById(id){
    return axios.get(`${baseURL}/users/${id}`);
  }
  window.getAllUsers = getAllUsers;
  window.getUserById = getUserById;
})();
