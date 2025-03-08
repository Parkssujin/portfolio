// JSON 파일에서 항목들을 가져오기
function loadItems() {
    return fetch('data/data.json')
      .then(response => response.json())
      .then(json => json.items);
  }
  
  //  리스트 업데이트하기
  function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
  }


  // 다크 모드 기능
  const darkModeSwitch = document.getElementById('darkModeSwitch');

  // 다크 모드 토글
  darkModeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');

      document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  });
  
  
  // 주어진 데이터 항목으로 HTML 리스트 아이템 생성하기
  function createHTMLString(item) {
    return `
      <li class="item">
          <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
          <span class="item_description">${item.name}, ${item.since}</span>
      </li>
      `;
  }
  
  function onButtonClick(event, items) { 
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
  
    if (key == null || value == null) {
      return;
    }
  
    displayItems(items.filter(item => item[key] === value));
  }
  
  function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
  }
  
  // main
  loadItems()
    .then(items => {
      displayItems(items);
      setEventListeners(items);
    })
    .catch(console.log);
  