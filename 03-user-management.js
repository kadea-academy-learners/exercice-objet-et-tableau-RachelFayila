// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

const utilisateurs = [
  { nom: "Maria", age: 25, estAdmin: true },
  { nom: "Henock", age: 30, estAdmin: false },
  { nom: "Candide", age: 22, estAdmin: true },
  { nom: "Sarah", age: 28, estAdmin: false },
  { nom: "David", age: 35, estAdmin: true }
];

function whoIsAdmin() {
	const admins = utilisateurs.filter(utilisateur => utilisateur.estAdmin === true);
	
	const nomsAdmins = admins.map(utilisateur => utilisateur.nom);

	return nomsAdmins;
}

const resultat = whoIsAdmin(utilisateurs);

console.log("Les administrateurs sont :", resultat);


module.exports = {
	whoIsAdmin,
};


