// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

const eleves = [
  { nom: "Candide", notes: [15, 17, 16] },
  { nom: "Maria", notes: [12, 13, 11] },
  { nom: "Ruth", notes: [9, 8] },
  { nom: "Diane", notes: [] }
];

function showStudentBulletin(eleves) {
  // Vérifie que le paramètre est bien un tableau
  if (!Array.isArray(eleves)) {
    throw new Error("Le paramètre 'eleves' doit être un tableau !");
  }

  const bulletins = []; 

  // Parcourt chaque élève du tableau
  for (let i = 0; i < eleves.length; i++) {
    const eleve = eleves[i];
    const nom = eleve.nom || "Nom inconnu";
    const notes = Array.isArray(eleve.notes) ? eleve.notes : [];

    let moyenne = 0;

    // Calcule la moyenne seulement s'il y a des notes
    if (notes.length > 0) {
      let somme = 0;
      for (let a = 0; a < notes.length; a++) {
        somme += notes[a];
      }
      moyenne = somme / notes.length;
    }

    // Arrondir à 2 chiffres après la virgule
    const moyenneArrondie = Number(moyenne.toFixed(2));

    // Déterminer le commentaire selon la moyenne
    let commentaire = "";
    if (moyenneArrondie >= 16) commentaire = "Excellent";
    else if (moyenneArrondie >= 14) commentaire = "Très Bien";
    else if (moyenneArrondie >= 12) commentaire = "Bien";
    else if (moyenneArrondie >= 10) commentaire = "Passable";
    else commentaire = "À revoir";

    // Créer un bulletin pour cet élève
    const bulletin = {
      nom: nom,
      moyenne: moyenneArrondie,
      commentaire: commentaire,
    };

    // Ajoute le bulletin dans le tableau final
    bulletins.push(bulletin);
  }

  return bulletins;
}

console.log(showStudentBulletin(eleves));

module.exports = {
	showStudentBulletin,
};



