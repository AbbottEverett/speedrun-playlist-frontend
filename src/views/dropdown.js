(function() {
  const userDropdownPrimary = document.getElementById('user-dropdown-primary');
  const userDropdownMenu = document.getElementById('user-dropdown-menu');

  function renderDropDown(view, name) {
    if (view === 'HOME') {
      userDropdownPrimary.textContent = '--SELECT USER--';
    } else {
      userDropdownPrimary.textContent = name;
    }
    clearDropDown();
    return window.getAllUsers()
      .then((response) => {
        const userList = response.data.data;
        userList.forEach((user) => {
          if (user.name !== name) {
            const button = createDropDownButton(user.name);
            userDropdownMenu.appendChild(button);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function createDropDownButton(name){
    const button = document.createElement('button');
    button.classList = 'dropdown-item';
    button.setAttribute('type', 'button');
    button.textContent = name;
    return button;
  }
  function clearDropDown() {
    while(userDropdownMenu.firstChild) {
      userDropdownMenu.removeChild(userDropdownMenu.firstChild);
    }
  }
  function dropdownOptionSelected(event) {
    event.preventDefault();
    const user = event.target.textContent;
    window.selectedUser = user;
    window.currentView = window.views[1];
    window.changeView(window.currentView, window.selectedUser);
  }

  userDropdownMenu.addEventListener('click', dropdownOptionSelected);

  window.renderDropDown = renderDropDown;
})();
