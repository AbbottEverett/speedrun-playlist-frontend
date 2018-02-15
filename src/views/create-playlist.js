(function() {
  const savePlaylistForm = document.getElementById('save-playlist-form');
  const input = document.getElementById('playlist-name-input');
  savePlaylistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value.length > 0) {
      // console.log(input.value);
      $('#createPlaylistModal').modal('hide');
      let reqBody = {
        name: input.value,
        user_id: window.user_id
      };
      window.createNewPlaylist(reqBody)
        .then((res) => {
          window.renderItemList(window.selectedUser, 'PLAYLIST');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    input.value = '';



  });
})();
