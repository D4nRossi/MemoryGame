const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    { 
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    { 
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];
let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const result = document.querySelector('#result');
const grid = document.getElementById('grid');

//função para gerar o Array de forma randomica
cardArray.sort(()=> 0.5 - Math.random());

function createBoard(){
    for(let i =0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}createBoard();


function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);

    console.log('Você fez um par')

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Clicou na mesma imagem');
    }

    if(cardChosen[0] == cardChosen[1]){
        alert('Fez um par');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Tente novamente');
    }
    //restart do processo
    cardChosen = [];
    cardsChosenIds = [];
    result.textContent = cardsWon.length;

    if(cardsWon.length == cardArray.length/2){
        result.textContent = 'Parabéns você pegou 3 tipos de virús nesse tempo'
    }

}

//função para virar a carta
function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}