/* =========================================================
   BASE DE DONNÉES DU QUIZ
   ---------------------------------------------------------
   Chaque matière est représentée par une constante.
   Chaque constante contient un tableau de 3 objets :
   → Niveau 1 (Facile)
   → Niveau 2 (Moyen)
   → Niveau 3 (Difficile)

   Chaque objet de niveau contient :
   - questions     : tableau de chaînes (questions)
   - propositions  : tableau de tableaux (choix possibles)
   - reponses      : tableau de chaînes (bonne réponse)
   ========================================================= */


/* =========================
   INFORMATIQUE
========================= */   
const informatique = [
  // Niveau 1
  {
    questions: [
      "Que signifie HTML ?",
      "Quel langage est utilisé pour styliser une page web ?",
      "Quel langage permet de rendre une page web interactive ?",
      "Que signifie CPU ?",
      "Quel périphérique sert à entrer du texte ?",
      "Quel est le système d'exploitation développé par Microsoft ?",
      "Quel est l'abréviation de 'Uniform Resource Locator' ?",
      "Quel logiciel est utilisé pour naviguer sur Internet ?",
      "Quelle est l'extension d'un fichier JavaScript ?",
      "Quel langage est principalement utilisé pour les bases de données relationnelles ?"
    ],
    propositions: [
      ["Home Tool Markup Language", "HyperText Markup Language", "Hyperlink and Text Management"],
      ["Python", "CSS", "C"],
      ["JavaScript", "HTML", "PHP"],
      ["Central Processing Unit", "Computer Processing Utility", "Control Program Unit"],
      ["Clavier", "Écran", "Imprimante"],
      ["macOS", "Linux", "Windows"],
      ["URL", "URI", "USB"],
      ["Navigateur", "Antivirus", "Tableur"],
      [".css", ".js", ".html"],
      ["SQL", "C++", "Bash"]
    ],
    reponses: [
      "HyperText Markup Language",
      "CSS",
      "JavaScript",
      "Central Processing Unit",
      "Clavier",
      "Windows",
      "URL",
      "Navigateur",
      ".js",
      "SQL"
    ]
  },
  // Niveau 2
  {
    questions: [
      "Que signifie CSS ?",
      "Quel protocole est utilisé pour sécuriser un site web ?",
      "Quelle est la mémoire la plus rapide dans un ordinateur ?",
      "Quel langage est orienté objet ?",
      "Quelle entreprise a créé JavaScript ?",
      "Quel est le rôle d'un compilateur ?",
      "Quel système d'exploitation est basé sur le noyau Linux ?",
      "Quel est le langage principal pour l'IA (Intelligence Artificielle) ?",
      "Quel protocole est utilisé pour envoyer des emails ?",
      "Quelle unité mesure la vitesse d'un processeur ?"
    ],
    propositions: [
      ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Code Styling Sheet", "Central Sheet System"],
      ["HTTP", "FTP", "HTTPS", "SMTP", "DNS"],
      ["RAM", "Disque dur", "Cache", "SSD", "ROM"],
      ["HTML", "CSS", "Java", "SQL", "XML"],
      ["Google", "Microsoft", "Netscape", "IBM", "Apple"],
      ["Exécuter directement le code", "Traduire le code source en langage machine", "Vérifier uniquement les erreurs de syntaxe", "Styliser une page web", "Stocker les programmes"],
      ["Windows", "Ubuntu", "macOS", "MS-DOS", "Solaris"],
      ["Python", "HTML", "Java", "PHP", "Ruby"],
      ["HTTP", "IMAP", "SMTP", "DNS", "FTP"],
      ["Hertz", "Newton", "Joule", "Bits", "Octets"]
    ],
    reponses: [
      "Cascading Style Sheets",
      "HTTPS",
      "Cache",
      "Java",
      "Netscape",
      "Traduire le code source en langage machine",
      "Ubuntu",
      "Python",
      "SMTP",
      "Hertz"
    ]
  },
  // Niveau 3
  {
    questions: [
      "Quel est le langage utilisé pour écrire le noyau Linux ?",
      "Quel est le principe du modèle OSI ?",
      "Quelle est la complexité moyenne de la recherche dichotomique ?",
      "Qui est considéré comme le créateur de l'architecture Von Neumann ?",
      "Quel est l'avantage principal de Git ?",
      "Quel algorithme est utilisé pour le chiffrement asymétrique ?",
      "Quelle est la taille d'une adresse IPv6 ?",
      "Quel langage est le plus utilisé pour les bases de données relationnelles ?",
      "Quel est le principe de la programmation orientée objet ?",
      "Quel est le rôle d'un DNS ?"
    ],
    propositions: [
      ["Python", "Java", "C", "Assembly", "Go", "Rust", "Perl"],
      ["Diviser la communication en 3 couches", "Diviser la communication en 5 couches", "Diviser la communication en 7 couches", "Protocole réseau unique", "Compression des données", "Gestion mémoire", "Cryptage"],
      ["O(n)", "O(n²)", "O(log n)", "O(1)", "O(n log n)", "O(2^n)", "O(√n)"],
      ["Alan Turing", "John von Neumann", "Dennis Ritchie", "Bill Gates", "Charles Babbage", "Ada Lovelace", "Linus Torvalds"],
      ["Stocker des vidéos", "Contrôle de version", "Compiler du code", "Automatiser les tests", "Écrire du HTML", "Sauvegarder uniquement sur le cloud", "Lancer un serveur"],
      ["AES", "DES", "RSA", "MD5", "SHA-256", "Blowfish", "ECC"],
      ["16 bits", "32 bits", "64 bits", "128 bits", "256 bits", "512 bits", "1024 bits"],
      ["HTML", "SQL", "CSS", "Python", "C++", "R", "NoSQL"],
      ["Variables globales", "Fonctions imbriquées", "Classes et objets", "Tableaux dynamiques", "Pointeurs", "Structures conditionnelles", "Boucles imbriquées"],
      ["Traduire une URL en adresse IP", "Vérifier les emails", "Chiffrer les données", "Stocker des images", "Héberger des vidéos", "Sauvegarder les fichiers locaux", "Lancer des applications"]
    ],
    reponses: [
      "C",
      "Diviser la communication en 7 couches",
      "O(log n)",
      "John von Neumann",
      "Contrôle de version",
      "RSA",
      "128 bits",
      "SQL",
      "Classes et objets",
      "Traduire une URL en adresse IP"
    ]
  }
];

/* =========================
   MATHÉMATIQUES
========================= */
const mathematiques = [
  // Niveau 1
  {
    questions: [
      "Combien font 7 + 5 ?",
      "Combien font 9 × 3 ?",
      "Quelle est la racine carrée de 49 ?",
      "Quel est le périmètre d'un carré de côté 4 cm ?",
      "Combien de degrés a un triangle ?",
      "Combien font 100 ÷ 10 ?",
      "Quel est le résultat de 2³ ?",
      "Quelle est la formule de l'aire d'un rectangle ?",
      "Combien de côtés a un hexagone ?",
      "Quel est le nombre pair suivant 14 ?"
    ],
    propositions: [
      ["10", "12", "15"],
      ["27", "29", "21"],
      ["6", "7", "8"],
      ["12 cm", "16 cm", "20 cm"],
      ["90°", "180°", "360°"],
      ["20", "10", "5"],
      ["6", "8", "9"],
      ["longueur + largeur", "longueur × largeur", "longueur – largeur"],
      ["5", "6", "8"],
      ["15", "16", "18"]
    ],
    reponses: [
      "12",
      "27",
      "7",
      "16 cm",
      "180°",
      "10",
      "8",
      "longueur × largeur",
      "6",
      "16"
    ]
  },
  // Niveau 2
  {
    questions: [
      "Quelle est la dérivée de x² ?",
      "Quelle est la valeur de π (approximation) ?",
      "Quelle est la solution de l'équation 2x + 4 = 10 ?",
      "Quel est le discriminant de l'équation x² – 4x + 4 ?",
      "Combien de faces possède un cube ?",
      "Quelle est l'aire d'un cercle de rayon r ?",
      "Quelle est la valeur de cos(0°) ?",
      "Quelle est la solution de l'équation 5x = 25 ?",
      "Quelle est la probabilité d'obtenir 'pile' avec une pièce équilibrée ?",
      "Quelle est la valeur de log₁₀(1000) ?"
    ],
    propositions: [
      ["x", "2x", "x²", "ln(x)", "1"],
      ["2,14", "3,14", "3,41", "4,13", "1,34"],
      ["2", "3", "4", "5", "6"],
      ["-4", "0", "4", "8", "16"],
      ["4", "6", "8", "10", "12"],
      ["2πr", "πr²", "πd", "π/2", "r²"],
      ["0", "1", "-1", "0,5", "2"],
      ["2", "3", "4", "5", "6"],
      ["1/3", "1/2", "1/4", "2/3", "3/4"],
      ["1", "2", "3", "4", "10"]
    ],
    reponses: [
      "2x",
      "3,14",
      "3",
      "0",
      "6",
      "πr²",
      "1",
      "5",
      "1/2",
      "3"
    ]
  },
  // Niveau 3
  {
    questions: [
      "Quelle est la dérivée de ln(x) ?",
      "Quel est le déterminant de la matrice 2x2 [[1,2],[3,4]] ?",
      "Quelle est la somme des angles intérieurs d'un polygone à 7 côtés ?",
      "Quelle est la limite de (1 + 1/n)^n quand n → ∞ ?",
      "Si f(x)=x³, quelle est sa dérivée seconde ?",
      "Quelle est la probabilité d'obtenir 2 six consécutifs avec un dé équilibré ?",
      "Quelle est l'intégrale de 2x dx ?",
      "Quelle est la valeur exacte de sin(π/6) ?",
      "Quelle est la formule générale de la somme d'une suite arithmétique Sn ?",
      "Quelle est la valeur de ln(e²) ?"
    ],
    propositions: [
      ["1/x", "x", "ln(x)", "e^x", "x²", "cos(x)", "0"],
      ["-2", "2", "4", "6", "8", "-4", "0"],
      ["540°", "720°", "900°", "1080°", "1260°", "1440°", "1620°"],
      ["0", "1", "e", "∞", "2", "-1", "π"],
      ["0", "3", "6x", "9x²", "x²", "2x", "12"],
      ["1/6", "1/12", "1/18", "1/36", "1/24", "1/30", "1/60"],
      ["x²", "2x²", "ln(x)", "cos(x)", "3x²", "e^x", "1/x"],
      ["0", "1", "½", "√2/2", "√3/2", "2", "-½"],
      ["Sn = n × a1", "Sn = (n/2)(a1 + an)", "Sn = n²", "Sn = an / n", "Sn = an + 1", "Sn = n × r", "Sn = (a1 + an) / 2"],
      ["0", "1", "2", "e", "e²", "ln(2)", "½"]
    ],
    reponses: [
      "1/x",
      "-2",
      "900°",
      "e",
      "6x",
      "1/36",
      "x²",
      "½",
      "Sn = (n/2)(a1 + an)",
      "2"
    ]
  }
];


/* =========================
   PHYSIQUE
========================= */
const physique = [
  // Niveau 1
  {
    questions: [
      "Quelle est l'unité de la force ?",
      "Quelle est l'unité de la vitesse ?",
      "Quel est l'état de l'eau à 100°C (à pression normale) ?",
      "Quelle est la planète la plus proche du Soleil ?",
      "La lumière se déplace plus vite que... ?",
      "Quel appareil mesure la température ?",
      "Quelle est la formule de la vitesse ?",
      "Quelle est l'unité de la masse ?",
      "Quel gaz respirons-nous principalement ?",
      "Quelle est l'énergie produite par une pile électrique ?"
    ],
    propositions: [
      ["Joule", "Newton", "Watt"],
      ["m/s", "N", "kg"],
      ["Liquide", "Gaz", "Solide"],
      ["Vénus", "Mercure", "Terre"],
      ["Le son", "L'électricité", "Le vent"],
      ["Ampèremètre", "Thermomètre", "Baromètre"],
      ["distance × temps", "distance ÷ temps", "temps ÷ distance"],
      ["Newton", "Kilogramme", "Pascal"],
      ["Oxygène", "Azote", "Dioxyde de carbone"],
      ["Énergie chimique transformée en énergie électrique", "Énergie solaire", "Énergie nucléaire"]
    ],
    reponses: [
      "Newton",
      "m/s",
      "Gaz",
      "Mercure",
      "Le son",
      "Thermomètre",
      "distance ÷ temps",
      "Kilogramme",
      "Azote",
      "Énergie chimique transformée en énergie électrique"
    ]
  },
  // Niveau 2
  {
    questions: [
      "Quelle est la formule de la deuxième loi de Newton ?",
      "Quelle est la vitesse de la lumière dans le vide ?",
      "Quelle particule a une charge négative ?",
      "Quelle est l'unité de la puissance ?",
      "Quel phénomène explique l'arc-en-ciel ?",
      "Quelle planète est surnommée la planète rouge ?",
      "Quel appareil mesure l'intensité du courant ?",
      "Quelle est la formule de l'énergie cinétique ?",
      "Quelle est l'unité de la pression ?",
      "Quel gaz est essentiel à la respiration des êtres humains ?"
    ],
    propositions: [
      ["F = m + a", "F = m × a", "F = m ÷ a", "F = a ÷ m", "F = m – a"],
      ["3 000 km/s", "300 000 km/s", "30 000 km/s", "3 000 000 km/s", "30 km/s"],
      ["Proton", "Neutron", "Électron", "Photon", "Quark"],
      ["Watt", "Joule", "Newton", "Pascal", "Volt"],
      ["Réflexion", "Réfraction", "Diffraction", "Polarisation", "Absorption"],
      ["Vénus", "Mars", "Jupiter", "Saturne", "Uranus"],
      ["Voltmètre", "Ampèremètre", "Ohmmètre", "Baromètre", "Thermomètre"],
      ["Ec = ½ mv²", "Ec = mv", "Ec = ma", "Ec = F × d", "Ec = mgh"],
      ["Newton", "Pascal", "Joule", "Hertz", "Watt"],
      ["Azote", "Dioxygène", "Dioxyde de carbone", "Hélium", "Argon"]
    ],
    reponses: [
      "F = m × a",
      "300 000 km/s",
      "Électron",
      "Watt",
      "Réfraction",
      "Mars",
      "Ampèremètre",
      "Ec = ½ mv²",
      "Pascal",
      "Dioxygène"
    ]
  },
  // Niveau 3
  {
    questions: [
      "Quelle est l'unité de l'inductance ?",
      "Quelle est la valeur de l'accélération de la pesanteur sur Terre ?",
      "Quel scientifique a découvert la radioactivité ?",
      "Quelle est la vitesse de libération de la Terre ?",
      "Quelle est la formule de l'énergie potentielle gravitationnelle ?",
      "Quel est le nom de la 3e loi de Newton ?",
      "Quelle est l'unité de la fréquence ?",
      "Quelle planète possède la plus grande masse ?",
      "Quelle particule est échangée dans l'interaction électromagnétique ?",
      "Quel est le phénomène responsable de la dilatation d'un métal chauffé ?"
    ],
    propositions: [
      ["Volt", "Watt", "Henry", "Tesla", "Joule", "Weber", "Ampère"],
      ["8,9 m/s²", "9,81 m/s²", "10,5 m/s²", "11 m/s²", "7 m/s²", "15 m/s²", "12 m/s²"],
      ["Newton", "Einstein", "Becquerel", "Curie", "Bohr", "Rutherford", "Fermi"],
      ["7,9 km/s", "9,8 km/s", "11,2 km/s", "12 km/s", "14 km/s", "20 km/s", "5 km/s"],
      ["E = ½ mv²", "E = mgh", "E = mc²", "E = qU", "E = Fd", "E = ma", "E = ρgh"],
      ["Inertie", "Action-Réaction", "Gravitation", "Relativité", "Conservation", "Thermodynamique", "Induction"],
      ["Joule", "Pascal", "Hertz", "Newton", "Volt", "Watt", "Weber"],
      ["Mercure", "Vénus", "Terre", "Jupiter", "Saturne", "Neptune", "Uranus"],
      ["Proton", "Neutron", "Photon", "Gluon", "Electron", "Positron", "Muon"],
      ["Ionisation", "Excitation des électrons", "Fusion nucléaire", "Diffusion", "Compression", "Polarisation", "Dissolution"]
    ],
    reponses: [
      "Henry",
      "9,81 m/s²",
      "Becquerel",
      "11,2 km/s",
      "E = mgh",
      "Action-Réaction",
      "Hertz",
      "Jupiter",
      "Photon",
      "Excitation des électrons"
    ]
  }
];


/* =========================
   CHIMIE
========================= */
const chimie = [
  // Niveau 1
  {
    questions: [
      "Quel est le symbole de l'eau ?",
      "Quel est le symbole chimique de l'oxygène ?",
      "Quel est le symbole chimique du sodium ?",
      "Quel est le pH d'une solution neutre ?",
      "Le dioxyde de carbone est composé de... ?",
      "Quelle est l'unité de la masse molaire ?",
      "Le sel de table est... ?",
      "Quel est l'état de la glace ?",
      "Quel est le numéro atomique de l'hydrogène ?",
      "Quel est le gaz indispensable à la combustion ?"
    ],
    propositions: [
      ["H₂O", "CO₂", "O₂"],
      ["O", "Ox", "Oy"],
      ["So", "Na", "S"],
      ["0", "7", "14"],
      ["1 carbone et 2 oxygènes", "2 carbones et 1 oxygène", "2 carbones et 2 oxygènes"],
      ["g/mol", "mol/g", "kg"],
      ["NaCl", "KCl", "HCl"],
      ["Liquide", "Solide", "Gaz"],
      ["1", "2", "8"],
      ["Dioxygène", "Azote", "Hélium"]
    ],
    reponses: [
      "H₂O",
      "O",
      "Na",
      "7",
      "1 carbone et 2 oxygènes",
      "g/mol",
      "NaCl",
      "Solide",
      "1",
      "Dioxygène"
    ]
  },
  // Niveau 2
  {
    questions: [
      "Quel est le numéro atomique du carbone ?",
      "Quelle est la formule chimique du méthane ?",
      "Quel est le gaz principal dans l'air que nous respirons ?",
      "Quel est le symbole chimique du fer ?",
      "Quelle est la formule de l'acide sulfurique ?",
      "Quel est le symbole chimique du potassium ?",
      "Quel est le pH d'une base forte ?",
      "Quel est le gaz responsable de l'effet de serre ?",
      "Quel élément est utilisé dans les lampes fluorescentes ?",
      "Quelle est la formule brute du glucose ?"
    ],
    propositions: [
      ["4", "6", "8", "10", "12"],
      ["CH₄", "C₂H₆", "CO₂", "H₂O", "C₆H₁₂O₆"],
      ["Oxygène", "Azote", "Dioxyde de carbone", "Hélium", "Néon"],
      ["Fe", "F", "Fr", "Fi", "Ir"],
      ["H₂SO₄", "HCl", "HNO₃", "H₂CO₃", "NaOH"],
      ["Po", "K", "Ka", "P", "Pt"],
      ["0", "3", "7", "10", "14"],
      ["O₂", "CO₂", "H₂", "N₂", "He"],
      ["Mercure", "Fer", "Sodium", "Lithium", "Chlore"],
      ["C₆H₁₂O₆", "C₂H₆O", "C₁₂H₂₂O₁₁", "H₂O", "CH₄"]
    ],
    reponses: [
      "6",
      "CH₄",
      "Azote",
      "Fe",
      "H₂SO₄",
      "K",
      "14",
      "CO₂",
      "Mercure",
      "C₆H₁₂O₆"
    ]
  },
  // Niveau 3
  {
    questions: [
      "Quelle est la masse molaire de l'eau (H₂O) ?",
      "Quelle est la configuration électronique du carbone (Z=6) ?",
      "Quelle liaison est la plus forte ?",
      "Quel est le gaz noble le plus léger ?",
      "Quelle est la valeur du pH neutre à 25°C ?",
      "Quelle molécule est un acide fort ?",
      "Quelle est la forme géométrique de NH₃ ?",
      "Quel élément a le plus haut électronégativité ?",
      "Quel est l'ion principal dans une solution basique ?",
      "Quel est le numéro atomique de l'oxygène ?"
    ],
    propositions: [
      ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol", "24 g/mol", "28 g/mol", "30 g/mol"],
      ["1s² 2s² 2p²", "1s² 2s² 2p³", "1s² 2s² 3p²", "1s² 2s² 2d²", "1s² 3s² 3p²", "1s² 2s¹ 2p³", "1s² 2p⁴"],
      ["Liaison covalente", "Liaison ionique", "Liaison hydrogène", "Liaison Van der Waals", "Liaison métallique", "Liaison π faible", "Liaison σ faible"],
      ["Hélium", "Néon", "Argon", "Krypton", "Xénon", "Radon", "Oganesson"],
      ["6", "7", "8", "9", "10", "5", "11"],
      ["HCl", "CH₄", "NH₃", "H₂O", "CO₂", "NaOH", "HF"],
      ["Linéaire", "Plan trigonal", "Pyramide à base triangulaire", "Tétraédrique", "Hexagonale", "Carrée plane", "Octaédrique"],
      ["Oxygène", "Fluor", "Chlore", "Soufre", "Azote", "Carbone", "Iode"],
      ["H+", "OH-", "Na+", "Cl-", "K+", "Ca²+", "SO₄²-"],
      ["6", "7", "8", "9", "10", "11", "12"]
    ],
    reponses: [
      "18 g/mol",
      "1s² 2s² 2p²",
      "Liaison covalente",
      "Hélium",
      "7",
      "HCl",
      "Pyramide à base triangulaire",
      "Fluor",
      "OH-",
      "8"
    ]
  }
];



/* =========================
   BIOLOGIE
========================= */
const biologie = [
  // Niveau 1
  {
    questions: [
      "Quel organe pompe le sang dans le corps humain ?",
      "Quel organe permet de respirer ?",
      "Combien de chromosomes possède l'être humain (dans une cellule normale) ?",
      "Quel est l'organe de la digestion ?",
      "Quel est l'organe de la vision ?",
      "Quel est l'organe de l'audition ?",
      "Quelle est la cellule de base de la vie ?",
      "De quoi est composée principalement la cellule ?",
      "Quel est l'organe qui filtre le sang ?",
      "Quel est le groupe sanguin universel donneur ?"
    ],
    propositions: [
      ["Poumon", "Cœur", "Foie"],
      ["Poumons", "Reins", "Estomac"],
      ["23", "46", "92"],
      ["Estomac", "Cerveau", "Cœur"],
      ["Oreille", "Œil", "Nez"],
      ["Œil", "Oreille", "Langue"],
      ["Atome", "Cellule", "Organe"],
      ["Eau", "Carbone", "Calcium"],
      ["Poumons", "Reins", "Pancréas"],
      ["AB+", "O-", "A+"]
    ],
    reponses: [
      "Cœur",
      "Poumons",
      "46",
      "Estomac",
      "Œil",
      "Oreille",
      "Cellule",
      "Eau",
      "Reins",
      "O-"
    ]
  },
  // Niveau 2
  {
    questions: [
      "Quelle est l'unité de base de l'ADN ?",
      "Quel organe produit l'insuline ?",
      "Quel est le groupe sanguin universel receveur ?",
      "Quel est l'organe qui contrôle les mouvements volontaires ?",
      "Quel est le rôle principal des globules rouges ?",
      "Quelle est l'unité fonctionnelle du rein ?",
      "Quel est le rôle de la chlorophylle dans les plantes ?",
      "Quelle est la durée moyenne de grossesse chez l'être humain ?",
      "Quel est le nom scientifique de l'être humain ?",
      "Quel est l'organe qui détoxifie le sang ?"
    ],
    propositions: [
      ["Acide lactique", "Nucléotide", "Protéine", "Cellule", "Enzyme"],
      ["Foie", "Pancréas", "Rein", "Estomac", "Rate"],
      ["O+", "O-", "AB+", "A+", "B-"],
      ["Poumon", "Cerveau", "Cœur", "Estomac", "Rein"],
      ["Défendre l'organisme", "Transporter l'oxygène", "Produire des hormones", "Fabriquer de l'énergie", "Filtrer le sang"],
      ["Alvéole", "Néphron", "Neurone", "Globule rouge", "Myofibrille"],
      ["Absorber l'eau", "Absorber la lumière", "Produire des protéines", "Stocker du sucre", "Transporter le CO₂"],
      ["6 mois", "7 mois", "9 mois", "10 mois", "12 mois"],
      ["Homo erectus", "Homo sapiens", "Australopithèque", "Homo habilis", "Neandertal"],
      ["Foie", "Rein", "Cœur", "Poumon", "Estomac"]
    ],
    reponses: [
      "Nucléotide",
      "Pancréas",
      "AB+",
      "Cerveau",
      "Transporter l'oxygène",
      "Néphron",
      "Absorber la lumière",
      "9 mois",
      "Homo sapiens",
      "Foie"
    ]
  },
  // Niveau 3
  {
    questions: [
      "Quel est le rôle des ribosomes ?",
      "Quel est le nom de la cellule reproductrice mâle ?",
      "Quel est l'organite responsable de la respiration cellulaire ?",
      "Quel est le rôle de l'ADN polymérase ?",
      "Quel est le plus grand organe du corps humain ?",
      "Quel type de sang est donneur universel ?",
      "Quel est le rôle des lymphocytes B ?",
      "Quelle molécule transporte l'oxygène dans le sang ?",
      "Quel est le nom scientifique des globules blancs ?",
      "Quel est le rôle principal de l'appareil de Golgi ?"
    ],
    propositions: [
      ["Stocker l'énergie", "Synthèse des protéines", "Transport de l'oxygène", "Digestion cellulaire", "Division cellulaire", "Production d'ATP", "Régulation du pH"],
      ["Ovule", "Spermatozoïde", "Zygote", "Blastocyste", "Embryon", "Gamète femelle", "Chromosome"],
      ["Chloroplaste", "Mitochondrie", "Noyau", "Lysosome", "Réticulum endoplasmique", "Appareil de Golgi", "Cytoplasme"],
      ["Réparer les membranes", "Synthétiser de nouvelles chaînes d'ADN", "Dégrader les protéines", "Transporter l'ARN", "Former les ribosomes", "Produire de l'ATP", "Fabriquer les lipides"],
      ["Foie", "Cœur", "Poumons", "Peau", "Reins", "Estomac", "Intestin"],
      ["A+", "B+", "O-", "AB+", "AB-", "A-", "B-"],
      ["Produire des anticorps", "Détruire les globules rouges", "Transporter l'oxygène", "Filtrer le sang", "Stocker les graisses", "Produire de l'insuline", "Détruire les neurones"],
      ["Insuline", "ADN", "Hémoglobine", "Myosine", "Collagène", "Kératine", "Actine"],
      ["Érythrocytes", "Leucocytes", "Thrombocytes", "Plaquettes", "Monocytes", "Lymphocytes", "Neutrophiles"],
      ["Produire de l'énergie", "Modifier et exporter les protéines", "Stocker l'oxygène", "Dégrader l'ADN", "Fabriquer la paroi cellulaire", "Synthétiser l'ARN", "Transporter l'eau"]
    ],
    reponses: [
      "Synthèse des protéines",
      "Spermatozoïde",
      "Mitochondrie",
      "Synthétiser de nouvelles chaînes d'ADN",
      "Peau",
      "O-",
      "Produire des anticorps",
      "Hémoglobine",
      "Leucocytes",
      "Modifier et exporter les protéines"
    ]
  }
];