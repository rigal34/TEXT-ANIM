const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0; //je creer des index pour me balader  de mot en mot dans mon array de letter
let letterIndex = 0;
//target.textContent = array[0] [1];//textContent m'affiche le contenu de mon tableau qui appartient à target

// je vais automatiser cette création de lettre
//je créer une fonction pour créer des lettres
const creatLetter = () => {
  const letter = document.createElement("span"); //je fais une constante qui créer un élément dans des  span
  target.appendChild(letter); //maintenant je dis target tu as un enfant qui est letter
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    // compte à rebours qui me fais disparaitre mes lettre dans 2.8s
    letter.remove();
  }, 2800);
};




// ON DIT UNE FONCTION RECURSIVE QUI S'APPELLE TOUTE SEULE


// setTimeout(() => {
//     letterIndex++;
//     creatLetter();
// },200);
////////////////////////////////////////////////////////////////////////TOUT LA LOGIGIQUE///////////////////////////////
//1️⃣si on ne dois pas encore venir à 0
const loop = () => {
  //lesson Les données 1h.48 setTimeout==>compte à rebours
  setTimeout(() => {
      if(wordIndex >= array.length) {//si la diction de mon mot est à la longueur de mon tableau tu remets à 0 les mots et lettres et tu relance loop
          wordIndex = 0;
          letterIndex=0;
          loop();
     

//2️⃣alors tu me sors une nouvelle lettre et on ne dois pas sortir de nouvelle lettre

        }else  if (letterIndex < array[wordIndex].length) {
      //length évite de dépasser les lettres de mon tableau
      creatLetter();
      letterIndex++;
      loop(); // je créer une fonction récursive c'est une fonction qui s'appelle toute seule
    

//3️⃣alors que c'est que l'on dois changer de mot

    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        //ce compte à rebours fait attendre un certains temps avant de lancer mon tableau de mot et de lettre
        loop();
      }, 2800);
    }
  }, 60);
};

loop();
////////////////////////////////TOUT LA LOGIQUE///////////////////////////////////////////////////////////////////