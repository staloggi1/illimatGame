// this deck could be simplified by a constructor method that populates an array
let cards = [{season: 'summer', number: 0}, {season: 'summer', number:  1}, {season: 'summer', number:  2}, {season: 'summer', number:  3}, {season: 'summer', number:  4}, {season: 'summer', number: 5}, {season: 'summer', number: 6}, {season: 'summer', number: 7}, {season: 'summer', number: 8}, {season: 'summer', number: 9}, {season: 'summer', number: 10}, {season: 'summer', number: 11}, {season: 'summer', number: 12}, {season: 'summer', number: 13}, {season: 'winter', number:  0}, {season: 'winter', number:  1}, {season: 'winter', number:  2},{season: 'winter', number:  3}, {season: 'winter', number:  4}, {season: 'winter', number:  5}, {season: 'winter', number:  6}, {season: 'winter', number:  7}, {season: 'winter', number:  8}, {season: 'winter', number:  9}, {season: 'winter', number:  10}, {season: 'winter', number:  12}, {season: 'winter', number:  13}, {season: 'spring', number: 0}, {season: 'spring', number: 1}, {season: 'spring', number: 2}, {season: 'spring', number: 3}, {season: 'spring', number: 4}, {season: 'spring', number: 5}, {season: 'spring', number: 6}, {season: 'spring', number: 7}, {season: 'spring', number: 8}, {season: 'spring', number: 9}, {season: 'spring', number: 10}, {season: 'spring', number: 11}, {season: 'spring', number: 12}, {season: 'spring', number: 13}, {season: 'autumn', number: 0}, {season: 'autumn', number: 1}, {season: 'autumn', number: 2}, {season: 'autumn', number: 3}, {season: 'autumn', number: 4}, {season: 'autumn', number: 5}, {season: 'autumn', number: 6}, {season: 'autumn', number: 7}, {season: 'autumn', number: 8}, {season: 'autumn', number: 9}, {season: 'autumn', number: 10}, {season: 'autumn', number: 11}, {season: 'autumn', number: 12}, {season: 'autumn', number: 13}]; 

let shuffledCards= [];
// will be initiated 'on click' when ui is created
const shuffle = function(arr) {
    for(let i = 0; i < arr.length; i ++) {
        let num = 0;
        const randNum = function(){
          num = Math.floor((Math.random() * arr.length) + 1);
        }
        randNum();
        shuffledCards.unshift(arr[num]);
        
    }

}
shuffle(cards);


// this section populates the corners with cards
