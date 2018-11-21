fetch('http://kde.link/test/get_field_size.php')
  .then(response => {
    return response.json();
  }).then(getData)
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
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

function getData(data){
  let tableSize = data.width * data.height;
  table.style.width = data.width * 120 + 'px';
  table.style.height = data.height * 120 + 'px';

  createCard(tableSize);
  // shuffleArr(tableSize);
}

function shuffleArr(tableSize){
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
}

function createCard(tableSize) {
  for(let i = 0; i < tableSize; i++){
      let card = document.createElement('div');
      let back = document.createElement('div');
      let front = document.createElement('div');
      let img = document.createElement('img');
      back.className = 'back';
      front.className = 'front';
      card.className = 'card';
      // img.src = `https://kde.link/test/${shuffledArr[i]}.png`;
      card.addEventListener('click', function(e){
        let clicked = e.target;
        if(count < 2){
          count++;
        }
        clicked.classList.add('selected');
      })
      front.appendChild(img);
      card.appendChild(back);
      card.appendChild(front);
      table.appendChild(card);
  }
}
