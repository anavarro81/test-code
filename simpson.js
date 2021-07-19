const characters = [
    { name: 'Homer', family: 'Simpsons', age: 55},
    { name: 'Lisa', family: 'Simpsons', age: 8},
    { name: 'Bart', family: 'Simpsons', age: 10},
    { name: 'Maggie', family: 'Simpsons', age: 1},
    { name: 'Ned', family: 'Flanders', age: 56}
   ]

/*
1) Show all the characters
2) Show just one
3) Show Oldest Simpsons. 
4) Show oldest character.
5) Show the yongest one. 
*/

   const showName = (character) => {
    console.log('\t' + character.name)
  }
   
   const sortByAge = (array) => {
     array.sort((elem1, elem2) => {
       return elem1.age - elem2.age

     })
     return array
   }

// Searh for the last key for search key 'family'.
  function findOlderByFamily(array, searchKey, searchValue) {
    var index = array.slice().reverse().findIndex(x => x[searchKey] === searchValue);    
    var count = array.length - 1    
    var finalIndex = index >= 0 ? count - index : index;       
    return finalIndex;
  }

// 1) show all the characters.
    console.log('1. - show all characters');
    characters.forEach(showName);
   
// 2) show Just One
   console.log('2. - show just one: ' + characters[0].name);

const characters_sorted = sortByAge(characters)
//console.log(characters_sorted)

// 3) Show Oldest Simpsons.
var index = findOlderByFamily(characters_sorted, 'family', 'Simpsons')
console.log('The oldest Simpson is: ' + characters_sorted[index].name)

// 4) Show oldest character.
console.log('4) The oldest character is: ' + characters_sorted[characters_sorted.length-1].name)

// 5) Show the yongest one. 
console.log('5) The yongest character is: ' + characters_sorted[0].name)
