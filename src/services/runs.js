(function(){
  const baseURL = 'http://localhost:3000';
  function getAllRuns() {
    return axios.get(`${baseURL}/runs`);
  }
  function getRunById(id){
    return axios.get(`${baseURL}/runs/${id}`);
  }
  function getAllRunsFromAPlaylist(playlistId) {
    return axios.get(`${baseURL}/playlists/${playlistId}/runs`);
  }
  function getARunByIdFromAPlaylist(playlistId, runId) {
    return axios.get(`${baseURL}/playlists/${playlistId}/runs/${runId}`);
  }
  window.getAllRuns = getAllRuns;
  window.getRunById = getRunById;
  window.getAllRunsFromAPlaylist = getAllRunsFromAPlaylist;
  window.getARunByIdFromAPlaylist = getARunByIdFromAPlaylist;
})();
