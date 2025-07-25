export const quizzes = [
  {
    id: 1,
    title: "Culture Générale",
    subject: "Culture Générale",
    image: "https://example.com/images/culture.jpg",
  },
  {
    id: 2,
    title: "Automobile",
    subject: "Automobile",
    image: "https://example.com/images/automobile.jpg",
  },
  {
    id: 3,
    title: "Sciences & Technologies",
    subject: "Sciences & Technologies",
    image: "https://example.com/images/sciences.jpg",
  },
  {
    id: 4,
    title: "Histoire & Géographie",
    subject: "Histoire & Géographie",
    image: "https://example.com/images/histoire.jpg",
  },
  {
    id: 5,
    title: "Cinéma & Musique",
    subject: "Cinéma & Musique",
    image: "https://example.com/images/cinema.jpg",
  },
  {
    id: 6,
    title: "Sport & Jeux",
    subject: "Sport & Jeux",
    image: "https://example.com/images/sport.jpg",
  },
  {
    id: 7,
    title: "Node.js",
    subject: "Développement Back-end",
    image: "https://example.com/images/nodejs.jpg",
  },
];

export const questions = [
  // Culture Générale (id 1-20)
  {
    id: 1,
    quiz_id: 1,
    text: "Quelle est la capitale de l’Australie ?",
    explanation:
      "Canberra est la capitale politique, choisie comme compromis entre Sydney et Melbourne.",
  },
  {
    id: 2,
    quiz_id: 1,
    text: "Quel est le plus long fleuve du monde ?",
    explanation:
      "L'Amazone est considéré comme le plus long fleuve du monde, devant le Nil.",
  },
  {
    id: 3,
    quiz_id: 1,
    text: "En quelle année a eu lieu la Révolution française ?",
    explanation:
      "La Révolution française a débuté en 1789 avec la prise de la Bastille.",
  },
  {
    id: 4,
    quiz_id: 1,
    text: "Combien de langues officielles y a-t-il à l’ONU ?",
    explanation:
      "Il y a 6 langues officielles à l’ONU, dont le français et l’anglais.",
  },
  {
    id: 5,
    quiz_id: 1,
    text: "Qui a écrit 'Les Misérables' ?",
    explanation:
      "Victor Hugo est l’auteur du roman emblématique 'Les Misérables', publié en 1862.",
  },
  {
    id: 6,
    quiz_id: 1,
    text: "Quel pays a inventé les Jeux Olympiques ?",
    explanation:
      "Les Jeux Olympiques antiques ont été créés en Grèce en l’honneur de Zeus.",
  },
  {
    id: 7,
    quiz_id: 1,
    text: "Quel est l’organe principal de la respiration ?",
    explanation:
      "Les poumons permettent les échanges gazeux entre le corps et l’environnement.",
  },
  {
    id: 8,
    quiz_id: 1,
    text: "Combien y a-t-il de continents sur Terre ?",
    explanation:
      "Il existe 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe, Océanie.",
  },
  {
    id: 9,
    quiz_id: 1,
    text: "Qui a peint la Joconde ?",
    explanation:
      "La Joconde a été peinte par Léonard de Vinci à la Renaissance.",
  },
  {
    id: 10,
    quiz_id: 1,
    text: "Quelle est la formule chimique de l’eau ?",
    explanation:
      "H₂O est la formule chimique de l’eau : deux atomes d’hydrogène et un d’oxygène.",
  },
  {
    id: 11,
    quiz_id: 1,
    text: "Dans quel musée se trouve la Joconde ?",
    explanation: "La Joconde est exposée au musée du Louvre à Paris.",
  },
  {
    id: 12,
    quiz_id: 1,
    text: "Qui a formulé la loi de la gravitation universelle ?",
    explanation:
      "Isaac Newton a formulé la loi de la gravitation après avoir vu une pomme tomber.",
  },
  {
    id: 13,
    quiz_id: 1,
    text: "Quel est le plus grand continent ?",
    explanation: "L’Asie est le continent le plus vaste en superficie.",
  },
  {
    id: 14,
    quiz_id: 1,
    text: "Quelle planète est la plus grande ?",
    explanation: "Jupiter est la plus grosse planète du système solaire.",
  },
  {
    id: 15,
    quiz_id: 1,
    text: "Quel auteur a écrit 'Hamlet' ?",
    explanation: "Hamlet est une tragédie de William Shakespeare.",
  },
  {
    id: 16,
    quiz_id: 1,
    text: "Combien y a-t-il de sens chez l’humain ?",
    explanation:
      "On compte généralement 5 sens : vue, ouïe, toucher, goût, odorat.",
  },
  {
    id: 17,
    quiz_id: 1,
    text: "Quelle est la couleur du drapeau de la France ?",
    explanation:
      "Le drapeau français comporte trois bandes : bleu, blanc et rouge.",
  },
  {
    id: 18,
    quiz_id: 1,
    text: "Qui a peint 'La Nuit étoilée' ?",
    explanation: "Vincent van Gogh a peint ce tableau emblématique en 1889.",
  },
  {
    id: 19,
    quiz_id: 1,
    text: "Dans quelle ville se trouve le Colisée ?",
    explanation: "Le Colisée est un célèbre monument antique situé à Rome.",
  },
  {
    id: 20,
    quiz_id: 1,
    text: "Quel est le plus grand désert chaud du monde ?",
    explanation:
      "Le Sahara est le plus grand désert chaud, situé en Afrique du Nord.",
  },

  // Automobile (id 21-40)
  {
    id: 21,
    quiz_id: 2,
    text: "Quelle marque fabrique le modèle 'Golf' ?",
    explanation:
      "La Golf est un modèle emblématique de la marque allemande Volkswagen.",
  },
  {
    id: 22,
    quiz_id: 2,
    text: "Quel moteur est typiquement appelé 'V8' ?",
    explanation: "Un moteur V8 a deux rangées de 4 cylindres disposés en V.",
  },
  {
    id: 23,
    quiz_id: 2,
    text: "Quel pays est l’origine de la marque Ferrari ?",
    explanation:
      "Ferrari est un constructeur italien de voitures de sport fondé à Maranello.",
  },
  {
    id: 24,
    quiz_id: 2,
    text: "Quelle voiture électrique est produite par Tesla ?",
    explanation:
      "La Model S est l’un des premiers modèles 100% électriques de Tesla.",
  },
  {
    id: 25,
    quiz_id: 2,
    text: "Que signifie ABS ?",
    explanation:
      "L'ABS (Anti-lock Braking System) évite le blocage des roues lors d’un freinage brusque.",
  },
  {
    id: 26,
    quiz_id: 2,
    text: "Quel constructeur possède la marque Lexus ?",
    explanation: "Lexus est la division luxe du constructeur japonais Toyota.",
  },
  {
    id: 27,
    quiz_id: 2,
    text: "Quelle entreprise fabrique la Mustang ?",
    explanation:
      "La Mustang est une voiture sportive emblématique de la marque Ford.",
  },
  {
    id: 28,
    quiz_id: 2,
    text: "Quelle est l’unité de mesure de puissance d’un moteur ?",
    explanation: "On utilise le cheval-vapeur (ch) ou le kilowatt (kW).",
  },
  {
    id: 29,
    quiz_id: 2,
    text: "Quel type de carburant utilise un moteur diesel ?",
    explanation: "Les moteurs diesel utilisent du gazole.",
  },
  {
    id: 30,
    quiz_id: 2,
    text: "Quelle marque a pour logo un cheval cabré ?",
    explanation: "Le cheval cabré est l’emblème mondialement connu de Ferrari.",
  },
  {
    id: 31,
    quiz_id: 2,
    text: "Quelle marque japonaise est la plus vendue au monde ?",
    explanation:
      "Toyota est la marque automobile la plus vendue dans le monde.",
  },
  {
    id: 32,
    quiz_id: 2,
    text: "Quelle marque italienne a produit l'Alfa Romeo Giulia ?",
    explanation: "Alfa Romeo est une marque italienne fondée en 1910.",
  },
  {
    id: 33,
    quiz_id: 2,
    text: "Quel modèle est célèbre chez Ford ?",
    explanation: "La Mustang est un modèle mythique de Ford.",
  },
  {
    id: 34,
    quiz_id: 2,
    text: "Quel sigle désigne l'antiblocage de roues ?",
    explanation: "Le système ABS est un dispositif de sécurité.",
  },
  {
    id: 35,
    quiz_id: 2,
    text: "Combien de roues motrices a une voiture 4x4 ?",
    explanation: "Un 4x4 a 4 roues motrices.",
  },
  {
    id: 36,
    quiz_id: 2,
    text: "Quel fabricant de pneus est français ?",
    explanation: "Michelin est une entreprise française de pneumatiques.",
  },
  {
    id: 37,
    quiz_id: 2,
    text: "Quelle marque est spécialisée dans les voitures électriques ?",
    explanation: "Tesla est réputée pour ses voitures électriques innovantes.",
  },
  {
    id: 38,
    quiz_id: 2,
    text: "Quel type de voiture utilise un moteur thermique + électrique ?",
    explanation: "C’est le principe de l’hybride.",
  },
  {
    id: 39,
    quiz_id: 2,
    text: "Quel badge sportif est utilisé par Volkswagen ?",
    explanation: "Le badge GTI désigne les versions sportives.",
  },
  {
    id: 40,
    quiz_id: 2,
    text: "Quelle marque est allemande ?",
    explanation: "BMW est un constructeur automobile allemand.",
  },

  // Sciences & Technologies
  {
    id: 41,
    quiz_id: 3,
    text: "Quel est l'élément chimique dont le symbole est O ?",
    explanation:
      "O est le symbole de l’oxygène, essentiel à la respiration des êtres vivants.",
  },
  {
    id: 42,
    quiz_id: 3,
    text: "Qui a inventé la théorie de la relativité ?",
    explanation:
      "Albert Einstein a formulé la théorie de la relativité restreinte en 1905.",
  },
  {
    id: 43,
    quiz_id: 3,
    text: "Quel est l’organe qui pompe le sang dans le corps humain ?",
    explanation: "Le cœur est le principal organe du système circulatoire.",
  },
  {
    id: 44,
    quiz_id: 3,
    text: "Quelle planète est la plus proche du Soleil ?",
    explanation: "Mercure est la planète la plus proche du Soleil.",
  },
  {
    id: 45,
    quiz_id: 3,
    text: "Quel instrument mesure la température ?",
    explanation: "Le thermomètre permet de mesurer la température.",
  },
  {
    id: 46,
    quiz_id: 3,
    text: "Quel est le langage informatique principalement utilisé pour le Web ?",
    explanation:
      "JavaScript est le langage principal utilisé pour les interactions sur le Web.",
  },
  {
    id: 47,
    quiz_id: 3,
    text: "Quel est l’unité de mesure de la résistance électrique ?",
    explanation: "L’ohm (Ω) est l’unité de la résistance électrique.",
  },
  {
    id: 48,
    quiz_id: 3,
    text: "Que signifie HTML ?",
    explanation: "HTML signifie HyperText Markup Language.",
  },
  {
    id: 49,
    quiz_id: 3,
    text: "Quelle invention est attribuée à Alexander Graham Bell ?",
    explanation: "Alexander Graham Bell a inventé le téléphone.",
  },
  {
    id: 50,
    quiz_id: 3,
    text: "Quelle est la vitesse de la lumière dans le vide ?",
    explanation:
      "Environ 300 000 km/s, une constante fondamentale en physique.",
  },
  {
    id: 51,
    quiz_id: 3,
    text: "Quelle est l’unité de mesure de l’énergie ?",
    explanation:
      "Le joule est l’unité dérivée de l’énergie dans le système SI.",
  },
  {
    id: 52,
    quiz_id: 3,
    text: "Comment s'appelle le plus grand organe du corps humain ?",
    explanation: "La peau est l’organe le plus grand du corps.",
  },
  {
    id: 53,
    quiz_id: 3,
    text: "Quel est le satellite naturel de la Terre ?",
    explanation: "La Lune est le seul satellite naturel de notre planète.",
  },
  {
    id: 54,
    quiz_id: 3,
    text: "Quel est le métal liquide à température ambiante ?",
    explanation: "Le mercure est le seul métal liquide à température ambiante.",
  },
  {
    id: 55,
    quiz_id: 3,
    text: "Qui a découvert la radioactivité ?",
    explanation: "Henri Becquerel a découvert la radioactivité naturelle.",
  },
  {
    id: 56,
    quiz_id: 3,
    text: "Quel gaz les plantes absorbent-elles ?",
    explanation: "Elles absorbent le dioxyde de carbone pour la photosynthèse.",
  },
  {
    id: 57,
    quiz_id: 3,
    text: "Quelle est la formule chimique du sel de table ?",
    explanation:
      "NaCl est la formule du chlorure de sodium, le sel de cuisine.",
  },
  {
    id: 58,
    quiz_id: 3,
    text: "Quel est le principal composant de l'air ?",
    explanation: "L’azote (78 %) est le gaz le plus abondant dans l’air.",
  },
  {
    id: 59,
    quiz_id: 3,
    text: "Quel est l’acide contenu dans l’estomac ?",
    explanation: "L’acide chlorhydrique (HCl) permet de digérer les aliments.",
  },
  {
    id: 60,
    quiz_id: 3,
    text: "Quel scientifique a établi les lois du mouvement ?",
    explanation:
      "Isaac Newton a défini les lois fondamentales de la mécanique.",
  },

  //Node JS
  {
    id: 101,
    quiz_id: 7,
    text: "Qu'est-ce que Node.js ?",
    explanation:
      "Node.js est un environnement d'exécution JavaScript côté serveur, basé sur le moteur V8 de Chrome.",
  },
  {
    id: 102,
    quiz_id: 7,
    text: "Quel module permet de créer un serveur HTTP natif ?",
    explanation:
      "Le module 'http' permet de créer un serveur sans framework externe.",
  },
  {
    id: 103,
    quiz_id: 7,
    text: "Quel système de modules utilise Node.js par défaut ?",
    explanation:
      "Node.js utilise CommonJS pour gérer les modules avec `require` et `module.exports`.",
  },
  {
    id: 104,
    quiz_id: 7,
    text: "Quel est le gestionnaire de paquets officiel de Node.js ?",
    explanation:
      "npm (Node Package Manager) est le gestionnaire de paquets officiel livré avec Node.js.",
  },
  {
    id: 105,
    quiz_id: 7,
    text: "Comment importer un module local en CommonJS ?",
    explanation:
      "On utilise `require('./nomModule')` pour importer un fichier local.",
  },
  {
    id: 106,
    quiz_id: 7,
    text: "Comment installer un package globalement avec npm ?",
    explanation: "Avec `npm install -g nom_du_package`.",
  },
  {
    id: 107,
    quiz_id: 7,
    text: "Quelle commande permet d'initialiser un projet Node.js ?",
    explanation:
      "`npm init` ou `npm init -y` crée un fichier package.json pour démarrer un projet.",
  },
  {
    id: 108,
    quiz_id: 7,
    text: "Quel objet global donne accès aux arguments de ligne de commande ?",
    explanation:
      "`process.argv` contient les arguments passés au script Node.js.",
  },
  {
    id: 109,
    quiz_id: 7,
    text: "Comment lire un fichier en Node.js ?",
    explanation: "On utilise `fs.readFile()` du module `fs` (file system).",
  },
  {
    id: 110,
    quiz_id: 7,
    text: "Quelle méthode arrête l'exécution d'un programme Node.js ?",
    explanation: "`process.exit()` termine l'exécution du script.",
  },
  {
    id: 111,
    quiz_id: 7,
    text: "Quelle méthode JSON permet de convertir un objet en texte ?",
    explanation:
      "`JSON.stringify()` transforme un objet JavaScript en chaîne JSON.",
  },
  {
    id: 112,
    quiz_id: 7,
    text: "Comment créer un serveur avec Express ?",
    explanation: "On utilise `const app = express()` suivi de `app.listen()`.",
  },
  {
    id: 113,
    quiz_id: 7,
    text: "À quoi sert `next()` dans un middleware Express ?",
    explanation: "`next()` passe le contrôle au middleware suivant.",
  },
  {
    id: 114,
    quiz_id: 7,
    text: "Comment définir une route GET avec Express ?",
    explanation:
      "`app.get('/chemin', callback)` permet de répondre à une requête GET.",
  },
  {
    id: 115,
    quiz_id: 7,
    text: "Quel port utilise généralement un serveur Node.js en développement ?",
    explanation: "Le port 3000 est souvent utilisé par convention.",
  },
  {
    id: 116,
    quiz_id: 7,
    text: "Quelle bibliothèque est souvent utilisée pour la validation de schémas ?",
    explanation:
      "`Joi` est couramment utilisée pour valider les données côté serveur.",
  },
  {
    id: 117,
    quiz_id: 7,
    text: "Quel mot-clé permet d’attendre une promesse ?",
    explanation:
      "`await` permet de suspendre l’exécution jusqu’à la résolution d’une promesse.",
  },
  {
    id: 118,
    quiz_id: 7,
    text: "Que retourne `require()` ?",
    explanation: "`require()` retourne l'objet exporté par le module ciblé.",
  },
  {
    id: 119,
    quiz_id: 7,
    text: "Comment gérer les erreurs dans une promesse ?",
    explanation: "On utilise `.catch()` ou un bloc try/catch avec `await`.",
  },
  {
    id: 120,
    quiz_id: 7,
    text: "Quel outil permet de recharger automatiquement une app Node.js ?",
    explanation:
      "Nodemon redémarre automatiquement le serveur quand les fichiers changent.",
  },
  { id: 121, quiz_id: 7, text: "Comment rendre un module réutilisable dans Node.js ?", explanation: "Il faut exporter ses fonctionnalités avec `module.exports` ou `exports`." },
  { id: 122, quiz_id: 7, text: "Quel est l'équivalent de `fetch` en Node.js natif ?", explanation: "`https` ou `http` sont utilisés, mais `node-fetch` est une alternative populaire." },
  { id: 123, quiz_id: 7, text: "Que retourne `fs.readFileSync()` ?", explanation: "Il retourne le contenu d’un fichier en mode synchronisé, souvent un Buffer." },
  { id: 124, quiz_id: 7, text: "Quel est le rôle de `__dirname` ?", explanation: "`__dirname` contient le chemin absolu du répertoire courant du fichier." },
  { id: 125, quiz_id: 7, text: "Quel module est utilisé pour manipuler les chemins de fichier ?", explanation: "Le module `path` fournit des utilitaires pour manipuler les chemins." },
  { id: 126, quiz_id: 7, text: "Qu’est-ce qu’un middleware dans Express ?", explanation: "Une fonction exécutée entre la requête et la réponse, utile pour l'authentification, etc." },
  { id: 127, quiz_id: 7, text: "Comment limiter le nombre de requêtes avec Express ?", explanation: "Avec des middlewares comme `express-rate-limit`." },
  { id: 128, quiz_id: 7, text: "Quelle méthode JSON transforme une chaîne JSON en objet ?", explanation: "`JSON.parse()` permet de convertir une chaîne en objet JS." },
  { id: 129, quiz_id: 7, text: "Que signifie le message 'PORT is already in use' ?", explanation: "Le port spécifié est déjà occupé par une autre application." },
  { id: 130, quiz_id: 7, text: "Quelle méthode Express permet de gérer les erreurs globales ?", explanation: "Un middleware avec 4 paramètres (`err, req, res, next`) capte les erreurs." },
  { id: 131, quiz_id: 7, text: "Que fait `app.use()` dans Express ?", explanation: "Il ajoute un middleware à l'application." },
  { id: 132, quiz_id: 7, text: "Comment connecter MongoDB à Node.js ?", explanation: "Avec un client comme `mongoose` ou `mongodb`." },
  { id: 133, quiz_id: 7, text: "Quel module permet d’encrypter des mots de passe ?", explanation: "`bcrypt` est souvent utilisé pour le hachage sécurisé." },
  { id: 134, quiz_id: 7, text: "Que fait `res.json()` dans Express ?", explanation: "Il envoie une réponse au client en format JSON." },
  { id: 135, quiz_id: 7, text: "Comment gérer les variables d’environnement ?", explanation: "En utilisant `dotenv` pour lire les variables depuis un fichier `.env`." },
  { id: 136, quiz_id: 7, text: "Quel outil permet de déboguer du code Node.js ?", explanation: "On peut utiliser `console.log`, `debugger`, ou des outils comme `node inspect`." },
  { id: 137, quiz_id: 7, text: "Quelle commande met à jour un package npm ?", explanation: "`npm update nom_du_package` met à jour un package installé." },
  { id: 138, quiz_id: 7, text: "Comment éviter les callbacks imbriqués ?", explanation: "En utilisant des promesses ou `async/await`." },
  { id: 139, quiz_id: 7, text: "Quel fichier liste les dépendances d’un projet Node.js ?", explanation: "`package.json` contient la liste des dépendances et scripts." },
  { id: 140, quiz_id: 7, text: "Comment supprimer un package installé avec npm ?", explanation: "Avec la commande `npm uninstall nom_du_package`." },
];

export const answers = [
  // Culture Générale (questions 1 à 20)
  { id: 11, question_id: 1, text: "Sydney", is_correct: false },
  { id: 12, question_id: 1, text: "Melbourne", is_correct: false },
  { id: 13, question_id: 1, text: "Canberra", is_correct: true },
  { id: 14, question_id: 1, text: "Perth", is_correct: false },

  { id: 21, question_id: 2, text: "Nil", is_correct: false },
  { id: 22, question_id: 2, text: "Amazone", is_correct: true },
  { id: 23, question_id: 2, text: "Yangtsé", is_correct: false },
  { id: 24, question_id: 2, text: "Mississippi", is_correct: false },

  { id: 31, question_id: 3, text: "1789", is_correct: true },
  { id: 32, question_id: 3, text: "1792", is_correct: false },
  { id: 33, question_id: 3, text: "1776", is_correct: false },
  { id: 34, question_id: 3, text: "1804", is_correct: false },

  { id: 41, question_id: 4, text: "4", is_correct: false },
  { id: 42, question_id: 4, text: "5", is_correct: false },
  { id: 43, question_id: 4, text: "6", is_correct: true },
  { id: 44, question_id: 4, text: "7", is_correct: false },

  { id: 51, question_id: 5, text: "Émile Zola", is_correct: false },
  { id: 52, question_id: 5, text: "Victor Hugo", is_correct: true },
  { id: 53, question_id: 5, text: "Molière", is_correct: false },
  { id: 54, question_id: 5, text: "Albert Camus", is_correct: false },

  { id: 61, question_id: 6, text: "Grèce", is_correct: true },
  { id: 62, question_id: 6, text: "Rome", is_correct: false },
  { id: 63, question_id: 6, text: "Chine", is_correct: false },
  { id: 64, question_id: 6, text: "Égypte", is_correct: false },

  { id: 71, question_id: 7, text: "Cœur", is_correct: false },
  { id: 72, question_id: 7, text: "Poumons", is_correct: true },
  { id: 73, question_id: 7, text: "Foie", is_correct: false },
  { id: 74, question_id: 7, text: "Peau", is_correct: false },

  { id: 81, question_id: 8, text: "5", is_correct: false },
  { id: 82, question_id: 8, text: "6", is_correct: false },
  { id: 83, question_id: 8, text: "7", is_correct: true },
  { id: 84, question_id: 8, text: "8", is_correct: false },

  { id: 91, question_id: 9, text: "Michel-Ange", is_correct: false },
  { id: 92, question_id: 9, text: "Léonard de Vinci", is_correct: true },
  { id: 93, question_id: 9, text: "Raphaël", is_correct: false },
  { id: 94, question_id: 9, text: "Rembrandt", is_correct: false },

  { id: 101, question_id: 10, text: "H2O", is_correct: true },
  { id: 102, question_id: 10, text: "CO2", is_correct: false },
  { id: 103, question_id: 10, text: "O2", is_correct: false },
  { id: 104, question_id: 10, text: "NaCl", is_correct: false },

  { id: 111, question_id: 11, text: "Louvre", is_correct: true },
  { id: 112, question_id: 11, text: "Orsay", is_correct: false },
  { id: 113, question_id: 11, text: "Prado", is_correct: false },
  { id: 114, question_id: 11, text: "British Museum", is_correct: false },

  { id: 121, question_id: 12, text: "Einstein", is_correct: false },
  { id: 122, question_id: 12, text: "Newton", is_correct: true },
  { id: 123, question_id: 12, text: "Galilée", is_correct: false },
  { id: 124, question_id: 12, text: "Curie", is_correct: false },

  { id: 131, question_id: 13, text: "Asie", is_correct: true },
  { id: 132, question_id: 13, text: "Afrique", is_correct: false },
  { id: 133, question_id: 13, text: "Europe", is_correct: false },
  { id: 134, question_id: 13, text: "Océanie", is_correct: false },

  { id: 141, question_id: 14, text: "Mars", is_correct: false },
  { id: 142, question_id: 14, text: "Jupiter", is_correct: true },
  { id: 143, question_id: 14, text: "Venus", is_correct: false },
  { id: 144, question_id: 14, text: "Saturne", is_correct: false },

  { id: 151, question_id: 15, text: "Molière", is_correct: false },
  { id: 152, question_id: 15, text: "Hugo", is_correct: false },
  { id: 153, question_id: 15, text: "Shakespeare", is_correct: true },
  { id: 154, question_id: 15, text: "Voltaire", is_correct: false },

  { id: 161, question_id: 16, text: "1", is_correct: false },
  { id: 162, question_id: 16, text: "3", is_correct: false },
  { id: 163, question_id: 16, text: "5", is_correct: true },
  { id: 164, question_id: 16, text: "7", is_correct: false },

  { id: 171, question_id: 17, text: "Rouge", is_correct: false },
  { id: 172, question_id: 17, text: "Bleu", is_correct: true },
  { id: 173, question_id: 17, text: "Vert", is_correct: false },
  { id: 174, question_id: 17, text: "Blanc", is_correct: false },

  { id: 181, question_id: 18, text: "Pablo Picasso", is_correct: false },
  { id: 182, question_id: 18, text: "Claude Monet", is_correct: false },
  { id: 183, question_id: 18, text: "Vincent van Gogh", is_correct: true },
  { id: 184, question_id: 18, text: "Andy Warhol", is_correct: false },

  { id: 191, question_id: 19, text: "Rome", is_correct: true },
  { id: 192, question_id: 19, text: "Paris", is_correct: false },
  { id: 193, question_id: 19, text: "Londres", is_correct: false },
  { id: 194, question_id: 19, text: "Athènes", is_correct: false },

  { id: 201, question_id: 20, text: "Sahara", is_correct: true },
  { id: 202, question_id: 20, text: "Gobi", is_correct: false },
  { id: 203, question_id: 20, text: "Kalahari", is_correct: false },
  { id: 204, question_id: 20, text: "Arctique", is_correct: false },

  // Automobile (questions 21 à 40)
  { id: 211, question_id: 21, text: "Audi", is_correct: false },
  { id: 212, question_id: 21, text: "BMW", is_correct: false },
  { id: 213, question_id: 21, text: "Volkswagen", is_correct: true },
  { id: 214, question_id: 21, text: "Opel", is_correct: false },

  { id: 221, question_id: 22, text: "8 cylindres en ligne", is_correct: false },
  { id: 222, question_id: 22, text: "8 cylindres en V", is_correct: true },
  { id: 223, question_id: 22, text: "6 cylindres turbo", is_correct: false },
  { id: 224, question_id: 22, text: "8 pistons rotatifs", is_correct: false },

  { id: 231, question_id: 23, text: "France", is_correct: false },
  { id: 232, question_id: 23, text: "Italie", is_correct: true },
  { id: 233, question_id: 23, text: "Allemagne", is_correct: false },
  { id: 234, question_id: 23, text: "États-Unis", is_correct: false },

  { id: 241, question_id: 24, text: "i3", is_correct: false },
  { id: 242, question_id: 24, text: "Leaf", is_correct: false },
  { id: 243, question_id: 24, text: "Model S", is_correct: true },
  { id: 244, question_id: 24, text: "E-Tron", is_correct: false },

  { id: 251, question_id: 25, text: "Anti Brake System", is_correct: false },
  {
    id: 252,
    question_id: 25,
    text: "Advanced Braking Support",
    is_correct: false,
  },
  {
    id: 253,
    question_id: 25,
    text: "Anti-lock Braking System",
    is_correct: true,
  },
  {
    id: 254,
    question_id: 25,
    text: "Automated Brake Safety",
    is_correct: false,
  },

  { id: 261, question_id: 26, text: "Toyota", is_correct: true },
  { id: 262, question_id: 26, text: "Nissan", is_correct: false },
  { id: 263, question_id: 26, text: "Honda", is_correct: false },
  { id: 264, question_id: 26, text: "Mazda", is_correct: false },

  { id: 271, question_id: 27, text: "Ford", is_correct: true },
  { id: 272, question_id: 27, text: "Chevrolet", is_correct: false },
  { id: 273, question_id: 27, text: "Chrysler", is_correct: false },
  { id: 274, question_id: 27, text: "Cadillac", is_correct: false },

  { id: 281, question_id: 28, text: "Newton", is_correct: false },
  { id: 282, question_id: 28, text: "Watt", is_correct: false },
  { id: 283, question_id: 28, text: "Cheval-vapeur", is_correct: true },
  { id: 284, question_id: 28, text: "Ampère", is_correct: false },

  { id: 291, question_id: 29, text: "Essence", is_correct: false },
  { id: 292, question_id: 29, text: "Gazole", is_correct: true },
  { id: 293, question_id: 29, text: "Kérosène", is_correct: false },
  { id: 294, question_id: 29, text: "GPL", is_correct: false },

  { id: 301, question_id: 30, text: "Porsche", is_correct: false },
  { id: 302, question_id: 30, text: "Ferrari", is_correct: true },
  { id: 303, question_id: 30, text: "Ford", is_correct: false },
  { id: 304, question_id: 30, text: "Lamborghini", is_correct: false },

  { id: 311, question_id: 31, text: "Toyota", is_correct: true },
  { id: 312, question_id: 31, text: "Honda", is_correct: false },
  { id: 313, question_id: 31, text: "Nissan", is_correct: false },
  { id: 314, question_id: 31, text: "Mazda", is_correct: false },

  { id: 321, question_id: 32, text: "Alfa Romeo", is_correct: true },
  { id: 322, question_id: 32, text: "Fiat", is_correct: false },
  { id: 323, question_id: 32, text: "Lancia", is_correct: false },
  { id: 324, question_id: 32, text: "Ferrari", is_correct: false },

  { id: 331, question_id: 33, text: "Fiesta", is_correct: false },
  { id: 332, question_id: 33, text: "Mustang", is_correct: true },
  { id: 333, question_id: 33, text: "Focus", is_correct: false },
  { id: 334, question_id: 33, text: "Escape", is_correct: false },

  { id: 341, question_id: 34, text: "ESP", is_correct: false },
  { id: 342, question_id: 34, text: "ABS", is_correct: true },
  { id: 343, question_id: 34, text: "ASR", is_correct: false },
  { id: 344, question_id: 34, text: "EBD", is_correct: false },

  { id: 351, question_id: 35, text: "2", is_correct: false },
  { id: 352, question_id: 35, text: "4", is_correct: true },
  { id: 353, question_id: 35, text: "3", is_correct: false },
  { id: 354, question_id: 35, text: "1", is_correct: false },

  { id: 361, question_id: 36, text: "Pirelli", is_correct: false },
  { id: 362, question_id: 36, text: "Continental", is_correct: false },
  { id: 363, question_id: 36, text: "Michelin", is_correct: true },
  { id: 364, question_id: 36, text: "Bridgestone", is_correct: false },

  { id: 371, question_id: 37, text: "Tesla", is_correct: true },
  { id: 372, question_id: 37, text: "Renault", is_correct: false },
  { id: 373, question_id: 37, text: "Peugeot", is_correct: false },
  { id: 374, question_id: 37, text: "Ford", is_correct: false },

  { id: 381, question_id: 38, text: "Électrique", is_correct: false },
  { id: 382, question_id: 38, text: "Hybride", is_correct: true },
  { id: 383, question_id: 38, text: "Diesel", is_correct: false },
  { id: 384, question_id: 38, text: "GPL", is_correct: false },

  { id: 391, question_id: 39, text: "GT", is_correct: false },
  { id: 392, question_id: 39, text: "GTI", is_correct: true },
  { id: 393, question_id: 39, text: "GTS", is_correct: false },
  { id: 394, question_id: 39, text: "RS", is_correct: false },

  { id: 401, question_id: 40, text: "BMW", is_correct: true },
  { id: 402, question_id: 40, text: "Toyota", is_correct: false },
  { id: 403, question_id: 40, text: "Hyundai", is_correct: false },
  { id: 404, question_id: 40, text: "Peugeot", is_correct: false },

  //Sciences & Technologies
  { id: 401, question_id: 41, text: "Oxygène", is_correct: true },
  { id: 402, question_id: 41, text: "Or", is_correct: false },
  { id: 403, question_id: 41, text: "Osmium", is_correct: false },
  { id: 404, question_id: 41, text: "Ozone", is_correct: false },

  { id: 405, question_id: 42, text: "Isaac Newton", is_correct: false },
  { id: 406, question_id: 42, text: "Galilée", is_correct: false },
  { id: 407, question_id: 42, text: "Albert Einstein", is_correct: true },
  { id: 408, question_id: 42, text: "Niels Bohr", is_correct: false },

  { id: 409, question_id: 43, text: "Le cerveau", is_correct: false },
  { id: 410, question_id: 43, text: "Les poumons", is_correct: false },
  { id: 411, question_id: 43, text: "Le cœur", is_correct: true },
  { id: 412, question_id: 43, text: "Le foie", is_correct: false },

  { id: 413, question_id: 44, text: "Mercure", is_correct: true },
  { id: 414, question_id: 44, text: "Vénus", is_correct: false },
  { id: 415, question_id: 44, text: "Terre", is_correct: false },
  { id: 416, question_id: 44, text: "Mars", is_correct: false },

  { id: 417, question_id: 45, text: "Baromètre", is_correct: false },
  { id: 418, question_id: 45, text: "Thermomètre", is_correct: true },
  { id: 419, question_id: 45, text: "Altimètre", is_correct: false },
  { id: 420, question_id: 45, text: "Chronomètre", is_correct: false },

  { id: 421, question_id: 46, text: "Python", is_correct: false },
  { id: 422, question_id: 46, text: "JavaScript", is_correct: true },
  { id: 423, question_id: 46, text: "C++", is_correct: false },
  { id: 424, question_id: 46, text: "Ruby", is_correct: false },

  { id: 425, question_id: 47, text: "Volt", is_correct: false },
  { id: 426, question_id: 47, text: "Ampère", is_correct: false },
  { id: 427, question_id: 47, text: "Ohm", is_correct: true },
  { id: 428, question_id: 47, text: "Watt", is_correct: false },

  {
    id: 429,
    question_id: 48,
    text: "HighText Machine Language",
    is_correct: false,
  },
  {
    id: 430,
    question_id: 48,
    text: "HyperText Markup Language",
    is_correct: true,
  },
  {
    id: 431,
    question_id: 48,
    text: "Home Tool Markup Language",
    is_correct: false,
  },
  {
    id: 432,
    question_id: 48,
    text: "Hyperlinks and Text Markup Language",
    is_correct: false,
  },

  { id: 433, question_id: 49, text: "Thomas Edison", is_correct: false },
  { id: 434, question_id: 49, text: "Alexander Graham Bell", is_correct: true },
  { id: 435, question_id: 49, text: "Nikola Tesla", is_correct: false },
  { id: 436, question_id: 49, text: "Guglielmo Marconi", is_correct: false },

  { id: 437, question_id: 50, text: "300 000 km/s", is_correct: true },
  { id: 438, question_id: 50, text: "150 000 km/s", is_correct: false },
  { id: 439, question_id: 50, text: "1 000 km/s", is_correct: false },
  { id: 440, question_id: 50, text: "3 000 km/s", is_correct: false },

  { id: 441, question_id: 51, text: "Watt", is_correct: false },
  { id: 442, question_id: 51, text: "Volt", is_correct: false },
  { id: 443, question_id: 51, text: "Joule", is_correct: true },
  { id: 444, question_id: 51, text: "Pascal", is_correct: false },

  { id: 445, question_id: 52, text: "Le foie", is_correct: false },
  { id: 446, question_id: 52, text: "La peau", is_correct: true },
  { id: 447, question_id: 52, text: "Les intestins", is_correct: false },
  { id: 448, question_id: 52, text: "Le cerveau", is_correct: false },

  { id: 449, question_id: 53, text: "Mars", is_correct: false },
  { id: 450, question_id: 53, text: "La Lune", is_correct: true },
  { id: 451, question_id: 53, text: "Jupiter", is_correct: false },
  { id: 452, question_id: 53, text: "Pluton", is_correct: false },

  { id: 453, question_id: 54, text: "Zinc", is_correct: false },
  { id: 454, question_id: 54, text: "Mercure", is_correct: true },
  { id: 455, question_id: 54, text: "Cuivre", is_correct: false },
  { id: 456, question_id: 54, text: "Aluminium", is_correct: false },

  { id: 457, question_id: 55, text: "Marie Curie", is_correct: false },
  { id: 458, question_id: 55, text: "Henri Becquerel", is_correct: true },
  { id: 459, question_id: 55, text: "Rutherford", is_correct: false },
  { id: 460, question_id: 55, text: "Max Planck", is_correct: false },

  { id: 461, question_id: 56, text: "Oxygène", is_correct: false },
  { id: 462, question_id: 56, text: "Dioxyde de carbone", is_correct: true },
  { id: 463, question_id: 56, text: "Azote", is_correct: false },
  { id: 464, question_id: 56, text: "Hélium", is_correct: false },

  { id: 465, question_id: 57, text: "HCl", is_correct: false },
  { id: 466, question_id: 57, text: "NaCl", is_correct: true },
  { id: 467, question_id: 57, text: "KCl", is_correct: false },
  { id: 468, question_id: 57, text: "H2O", is_correct: false },

  { id: 469, question_id: 58, text: "Oxygène", is_correct: false },
  { id: 470, question_id: 58, text: "Azote", is_correct: true },
  { id: 471, question_id: 58, text: "Hydrogène", is_correct: false },
  { id: 472, question_id: 58, text: "Hélium", is_correct: false },

  { id: 473, question_id: 59, text: "Acide sulfurique", is_correct: false },
  { id: 474, question_id: 59, text: "Acide chlorhydrique", is_correct: true },
  { id: 475, question_id: 59, text: "Acide citrique", is_correct: false },
  { id: 476, question_id: 59, text: "Acide acétique", is_correct: false },

  { id: 477, question_id: 60, text: "Albert Einstein", is_correct: false },
  { id: 478, question_id: 60, text: "Galilée", is_correct: false },
  { id: 479, question_id: 60, text: "Isaac Newton", is_correct: true },
  { id: 480, question_id: 60, text: "Kepler", is_correct: false },

  // Node JS
  { id: 1001, question_id: 101, text: "Un navigateur web", is_correct: false },
  { id: 1002, question_id: 101, text: "Un framework front-end", is_correct: false },
  { id: 1003, question_id: 101, text: "Un environnement d'exécution JavaScript", is_correct: true },
  { id: 1004, question_id: 101, text: "Un éditeur de texte", is_correct: false },

  { id: 1005, question_id: 102, text: "express", is_correct: false },
  { id: 1006, question_id: 102, text: "http", is_correct: true },
  { id: 1007, question_id: 102, text: "socket.io", is_correct: false },
  { id: 1008, question_id: 102, text: "https", is_correct: false },

  { id: 1009, question_id: 103, text: "ESModules", is_correct: false },
  { id: 1010, question_id: 103, text: "AMD", is_correct: false },
  { id: 1011, question_id: 103, text: "CommonJS", is_correct: true },
  { id: 1012, question_id: 103, text: "UMD", is_correct: false },

  { id: 1013, question_id: 104, text: "nvm", is_correct: false },
  { id: 1014, question_id: 104, text: "npm", is_correct: true },
  { id: 1015, question_id: 104, text: "yarn", is_correct: false },
  { id: 1016, question_id: 104, text: "gulp", is_correct: false },

  { id: 1017, question_id: 105, text: "import './monModule'", is_correct: false },
  { id: 1018, question_id: 105, text: "require('./monModule')", is_correct: true },
  { id: 1019, question_id: 105, text: "include('./monModule')", is_correct: false },
  { id: 1020, question_id: 105, text: "load('./monModule')", is_correct: false },

  { id: 1021, question_id: 106, text: "npm install nom_du_package", is_correct: false },
  { id: 1022, question_id: 106, text: "npm add -g nom_du_package", is_correct: false },
  { id: 1023, question_id: 106, text: "npm install -g nom_du_package", is_correct: true },
  { id: 1024, question_id: 106, text: "npm global install nom_du_package", is_correct: false },

  { id: 1025, question_id: 107, text: "npm start", is_correct: false },
  { id: 1026, question_id: 107, text: "npm create", is_correct: false },
  { id: 1027, question_id: 107, text: "npm init", is_correct: true },
  { id: 1028, question_id: 107, text: "npm make", is_correct: false },

  { id: 1029, question_id: 108, text: "console.argv", is_correct: false },
  { id: 1030, question_id: 108, text: "cmd.argv", is_correct: false },
  { id: 1031, question_id: 108, text: "process.argv", is_correct: true },
  { id: 1032, question_id: 108, text: "args.input", is_correct: false },

  { id: 1033, question_id: 109, text: "fs.read()", is_correct: false },
  { id: 1034, question_id: 109, text: "read.file()", is_correct: false },
  { id: 1035, question_id: 109, text: "fs.readFile()", is_correct: true },
  { id: 1036, question_id: 109, text: "fs.openFile()", is_correct: false },

  { id: 1037, question_id: 110, text: "exit()", is_correct: false },
  { id: 1038, question_id: 110, text: "process.kill()", is_correct: false },
  { id: 1039, question_id: 110, text: "process.exit()", is_correct: true },
  { id: 1040, question_id: 110, text: "stop()", is_correct: false },

  { id: 1041, question_id: 111, text: "JSON.convert()", is_correct: false },
  { id: 1042, question_id: 111, text: "JSON.stringify()", is_correct: true },
  { id: 1043, question_id: 111, text: "JSON.toText()", is_correct: false },
  { id: 1044, question_id: 111, text: "JSON.encode()", is_correct: false },

  { id: 1045, question_id: 112, text: "express.createApp()", is_correct: false },
  { id: 1046, question_id: 112, text: "new Express()", is_correct: false },
  { id: 1047, question_id: 112, text: "const app = express()", is_correct: true },
  { id: 1048, question_id: 112, text: "express.init()", is_correct: false },

  { id: 1049, question_id: 113, text: "app.forward()", is_correct: false },
  { id: 1050, question_id: 113, text: "next()", is_correct: true },
  { id: 1051, question_id: 113, text: "continue()", is_correct: false },
  { id: 1052, question_id: 113, text: "middleware()", is_correct: false },

  { id: 1053, question_id: 114, text: "router.get()", is_correct: false },
  { id: 1054, question_id: 114, text: "app.route('GET')", is_correct: false },
  { id: 1055, question_id: 114, text: "app.get('/chemin', callback)", is_correct: true },
  { id: 1056, question_id: 114, text: "get.route('/chemin')", is_correct: false },

  { id: 1057, question_id: 115, text: "80", is_correct: false },
  { id: 1058, question_id: 115, text: "8080", is_correct: false },
  { id: 1059, question_id: 115, text: "3000", is_correct: true },
  { id: 1060, question_id: 115, text: "5000", is_correct: false },

  { id: 1061, question_id: 116, text: "Yup", is_correct: false },
  { id: 1062, question_id: 116, text: "validate.js", is_correct: false },
  { id: 1063, question_id: 116, text: "Joi", is_correct: true },
  { id: 1064, question_id: 116, text: "checkit", is_correct: false },

  { id: 1065, question_id: 117, text: "wait", is_correct: false },
  { id: 1066, question_id: 117, text: "async", is_correct: false },
  { id: 1067, question_id: 117, text: "await", is_correct: true },
  { id: 1068, question_id: 117, text: "pause", is_correct: false },

  { id: 1069, question_id: 118, text: "un objet exporté", is_correct: true },
  { id: 1070, question_id: 118, text: "une promesse", is_correct: false },
  { id: 1071, question_id: 118, text: "une classe", is_correct: false },
  { id: 1072, question_id: 118, text: "une fonction native", is_correct: false },

  { id: 1073, question_id: 119, text: "try {} finally {}", is_correct: false },
  { id: 1074, question_id: 119, text: ".then()", is_correct: false },
  { id: 1075, question_id: 119, text: ".catch()", is_correct: true },
  { id: 1076, question_id: 119, text: "reject()", is_correct: false },

  { id: 1077, question_id: 120, text: "Babel", is_correct: false },
  { id: 1078, question_id: 120, text: "PM2", is_correct: false },
  { id: 1079, question_id: 120, text: "Nodemon", is_correct: true },
  { id: 1080, question_id: 120, text: "Webpack", is_correct: false },

  { id: 1201, question_id: 121, text: "En les déclarant avec const", is_correct: false },
{ id: 1202, question_id: 121, text: "Avec module.exports ou exports", is_correct: true },
{ id: 1203, question_id: 121, text: "En les stockant dans un objet global", is_correct: false },
{ id: 1204, question_id: 121, text: "Avec return", is_correct: false },

{ id: 1211, question_id: 122, text: "axios", is_correct: false },
{ id: 1212, question_id: 122, text: "node-fetch", is_correct: true },
{ id: 1213, question_id: 122, text: "got", is_correct: false },
{ id: 1214, question_id: 122, text: "request", is_correct: false },

{ id: 1221, question_id: 123, text: "Une URL", is_correct: false },
{ id: 1222, question_id: 123, text: "Un Buffer", is_correct: true },
{ id: 1223, question_id: 123, text: "Une promesse", is_correct: false },
{ id: 1224, question_id: 123, text: "Une chaîne JSON", is_correct: false },

{ id: 1231, question_id: 124, text: "Le nom du fichier", is_correct: false },
{ id: 1232, question_id: 124, text: "Le chemin du fichier", is_correct: false },
{ id: 1233, question_id: 124, text: "Le chemin absolu du dossier courant", is_correct: true },
{ id: 1234, question_id: 124, text: "L’URL du projet", is_correct: false },

{ id: 1241, question_id: 125, text: "fs", is_correct: false },
{ id: 1242, question_id: 125, text: "os", is_correct: false },
{ id: 1243, question_id: 125, text: "path", is_correct: true },
{ id: 1244, question_id: 125, text: "url", is_correct: false },

{ id: 1251, question_id: 126, text: "Une route POST", is_correct: false },
{ id: 1252, question_id: 126, text: "Un gestionnaire d’erreurs", is_correct: false },
{ id: 1253, question_id: 126, text: "Une fonction exécutée entre la requête et la réponse", is_correct: true },
{ id: 1254, question_id: 126, text: "Un contrôleur", is_correct: false },

{ id: 1261, question_id: 127, text: "express-validator", is_correct: false },
{ id: 1262, question_id: 127, text: "express-rate-limit", is_correct: true },
{ id: 1263, question_id: 127, text: "helmet", is_correct: false },
{ id: 1264, question_id: 127, text: "morgan", is_correct: false },

{ id: 1271, question_id: 128, text: "JSON.stringify()", is_correct: false },
{ id: 1272, question_id: 128, text: "JSON.parse()", is_correct: true },
{ id: 1273, question_id: 128, text: "JSON.toObject()", is_correct: false },
{ id: 1274, question_id: 128, text: "parseJSON()", is_correct: false },

{ id: 1281, question_id: 129, text: "Le serveur a crashé", is_correct: false },
{ id: 1282, question_id: 129, text: "Le port est déjà utilisé", is_correct: true },
{ id: 1283, question_id: 129, text: "Le réseau est coupé", is_correct: false },
{ id: 1284, question_id: 129, text: "L’URL est mal formée", is_correct: false },

{ id: 1291, question_id: 130, text: "Un middleware avec trois paramètres", is_correct: false },
{ id: 1292, question_id: 130, text: "Un try/catch autour du serveur", is_correct: false },
{ id: 1293, question_id: 130, text: "Un middleware avec quatre paramètres", is_correct: true },
{ id: 1294, question_id: 130, text: "Un bloc if/else", is_correct: false },

{ id: 1301, question_id: 131, text: "Ajouter un plugin", is_correct: false },
{ id: 1302, question_id: 131, text: "Définir une route GET", is_correct: false },
{ id: 1303, question_id: 131, text: "Ajouter un middleware", is_correct: true },
{ id: 1304, question_id: 131, text: "Envoyer une réponse", is_correct: false },

{ id: 1311, question_id: 132, text: "Avec Sequelize", is_correct: false },
{ id: 1312, question_id: 132, text: "Avec MySQL", is_correct: false },
{ id: 1313, question_id: 132, text: "Avec mongoose ou mongodb", is_correct: true },
{ id: 1314, question_id: 132, text: "Avec SQLite", is_correct: false },

{ id: 1321, question_id: 133, text: "jsonwebtoken", is_correct: false },
{ id: 1322, question_id: 133, text: "bcrypt", is_correct: true },
{ id: 1323, question_id: 133, text: "bcryptjs", is_correct: true },
{ id: 1324, question_id: 133, text: "cookie-parser", is_correct: false },

{ id: 1331, question_id: 134, text: "Elle envoie une page HTML", is_correct: false },
{ id: 1332, question_id: 134, text: "Elle envoie un fichier statique", is_correct: false },
{ id: 1333, question_id: 134, text: "Elle envoie une réponse JSON", is_correct: true },
{ id: 1334, question_id: 134, text: "Elle arrête le serveur", is_correct: false },

{ id: 1341, question_id: 135, text: "Avec `node-env`", is_correct: false },
{ id: 1342, question_id: 135, text: "En les écrivant dans server.js", is_correct: false },
{ id: 1343, question_id: 135, text: "Avec `dotenv` et un fichier .env", is_correct: true },
{ id: 1344, question_id: 135, text: "Avec une constante globale", is_correct: false },

{ id: 1351, question_id: 136, text: "node-debug", is_correct: false },
{ id: 1352, question_id: 136, text: "console.log", is_correct: false },
{ id: 1353, question_id: 136, text: "debugger ou node inspect", is_correct: true },
{ id: 1354, question_id: 136, text: "npm debug", is_correct: false },

{ id: 1361, question_id: 137, text: "npm install", is_correct: false },
{ id: 1362, question_id: 137, text: "npm upgrade", is_correct: false },
{ id: 1363, question_id: 137, text: "npm update", is_correct: true },
{ id: 1364, question_id: 137, text: "npm refresh", is_correct: false },

{ id: 1371, question_id: 138, text: "En utilisant des callbacks", is_correct: false },
{ id: 1372, question_id: 138, text: "En chaînant les fonctions", is_correct: false },
{ id: 1373, question_id: 138, text: "Avec async/await ou des promesses", is_correct: true },
{ id: 1374, question_id: 138, text: "En utilisant des timers", is_correct: false },

{ id: 1381, question_id: 139, text: "package.lock", is_correct: false },
{ id: 1382, question_id: 139, text: "package.json", is_correct: true },
{ id: 1383, question_id: 139, text: "index.js", is_correct: false },
{ id: 1384, question_id: 139, text: "node_modules", is_correct: false },

{ id: 1391, question_id: 140, text: "npm remove", is_correct: false },
{ id: 1392, question_id: 140, text: "npm delete", is_correct: false },
{ id: 1393, question_id: 140, text: "npm uninstall", is_correct: true },
{ id: 1394, question_id: 140, text: "npm erase", is_correct: false },
];

export function getQuestions(quiz_id) {
  let quiz = quizzes.find((q) => q.id == quiz_id);
  let quiz_questions = questions.filter(
    (question) => question.quiz_id == quiz_id
  );
  // console.log("questions", quiz_questions)
  return {
    quiz: quiz,
    questions: quiz_questions,
  };
}

export function getSuggAnswers(question_id) {
  let suggAnswers = answers.filter(
    (answer) => answer.question_id == question_id
  );
  return suggAnswers;
}

export function getAnswer(answer_id) {
  let suggAnswer = answers.find((answer) => answer.id == answer_id);
  return suggAnswer;
}
