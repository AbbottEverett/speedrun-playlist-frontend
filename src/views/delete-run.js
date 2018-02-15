(function() {
  const deleteRunForm = document.getElementById('delete-run-form');
  deleteRunForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $('#deleteRunModal').modal('hide');
    window.deleteARunFromAPlaylistById(window.playlist_id, window.run_id)
      .then((res) => {
        window.run_id = undefined;
        window.renderItemList(window.selectedUser, 'RUN');
      })
      .catch((err) => {
        console.log(err);
      });

  });
})();
