var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
/* Create a function `addChocolates()` which takes `chocolates,color, count`
  as arguments and adds them to the dispenser from the top.*/

addChocolates = (chocolates, color, count)=>{
    if (count <= 0){
        return "Chocolate array is empty"; }
    for (let i = 0; i <= count; i++)
        chocolates.unshift(color);
    return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
/*Create a function removeChocolates() that takes number,chocolates as an argument and 
returns an array of chocolates that have been removed from the top. */

removeChocolates = (chocolates, number) => {
    let chocolate = [];
    if (number <= 0)
        return "Dispenser cannot be empty";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (let i = 0; i < number; i++)
        chocolate.push(chocolates.shift());
    return chocolate;
}

//Progression 3: Dispense ___ chocolates
/*create a function dispenseChocolates() that dispenses chocolate at her will. It takes
number, chocolates as an argument and returns an array of chocolates from the bottom. */

dispenseChocolates = (number,chocolates) =>{
    let chocolate = [];
    if (number <= 0)
        return "It cannot be zero";
    for (let i = 0; i < number; i++)
        chocolate.push(chocolates.push());
    return chocolate;
}

//Progression 4: Dispense ___ chocolates of ____ color
/*Create a function dispenseChocolatesOfColor() which takes chocolates,number, color as 
arugments and return an array of chocolates from the bottom of the given color.*/

dispenseChocolatesOfColor=(chocolates, number, color)=>{
    if(number<=0)
        return "Number cannot be zero/negative";
    if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";
    let chocolate=chocolates.slice(chocolates.length-number, chocolates.length);
    return chocolate;    
}

/* Progression 5: Display ___ chocolates of each color. Return array of numbers 
[green, silver, blue, crimson, purple, red, pink] */
noOfChocolates=(chocolates)=>{
    let arr=[];
    for(let i=0; i<chocolates.length; i++)
        chocolates[i] = -1;
   
    for(let i=0; i<chocolates.length; i++){
        let count = 1;
        for(let j=i+1; j<chocolates.length; j++){
            if(chocolates[i]==chocolates[j]){
                count++;
                chocolates[j] = 0;
            }
        }
        if(chocolates[i] != 0){
            chocolates[i] = count;
        }
    }
    let output=chocolates.filter(element=> element !== 0);
    return output;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors


//Progression 7: Change ___ chocolates of ____ color to ____ color


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed