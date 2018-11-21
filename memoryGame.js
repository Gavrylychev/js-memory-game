fetch('http://kde.link/test/get_field_size.php')
  .then(response => {
    return response.json();
  }).then(createCard)
  .catch(() => console.log('Can\'t get response'));

let picturesLinks = [
  'https://kde.link/test/0.png',
  'https://kde.link/test/1.png',
  'https://kde.link/test/2.png',
  'https://kde.link/test/3.png',
  'https://kde.link/test/4.png',
  'https://kde.link/test/5.png',
  'https://kde.link/test/6.png',
  'https://kde.link/test/7.png',
  'https://kde.link/test/8.png',
  'https://kde.link/test/9.png'
];

const table = document.getElementById('gameTable');

function createCard (data) {
  let tableSize = data.width * data.height;
  table.style.width = data.width * 120 + 'px';
  table.style.height = data.height * 120 + 'px';
  console.log(tableSize)

  let numberArr = [];
  for(let i = 0; i < tableSize/2; i++){
    let randomNum = Math.floor(Math.random() * 10);
    numberArr.push(randomNum,randomNum);
  }
  console.log(numberArr)

  let shuffledArr = numberArr
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
    console.log(shuffledArr)

  for(let i = 0; i < data.width; i++){
    for(let j = 0; j < data.height; j++){
      let card = document.createElement('div');
      let img = document.createElement('img');
      card.className = 'card';
      img.src = `https://kde.link/test/${shuffledArr[i]}.png`;
      card.appendChild(img);
      table.appendChild(card);
    }
  }
}
