(function() {
  const root = document.getElementById('root');
  window.getAllUsers()
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
  window.getUserById(1)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
})();
