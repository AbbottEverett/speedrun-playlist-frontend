(function() {
  const updatePlaylistForm = document.getElementById('update-playlist-form');
  const input = document.getElementById('update-playlist-name-input');

  updatePlaylistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value.length > 0) {
      $('#updatePlaylistModal').modal('hide');
      let reqBody = {
        name: input.value,
        user_id: window.user_id
      };
      window.updatePlaylist(window.playlist_id, reqBody)
        .then((res) => {
          window.playlist_id = undefined;
          window.renderItemList(window.selectedUser, 'PLAYLIST');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    input.value = '';
  });

})();
