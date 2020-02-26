const seasons = ["summer", "winter", "spring", "autumn"];
const cardNumbers = [1,3,4,5,6,6,8,9,10,"joker", "queen", "king"];
let cards = [];
seasons.forEach(function(element){
    for (let i = 0; i < cardNumbers.length; i ++){
        cards.push({season: element, number: cardNumbers[i]});
    }
});
// shuffled card array
let shuffledCards= [];
// seasons and directions div's
const summer = document.querySelector('.summer');
let winter = document.querySelector('.winter');
let spring = document.querySelector('.spring');
let autumn = document.querySelector('.autumn');
const north = document.querySelector('.north');
let east = document.querySelector('.east');
let south = document.querySelector('.south');
let west = document.querySelector('.west');
// add cards to direction objects
const distributeCards = function(){
    this.cards = shuffledCards.splice(0,3);
}
const directionObjGenerator = function(direction, season){
    this.objDirection = direction;
    this.currentSeason = season;
    this.cards = [];
    this.distCds = distributeCards;
    this.printCards = function(){
        this.cards.forEach(element => {
            this.objDirection.innerHTML += "season: " + element.season + " number: " + element.number + "<br/> ";
        });
        }
    }


// create direction objects
let northObj = new directionObjGenerator(north, summer);
let southObj = new directionObjGenerator(south, winter);

// will be initiated 'on click' when ui is created

// should create a new array that holds cards that have been used or alternatively splice that card directly into the shuffledCards and then i would leverage the

while(arr)
// set up game
//creates a new array that holds the shuffled cards
shuffle(cards);
// this section populates the corners with cards
northObj.distCds();
northObj.printCards();
southObj.distCds();
southObj.printCards();