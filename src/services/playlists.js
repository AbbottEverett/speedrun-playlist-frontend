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
  function createNewPlaylist(reqBody) {
    return axios.post(`${baseURL}/playlists`, reqBody);
  }
  function deletePlaylist(id) {
    return axios.delete(`${baseURL}/playlists/${id}`);
  }
  window.getAllPlaylists = getAllPlaylists;
  window.getPlaylistById = getPlaylistById;
  window.getAllPlaylistsByUserId = getAllPlaylistsByUserId;
  window.createNewPlaylist = createNewPlaylist;
  window.deletePlaylist = deletePlaylist;
})();
