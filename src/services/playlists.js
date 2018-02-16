(function() {
  const baseURL = 'https://stormy-coast-63832.herokuapp.com';
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
  function updatePlaylist(id, reqBody) {
    return axios.patch(`${baseURL}/playlists/${id}`, reqBody);
  }
  window.getAllPlaylists = getAllPlaylists;
  window.getPlaylistById = getPlaylistById;
  window.getAllPlaylistsByUserId = getAllPlaylistsByUserId;
  window.createNewPlaylist = createNewPlaylist;
  window.deletePlaylist = deletePlaylist;
  window.updatePlaylist = updatePlaylist;
})();
