(function() {
  // const root = document.getElementById('root');
  const views = ['HOME', 'USER', 'PLAYLIST', 'RUN'];
  let selectedUser;
  let currentView = views[0];
  const userDropdown = document.getElementById('user-dropdown');
  const userDropdownPrimary = document.getElementById('user-dropdown-primary');
  const userDropdownMenu = document.getElementById('user-dropdown-menu');
  console.log(userDropdownPrimary);
  console.log(userDropdownMenu);
  window.getAllUsers()
    .then((response) => {
      const userList = response.data.data;
      userList.forEach((user) => {
         let button = createDropDownButton(user.name);
         userDropdownMenu.appendChild(button);
      });
      console.log(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
  function createDropDownButton(name){
    const button = document.createElement('button');
    button.classList = 'dropdown-item';
    button.setAttribute('type', 'button');
    button.textContent = name;
    return button;
  }
  function changeView(view) {
    window.clearPreviousView();
    switch(view) {
      case 'HOME':
        window.setHomeView();
        break;
      case 'USER':
        window.setUserView();
        break;
      case 'PLAYLIST':
        window.setPlaylistView();
        break;
      case 'RUN':
        console.log('Will be handled later');
        break;
      default:
        console.log('Something is wrong!');
    }
  }
  changeView(currentView);
})();
