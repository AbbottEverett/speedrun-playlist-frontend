(function() {
  const deletePlaylistForm = document.getElementById('delete-playlist-form');
  console.log(deletePlaylistForm);
  deletePlaylistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Submitted!');
    // console.log(window.playlist_id);
    $('#deletePlaylistModal').modal('hide');
    window.deletePlaylist(window.playlist_id)
      .then((res) => {
        console.log(res.data);
        window.playlist_id = undefined;
        window.renderItemList(window.selectedUser, 'PLAYLIST');
      })
      .catch((err) => {
        console.log(err);
      });

  });
})();
