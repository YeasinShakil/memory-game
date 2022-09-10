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
        name: 'iceCream',
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
        name: 'iceCream',
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
]

cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const result = document.getElementById('result');
let cardChoosen = [];
let cardChoosenId = [];
const cardWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        // console.log(card, 1);
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneID = cardChoosenId[0];
    const optionTwoID = cardChoosenId[1];
    console.log(cards)
    
    if(cardChoosen[0] === cardChoosen[1]) {
        alert('You found a match!')
        cards[optionOneID].setAttribute('src', 'images/white.png')
        cards[optionTwoID].setAttribute('src', 'images/white.png')
        cards[optionOneID].removeEventListener('click',flipCard);
        cards[optionTwoID].removeEventListener('click',flipCard);
        cardWon.push(cardChoosen);
    } else{
        cards[optionOneID].setAttribute('src', 'images/blank.png');
        cards[optionTwoID].setAttribute('src', 'images/blank.png');
        alert('Sorry try again!');
    }
    result.innerHTML = cardWon.length;
    cardChoosen = [];
    cardChoosenId = [];

    if(cardWon.length == cardArray.length / 2) {
        result.textContent = `Congratulations!! You have match all the cards!`;
    }
}

function flipCard() {
    const cardId = this.getAttribute('id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}
console.log(cardChoosenId)
console.log(cardChoosen)
console.log(cardArray)
console.log(cardWon)