let listeMotsPendu = ['divisibilité', 'congruence', 'modulo', 'égalité', 'parité', 'identité', 'fonction', 'bijection', 'homotéthie'];
let nombreMotsDansListe = listeMotsPendu.length;
let motRecherche;
let motCache;
let lettreProposee;
let nbDeLettres;
const caractereDeRemplacement = "_ ";
let lettresDejaEntrees = [];
let motMasque = motRecherche;



function obtenirNbAleatoire(min, max) {
  min = 0;
  max = nombreMotsDansListe;
  return Math.floor(Math.random() * (max - min)) + min;
}

function motAleatoire() {
  return motRecherche = listeMotsPendu[obtenirNbAleatoire()];
}

function compterLettres() {
  nbDeLettres = motAleatoire().length;
  console.log(motRecherche);
  return nbDeLettres;
};

function masquerMot(mot) {
  mot;
  motCache = mot.replace(aRemplacer, caractereDeRemplacement.repeat(nbDeLettres));
  return motCache;
}

function transformation(mot) {
  obtenirNbAleatoire();
  compterLettres(mot);
  masquerMot(mot);
  let motMasque = motCache;
  return motMasque;
}