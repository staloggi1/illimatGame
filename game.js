const seasons = ["summer", "winter", "spring", "autumn"];
const directions = ["north", "east", "south", "west"];
const cardNumbers = [1,2,3,4,5,6,7,8,9,10,"joker", "queen", "king"];
let cards = [];
let seasonsDivConection = [];
let directionsDivConection = [];
let shuffledCards= [];
// container for used cards after  shuffle
let container = [];
// create seasons and directions div associations

let divConnection = function(e1, e2){
    for (i = 0; i < e1.length; i ++){
        e2.push({selector: e1[i], divAssociation: document.querySelector('.' + e1[i])});
    }
}
divConnection(seasons, seasonsDivConection);
divConnection(directions, directionsDivConection);
// populates the deck of cards and assigns them to the cards array
seasons.forEach(function(element){
    for (let i = 0; i < cardNumbers.length; i ++){
        cards.push({season: element, number: cardNumbers[i]});
    }
});
// function that takes the cards and creates a
const shuffle = function(arr) {
   let num = 0;
   while(arr != 0){
       num = Math.floor(Math.random() * arr.length);
       shuffledCards.push(arr[num]);
        container.push(arr.splice(num,1));
   }
        
}
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
let northObj = new directionObjGenerator(directionsDivConection[0].divAssociation, seasonsDivConection[0].divAssociation);
let southObj = new directionObjGenerator(directionsDivConection[2].divAssociation, seasonsDivConection[1].divAssociation);
let eastObj = new directionObjGenerator(directionsDivConection[3].divAssociation, seasonsDivConection[0].divAssociation);
let westObj = new directionObjGenerator(directionsDivConection[3].divAssociation, seasonsDivConection[2].divAssociation);
// set up game
//creates a new array that holds the shuffled cards
shuffle(cards);
// this section populates the corners with cards
northObj.distCds();
northObj.printCards();
southObj.distCds();
southObj.printCards();
eastObj.distCds();
eastObj.printCards();
westObj.distCds();
westObj.printCards();