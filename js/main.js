// Kortlek - utmaning
// Skriv en funktion som tar kortleks-arrayen som argument och som returnerar en blandad kortlek i form av en array. 
// Tips: Använd splice för att ta bort ett random kort åt gången i arrayen
// Tips: Använd push för att lägga till kortet som togs bort i till en ny array
// Tips: Använd en while-loop som loopar så länge kortleks-arrayen har några element
// create card deck

function makePlayingCards() {
    const suits = ['hearts', 'spades', 'diamond', 'clubs'];
    const chars = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A']
    const deck = [];

    suits.forEach( suit => {
        chars.forEach((char, index) => {
            const newCard = {
                suit: suit,
                char: char,
                value: index+1
            };
            deck.push(newCard);
        })
    });
    return deck;
}

function shuffleCards(deck) {
    const myDeck = [];
    Object.assign(myDeck, deck);
    
    const retDeck = [];
    while(myDeck.length !== 0) {
        const randomNum = Math.floor(Math.random() * myDeck.length);
        const card = myDeck.splice(randomNum, 1)[0];
        retDeck.push(card);
    }
    return retDeck;
}

//create 
const newSetDeck = makePlayingCards();
console.log('+++createdCards+++', newSetDeck);

//shuffle 
const shuffledDeck = shuffleCards(newSetDeck);
console.log('+++shuffledDeck+++', shuffledDeck);
