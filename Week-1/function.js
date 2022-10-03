function getData(querySelector, jsonListName, className) {
    let element = "";
    console.log(querySelector, jsonListName);
    let list = jsonListName;
    element = document.querySelector(`${querySelector}`);
    let itemList = "";
  
    for ({ name, title, singer, time } of list) {
      if (name && title) {
        itemList += `<ul><li class="icons"><i class="${name}">${title}</i></li></ul>`;
      } else if (name && singer && time) {
        itemList += `<tr><td>${name}</td>
           <td>${singer}</td>
           <td>${time}</td>
           <td><button>CATTY CLOUD SYNC</button></td></tr>`;
      } else if (name && className) {
        itemList += `<ul><li class="${className}"><i class="${name}"></i></li></ul>`;
      } else {
        itemList += `<span><i class="${name}"></i></span>`;
      }
    }
    return (element.innerHTML = itemList);
  }