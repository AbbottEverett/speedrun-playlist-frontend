(function() {
  const baseURL = 'http://localhost:3000';
  function getAllPlaylists() {
    return axios.get(`${baseURL}/playlists`);
  }
  function getPlaylistById(id) {
    return axios.get(`${baseURL}/playlists/${id}`);
  }
  window.getAllPlaylists = getAllPlaylists;
  window.getPlaylistById = getPlaylistById;
})();
