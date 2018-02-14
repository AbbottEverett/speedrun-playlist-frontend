(function() {
  const itemList = document.getElementById('item-list');
  function createItem(data, type) {
    const item = document.createElement('div');
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    const title = document.createElement('h3');
    const editIcons = document.createElement('div');
    const updateIcon = document.createElement('i');
    const deleteIcon = document.createElement('i');

    item.classList = 'item-container';
    header.classList = 'd-flex justify-content-between';
    updateIcon.classList = 'fas fa-cog fa-2x';
    deleteIcon.classList = 'fas fa-times fa-2x';

    switch(type) {
      case 'PLAYLIST':
        title.textContent = data.name;
        footer.textContent = `USER_ID: ${data.user_id}`;
        break;
      case 'RUN':
        break;
      default:
        return 'COULD NOT CREATE ITEM';
    }

    editIcons.appendChild(updateIcon);
    editIcons.appendChild(deleteIcon);
    header.appendChild(title);
    header.appendChild(editIcons);
    item.appendChild(header);
    item.appendChild(footer);

    return item;
  }
  function clearItemList() {
    while(itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  function renderItemList(user, type) {
    clearItemList();
    switch(type) {
      case 'PLAYLIST':
        renderPlaylists(user);
        break;
      case 'RUN':
        renderRuns(user);
        break;
      default:
        console.log('SOMETHING IS WRONG!!!!');
    }
  }
  function renderPlaylists(user) {
    if (user === 'Admin') {
      return window.getAllPlaylists()
        .then((res) => {
          const playlistsList = res.data.data;
          playlistsList.forEach((playlistData) => {
            console.log(playlistData);
            const item = createItem(playlistData, 'PLAYLIST');
            itemList.appendChild(item);
          });
        })
        .catch((err) => {
          console.log(err);
        })
    }
    console.log('Not Admin');
  }
  function renderRuns(user) {
    if (user === 'Admin') {
      return window.getAllRuns()
        .then((res) => {
          const runsList = res.data.data;
          runsList.forEach((runData) => {
            console.log(runData);
            const item = createItem(runData, 'RUN');
            itemList.appendChild(item);
          });
        })
        .catch((err) => {
          console.log(err);
        })
    }
    console.log('Not Admin');
  }
  window.renderItemList = renderItemList;
})();
