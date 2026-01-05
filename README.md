# QuizMaster

Un projet de quiz interactif multi-matières et multi-niveaux développé en HTML, CSS et JavaScript.

## 🎯 Fonctionnalités

- **5 matières disponibles** : Informatique, Mathématiques, Physique, Chimie, Biologie
- **3 niveaux de difficulté** : Facile, Moyen, Difficile
- **10 questions par quiz** : Questions variées avec 3-7 propositions selon le niveau
- **Système de scoring** : Score final avec message personnalisé selon la performance
- **Partage des résultats** : Envoi du score par email via un formulaire intégré
- **Interface responsive** : Adaptée aux mobiles, tablettes et ordinateurs
- **Navigation intuitive** : Retour à la page précédente et accueil disponibles

## 🛠️ Structure du projet

```
PROJET_JEUXQUIZ/
├── index.html              # Page d'accueil - sélection de la matière
├── style.css               # Feuille de style principale
├── images/                 # Dossier contenant les icônes
│   ├── logo-d'acceuil.png
│   └── fleche-gauche.png
├── les-fichiers-js/        # Dossier JavaScript
│   ├── basededonnee.js    # Base de données des questions
│   └── script.js          # Logique principale de l'application
└── les-fichiers-html/      # Dossier des pages HTML supplémentaires
    ├── niveau.html        # Page de sélection du niveau de difficulté
    └── formulairequiz.html # Page principale du quiz
```

## 📚 Technologies utilisées

- **HTML5** : Structure des pages
- **CSS3** : Style et mise en page responsive
- **JavaScript (ES6)** : Logique du quiz et interactions
- **LocalStorage** : Sauvegarde des sélections entre les pages
- **Google Fonts** : Polices Montserrat et Roboto

## 🚀 Comment utiliser

1. **Ouvrir** `index.html` dans un navigateur web
2. **Choisir** une matière parmi les 5 disponibles
3. **Sélectionner** un niveau de difficulté (Facile, Moyen, Difficile)
4. **Répondre** aux 10 questions en sélectionnant la bonne réponse
5. **Valider** chaque réponse avec le bouton "Confirmer"
6. **Voir** votre score final et un message d'encouragement personnalisé
7. **Partager** votre score par email si vous le souhaitez

## 🎨 Design

- Interface moderne avec dégradés de couleurs
- Couleurs différentes pour chaque matière
- Animations subtiles sur les interactions
- Design responsive pour tous les écrans
- Popup de partage intégré

## 💾 Stockage des données

Les questions sont organisées dans `basededonnee.js` avec la structure suivante :

```javascript
const nom_matiere = [
  { // Niveau 1
    questions: ["Question 1", "Question 2", ...],
    propositions: [["Prop1", "Prop2", "Prop3"], ...],
    reponses: ["Bonne réponse 1", "Bonne réponse 2", ...]
  },
  { // Niveau 2
    // ...
  }
];
```

## 🔧 Personnalisation

### Ajouter une nouvelle matière
1. Ajouter le bouton dans `index.html`
2. Ajouter la constante dans `basededonnee.js`
3. Mettre à jour la gestion dans `script.js`

### Modifier les questions
- Modifier les tableaux dans `basededonnee.js`
- Respecter la structure : 10 questions par niveau

### Changer les couleurs
- Modifier les dégradés dans `style.css` (section `.conteneur1 button:nth-child()`)

## 📱 Responsive

Le site s'adapte automatiquement :
- **Mobile** : Écrans < 480px
- **Tablette** : Écrans 481px à 1024px
- **Desktop** : Écrans > 1024px

## ✨ Points forts

- ✅ Code propre et bien commenté
- ✅ Base de données extensible
- ✅ Interface utilisateur intuitive
- ✅ Expérience sans rechargement de page
- ✅ Feedback immédiat pour chaque réponse
- ✅ Messages d'encouragement personnalisés

## 📄 Licence

Projet éducatif développé par Lassina Bakary Keïta - © 2026 QuizMaster

---

**Développeur** : Lassina Bakary Keïta  
**Date** : 2026  
**Type** : Projet éducatif - Quiz interactif
