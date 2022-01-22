let listeMotsPendu = ['divisibilité', 'congruence', 'modulo', 'égalité', 'parité', 'identité', 'fonction', 'bijection', 'homothéthie'];
let nombreMotsDansListe = listeMotsPendu.length;
let indexMot;
let motRecherche;
let nbDeLettres;
let motCache;

/* ############################################## */
/* # Obtention aléatoire d'un mot dans la liste # */
/* ############################################## */

function obtenirIndexAleatoire(min, max) {
  min = 0;
  max = nombreMotsDansListe;
  indexMot = Math.floor(Math.random() * (max - min)) + min;
  console.log('Index du mot : ' + indexMot);
  return Number(indexMot);
}

function motAleatoire() {
  motRecherche = listeMotsPendu[indexMot];
  console.log('Mot sélectionné aléatoirement : ' + '"' + motRecherche + '"');
  return motRecherche;
}

/* Masquage du mot obtenu */

function compterLettres() {
  nbDeLettres = motRecherche.length;
  console.log('nombre de lettre de "' + motRecherche + '" : ' + nbDeLettres);
  return nbDeLettres;
};

function masquerMot() {
  let aRemplacer = motRecherche;
  mot = aRemplacer;
  motCache = motRecherche.replace(mot, '_ '.repeat(nbDeLettres));
  return motCache;
}

/* Procédure automatique */

function obtenirMotTraite() {
  obtenirIndexAleatoire();
  motAleatoire();
  compterLettres();
  masquerMot();
  let motMasque = motCache;
  return motMasque;
}

obtenirMotTraite();

function afficherEtatMot() {
  document.write(motCache);
  return motCache;
}

afficherEtatMot();


/*#######################################################*/
// Fonction input pour permettre de soumettre une lettre
/*#######################################################*/

let lettreProposee;
let listeLettresProposees = [];


function entrerLettre() {
  lettreProposee = window.prompt("Essayez de deviner une lettre");
  listeLettresProposees.push(lettreProposee);
  console.log(listeLettresProposees);
  console.log(lettreProposee);
  return lettreProposee;
}

entrerLettre();

/* 
*/

/* ############################################################ */
/* Fonctions nécessaires à la vérification d'un correspondance */
/* ############################################################ */

function transformerMotEnTableau(mot) {
  motEnTableau = [...mot];
  console.log(motEnTableau);
  return motEnTableau;
}

transformerMotEnTableau(motRecherche);



let regexpress = lettreProposee; // Variable pour la comparaison


let found = motEnTableau.match(regexpress);
console.log(found);

function rendreIndexLettre() {
  motEnTableau.forEach(element = found => {
    console.log(element);
  });
}
if (found) {
  rendreIndexLettre();
}


let indexLettre;
let indiceDeCorrespondance;
function comparer() {
  if (motEnTableau.includes(regexpress)) {

  }
}

comparer();

console.indiceDeCorrespondance;

function chercherCorrespondance(regexpress) {
  if (found) {
    console.log("correspondance" + regexpress);
  }

}

chercherCorrespondance();


function verifierCorrespondance(a, b) {
  a = lettreProposee;
  b = motRecherche;
}

// Compter le nombre de lettre afin d'afficher "_ " à la place de chaque caractère dans le mot

/*
function repeatUnderscore() {

}

// convertir le motRecherche en motCache

// imprimer la conversion du mot recherché en mot caché à l'aide de "_ ".
function transformationMot(motRecherche) {
  let mot = /(\w+)\s(\w+)/;
  let nouveauMot = motRecherche.replace(mot.replace);
}



function indexLetterInWordToFind () {

  return motRecherche.toLowerCase().search(lettreProposee);
}
// Sélection au hasard d'un mot parmi un liste dans un fichier ("listePendu.txt par exemple")

// Création d'une fonction qui va choisir un index au hasard pour sélection un élément de "let listePendu = ['divisibilité','congruence', 'modulo', ...]"

// Stockage de ce mot dans une variable ("let motRecherche" par exemple)

// Transformation de cette chaîne de caractère en "* " ou en "_ " et stockage dans une nouvelle variable ("let motCache")

// Création d'une variable array qui contiendra toutes les propositions entrées par l'utilisateur ("let lettresDejaEntrees = []")




// Création d'une fonction compteur(). Il y a sept tours maximum

// Creation d'une fonction dessinPendu() qui affichera un membre du pendu à chaque mauvaise réponse.

// Création d'un fonction qui permettra de demander à l'utilisteur d'entrer une lettre (let lettreProposee = prompt('Veuillez entrer une lettre : '))

  // Création d'une fonction qui va chercher une ou plusieurs occurence correspondante(s) entre lettreSoumise et motRecherché et renvoyer un booléen

// Création d'une fonction lettresTrouveeDansMotCache() qui affiche toute les occurences des caractères proposés correspondants à motRecherche

// Affichage de "motCache" dans la console
*/