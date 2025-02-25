import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ['the', 'our', 'this', 'the'];
  let adjs = ['great', 'big', 'small', 'little'];
  let nouns = ['jogger', 'racoon', 'ball', 'house'];
  let domains = ['.com', '.net', '.gov', '.net']

  for(let pronoun of pronouns ) {
    for(let adj of adjs) {
      for(let noun of nouns) {
        for(let domain of domains) {
          console.log(pronoun + adj + noun + domain)
        }
      }
    }
  }




  console.log("Hello Rigo from the console!");
};
