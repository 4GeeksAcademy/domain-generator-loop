import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our', 'this', 'the'];
  let adj = ['great', 'big', 'small', 'little'];
  let noun = ['jogger', 'racoon', 'ball', 'house'];
  let domain = ['.com', '.net', '.gov', '.net']

  for(let a = 0; a < pronoun.length; a++) {
    for(let b = 0; b < adj.length; b++) {
      for(let c = 0; c < noun.length; c++) {
        for(let d = 0; d < domain.length; d++) {
          console.log(pronoun[a] + adj[b] + noun[c]+ domain[d])
        }
      }
    }
  }




  console.log("Hello Rigo from the console!");
};
