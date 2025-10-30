// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

const notes = [12, 8, 15, 9, 10];

function averageNote(notes) {

	let somme = 0;

	for (let i = 0; i < notes.length; i++) {
    somme += notes[i]; 
  }

   const moyenne = somme / notes.length;

   if (moyenne >= 10) {
    return "Réussi";
  } else {
    return "Échoué";
  }
	
}

console.log(averageNote(notes));

module.exports = {
	averageNote,
};



