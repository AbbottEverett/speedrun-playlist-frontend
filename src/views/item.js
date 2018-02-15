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
        item.setAttribute('data-playlist-id', data.id);
        item.addEventListener('click', (e) => {
          window.playlist_id = item.getAttribute('data-playlist-id');
          window.currentView = window.views[2];
          window.changeView(window.currentView, window.selectedUser);
        });
        let allItemsToAppend = {
          item, header, footer, title, editIcons, updateIcon, deleteIcon
        };
        return appendItemElements(allItemsToAppend);
        break;
      case 'RUN':
        return window.getRunData(data)
          .then((response) => {
            title.textContent = response.name;
            item.setAttribute('data-run-id', data.id);
            footer.textContent = `Category: ${response.category} | Platform: ${response.platform} | Duration: ${response.duration}`;
            let allItemsToAppend = {
              item, header, footer, title, editIcons, updateIcon, deleteIcon
            };
            return appendItemElements(allItemsToAppend);
          });
        break;
      default:
        return 'COULD NOT CREATE ITEM';
    }

  }
  function appendItemElements(obj){
    obj.editIcons.appendChild(obj.updateIcon);
    obj.editIcons.appendChild(obj.deleteIcon);
    obj.header.appendChild(obj.title);
    obj.header.appendChild(obj.editIcons);
    obj.item.appendChild(obj.header);
    obj.item.appendChild(obj.footer);
    return obj.item;
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
            const item = createItem(playlistData, 'PLAYLIST');
            itemList.appendChild(item);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return window.getAllPlaylistsByUserId(window.user_id)
      .then((res) => {
        const playlistsList = res.data.data;
        playlistsList.forEach((playlistData) => {
          const item = createItem(playlistData, 'PLAYLIST');
          itemList.appendChild(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function renderRuns(user) {
    if (user === 'Admin') {
      return window.getAllRuns()
        .then((res) => {
          const runsList = res.data.data;
          runsList.forEach((runData) => {
            createItem(runData, 'RUN')
              .then((item) => {
                itemList.appendChild(item);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return window.getAllRunsFromAPlaylist(window.playlist_id)
      .then((res) => {
        const playlistRunsList = res.data.data;
        const promises = [];
        playlistRunsList.forEach((playlistRunsData) => {
          const promise = window.getRunById(playlistRunsData.run_id);
          promises.push(promise);
        });
        return Promise.all(promises);
      })
      .then((responses) => {
        responses.forEach((response) => {
          let runData = response.data.data;
          createItem(runData, 'RUN')
            .then((item) => {
              itemList.appendChild(item);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  window.renderItemList = renderItemList;
})();
