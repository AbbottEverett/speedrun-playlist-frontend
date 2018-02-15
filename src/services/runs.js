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
  function createANewRun(reqBody) {
    return axios.post(`${baseURL}/runs`, reqBody);
  }
  function addARunToAPlaylistById(playlistId, reqBody) {
    return axios.post(`${baseURL}/playlists/${playlistId}/runs`, reqBody);
  }
  function deleteARunFromAPlaylistById(playlistId, runId) {
    return axios.delete(`${baseURL}/playlists/${playlistId}/runs/${runId}`);
  }
  window.getAllRuns = getAllRuns;
  window.getRunById = getRunById;
  window.getAllRunsFromAPlaylist = getAllRunsFromAPlaylist;
  window.getARunByIdFromAPlaylist = getARunByIdFromAPlaylist;
  window.createANewRun = createANewRun;
  window.addARunToAPlaylistById = addARunToAPlaylistById;
  window.deleteARunFromAPlaylistById = deleteARunFromAPlaylistById;
})();
