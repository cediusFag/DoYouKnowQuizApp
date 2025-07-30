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
  {
    id: 8,
    title: "PHP",
    subject: "PHP",
    image: "https://example.com/images/nodejs.jpg",
  },
  {
    id: 9,
    title: "PHP Orienté Objet",
    subject: "PHP",
    image: "https://example.com/images/php-poo.jpg"
  },
  {
    id: 10,
    title: "Base de Données MySQL",
    subject: "MySQL",
    image: "https://example.com/images/mysql.jpg"
  },
  {
    id: 11,
    title: "Architecture PHP MVC",
    subject: "PHP",
    image: "https://example.com/images/php-mvc.jpg"
  }
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

  //PHP
  {
    id: 141,
    quiz_id: 8,
    text: "Que signifie PHP ?",
    explanation: "PHP signifie 'PHP: Hypertext Preprocessor', c'est un acronyme récursif.",
  },
  {
    id: 142,
    quiz_id: 8,
    text: "Quel est le bon tag d’ouverture PHP ?",
    explanation: "`<?php` est le tag standard pour démarrer du code PHP.",
  },
  {
    id: 143,
    quiz_id: 8,
    text: "Comment déclare-t-on une variable en PHP ?",
    explanation: "Les variables commencent par un `$`, comme `$variable = 'valeur';`.",
  },
  {
    id: 144,
    quiz_id: 8,
    text: "Quel opérateur est utilisé pour la concaténation ?",
    explanation: "En PHP, le point `.` est utilisé pour concaténer deux chaînes.",
  },
  {
    id: 145,
    quiz_id: 8,
    text: "Quel type de données retourne `is_array()` ?",
    explanation: "`is_array()` retourne un booléen : `true` ou `false`.",
  },
  {
    id: 146,
    quiz_id: 8,
    text: "Quelle fonction affiche une variable pour le débogage ?",
    explanation: "`var_dump()` donne le type et la valeur détaillée de la variable.",
  },
  {
    id: 147,
    quiz_id: 8,
    text: "Comment inclure un fichier en PHP ?",
    explanation: "`include` ou `require` permettent d’ajouter un fichier externe.",
  },
  {
    id: 148,
    quiz_id: 8,
    text: "Quelle est la différence entre `==` et `===` ?",
    explanation: "`===` vérifie le type et la valeur, `==` uniquement la valeur.",
  },
  {
    id: 149,
    quiz_id: 8,
    text: "Que retourne `strpos(\"bonjour\", \"jour\")` ?",
    explanation: "Retourne 3, l’index où 'jour' commence dans 'bonjour'.",
  },
  {
    id: 150,
    quiz_id: 8,
    text: "Quel mot-clé permet de créer une fonction ?",
    explanation: "`function` est utilisé pour définir une fonction utilisateur.",
  },
   {
    id: 151,
    quiz_id: 8,
    text: "Quelle superglobale contient les données envoyées via un formulaire en POST ?",
    explanation: "`$_POST` contient les données d’un formulaire envoyé par la méthode POST.",
  },
  {
    id: 152,
    quiz_id: 8,
    text: "Que signifie PDO en PHP ?",
    explanation: "PDO signifie PHP Data Objects, une interface pour accéder aux bases de données.",
  },
  {
    id: 153,
    quiz_id: 8,
    text: "Comment se connecte-t-on à MySQL avec PDO ?",
    explanation: "Il faut instancier `new PDO('mysql:host=...;dbname=...', 'user', 'pass')`.",
  },
  {
    id: 154,
    quiz_id: 8,
    text: "Quelle fonction permet d’échapper les caractères spéciaux en HTML ?",
    explanation: "`htmlspecialchars()` est utilisée pour éviter les attaques XSS.",
  },
  {
    id: 155,
    quiz_id: 8,
    text: "Quel est le bon moyen d’envoyer des en-têtes HTTP ?",
    explanation: "La fonction `header()` permet d’envoyer des en-têtes HTTP.",
  },
  {
    id: 156,
    quiz_id: 8,
    text: "Que fait `isset()` ?",
    explanation: "Vérifie si une variable est définie et non nulle.",
  },
  {
    id: 157,
    quiz_id: 8,
    text: "Quel est le rôle de `require_once` ?",
    explanation: "Inclut un fichier, mais seulement s’il ne l’a pas encore été.",
  },
  {
    id: 158,
    quiz_id: 8,
    text: "Quel est le mot-clé pour définir une classe ?",
    explanation: "`class` est utilisé pour déclarer une classe.",
  },
  {
    id: 159,
    quiz_id: 8,
    text: "Quelle est la portée d’une propriété définie `private` ?",
    explanation: "Elle est accessible uniquement dans la classe elle-même.",
  },
  {
    id: 160,
    quiz_id: 8,
    text: "Quel mot-clé permet d’hériter d’une classe ?",
    explanation: "`extends` est utilisé pour hériter d’une classe parente.",
  },
  {
    id: 161,
    quiz_id: 8,
    text: "Quelle fonction est utilisée pour envoyer un e-mail en PHP ?",
    explanation: "`mail()` est la fonction native utilisée pour envoyer un courriel.",
  },
  {
    id: 162,
    quiz_id: 8,
    text: "Que signifie le mot-clé `static` dans une méthode ?",
    explanation: "Il permet d’appeler la méthode sans instancier la classe.",
  },
  {
    id: 163,
    quiz_id: 8,
    text: "Quelle est la portée du mot-clé `protected` ?",
    explanation: "`protected` rend la propriété accessible à la classe et à ses enfants uniquement.",
  },
  {
    id: 164,
    quiz_id: 8,
    text: "Que fait `__construct()` en PHP ?",
    explanation: "C'est le constructeur appelé automatiquement à l'instanciation d'une classe.",
  },
  {
    id: 165,
    quiz_id: 8,
    text: "Quel est le rôle de `final` sur une méthode ?",
    explanation: "`final` empêche une méthode d’être redéfinie dans une classe enfant.",
  },
  {
    id: 166,
    quiz_id: 8,
    text: "Comment accéder à une propriété statique ?",
    explanation: "Avec `NomClasse::$propriete`.",
  },
  {
    id: 167,
    quiz_id: 8,
    text: "Quelle est la différence entre `==` et `===` ?",
    explanation: "`==` compare les valeurs, `===` compare valeur et type.",
  },
  {
    id: 168,
    quiz_id: 8,
    text: "Comment définir une constante de classe ?",
    explanation: "Avec le mot-clé `const`, comme `const VERSION = 1.0;`.",
  },
  {
    id: 169,
    quiz_id: 8,
    text: "Quelle méthode magique est appelée lors de l’affichage d’un objet ?",
    explanation: "`__toString()` est invoquée automatiquement si un objet est utilisé comme une chaîne.",
  },
  {
    id: 170,
    quiz_id: 8,
    text: "Quel mot-clé permet d’utiliser un trait ?",
    explanation: "`use` est utilisé pour inclure un trait dans une classe.",
  },
  {
    id: 171,
    quiz_id: 8,
    text: "Quelle fonction permet de charger automatiquement les classes en PHP ?",
    explanation: "`spl_autoload_register()` est utilisée pour l'autoloading de classes.",
  },
  {
    id: 172,
    quiz_id: 8,
    text: "Comment PHP gère-t-il la gestion des erreurs moderne ?",
    explanation: "Avec les exceptions (`try`, `catch`, `throw`) introduites à partir de PHP 5.",
  },
  {
    id: 173,
    quiz_id: 8,
    text: "Que retourne la fonction `array_map()` ?",
    explanation: "`array_map()` applique une fonction à chaque élément d’un tableau et retourne le tableau transformé.",
  },
  {
    id: 174,
    quiz_id: 8,
    text: "À quoi sert l'opérateur `??` en PHP ?",
    explanation: "Il renvoie la première valeur non nulle parmi les opérandes.",
  },
  {
    id: 175,
    quiz_id: 8,
    text: "Que fait la fonction `array_reduce()` ?",
    explanation: "Elle réduit un tableau à une seule valeur en utilisant une fonction de rappel.",
  },
  {
    id: 176,
    quiz_id: 8,
    text: "Comment déclarer une fonction anonyme (closure) ?",
    explanation: "Avec `function () {}` sans nom.",
  },
  {
    id: 177,
    quiz_id: 8,
    text: "Quel mot-clé permet d'injecter une variable externe dans une closure ?",
    explanation: "`use` permet d’importer des variables dans une fonction anonyme.",
  },
  {
    id: 178,
    quiz_id: 8,
    text: "Quelle méthode vérifie l'existence d'une méthode dans une classe ?",
    explanation: "`method_exists(objet, 'nom')` retourne true si la méthode existe.",
  },
  {
    id: 179,
    quiz_id: 8,
    text: "Que fait la fonction `array_filter()` ?",
    explanation: "Elle filtre un tableau en supprimant les éléments falsy ou ceux ne satisfaisant pas une fonction.",
  },
  {
    id: 180,
    quiz_id: 8,
    text: "Comment comparer deux objets en PHP ?",
    explanation: "Deux objets sont égaux si leurs propriétés sont identiques et de même classe.",
  },

  {
    id: 181,
    quiz_id: 8,
    text: "Quelle interface doit implémenter une classe pour être utilisée avec foreach ?",
    explanation: "L’interface `Iterator` permet à un objet d’être parcouru avec `foreach`.",
  },
  {
    id: 182,
    quiz_id: 8,
    text: "Quel mot-clé empêche l’héritage d’une méthode ou d’une classe ?",
    explanation: "`final` empêche la surcharge d’une méthode ou l’héritage d’une classe.",
  },
  {
    id: 183,
    quiz_id: 8,
    text: "À quoi sert `__invoke()` en PHP ?",
    explanation: "Il permet d’appeler un objet comme une fonction.",
  },
  {
    id: 184,
    quiz_id: 8,
    text: "Quelle fonction compare deux chaînes en sécurité avec timing attack safe ?",
    explanation: "`hash_equals()` permet une comparaison sécurisée pour éviter les attaques par chronométrage.",
  },
  {
    id: 185,
    quiz_id: 8,
    text: "Quelle est la différence entre `self` et `static` en PHP ?",
    explanation: "`self` se réfère à la classe où le code est écrit, `static` à la classe appelée dynamiquement (late static binding).",
  },
  {
    id: 186,
    quiz_id: 8,
    text: "Quelle classe native PHP permet de manipuler des dates et heures ?",
    explanation: "La classe `DateTime` permet de créer et manipuler des objets de type date/heure.",
  },
  {
    id: 187,
    quiz_id: 8,
    text: "Quel mot-clé PHP permet de créer des traits (fragments de classe) ?",
    explanation: "Le mot-clé `trait` permet de définir des morceaux de classe réutilisables.",
  },
  {
    id: 188,
    quiz_id: 8,
    text: "Qu’est-ce que le late static binding ?",
    explanation: "C’est la capacité d’une méthode statique à être appelée selon la classe réelle à l’exécution.",
  },
  {
    id: 189,
    quiz_id: 8,
    text: "Quel opérateur est utilisé pour gérer les namespaces ?",
    explanation: "L’opérateur `\\` est utilisé pour accéder aux éléments dans les namespaces.",
  },
  {
    id: 190,
    quiz_id: 8,
    text: "Que fait la méthode `__sleep()` ?",
    explanation: "`__sleep()` est appelée avant la sérialisation d’un objet pour spécifier les propriétés à sauvegarder.",
  },


  //PHP POO
  {
  id: 191,
  quiz_id: 9,
  text: "Quel mot-clé permet de définir une classe en PHP ?",
  explanation: "`class` est utilisé pour déclarer une classe en PHP."
},
{
  id: 192,
  quiz_id: 9,
  text: "Comment déclare-t-on une propriété dans une classe ?",
  explanation: "On utilise un mot-clé de visibilité (`public`, `private`, `protected`) suivi du nom de la propriété."
},
{
  id: 193,
  quiz_id: 9,
  text: "Quel est le rôle du constructeur `__construct()` ?",
  explanation: "C'est une méthode spéciale appelée automatiquement à la création de l'objet."
},
{
  id: 194,
  quiz_id: 9,
  text: "Comment accède-t-on à une méthode d'une instance ?",
  explanation: "Avec l'opérateur `->`, par exemple : `$objet->maMethode()`."
},
{
  id: 195,
  quiz_id: 9,
  text: "Quelle est la portée d'une propriété `private` ?",
  explanation: "Elle est accessible uniquement à l'intérieur de la classe elle-même."
},
{
  id: 196,
  quiz_id: 9,
  text: "Quel mot-clé permet de rendre une propriété accessible sans instanciation ?",
  explanation: "`static` permet d'accéder à une propriété via la classe directement."
},
{
  id: 197,
  quiz_id: 9,
  text: "Comment appelle-t-on une constante de classe ?",
  explanation: "Avec `NomClasse::CONSTANTE` ou `self::CONSTANTE` dans la classe."
},
{
  id: 198,
  quiz_id: 9,
  text: "À quoi sert `extends` en PHP ?",
  explanation: "`extends` permet d'hériter des propriétés et méthodes d'une autre classe."
},
{
  id: 199,
  quiz_id: 9,
  text: "Que signifie le mot-clé `parent` ?",
  explanation: "`parent::` est utilisé pour accéder à la classe parente."
},
{
  id: 200,
  quiz_id: 9,
  text: "Comment empêcher une classe d’être héritée ?",
  explanation: "En la déclarant `final`, elle ne peut pas être étendue."
},
{
  id: 201,
  quiz_id: 9,
  text: "Que permet le mot-clé `interface` ?",
  explanation: "Il définit un contrat que les classes implémentant l'interface doivent respecter."
},
{
  id: 202,
  quiz_id: 9,
  text: "Comment une classe implémente-t-elle une interface ?",
  explanation: "Avec le mot-clé `implements`, suivi du nom de l'interface."
},
{
  id: 203,
  quiz_id: 9,
  text: "Qu’est-ce qu’un trait ?",
  explanation: "Un trait est un mécanisme de réutilisation de code dans plusieurs classes."
},
{
  id: 204,
  quiz_id: 9,
  text: "Comment inclut-on un trait dans une classe ?",
  explanation: "Avec le mot-clé `use` à l'intérieur de la classe."
},
{
  id: 205,
  quiz_id: 9,
  text: "Quelle méthode magique est appelée lorsqu'on affiche un objet ?",
  explanation: "`__toString()` est automatiquement appelée lorsqu’un objet est traité comme une chaîne."
},
{
  id: 206,
  quiz_id: 9,
  text: "Que signifie l'encapsulation ?",
  explanation: "C’est le principe de restreindre l'accès direct aux données d’un objet."
},
{
  id: 207,
  quiz_id: 9,
  text: "Quelle est la différence entre `self` et `static` ?",
  explanation: "`self` fait référence à la classe actuelle, `static` permet le late static binding."
},
{
  id: 208,
  quiz_id: 9,
  text: "Quel mot-clé permet à une méthode de forcer une redéfinition dans une classe enfant ?",
  explanation: "C’est le mot-clé `abstract`, utilisé dans les classes abstraites."
},
{
  id: 209,
  quiz_id: 9,
  text: "Que signifie l'héritage multiple avec traits ?",
  explanation: "PHP ne permet pas l'héritage multiple de classes, mais les traits le simulent."
},
{
  id: 210,
  quiz_id: 9,
  text: "Comment une classe peut-elle être instanciée dynamiquement ?",
  explanation: "En utilisant une variable contenant le nom de la classe : `new $nomClasse()`."
},
{
  id: 211,
  quiz_id: 9,
  text: "Quelle est la méthode magique appelée quand un objet est utilisé comme une fonction ?",
  explanation: "`__invoke()` est appelée dans ce cas."
},
{
  id: 212,
  quiz_id: 9,
  text: "Quel est l'intérêt de `__get()` et `__set()` ?",
  explanation: "Ils permettent de gérer dynamiquement l'accès en lecture/écriture aux propriétés privées ou inexistantes."
},
{
  id: 213,
  quiz_id: 9,
  text: "Comment vérifier si une classe implémente une interface ?",
  explanation: "`instanceof` ou `class_implements()` permettent cette vérification."
},
{
  id: 214,
  quiz_id: 9,
  text: "Quelle méthode permet de sérialiser un objet ?",
  explanation: "`serialize()` convertit un objet en chaîne de caractères."
},
{
  id: 215,
  quiz_id: 9,
  text: "Que fait la méthode magique `__sleep()` ?",
  explanation: "Elle est appelée avant la sérialisation, pour spécifier quelles propriétés sauvegarder."
},
{
  id: 216,
  quiz_id: 9,
  text: "Que fait `__wakeup()` ?",
  explanation: "Elle est appelée automatiquement lors de la désérialisation d’un objet."
},
{
  id: 217,
  quiz_id: 9,
  text: "Quelle est la différence entre une classe abstraite et une interface ?",
  explanation: "Une classe abstraite peut contenir du code, une interface non (jusqu’à PHP 8)."
},
{
  id: 218,
  quiz_id: 9,
  text: "Comment accéder à une méthode statique d'une classe ?",
  explanation: "Avec `NomClasse::methodeStatique()`."
},
{
  id: 219,
  quiz_id: 9,
  text: "Que permet le typage strict des propriétés en PHP ?",
  explanation: "Il permet d’imposer un type spécifique à une propriété (à partir de PHP 7.4)."
},
{
  id: 220,
  quiz_id: 9,
  text: "Quelle est la fonction d'un autoloader en PHP ?",
  explanation: "Un autoloader permet de charger automatiquement les classes à la demande."
},

//PDO MySQL
{
  id: 221,
  quiz_id: 10,
  text: "Que signifie PDO en PHP ?",
  explanation: "PDO signifie PHP Data Objects, une interface orientée objet pour accéder aux bases de données."
},
{
  id: 222,
  quiz_id: 10,
  text: "Quelle méthode PDO est utilisée pour exécuter une requête SQL simple ?",
  explanation: "`query()` est utilisée pour exécuter directement une requête SQL, souvent un SELECT."
},
{
  id: 223,
  quiz_id: 10,
  text: "Comment prépare-t-on une requête avec PDO ?",
  explanation: "La méthode `prepare()` permet de créer une requête paramétrée, plus sécurisée."
},
{
  id: 224,
  quiz_id: 10,
  text: "Quelle méthode exécute une requête préparée ?",
  explanation: "`execute()` lance l'exécution d'une requête préparée avec ou sans paramètres."
},
{
  id: 225,
  quiz_id: 10,
  text: "Quelle méthode permet de récupérer tous les résultats d'une requête ?",
  explanation: "`fetchAll()` retourne tous les résultats sous forme de tableau."
},
{
  id: 226,
  quiz_id: 10,
  text: "Quel type d'erreur PDO peut être évité grâce aux requêtes préparées ?",
  explanation: "Les injections SQL sont évitées avec des requêtes préparées."
},
{
  id: 227,
  quiz_id: 10,
  text: "Comment se connecte-t-on à MySQL avec PDO ?",
  explanation: "Avec `new PDO('mysql:host=...;dbname=...', 'user', 'pass')`."
},
{
  id: 228,
  quiz_id: 10,
  text: "Quel est le rôle de `bindParam()` ?",
  explanation: "Il lie une variable à un paramètre de la requête préparée."
},
{
  id: 229,
  quiz_id: 10,
  text: "Quelle différence entre `bindParam()` et `bindValue()` ?",
  explanation: "`bindParam()` lie la variable par référence, `bindValue()` prend la valeur actuelle."
},
{
  id: 230,
  quiz_id: 10,
  text: "Comment obtenir le dernier ID inséré ?",
  explanation: "La méthode `lastInsertId()` retourne le dernier identifiant auto-incrémenté."
},
{
  id: 231,
  quiz_id: 10,
  text: "Qu'est-ce qu'une base de données relationnelle ?",
  explanation: "Une base relationnelle stocke les données sous forme de tables liées entre elles par des relations."
},
{
  id: 232,
  quiz_id: 10,
  text: "Quel moteur de base de données est souvent utilisé avec PHP ?",
  explanation: "MySQL est l’un des moteurs les plus populaires utilisés avec PHP."
},
{
  id: 233,
  quiz_id: 10,
  text: "Comment récupérer une ligne unique depuis une requête ?",
  explanation: "Avec `fetch()` qui retourne le premier résultat correspondant."
},
{
  id: 234,
  quiz_id: 10,
  text: "Que retourne `rowCount()` ?",
  explanation: "Le nombre de lignes affectées ou retournées par la requête."
},
{
  id: 235,
  quiz_id: 10,
  text: "Quel mode de récupération retourne un tableau associatif ?",
  explanation: "`PDO::FETCH_ASSOC` permet d'obtenir un tableau avec les noms de colonnes comme clés."
},
{
  id: 236,
  quiz_id: 10,
  text: "Comment activer le mode d'erreur Exception sur la connexion PDO ?",
  explanation: "En définissant l’attribut `PDO::ATTR_ERRMODE` à `PDO::ERRMODE_EXCEPTION`."
},
{
  id: 237,
  quiz_id: 10,
  text: "Quel mot-clé SQL est utilisé pour trier les résultats ?",
  explanation: "`ORDER BY` permet de trier les résultats d'une requête SQL."
},
{
  id: 238,
  quiz_id: 10,
  text: "Quel mot-clé SQL permet de filtrer les résultats ?",
  explanation: "`WHERE` permet d'ajouter une condition dans une requête SQL."
},
{
  id: 239,
  quiz_id: 10,
  text: "Quel type de jointure affiche toutes les données de la table de gauche ?",
  explanation: "La jointure `LEFT JOIN` permet cela."
},
{
  id: 240,
  quiz_id: 10,
  text: "Comment limiter le nombre de résultats d'une requête ?",
  explanation: "Avec `LIMIT` dans la requête SQL."
},
{
  id: 241,
  quiz_id: 10,
  text: "Que fait `beginTransaction()` en PDO ?",
  explanation: "Elle démarre une transaction pour un traitement groupé de requêtes."
},
{
  id: 242,
  quiz_id: 10,
  text: "Comment annuler une transaction PDO ?",
  explanation: "`rollBack()` permet d'annuler toutes les modifications depuis le `beginTransaction()`."
},
{
  id: 243,
  quiz_id: 10,
  text: "Que fait `commit()` ?",
  explanation: "Elle valide définitivement les changements effectués pendant la transaction."
},
{
  id: 244,
  quiz_id: 10,
  text: "Quelle méthode permet de définir des options à la connexion PDO ?",
  explanation: "On peut passer un tableau d'options en 4e argument du constructeur PDO."
},
{
  id: 245,
  quiz_id: 10,
  text: "Quel type d’attaque est contrée par les requêtes préparées ?",
  explanation: "Les attaques par injection SQL sont évitées."
},
{
  id: 246,
  quiz_id: 10,
  text: "Que permet `setAttribute()` ?",
  explanation: "Elle modifie les attributs de configuration de la connexion PDO."
},
{
  id: 247,
  quiz_id: 10,
  text: "Comment vérifier si une requête a échoué ?",
  explanation: "En attrapant une `PDOException` dans un bloc try/catch."
},
{
  id: 248,
  quiz_id: 10,
  text: "Quel format utilise `fetch(PDO::FETCH_OBJ)` ?",
  explanation: "Il retourne chaque ligne comme un objet anonyme avec des propriétés."
},
{
  id: 249,
  quiz_id: 10,
  text: "Est-ce que PDO peut se connecter à d'autres bases que MySQL ?",
  explanation: "Oui, comme PostgreSQL, SQLite, Oracle, SQL Server, etc."
},
{
  id: 250,
  quiz_id: 10,
  text: "Pourquoi privilégier PDO face à `mysqli` ?",
  explanation: "PDO supporte plusieurs bases, la préparation de requêtes, et une meilleure portabilité."
},

//PHP MySQL
{
  id: 251,
  quiz_id: 11,
  text: "Que signifie l'acronyme MVC ?",
  explanation: "MVC signifie Model-View-Controller, une architecture de séparation des responsabilités."
},
{
  id: 252,
  quiz_id: 11,
  text: "Quel composant du MVC est responsable de la logique métier ?",
  explanation: "Le modèle (Model) gère les données, la logique métier et les règles de l'application."
},
{
  id: 253,
  quiz_id: 11,
  text: "Quel composant MVC affiche les données à l'utilisateur ?",
  explanation: "La Vue (View) est chargée de présenter les données dans une interface utilisateur."
},
{
  id: 254,
  quiz_id: 11,
  text: "Quel composant reçoit et traite les actions de l'utilisateur ?",
  explanation: "Le contrôleur (Controller) gère les requêtes, interagit avec le modèle et sélectionne la vue à afficher."
},
{
  id: 255,
  quiz_id: 11,
  text: "Quel est l’objectif principal de l’architecture MVC ?",
  explanation: "Séparer la logique métier, la présentation et les interactions utilisateur pour une meilleure maintenabilité."
},
{
  id: 256,
  quiz_id: 11,
  text: "Dans un projet MVC, où place-t-on généralement les fichiers de configuration ?",
  explanation: "Ils sont souvent regroupés dans un dossier `config/` à la racine du projet."
},
{
  id: 257,
  quiz_id: 11,
  text: "Quel composant interroge directement la base de données ?",
  explanation: "Le modèle (Model) effectue les requêtes vers la base de données."
},
{
  id: 258,
  quiz_id: 11,
  text: "Quelle extension de fichier est couramment utilisée pour les vues en PHP ?",
  explanation: "Les vues sont généralement des fichiers `.php`, parfois `.phtml` ou `.blade.php` selon le moteur."
},
{
  id: 259,
  quiz_id: 11,
  text: "Le contrôleur peut-il appeler directement une vue sans passer par un modèle ?",
  explanation: "Oui, mais cela n'est recommandé que si aucune donnée dynamique n’est nécessaire."
},
{
  id: 260,
  quiz_id: 11,
  text: "Quelle fonction PHP inclut un fichier et retourne une erreur fatale s’il est introuvable ?",
  explanation: "`require()` provoque une erreur fatale si le fichier n’existe pas."
},
{
  id: 261,
  quiz_id: 11,
  text: "Quel est le rôle d'un routeur dans une application MVC ?",
  explanation: "Il analyse l’URL et oriente la requête vers le bon contrôleur et la bonne action."
},
{
  id: 262,
  quiz_id: 11,
  text: "Comment transmet-on généralement les données d’un contrôleur à une vue ?",
  explanation: "Sous forme de variables, souvent dans un tableau associatif."
},
{
  id: 263,
  quiz_id: 11,
  text: "Le modèle doit-il connaître les vues ou les contrôleurs ?",
  explanation: "Non, le modèle est indépendant et ne connaît pas les vues ni les contrôleurs."
},
{
  id: 264,
  quiz_id: 11,
  text: "Quel design pattern est souvent utilisé dans le modèle ?",
  explanation: "Le pattern DAO (Data Access Object) ou Active Record est fréquent."
},
{
  id: 265,
  quiz_id: 11,
  text: "Comment appelle-t-on une classe responsable d'une ressource en MVC ?",
  explanation: "Un contrôleur, par exemple `ArticleController` pour gérer les articles."
},
{
  id: 266,
  quiz_id: 11,
  text: "Quel mot-clé PHP permet d’organiser les classes MVC dans des namespaces ?",
  explanation: "`namespace` permet d’organiser le code en espaces logiques."
},
{
  id: 267,
  quiz_id: 11,
  text: "Peut-on avoir plusieurs contrôleurs dans une application MVC ?",
  explanation: "Oui, chaque entité ou ressource a généralement son propre contrôleur."
},
{
  id: 268,
  quiz_id: 11,
  text: "Quelle méthode HTTP utilise-t-on pour récupérer des données ?",
  explanation: "`GET` est utilisée pour interroger le serveur sans modifier les données."
},
{
  id: 269,
  quiz_id: 11,
  text: "Quelle méthode HTTP est couramment utilisée pour envoyer des formulaires ?",
  explanation: "`POST` est utilisée pour envoyer des données au serveur, notamment via des formulaires."
},
{
  id: 270,
  quiz_id: 11,
  text: "Comment éviter de dupliquer du code dans les vues ?",
  explanation: "En créant des vues partielles ou templates réutilisables (header, footer, etc.)."
},
{
  id: 271,
  quiz_id: 11,
  text: "Que permet un moteur de template comme Blade ou Twig ?",
  explanation: "Il permet de séparer proprement HTML et PHP avec une syntaxe simplifiée."
},
{
  id: 272,
  quiz_id: 11,
  text: "Que signifie REST dans le contexte MVC ?",
  explanation: "C’est un style d’architecture basé sur les ressources et les méthodes HTTP standard."
},
{
  id: 273,
  quiz_id: 11,
  text: "Comment structure-t-on souvent les URLs en MVC ?",
  explanation: "Sous la forme `/controller/action/paramètre`."
},
{
  id: 274,
  quiz_id: 11,
  text: "Peut-on utiliser PDO dans le modèle ?",
  explanation: "Oui, PDO est couramment utilisé pour la gestion des bases dans les modèles."
},
{
  id: 275,
  quiz_id: 11,
  text: "Comment appelle-t-on une vue qui est insérée dans une autre ?",
  explanation: "Une vue partielle (ou include/partial)."
},
{
  id: 276,
  quiz_id: 11,
  text: "Le contrôleur peut-il gérer des formulaires HTML ?",
  explanation: "Oui, il reçoit les données, les valide et appelle le modèle si nécessaire."
},
{
  id: 277,
  quiz_id: 11,
  text: "Comment protéger les actions d'un contrôleur ?",
  explanation: "Avec des vérifications d’authentification ou d’autorisation dans les méthodes du contrôleur."
},
{
  id: 278,
  quiz_id: 11,
  text: "À quoi sert le fichier `.htaccess` dans une app MVC ?",
  explanation: "Il permet de réécrire les URLs pour qu’elles soient propres et routées vers `index.php`."
},
{
  id: 279,
  quiz_id: 11,
  text: "Comment peut-on centraliser les erreurs dans un framework MVC ?",
  explanation: "En créant un gestionnaire global d'erreurs ou en utilisant un middleware."
},
{
  id: 280,
  quiz_id: 11,
  text: "Quelle bonne pratique MVC favorise la maintenance du code ?",
  explanation: "Respecter la séparation des responsabilités et éviter les dépendances fortes entre composants."
},
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

//PHP
  { id: 801, question_id: 141, text: "Personal Home Page", is_correct: false },
  { id: 802, question_id: 141, text: "Pre Hyper Processor", is_correct: false },
  { id: 803, question_id: 141, text: "PHP: Hypertext Preprocessor", is_correct: true },
  { id: 804, question_id: 141, text: "Processor of Hypertext Pages", is_correct: false },

  { id: 805, question_id: 142, text: "<?php", is_correct: true },
  { id: 806, question_id: 142, text: "<php>", is_correct: false },
  { id: 807, question_id: 142, text: "<script>", is_correct: false },
  { id: 808, question_id: 142, text: "<?=", is_correct: false },

  { id: 809, question_id: 143, text: "$maVar = 'test';", is_correct: true },
  { id: 810, question_id: 143, text: "var maVar = 'test';", is_correct: false },
  { id: 811, question_id: 143, text: "let $maVar = 'test';", is_correct: false },
  { id: 812, question_id: 143, text: "maVar = 'test';", is_correct: false },

  { id: 813, question_id: 144, text: "+", is_correct: false },
  { id: 814, question_id: 144, text: ".", is_correct: true },
  { id: 815, question_id: 144, text: "&", is_correct: false },
  { id: 816, question_id: 144, text: "~", is_correct: false },

  { id: 817, question_id: 145, text: "string", is_correct: false },
  { id: 818, question_id: 145, text: "int", is_correct: false },
  { id: 819, question_id: 145, text: "bool", is_correct: true },
  { id: 820, question_id: 145, text: "array", is_correct: false },

  { id: 821, question_id: 146, text: "echo()", is_correct: false },
  { id: 822, question_id: 146, text: "var_dump()", is_correct: true },
  { id: 823, question_id: 146, text: "console.log()", is_correct: false },
  { id: 824, question_id: 146, text: "print()", is_correct: false },

  { id: 825, question_id: 147, text: "insert()", is_correct: false },
  { id: 826, question_id: 147, text: "require()", is_correct: true },
  { id: 827, question_id: 147, text: "load()", is_correct: false },
  { id: 828, question_id: 147, text: "get()", is_correct: false },

  { id: 829, question_id: 148, text: "`==` compare aussi les types", is_correct: false },
  { id: 830, question_id: 148, text: "`===` compare les types et les valeurs", is_correct: true },
  { id: 831, question_id: 148, text: "`==` est plus strict que `===`", is_correct: false },
  { id: 832, question_id: 148, text: "Ils sont équivalents", is_correct: false },

  { id: 833, question_id: 149, text: "bonjour", is_correct: false },
  { id: 834, question_id: 149, text: "4", is_correct: false },
  { id: 835, question_id: 149, text: "3", is_correct: true },
  { id: 836, question_id: 149, text: "false", is_correct: false },

  { id: 837, question_id: 150, text: "func", is_correct: false },
  { id: 838, question_id: 150, text: "define", is_correct: false },
  { id: 839, question_id: 150, text: "function", is_correct: true },
  { id: 840, question_id: 150, text: "method", is_correct: false },

  { id: 841, question_id: 151, text: "$POST", is_correct: false },
  { id: 842, question_id: 151, text: "$_POST", is_correct: true },
  { id: 843, question_id: 151, text: "$_FORM", is_correct: false },
  { id: 844, question_id: 151, text: "$POST_DATA", is_correct: false },

  { id: 845, question_id: 152, text: "PHP Database Option", is_correct: false },
  { id: 846, question_id: 152, text: "Private Data Output", is_correct: false },
  { id: 847, question_id: 152, text: "PHP Data Objects", is_correct: true },
  { id: 848, question_id: 152, text: "Persistent Database Object", is_correct: false },

  { id: 849, question_id: 153, text: "connectPDO()", is_correct: false },
  { id: 850, question_id: 153, text: "new PDO(...)", is_correct: true },
  { id: 851, question_id: 153, text: "PDO::connect()", is_correct: false },
  { id: 852, question_id: 153, text: "PDO_connect()", is_correct: false },

  { id: 853, question_id: 154, text: "html_entities()", is_correct: false },
  { id: 854, question_id: 154, text: "htmlspecialchars()", is_correct: true },
  { id: 855, question_id: 154, text: "strip_tags()", is_correct: false },
  { id: 856, question_id: 154, text: "escape()", is_correct: false },

  { id: 857, question_id: 155, text: "send_header()", is_correct: false },
  { id: 858, question_id: 155, text: "header()", is_correct: true },
  { id: 859, question_id: 155, text: "http_send()", is_correct: false },
  { id: 860, question_id: 155, text: "echo_header()", is_correct: false },

  { id: 861, question_id: 156, text: "Vérifie si la variable existe", is_correct: false },
  { id: 862, question_id: 156, text: "Vérifie si la variable est vide", is_correct: false },
  { id: 863, question_id: 156, text: "Vérifie si la variable est définie et non null", is_correct: true },
  { id: 864, question_id: 156, text: "Supprime la variable", is_correct: false },

  { id: 865, question_id: 157, text: "Inclut le fichier plusieurs fois", is_correct: false },
  { id: 866, question_id: 157, text: "Inclut le fichier une seule fois", is_correct: true },
  { id: 867, question_id: 157, text: "Vérifie l’existence du fichier", is_correct: false },
  { id: 868, question_id: 157, text: "Crée un alias de fichier", is_correct: false },

  { id: 869, question_id: 158, text: "function", is_correct: false },
  { id: 870, question_id: 158, text: "object", is_correct: false },
  { id: 871, question_id: 158, text: "class", is_correct: true },
  { id: 872, question_id: 158, text: "define", is_correct: false },

  { id: 873, question_id: 159, text: "Visible partout", is_correct: false },
  { id: 874, question_id: 159, text: "Visible uniquement dans la classe", is_correct: true },
  { id: 875, question_id: 159, text: "Visible dans la classe et ses enfants", is_correct: false },
  { id: 876, question_id: 159, text: "Visible depuis l’extérieur uniquement", is_correct: false },

  { id: 877, question_id: 160, text: "use", is_correct: false },
  { id: 878, question_id: 160, text: "inherit", is_correct: false },
  { id: 879, question_id: 160, text: "extends", is_correct: true },
  { id: 880, question_id: 160, text: "super", is_correct: false },

  { id: 881, question_id: 161, text: "send_email()", is_correct: false },
  { id: 882, question_id: 161, text: "mail()", is_correct: true },
  { id: 883, question_id: 161, text: "email()", is_correct: false },
  { id: 884, question_id: 161, text: "sendMail()", is_correct: false },

  { id: 885, question_id: 162, text: "Elle est visible depuis l'extérieur", is_correct: false },
  { id: 886, question_id: 162, text: "Elle est protégée", is_correct: false },
  { id: 887, question_id: 162, text: "Elle peut être appelée sans instance", is_correct: true },
  { id: 888, question_id: 162, text: "Elle est privée", is_correct: false },

  { id: 889, question_id: 163, text: "Partout", is_correct: false },
  { id: 890, question_id: 163, text: "Dans la classe uniquement", is_correct: false },
  { id: 891, question_id: 163, text: "Dans la classe et les enfants", is_correct: true },
  { id: 892, question_id: 163, text: "Depuis l’extérieur", is_correct: false },

  { id: 893, question_id: 164, text: "Construit une fonction", is_correct: false },
  { id: 894, question_id: 164, text: "Appelle une autre classe", is_correct: false },
  { id: 895, question_id: 164, text: "Est exécutée lors de l'instanciation", is_correct: true },
  { id: 896, question_id: 164, text: "Permet l'héritage", is_correct: false },

  { id: 897, question_id: 165, text: "Elle est visible uniquement dans la classe", is_correct: false },
  { id: 898, question_id: 165, text: "Elle ne peut pas être redéfinie", is_correct: true },
  { id: 899, question_id: 165, text: "Elle est abstraite", is_correct: false },
  { id: 900, question_id: 165, text: "Elle est automatiquement publique", is_correct: false },

  { id: 901, question_id: 166, text: "this->propriete", is_correct: false },
  { id: 902, question_id: 166, text: "self->propriete", is_correct: false },
  { id: 903, question_id: 166, text: "NomClasse::$propriete", is_correct: true },
  { id: 904, question_id: 166, text: "$this::propriete", is_correct: false },

  { id: 905, question_id: 167, text: "`==` compare les valeurs et types", is_correct: false },
  { id: 906, question_id: 167, text: "`===` compare uniquement les valeurs", is_correct: false },
  { id: 907, question_id: 167, text: "`==` compare les valeurs, `===` valeurs et types", is_correct: true },
  { id: 908, question_id: 167, text: "Il n'y a pas de différence", is_correct: false },

  { id: 909, question_id: 168, text: "define()", is_correct: false },
  { id: 910, question_id: 168, text: "let", is_correct: false },
  { id: 911, question_id: 168, text: "const", is_correct: true },
  { id: 912, question_id: 168, text: "constant", is_correct: false },

  { id: 913, question_id: 169, text: "__toString()", is_correct: true },
  { id: 914, question_id: 169, text: "__display()", is_correct: false },
  { id: 915, question_id: 169, text: "__print()", is_correct: false },
  { id: 916, question_id: 169, text: "__output()", is_correct: false },

  { id: 917, question_id: 170, text: "include", is_correct: false },
  { id: 918, question_id: 170, text: "require", is_correct: false },
  { id: 919, question_id: 170, text: "use", is_correct: true },
  { id: 920, question_id: 170, text: "trait", is_correct: false },

  { id: 921, question_id: 171, text: "__autoload()", is_correct: false },
  { id: 922, question_id: 171, text: "autoload()", is_correct: false },
  { id: 923, question_id: 171, text: "spl_autoload_register()", is_correct: true },
  { id: 924, question_id: 171, text: "require_all()", is_correct: false },

  { id: 925, question_id: 172, text: "Avec `include`", is_correct: false },
  { id: 926, question_id: 172, text: "Avec `set_error_handler()`", is_correct: false },
  { id: 927, question_id: 172, text: "Avec exceptions (try/catch)", is_correct: true },
  { id: 928, question_id: 172, text: "En redémarrant le serveur", is_correct: false },

  { id: 929, question_id: 173, text: "Un tableau avec des clés modifiées", is_correct: false },
  { id: 930, question_id: 173, text: "Un seul élément", is_correct: false },
  { id: 931, question_id: 173, text: "Un tableau transformé", is_correct: true },
  { id: 932, question_id: 173, text: "Une chaîne de caractères", is_correct: false },

  { id: 933, question_id: 174, text: "Null coalescent operator", is_correct: true },
  { id: 934, question_id: 174, text: "Opérateur logique", is_correct: false },
  { id: 935, question_id: 174, text: "Opérateur arithmétique", is_correct: false },
  { id: 936, question_id: 174, text: "Opérateur de comparaison", is_correct: false },

  { id: 937, question_id: 175, text: "Itère et affiche", is_correct: false },
  { id: 938, question_id: 175, text: "Fusionne deux tableaux", is_correct: false },
  { id: 939, question_id: 175, text: "Réduit un tableau à une seule valeur", is_correct: true },
  { id: 940, question_id: 175, text: "Trie le tableau", is_correct: false },

  { id: 941, question_id: 176, text: "`fn () => {}`", is_correct: false },
  { id: 942, question_id: 176, text: "`function () {}`", is_correct: true },
  { id: 943, question_id: 176, text: "`new function() {}`", is_correct: false },
  { id: 944, question_id: 176, text: "`anonymous() {}`", is_correct: false },

  { id: 945, question_id: 177, text: "`global`", is_correct: false },
  { id: 946, question_id: 177, text: "`this`", is_correct: false },
  { id: 947, question_id: 177, text: "`use`", is_correct: true },
  { id: 948, question_id: 177, text: "`inject`", is_correct: false },

  { id: 949, question_id: 178, text: "has_method()", is_correct: false },
  { id: 950, question_id: 178, text: "method_exists()", is_correct: true },
  { id: 951, question_id: 178, text: "is_callable()", is_correct: false },
  { id: 952, question_id: 178, text: "method_defined()", is_correct: false },

  { id: 953, question_id: 179, text: "Elle ajoute un élément", is_correct: false },
  { id: 954, question_id: 179, text: "Elle trie un tableau", is_correct: false },
  { id: 955, question_id: 179, text: "Elle filtre selon une condition", is_correct: true },
  { id: 956, question_id: 179, text: "Elle inverse les clés/valeurs", is_correct: false },

  { id: 957, question_id: 180, text: "Avec == uniquement", is_correct: false },
  { id: 958, question_id: 180, text: "Avec === uniquement", is_correct: false },
  { id: 959, question_id: 180, text: "Avec == si classe et attributs identiques", is_correct: true },
  { id: 960, question_id: 180, text: "On ne peut pas", is_correct: false },
  
  { id: 961, question_id: 181, text: "Traversable", is_correct: false },
  { id: 962, question_id: 181, text: "Iterator", is_correct: true },
  { id: 963, question_id: 181, text: "Iterable", is_correct: false },
  { id: 964, question_id: 181, text: "ArrayAccess", is_correct: false },

  { id: 965, question_id: 182, text: "private", is_correct: false },
  { id: 966, question_id: 182, text: "abstract", is_correct: false },
  { id: 967, question_id: 182, text: "final", is_correct: true },
  { id: 968, question_id: 182, text: "sealed", is_correct: false },

  { id: 969, question_id: 183, text: "Appelle une méthode magique", is_correct: false },
  { id: 970, question_id: 183, text: "Permet d'appeler l'objet comme une fonction", is_correct: true },
  { id: 971, question_id: 183, text: "Instancie automatiquement un objet", is_correct: false },
  { id: 972, question_id: 183, text: "Définit un constructeur alternatif", is_correct: false },

  { id: 973, question_id: 184, text: "strcmp()", is_correct: false },
  { id: 974, question_id: 184, text: "hash_equals()", is_correct: true },
  { id: 975, question_id: 184, text: "===", is_correct: false },
  { id: 976, question_id: 184, text: "sha1_compare()", is_correct: false },

  { id: 977, question_id: 185, text: "`static` appelle toujours la classe mère", is_correct: false },
  { id: 978, question_id: 185, text: "`self` appelle dynamiquement la classe", is_correct: false },
  { id: 979, question_id: 185, text: "`static` utilise late static binding", is_correct: true },
  { id: 980, question_id: 185, text: "Aucune différence", is_correct: false },

  { id: 981, question_id: 186, text: "Date", is_correct: false },
  { id: 982, question_id: 186, text: "Time", is_correct: false },
  { id: 983, question_id: 186, text: "DateTime", is_correct: true },
  { id: 984, question_id: 186, text: "TimeStamp", is_correct: false },

  { id: 985, question_id: 187, text: "include", is_correct: false },
  { id: 986, question_id: 187, text: "mixin", is_correct: false },
  { id: 987, question_id: 187, text: "trait", is_correct: true },
  { id: 988, question_id: 187, text: "fragment", is_correct: false },

  { id: 989, question_id: 188, text: "Appelle une fonction globale", is_correct: false },
  { id: 990, question_id: 188, text: "Résout les classes dans l’ordre d’héritage", is_correct: false },
  { id: 991, question_id: 188, text: "Utilise `static::` pour des appels dynamiques", is_correct: true },
  { id: 992, question_id: 188, text: "Appelle le parent directement", is_correct: false },

  { id: 993, question_id: 189, text: "/", is_correct: false },
  { id: 994, question_id: 189, text: ".", is_correct: false },
  { id: 995, question_id: 189, text: "\\", is_correct: true },
  { id: 996, question_id: 189, text: "::", is_correct: false },

  { id: 997, question_id: 190, text: "Elle est appelée à la création d’un objet", is_correct: false },
  { id: 998, question_id: 190, text: "Elle convertit l’objet en JSON", is_correct: false },
  { id: 999, question_id: 190, text: "Elle prépare l’objet pour la sérialisation", is_correct: true },
  { id: 1000, question_id: 190, text: "Elle est appelée à la suppression d’un objet", is_correct: false },


  //PHP POO
  // Question 191
{ id: 2001, question_id: 191, text: "function", is_correct: false },
{ id: 2002, question_id: 191, text: "define", is_correct: false },
{ id: 2003, question_id: 191, text: "class", is_correct: true },
{ id: 2004, question_id: 191, text: "object", is_correct: false },

// Question 192
{ id: 2005, question_id: 192, text: "public $nom;", is_correct: true },
{ id: 2006, question_id: 192, text: "$public nom;", is_correct: false },
{ id: 2007, question_id: 192, text: "var = nom;", is_correct: false },
{ id: 2008, question_id: 192, text: "define nom;", is_correct: false },

// Question 193
{ id: 2009, question_id: 193, text: "Elle initialise l’objet à sa destruction", is_correct: false },
{ id: 2010, question_id: 193, text: "Elle est appelée automatiquement à l’instanciation", is_correct: true },
{ id: 2011, question_id: 193, text: "Elle clone l’objet", is_correct: false },
{ id: 2012, question_id: 193, text: "Elle affiche les propriétés", is_correct: false },

// Question 194
{ id: 2013, question_id: 194, text: "$objet.call()", is_correct: false },
{ id: 2014, question_id: 194, text: "$objet::methode()", is_correct: false },
{ id: 2015, question_id: 194, text: "$objet->methode()", is_correct: true },
{ id: 2016, question_id: 194, text: "methode($objet)", is_correct: false },

// Question 195
{ id: 2017, question_id: 195, text: "Partout dans le code", is_correct: false },
{ id: 2018, question_id: 195, text: "Uniquement dans la classe", is_correct: true },
{ id: 2019, question_id: 195, text: "Dans la classe et ses enfants", is_correct: false },
{ id: 2020, question_id: 195, text: "Depuis l’extérieur", is_correct: false },

// Question 196
{ id: 2021, question_id: 196, text: "public", is_correct: false },
{ id: 2022, question_id: 196, text: "final", is_correct: false },
{ id: 2023, question_id: 196, text: "static", is_correct: true },
{ id: 2024, question_id: 196, text: "const", is_correct: false },

// Question 197
{ id: 2025, question_id: 197, text: "$const", is_correct: false },
{ id: 2026, question_id: 197, text: "NomClasse->CONSTANTE", is_correct: false },
{ id: 2027, question_id: 197, text: "NomClasse::CONSTANTE", is_correct: true },
{ id: 2028, question_id: 197, text: "$NomClasse::CONSTANTE", is_correct: false },

// Question 198
{ id: 2029, question_id: 198, text: "Créer une interface", is_correct: false },
{ id: 2030, question_id: 198, text: "Hériter d'une autre classe", is_correct: true },
{ id: 2031, question_id: 198, text: "Utiliser un trait", is_correct: false },
{ id: 2032, question_id: 198, text: "Instancier une classe", is_correct: false },

// Question 199
{ id: 2033, question_id: 199, text: "Accéder à l’objet courant", is_correct: false },
{ id: 2034, question_id: 199, text: "Appeler un parent", is_correct: true },
{ id: 2035, question_id: 199, text: "Hériter d’une classe", is_correct: false },
{ id: 2036, question_id: 199, text: "Créer une variable", is_correct: false },

// Question 200
{ id: 2037, question_id: 200, text: "static", is_correct: false },
{ id: 2038, question_id: 200, text: "abstract", is_correct: false },
{ id: 2039, question_id: 200, text: "final", is_correct: true },
{ id: 2040, question_id: 200, text: "private", is_correct: false },

// Question 201
{ id: 2041, question_id: 201, text: "Une classe instanciable", is_correct: false },
{ id: 2042, question_id: 201, text: "Un ensemble de constantes", is_correct: false },
{ id: 2043, question_id: 201, text: "Un contrat de méthodes à implémenter", is_correct: true },
{ id: 2044, question_id: 201, text: "Un constructeur", is_correct: false },

// Question 202
{ id: 2045, question_id: 202, text: "extends", is_correct: false },
{ id: 2046, question_id: 202, text: "include", is_correct: false },
{ id: 2047, question_id: 202, text: "implements", is_correct: true },
{ id: 2048, question_id: 202, text: "require", is_correct: false },

// Question 203
{ id: 2049, question_id: 203, text: "Un mot-clé de condition", is_correct: false },
{ id: 2050, question_id: 203, text: "Un fragment de classe réutilisable", is_correct: true },
{ id: 2051, question_id: 203, text: "Un type de constante", is_correct: false },
{ id: 2052, question_id: 203, text: "Un alias de classe", is_correct: false },

// Question 204
{ id: 2053, question_id: 204, text: "extend", is_correct: false },
{ id: 2054, question_id: 204, text: "require", is_correct: false },
{ id: 2055, question_id: 204, text: "use", is_correct: true },
{ id: 2056, question_id: 204, text: "trait", is_correct: false },

// Question 205
{ id: 2057, question_id: 205, text: "__construct()", is_correct: false },
{ id: 2058, question_id: 205, text: "__call()", is_correct: false },
{ id: 2059, question_id: 205, text: "__toString()", is_correct: true },
{ id: 2060, question_id: 205, text: "__debugInfo()", is_correct: false },

// Question 206
{ id: 2061, question_id: 206, text: "Protéger les méthodes privées", is_correct: false },
{ id: 2062, question_id: 206, text: "Restreindre l'accès aux données", is_correct: true },
{ id: 2063, question_id: 206, text: "Créer une instance", is_correct: false },
{ id: 2064, question_id: 206, text: "Augmenter la visibilité", is_correct: false },

// Question 207
{ id: 2065, question_id: 207, text: "Ils sont identiques", is_correct: false },
{ id: 2066, question_id: 207, text: "self permet un appel dynamique", is_correct: false },
{ id: 2067, question_id: 207, text: "self est statique, static est lié au contexte d'appel", is_correct: true },
{ id: 2068, question_id: 207, text: "static est un alias de self", is_correct: false },

// Question 208
{ id: 2069, question_id: 208, text: "interface", is_correct: false },
{ id: 2070, question_id: 208, text: "static", is_correct: false },
{ id: 2071, question_id: 208, text: "abstract", is_correct: true },
{ id: 2072, question_id: 208, text: "private", is_correct: false },

// Question 209
{ id: 2073, question_id: 209, text: "Les interfaces PHP", is_correct: false },
{ id: 2074, question_id: 209, text: "Les classes imbriquées", is_correct: false },
{ id: 2075, question_id: 209, text: "Les traits", is_correct: true },
{ id: 2076, question_id: 209, text: "Les constantes", is_correct: false },

// Question 210
{ id: 2077, question_id: 210, text: "new class();", is_correct: false },
{ id: 2078, question_id: 210, text: "new $className();", is_correct: true },
{ id: 2079, question_id: 210, text: "new ->className();", is_correct: false },
{ id: 2080, question_id: 210, text: "call($className)", is_correct: false },

// Question 211
{ id: 2081, question_id: 211, text: "__call()", is_correct: false },
{ id: 2082, question_id: 211, text: "__invoke()", is_correct: true },
{ id: 2083, question_id: 211, text: "__execute()", is_correct: false },
{ id: 2084, question_id: 211, text: "__function()", is_correct: false },

// Question 212
{ id: 2085, question_id: 212, text: "Définit le typage", is_correct: false },
{ id: 2086, question_id: 212, text: "Gère l'accès à des propriétés dynamiques", is_correct: true },
{ id: 2087, question_id: 212, text: "Appelez une méthode privée", is_correct: false },
{ id: 2088, question_id: 212, text: "Créer une constante", is_correct: false },

// Question 213
{ id: 2089, question_id: 213, text: "class_exists()", is_correct: false },
{ id: 2090, question_id: 213, text: "method_exists()", is_correct: false },
{ id: 2091, question_id: 213, text: "class_implements()", is_correct: true },
{ id: 2092, question_id: 213, text: "interface_exists()", is_correct: false },

// Question 214
{ id: 2093, question_id: 214, text: "serialize()", is_correct: true },
{ id: 2094, question_id: 214, text: "json_encode()", is_correct: false },
{ id: 2095, question_id: 214, text: "print_r()", is_correct: false },
{ id: 2096, question_id: 214, text: "unserialize()", is_correct: false },

// Question 215
{ id: 2097, question_id: 215, text: "Avant suppression", is_correct: false },
{ id: 2098, question_id: 215, text: "Avant sérialisation", is_correct: true },
{ id: 2099, question_id: 215, text: "Après désérialisation", is_correct: false },
{ id: 2100, question_id: 215, text: "À l’instanciation", is_correct: false },

// Question 216
{ id: 2101, question_id: 216, text: "Lors de l’instanciation", is_correct: false },
{ id: 2102, question_id: 216, text: "Lors de la désérialisation", is_correct: true },
{ id: 2103, question_id: 216, text: "Lors de l'appel de méthode", is_correct: false },
{ id: 2104, question_id: 216, text: "Lors de la sauvegarde", is_correct: false },

// Question 217
{ id: 2105, question_id: 217, text: "Les deux sont identiques", is_correct: false },
{ id: 2106, question_id: 217, text: "Une interface contient du code", is_correct: false },
{ id: 2107, question_id: 217, text: "Une classe abstraite peut contenir du code", is_correct: true },
{ id: 2108, question_id: 217, text: "On ne peut pas instancier une interface", is_correct: false },

// Question 218
{ id: 2109, question_id: 218, text: "NomClasse->methode()", is_correct: false },
{ id: 2110, question_id: 218, text: "NomClasse::methode()", is_correct: true },
{ id: 2111, question_id: 218, text: "NomClasse.methode()", is_correct: false },
{ id: 2112, question_id: 218, text: "$NomClasse::methode()", is_correct: false },

// Question 219
{ id: 2113, question_id: 219, text: "Rendre les propriétés constantes", is_correct: false },
{ id: 2114, question_id: 219, text: "Définir des types pour les propriétés", is_correct: true },
{ id: 2115, question_id: 219, text: "Ajouter des commentaires", is_correct: false },
{ id: 2116, question_id: 219, text: "Rendre la classe immuable", is_correct: false },

// Question 220
{ id: 2117, question_id: 220, text: "Il affiche les classes chargées", is_correct: false },
{ id: 2118, question_id: 220, text: "Il charge automatiquement les classes nécessaires", is_correct: true },
{ id: 2119, question_id: 220, text: "Il crée des objets automatiquement", is_correct: false },
{ id: 2120, question_id: 220, text: "Il exécute le constructeur", is_correct: false },

//Php Mysql
// Question 221
{ id: 2121, question_id: 221, text: "PHP Data Objects", is_correct: true },
{ id: 2122, question_id: 221, text: "PHP Database Operator", is_correct: false },
{ id: 2123, question_id: 221, text: "Persistent Data Option", is_correct: false },
{ id: 2124, question_id: 221, text: "Predefined Database Object", is_correct: false },

// Question 222
{ id: 2125, question_id: 222, text: "execute()", is_correct: false },
{ id: 2126, question_id: 222, text: "prepare()", is_correct: false },
{ id: 2127, question_id: 222, text: "query()", is_correct: true },
{ id: 2128, question_id: 222, text: "run()", is_correct: false },

// Question 223
{ id: 2129, question_id: 223, text: "bindParam()", is_correct: false },
{ id: 2130, question_id: 223, text: "query()", is_correct: false },
{ id: 2131, question_id: 223, text: "prepare()", is_correct: true },
{ id: 2132, question_id: 223, text: "fetch()", is_correct: false },

// Question 224
{ id: 2133, question_id: 224, text: "run()", is_correct: false },
{ id: 2134, question_id: 224, text: "query()", is_correct: false },
{ id: 2135, question_id: 224, text: "execute()", is_correct: true },
{ id: 2136, question_id: 224, text: "start()", is_correct: false },

// Question 225
{ id: 2137, question_id: 225, text: "fetchOne()", is_correct: false },
{ id: 2138, question_id: 225, text: "getAll()", is_correct: false },
{ id: 2139, question_id: 225, text: "fetchAll()", is_correct: true },
{ id: 2140, question_id: 225, text: "result()", is_correct: false },

// Question 226
{ id: 2141, question_id: 226, text: "Erreur de typage", is_correct: false },
{ id: 2142, question_id: 226, text: "Injection SQL", is_correct: true },
{ id: 2143, question_id: 226, text: "Erreur d’orthographe", is_correct: false },
{ id: 2144, question_id: 226, text: "Erreur de réseau", is_correct: false },

// Question 227
{ id: 2145, question_id: 227, text: "new DB(...)", is_correct: false },
{ id: 2146, question_id: 227, text: "new MySQL(...)", is_correct: false },
{ id: 2147, question_id: 227, text: "new PDO(...)", is_correct: true },
{ id: 2148, question_id: 227, text: "pdo_connect(...)", is_correct: false },

// Question 228
{ id: 2149, question_id: 228, text: "Elle prépare la requête", is_correct: false },
{ id: 2150, question_id: 228, text: "Elle exécute la requête", is_correct: false },
{ id: 2151, question_id: 228, text: "Elle lie une variable à un paramètre", is_correct: true },
{ id: 2152, question_id: 228, text: "Elle récupère les résultats", is_correct: false },

// Question 229
{ id: 2153, question_id: 229, text: "Aucune différence", is_correct: false },
{ id: 2154, question_id: 229, text: "bindValue lie par référence", is_correct: false },
{ id: 2155, question_id: 229, text: "bindParam prend une valeur statique", is_correct: false },
{ id: 2156, question_id: 229, text: "bindParam lie une variable, bindValue une valeur", is_correct: true },

// Question 230
{ id: 2157, question_id: 230, text: "last_id()", is_correct: false },
{ id: 2158, question_id: 230, text: "getLastInsertId()", is_correct: false },
{ id: 2159, question_id: 230, text: "lastInsertId()", is_correct: true },
{ id: 2160, question_id: 230, text: "insertId()", is_correct: false },

// Question 231
{ id: 2161, question_id: 231, text: "Une base avec des fichiers", is_correct: false },
{ id: 2162, question_id: 231, text: "Des données reliées par des relations", is_correct: true },
{ id: 2163, question_id: 231, text: "Un ensemble de classes", is_correct: false },
{ id: 2164, question_id: 231, text: "Une base de code PHP", is_correct: false },

// Question 232
{ id: 2165, question_id: 232, text: "MongoDB", is_correct: false },
{ id: 2166, question_id: 232, text: "MySQL", is_correct: true },
{ id: 2167, question_id: 232, text: "Redis", is_correct: false },
{ id: 2168, question_id: 232, text: "Oracle", is_correct: false },

// Question 233
{ id: 2169, question_id: 233, text: "fetch()", is_correct: true },
{ id: 2170, question_id: 233, text: "fetchAll()", is_correct: false },
{ id: 2171, question_id: 233, text: "first()", is_correct: false },
{ id: 2172, question_id: 233, text: "row()", is_correct: false },

// Question 234
{ id: 2173, question_id: 234, text: "Un tableau de lignes", is_correct: false },
{ id: 2174, question_id: 234, text: "Le nombre de colonnes", is_correct: false },
{ id: 2175, question_id: 234, text: "Le nombre de lignes affectées", is_correct: true },
{ id: 2176, question_id: 234, text: "Un booléen", is_correct: false },

// Question 235
{ id: 2177, question_id: 235, text: "PDO::FETCH_OBJ", is_correct: false },
{ id: 2178, question_id: 235, text: "PDO::FETCH_ASSOC", is_correct: true },
{ id: 2179, question_id: 235, text: "PDO::FETCH_CLASS", is_correct: false },
{ id: 2180, question_id: 235, text: "PDO::FETCH_NUM", is_correct: false },

// Question 236
{ id: 2181, question_id: 236, text: "PDO::ATTR_DEFAULT_FETCH_MODE", is_correct: false },
{ id: 2182, question_id: 236, text: "PDO::ATTR_ERRMODE avec ERRMODE_EXCEPTION", is_correct: true },
{ id: 2183, question_id: 236, text: "PDO::SET_EXCEPTION", is_correct: false },
{ id: 2184, question_id: 236, text: "PDO::ENABLE_EXCEPTIONS", is_correct: false },

// Question 237
{ id: 2185, question_id: 237, text: "FILTER", is_correct: false },
{ id: 2186, question_id: 237, text: "WHERE", is_correct: false },
{ id: 2187, question_id: 237, text: "ORDER BY", is_correct: true },
{ id: 2188, question_id: 237, text: "SORT", is_correct: false },

// Question 238
{ id: 2189, question_id: 238, text: "GROUP BY", is_correct: false },
{ id: 2190, question_id: 238, text: "SELECT", is_correct: false },
{ id: 2191, question_id: 238, text: "WHERE", is_correct: true },
{ id: 2192, question_id: 238, text: "FILTER", is_correct: false },

// Question 239
{ id: 2193, question_id: 239, text: "INNER JOIN", is_correct: false },
{ id: 2194, question_id: 239, text: "RIGHT JOIN", is_correct: false },
{ id: 2195, question_id: 239, text: "LEFT JOIN", is_correct: true },
{ id: 2196, question_id: 239, text: "FULL JOIN", is_correct: false },

// Question 240
{ id: 2197, question_id: 240, text: "LIMIT", is_correct: true },
{ id: 2198, question_id: 240, text: "OFFSET", is_correct: false },
{ id: 2199, question_id: 240, text: "CUT", is_correct: false },
{ id: 2200, question_id: 240, text: "TOP", is_correct: false },

// Question 241
{ id: 2201, question_id: 241, text: "Démarre une session PHP", is_correct: false },
{ id: 2202, question_id: 241, text: "Démarre une transaction", is_correct: true },
{ id: 2203, question_id: 241, text: "Ferme la connexion", is_correct: false },
{ id: 2204, question_id: 241, text: "Lance une exception", is_correct: false },

// Question 242
{ id: 2205, question_id: 242, text: "reset()", is_correct: false },
{ id: 2206, question_id: 242, text: "rollBack()", is_correct: true },
{ id: 2207, question_id: 242, text: "undo()", is_correct: false },
{ id: 2208, question_id: 242, text: "abort()", is_correct: false },

// Question 243
{ id: 2209, question_id: 243, text: "Sauvegarde les données sur disque", is_correct: false },
{ id: 2210, question_id: 243, text: "Valide la transaction", is_correct: true },
{ id: 2211, question_id: 243, text: "Efface les résultats", is_correct: false },
{ id: 2212, question_id: 243, text: "Ferme la requête", is_correct: false },

// Question 244
{ id: 2213, question_id: 244, text: "prepareOptions()", is_correct: false },
{ id: 2214, question_id: 244, text: "PDO::configure()", is_correct: false },
{ id: 2215, question_id: 244, text: "Passer un tableau en 4e argument du constructeur", is_correct: true },
{ id: 2216, question_id: 244, text: "setConfig()", is_correct: false },

// Question 245
{ id: 2217, question_id: 245, text: "Cross-site scripting", is_correct: false },
{ id: 2218, question_id: 245, text: "Injection SQL", is_correct: true },
{ id: 2219, question_id: 245, text: "Clickjacking", is_correct: false },
{ id: 2220, question_id: 245, text: "CSRF", is_correct: false },

// Question 246
{ id: 2221, question_id: 246, text: "Elle crée une nouvelle table", is_correct: false },
{ id: 2222, question_id: 246, text: "Elle définit un attribut PDO", is_correct: true },
{ id: 2223, question_id: 246, text: "Elle insère une ligne", is_correct: false },
{ id: 2224, question_id: 246, text: "Elle récupère une erreur", is_correct: false },

// Question 247
{ id: 2225, question_id: 247, text: "Avec isset()", is_correct: false },
{ id: 2226, question_id: 247, text: "Avec try/catch sur PDOException", is_correct: true },
{ id: 2227, question_id: 247, text: "Avec checkError()", is_correct: false },
{ id: 2228, question_id: 247, text: "Avec isValid()", is_correct: false },

// Question 248
{ id: 2229, question_id: 248, text: "Un tableau associatif", is_correct: false },
{ id: 2230, question_id: 248, text: "Un tableau indexé", is_correct: false },
{ id: 2231, question_id: 248, text: "Un objet avec les propriétés de la table", is_correct: true },
{ id: 2232, question_id: 248, text: "Une chaîne JSON", is_correct: false },

// Question 249
{ id: 2233, question_id: 249, text: "Non, uniquement MySQL", is_correct: false },
{ id: 2234, question_id: 249, text: "Oui, plusieurs moteurs sont supportés", is_correct: true },
{ id: 2235, question_id: 249, text: "Seulement PostgreSQL", is_correct: false },
{ id: 2236, question_id: 249, text: "Seulement SQLite", is_correct: false },

// Question 250
{ id: 2237, question_id: 250, text: "Car il est plus rapide", is_correct: false },
{ id: 2238, question_id: 250, text: "Car il supporte plusieurs bases et est plus portable", is_correct: true },
{ id: 2239, question_id: 250, text: "Car il utilise des cookies", is_correct: false },
{ id: 2240, question_id: 250, text: "Car il est plus simple à installer", is_correct: false },

// Question 251
{ id: 2251, question_id: 251, text: "Model View Controller", is_correct: true },
{ id: 2252, question_id: 251, text: "Manage View Code", is_correct: false },
{ id: 2253, question_id: 251, text: "Main Visual Command", is_correct: false },
{ id: 2254, question_id: 251, text: "Module Variable Control", is_correct: false },

// Question 252
{ id: 2255, question_id: 252, text: "Le modèle (Model)", is_correct: true },
{ id: 2256, question_id: 252, text: "La vue (View)", is_correct: false },
{ id: 2257, question_id: 252, text: "Le contrôleur (Controller)", is_correct: false },
{ id: 2258, question_id: 252, text: "Le routeur", is_correct: false },

// Question 253
{ id: 2259, question_id: 253, text: "Le modèle", is_correct: false },
{ id: 2260, question_id: 253, text: "La vue", is_correct: true },
{ id: 2261, question_id: 253, text: "Le contrôleur", is_correct: false },
{ id: 2262, question_id: 253, text: "Le navigateur", is_correct: false },

// Question 254
{ id: 2263, question_id: 254, text: "Le contrôleur", is_correct: true },
{ id: 2264, question_id: 254, text: "La vue", is_correct: false },
{ id: 2265, question_id: 254, text: "Le modèle", is_correct: false },
{ id: 2266, question_id: 254, text: "Le template", is_correct: false },

// Question 255
{ id: 2267, question_id: 255, text: "Réduire le nombre de fichiers", is_correct: false },
{ id: 2268, question_id: 255, text: "Séparer les responsabilités", is_correct: true },
{ id: 2269, question_id: 255, text: "Exécuter du code JavaScript", is_correct: false },
{ id: 2270, question_id: 255, text: "Centraliser les routes", is_correct: false },

// Question 256
{ id: 2271, question_id: 256, text: "Dans le dossier `config/`", is_correct: true },
{ id: 2272, question_id: 256, text: "Dans `views/`", is_correct: false },
{ id: 2273, question_id: 256, text: "Dans `models/`", is_correct: false },
{ id: 2274, question_id: 256, text: "Dans `assets/`", is_correct: false },

// Question 257
{ id: 2275, question_id: 257, text: "La vue", is_correct: false },
{ id: 2276, question_id: 257, text: "Le contrôleur", is_correct: false },
{ id: 2277, question_id: 257, text: "Le modèle", is_correct: true },
{ id: 2278, question_id: 257, text: "Le routeur", is_correct: false },

// Question 258
{ id: 2279, question_id: 258, text: ".php", is_correct: true },
{ id: 2280, question_id: 258, text: ".sql", is_correct: false },
{ id: 2281, question_id: 258, text: ".class", is_correct: false },
{ id: 2282, question_id: 258, text: ".mvc", is_correct: false },

// Question 259
{ id: 2283, question_id: 259, text: "Oui", is_correct: true },
{ id: 2284, question_id: 259, text: "Non", is_correct: false },
{ id: 2285, question_id: 259, text: "Uniquement en debug", is_correct: false },
{ id: 2286, question_id: 259, text: "Jamais", is_correct: false },

// Question 260
{ id: 2287, question_id: 260, text: "include()", is_correct: false },
{ id: 2288, question_id: 260, text: "require()", is_correct: true },
{ id: 2289, question_id: 260, text: "fetch()", is_correct: false },
{ id: 2290, question_id: 260, text: "open()", is_correct: false },

// Question 261
{ id: 2291, question_id: 261, text: "Il connecte à la base de données", is_correct: false },
{ id: 2292, question_id: 261, text: "Il choisit la vue", is_correct: false },
{ id: 2293, question_id: 261, text: "Il oriente vers le bon contrôleur", is_correct: true },
{ id: 2294, question_id: 261, text: "Il affiche un menu", is_correct: false },

// Question 262
{ id: 2295, question_id: 262, text: "Via la session", is_correct: false },
{ id: 2296, question_id: 262, text: "Via des cookies", is_correct: false },
{ id: 2297, question_id: 262, text: "Via un tableau de variables", is_correct: true },
{ id: 2298, question_id: 262, text: "En echo direct", is_correct: false },

// Question 263
{ id: 2299, question_id: 263, text: "Oui", is_correct: false },
{ id: 2300, question_id: 263, text: "Non", is_correct: true },
{ id: 2301, question_id: 263, text: "Seulement la vue", is_correct: false },
{ id: 2302, question_id: 263, text: "Seulement le contrôleur", is_correct: false },

// Question 264
{ id: 2303, question_id: 264, text: "Singleton", is_correct: false },
{ id: 2304, question_id: 264, text: "Observer", is_correct: false },
{ id: 2305, question_id: 264, text: "DAO ou Active Record", is_correct: true },
{ id: 2306, question_id: 264, text: "Factory", is_correct: false },

// Question 265
{ id: 2307, question_id: 265, text: "Un gestionnaire", is_correct: false },
{ id: 2308, question_id: 265, text: "Un modèle", is_correct: false },
{ id: 2309, question_id: 265, text: "Un contrôleur", is_correct: true },
{ id: 2310, question_id: 265, text: "Une vue", is_correct: false },

// Question 266
{ id: 2311, question_id: 266, text: "class", is_correct: false },
{ id: 2312, question_id: 266, text: "namespace", is_correct: true },
{ id: 2313, question_id: 266, text: "module", is_correct: false },
{ id: 2314, question_id: 266, text: "use", is_correct: false },

// Question 267
{ id: 2315, question_id: 267, text: "Non", is_correct: false },
{ id: 2316, question_id: 267, text: "Oui", is_correct: true },
{ id: 2317, question_id: 267, text: "Seulement un par projet", is_correct: false },
{ id: 2318, question_id: 267, text: "Seulement en API", is_correct: false },

// Question 268
{ id: 2319, question_id: 268, text: "POST", is_correct: false },
{ id: 2320, question_id: 268, text: "GET", is_correct: true },
{ id: 2321, question_id: 268, text: "PUT", is_correct: false },
{ id: 2322, question_id: 268, text: "DELETE", is_correct: false },

// Question 269
{ id: 2323, question_id: 269, text: "GET", is_correct: false },
{ id: 2324, question_id: 269, text: "POST", is_correct: true },
{ id: 2325, question_id: 269, text: "PATCH", is_correct: false },
{ id: 2326, question_id: 269, text: "TRACE", is_correct: false },

// Question 270
{ id: 2327, question_id: 270, text: "En copiant le code", is_correct: false },
{ id: 2328, question_id: 270, text: "En utilisant des vues partielles", is_correct: true },
{ id: 2329, question_id: 270, text: "En les stockant dans le modèle", is_correct: false },
{ id: 2330, question_id: 270, text: "En les ajoutant au contrôleur", is_correct: false },

// Question 271
{ id: 2331, question_id: 271, text: "Écrire du CSS", is_correct: false },
{ id: 2332, question_id: 271, text: "Créer des vues dynamiques plus propres", is_correct: true },
{ id: 2333, question_id: 271, text: "Remplacer PDO", is_correct: false },
{ id: 2334, question_id: 271, text: "Créer un serveur", is_correct: false },

// Question 272
{ id: 2335, question_id: 272, text: "Une base de données", is_correct: false },
{ id: 2336, question_id: 272, text: "Un protocole", is_correct: false },
{ id: 2337, question_id: 272, text: "Une architecture basée sur les ressources", is_correct: true },
{ id: 2338, question_id: 272, text: "Une classe PHP", is_correct: false },

// Question 273
{ id: 2339, question_id: 273, text: "/vue/controller/action", is_correct: false },
{ id: 2340, question_id: 273, text: "/controller/action", is_correct: true },
{ id: 2341, question_id: 273, text: "/index.php?c=...&a=...", is_correct: false },
{ id: 2342, question_id: 273, text: "/data/view", is_correct: false },

// Question 274
{ id: 2343, question_id: 274, text: "Non, jamais", is_correct: false },
{ id: 2344, question_id: 274, text: "Oui, c’est recommandé", is_correct: true },
{ id: 2345, question_id: 274, text: "Seulement dans la vue", is_correct: false },
{ id: 2346, question_id: 274, text: "Uniquement via cURL", is_correct: false },

// Question 275
{ id: 2347, question_id: 275, text: "Un layout", is_correct: false },
{ id: 2348, question_id: 275, text: "Un modèle", is_correct: false },
{ id: 2349, question_id: 275, text: "Une vue partielle", is_correct: true },
{ id: 2350, question_id: 275, text: "Un fragment JSON", is_correct: false },

// Question 276
{ id: 2351, question_id: 276, text: "Oui", is_correct: true },
{ id: 2352, question_id: 276, text: "Non", is_correct: false },
{ id: 2353, question_id: 276, text: "Uniquement la vue", is_correct: false },
{ id: 2354, question_id: 276, text: "Uniquement le modèle", is_correct: false },

// Question 277
{ id: 2355, question_id: 277, text: "En les supprimant", is_correct: false },
{ id: 2356, question_id: 277, text: "Par mot de passe", is_correct: false },
{ id: 2357, question_id: 277, text: "Avec authentification/autorisation", is_correct: true },
{ id: 2358, question_id: 277, text: "Avec un token CSRF uniquement", is_correct: false },

// Question 278
{ id: 2359, question_id: 278, text: "Gérer les sessions", is_correct: false },
{ id: 2360, question_id: 278, text: "Réécrire les URLs vers index.php", is_correct: true },
{ id: 2361, question_id: 278, text: "Afficher la vue", is_correct: false },
{ id: 2362, question_id: 278, text: "Charger la config", is_correct: false },

// Question 279
{ id: 2363, question_id: 279, text: "Avec des `die()`", is_correct: false },
{ id: 2364, question_id: 279, text: "En désactivant les erreurs", is_correct: false },
{ id: 2365, question_id: 279, text: "Avec un gestionnaire global ou middleware", is_correct: true },
{ id: 2366, question_id: 279, text: "Avec des alertes JS", is_correct: false },

// Question 280
{ id: 2367, question_id: 280, text: "Tout mettre dans un fichier", is_correct: false },
{ id: 2368, question_id: 280, text: "Respecter la séparation des responsabilités", is_correct: true },
{ id: 2369, question_id: 280, text: "Ignorer les conventions", is_correct: false },
{ id: 2370, question_id: 280, text: "Utiliser un minimum de classes", is_correct: false }
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
  console.log("suggAnswers", suggAnswers)
  return suggAnswers;
}

export function getAnswer(answer_id) {
  let suggAnswer = answers.find((answer) => answer.id == answer_id);
  return suggAnswer;
}
