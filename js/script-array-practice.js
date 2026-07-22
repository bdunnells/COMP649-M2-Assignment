//STEP 1
//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//
/*
const movies = ["Top Gun", "Jaws", "The Omen", "Sound of the music", "October Sky"]
//diplay the second movie
console.log(movies[1])
*/

//STEP 2
//Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one 
//  of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display 
//  the first movie in your array.
//
/*
const movies = new Array(5)
movies[0] = "Top Gun"
movies[1] = "Jaws"
movies[2] = "The Omen"
movies[3] = "Sound of the music"
movies[4] = "October Sky"
//display the first movie
console.log(movies[0])
*/

//STEP 3
//Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length 
//  of the array. You should now have 6 total movies stored in the array.
//
/*
const movies = new Array(5)
movies[0] = "Top Gun"
movies[1] = "Jaws"
movies[2] = "The Omen"
movies[3] = "Sound of the music"
movies[4] = "October Sky"
//add new movie into the 3rd position
movies.splice(2, 0, 'Mission Impossible')
console.log(movies)
console.log('The length of the array = ', movies.length)
*/


//STEP 4
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array 
//  until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console
//  to display the contents of the array.
//
/*
const movies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky"
]
//console.log(movies)
//remove frist movie using the delete operator
delete movies[0]
//display the contents of the array
console.log(movies)

//Output looks like below:
[
  <1 empty item>,
  'Jaws',
  'The Omen',
  'Sound of the music',
  'October Sky'
]
*/

//STEP 5
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until 
//  you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
//
/*
const movies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
//use for..in loop
for (let index in movies) {
    console.log(movies[index])
}
*/


//STEP 6
//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
//
/*
const movies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
//use for..of loop
for (const eachMovie of movies) {
    console.log(eachMovie)
}
*/

//STEP 7
//Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within
//  the console window in a sorted view.
//
/*
const movies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
//use for..of loop and 
//sort the array based from alphabetical order using sort()
for (const eachMovie of movies.sort()) {
    console.log(eachMovie)
}
*/


//STEP 8
/*Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. 
Populate the array with the 3 movies that you regret watching. Display both arrays within the console 
window so that it’s formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
…
*/
/*
const movies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
const leastFavMovies = [
    "Jaws",
    "Gone with the wind",
    "Titanic"
]
 
console.log("Movies I like:")
console.log()
for (const eachMovie of movies) {
    console.log(eachMovie)
}
console.log()
console.log("Movies I regret watching:")
console.log()
for (const movie of leastFavMovies) {
    console.log(movie)
}
*/

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into 
//  a single array called movies. Use the console window to display the list in reverse sorted
//
/*
const myMovies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
const leastFavMovies = [
    "Jaws",
    "Gone with the wind",
    "Titanic"
]
//merge 2 arrays using concat()
const movies = myMovies.concat(leastFavMovies)
//sort and reverse the new array
movies.sort().reverse()
console.log(movies)
*/



//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and 
//  display it within the console window.
/*
const myMovies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
const leastFavMovies = [
    "Jaws",
    "Gone with the wind",
    "Titanic"
]
//merge 2 arrays using concat()
const movies = myMovies.concat(leastFavMovies)
//sort and reverse the new array
movies.sort().reverse()
//display the last item from the array
console.log(movies.at(-1))
*/



//STEP 11
//Copy the code from step 10. Remove the previous method and this time use a method to return just 
//  the first item in the array and display it within the console window.
/*
const myMovies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
const leastFavMovies = [
    "Jaws",
    "Gone with the wind",
    "Titanic"
]
//merge 2 arrays using concat()
const movies = myMovies.concat(leastFavMovies)
//sort and reverse the new array
movies.sort().reverse()
//display the first item from the array
console.log(movies.at(0))
*/

//STEP 12
//Programmatically retrieve the movies in your array that you do not like and return their indices. 
//  Then, using those indices, programmatically add movies that you do like.
/*
const myMovies = [
     "Top Gun", 
     "Jaws", 
     "The Omen", 
     "Sound of the music", 
     "October Sky",
     "Titanic",
     "Gone with the wind"
]
const dislikes = [
    "Jaws",
    "Gone with the wind",
    "Titanic"
]

console.log(myMovies)
console.log()

//find indices of the dislike movies
const index2rm = myMovies.reduce((indices, movie, index) => {
    if (dislikes.includes(movie)) {
        indices.push(index)
    }
    return indices;
}, []);

//add new fav movies
const newLikes = [
    "Final Destination", "Zootopia", "Inception"
]

//remove disliked movies
index2rm.forEach((index, i) => {
    //replace 1 item at the specific index with a new fav movie
    myMovies.splice(index, 1, newLikes[i])
})

console.log(myMovies)
*/

//STEP 13
/*Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
The array should look something like this:

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

Now, loop through the array and filter out and display only the movie names. You must use the filter() method 
and you’ll need to filter out the names by their primitive data type.
*/
/*
const movies = [
     ["Top Gun", 3], 
     ["Jaws", 4], 
     ["The Omen", 1], 
     ["Sound of the music", 2], 
     ["October Sky", 5]
]
//use filter() to display only the movie names
//filtered by the primitive data type
const filterMovies = movies.filter(row => row[1]);
const sortedRatings  = filterMovies.sort((rowA, rowB) => rowA[1] - rowB[1])

//console.log(sortedRatings)
//print only the movie names, based on ratings
sortedRatings.forEach(row => {
    console.log(row[0])
})
*/

//STEP 14
/*
Create a string array called employees using literal notation and populate the array with several employee names. 
Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, 
passing in the employees array into the function as a parameter. Make sure to display the result in the console window. 
Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees:

ZAK
JESSICA
MARK
FRED
SALLY
*/
/*
const employees = [
    "ZAK",
    "JESSICA",
    "MARK",
    "FRED",
    "SALLY"
]
 
// create an anonymous function
const showEmployee = function(empArray) {
    for (let x = 0; x < empArray.length; x++) {
        console.log(empArray[x]);
    }
};

console.log("Employees: ")
console.log()
showEmployee(employees);
*/


//STEP 15
//Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//Expected Result: [58, "abcd", true]
/*
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
*/



//STEP 16
//Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers 
//  and then pass that array into my function, the function should randomly return one of those numbers.
//
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getRandNum(numsArray) {
  const randIndex = Math.floor(Math.random() * numsArray.length);
  
  // 2. Return the item at that index
  return numsArray[randIndex]
}
const randomNum = getRandNum(nums)
console.log(randomNum) 
*/

//STEP 17
//Write a JavaScript function to get the largest number from a numeric array.
//
/*
const nums = [1001, 21, 3333, 14, 500, 6232, 7676, 84, 9, 1011];

function getLargest(numArray) {
  return Math.max(...numArray)
}

console.log(getLargest(nums))
*/
