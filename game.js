// this deck could be simplified by a constructor method that populates an array
let cards = [{season: 'summer', number: 0 ,picture: '' }, {season: 'summer', number:  1 ,picture: '' }, {season: 'summer', number:  2 ,picture: '' }, {season: 'summer', number:  3 ,picture: '' }, {season: 'summer', number:  4 ,picture: '' }, {season: 'summer', number: 5 ,picture: '' }, {season: 'summer', number: 6 ,picture: '' }, {season: 'summer', number: 7 ,picture: '' }, {season: 'summer', number: 8 ,picture: '' }, {season: 'summer', number: 9 ,picture: '' }, {season: 'summer', number: 10 ,picture: '' }, {season: 'summer', number: 11 ,picture: '' }, {season: 'summer', number: 12 ,picture: '' }, {season: 'summer', number: 13 ,picture: '' }, {season: 'winter', number:  0 ,picture: '' }, {season: 'winter', number:  1 ,picture: '' }, {season: 'winter', number:  2 ,picture: '' },{season: 'winter', number:  3 ,picture: '' }, {season: 'winter', number:  4 ,picture: '' }, {season: 'winter', number:  5 ,picture: '' }, {season: 'winter', number:  6 ,picture: '' }, {season: 'winter', number:  7 ,picture: '' }, {season: 'winter', number:  8 ,picture: '' }, {season: 'winter', number:  9 ,picture: '' }, {season: 'winter', number:  10 ,picture: '' }, {season: 'winter', number:  12 ,picture: '' }, {season: 'winter', number:  13 ,picture: '' }, {season: 'spring', number: 0 ,picture: '' }, {season: 'spring', number: 1 ,picture: '' }, {season: 'spring', number: 2 ,picture: '' }, {season: 'spring', number: 3 ,picture: '' }, {season: 'spring', number: 4 ,picture: '' }, {season: 'spring', number: 5 ,picture: '' }, {season: 'spring', number: 6 ,picture: '' }, {season: 'spring', number: 7 ,picture: '' }, {season: 'spring', number: 8 ,picture: '' }, {season: 'spring', number: 9 ,picture: '' }, {season: 'spring', number: 10 ,picture: '' }, {season: 'spring', number: 11 ,picture: '' }, {season: 'spring', number: 12 ,picture: '' }, {season: 'spring', number: 13 ,picture: '' }, {season: 'autumn', number: 0 ,picture: '' }, {season: 'autumn', number: 1 ,picture: '' }, {season: 'autumn', number: 2 ,picture: '' }, {season: 'autumn', number: 3 ,picture: '' }, {season: 'autumn', number: 4 ,picture: '' }, {season: 'autumn', number: 5 ,picture: '' }, {season: 'autumn', number: 6 ,picture: '' }, {season: 'autumn', number: 7 ,picture: '' }, {season: 'autumn', number: 8 ,picture: '' }, {season: 'autumn', number: 9 ,picture: '' }, {season: 'autumn', number: 10 ,picture: '' }, {season: 'autumn', number: 11 ,picture: '' }, {season: 'autumn', number: 12 ,picture: '' }, {season: 'autumn', number: 13 ,picture: '' }]; 


// this section populates the corners with cards

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
