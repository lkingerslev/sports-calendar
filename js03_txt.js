/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Landen Ingerslev
     Date:   4/5/2023

     Filename: js03.js
 */

//days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);
window.addEventListener("load", showGames);

//function to write weekday names into calendar
function addWeekDays(){
  //inital value
  let i = 0;
  //collection of table headings
  let headingCells = document.getElementsByTagName("th");
  //write each of the 7 days into the headings
  while(i<7){
    headingCells[i].innerHTML = weekDays[i];
    //increase counter by one
    i++;
  }
}
//function to write game info in calendar
function showGames(){
  for (let i=0;i<gameDates.length;i++){
    let gameInfo = "";
    //open paragraph
    switch(gameResults[i]){
      case "W": 
        gameInfo += "<p class='win'>";
        break;
      case "L":
        gameInfo += "<p class='lose'>";
        break;
      case "S":
        gameInfo += "<p class='suspended'>";
        break;
      case "P":
        gameInfo += "<p class='postponed'>";
        break;
    }
    //display if it is a home or away game
    if(gameLocations[i] === "h"){
      gameInfo += "vs. ";
    }else if(gameLocations[i] === "a"){
      gameInfo += "@ ";
    }
    //include opponent
    gameInfo += gameOpponents[i] + "<br>";
    //include result and info
    gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";
    //display innings played for suspended, shortened, or extraining games
    if(gameInnings[i]<5){
      gameInfo += " [" + gameInnings[i] + "]***";
    }else if(gameInnings[i]<9){
      gameInfo += " [" + gameInnings[i] + "]* ";
    }else if(gameInnings[i]>9){
      gameInfo += " [" + gameInnings[i] + "]";
    }
    //close paragraph
    gameInfo += "</p>";
    //write info into table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
  }
}