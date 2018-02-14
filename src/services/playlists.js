(function() {
  const baseURL = 'http://localhost:3000';
  function getAllPlaylists() {
    return axios.get(`${baseURL}/playlists`);
  }
  function getAllPlaylistsByUserId(user_id) {
    return axios.get(`${baseURL}/playlists?user_id=${user_id}`);
  }
  function getPlaylistById(id) {
    return axios.get(`${baseURL}/playlists/${id}`);
  }
  window.getAllPlaylists = getAllPlaylists;
  window.getPlaylistById = getPlaylistById;
  window.getAllPlaylistsByUserId = getAllPlaylistsByUserId;
})();
