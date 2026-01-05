// =====================================================
// SCRIPT PRINCIPAL DU QUIZ
// =====================================================

// Attendre que tout le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {

    // =====================================================
    //  GESTION DES BOUTONS DE MATIÈRES (index.html)
    // =====================================================

    function gererBoutonMatiere(idBouton, nomMatiere) {
        const bouton = document.getElementById(idBouton);
        if (bouton) {
            bouton.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.setItem('matiereSelectionnee', nomMatiere);
                window.location.href = 'les-fichiers-html/niveau.html';
            });
        }
    }

    gererBoutonMatiere("informatique-btn", "informatique");
    gererBoutonMatiere("mathematiques-btn", "mathematiques");
    gererBoutonMatiere("physique-btn", "physique");
    gererBoutonMatiere("chimie-btn", "chimie");
    gererBoutonMatiere("biologie-btn", "biologie");


    // =====================================================
    // GESTION DES BOUTONS DE NIVEAUX (niveau.html)
    // =====================================================

    function gererBoutonNiveau(idBouton, niveau) {
        const bouton = document.getElementById(idBouton);
        if (bouton) {
            bouton.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.setItem('niveauSelectionnee', niveau);
                window.location.href = 'formulairequiz.html';
            });
        }
    }

    gererBoutonNiveau("niveau-facile-btn", "niveaufacile");
    gererBoutonNiveau("niveau-moyen-btn", "niveaumoyen");
    gererBoutonNiveau("niveau-difficile-btn", "niveaudifficile");


    // =====================================================
    //  VARIABLES GLOBALES DU QUIZ
    // =====================================================

    let QuestionActuelle = 1;
    let score = 0;
    let reponse = "";

    const matiere = localStorage.getItem('matiereSelectionnee');
    const niveau = localStorage.getItem('niveauSelectionnee');

    const boutonConfirmer = document.getElementById('confirmer');
    if (boutonConfirmer) boutonConfirmer.style.display = "none";


    // =====================================================
    //  MAPPING DES DONNÉES (matière + niveau)
    // =====================================================

    const mappingNiveaux = {
        'niveaufacile': 0,
        'niveaumoyen': 1,
        'niveaudifficile': 2
    };

    const baseDeDonnees = {
        informatique,
        mathematiques,
        physique,
        chimie,
        biologie
    };


    // =====================================================
    //  CHARGEMENT DES QUESTIONS
    // =====================================================

    function chargerQuestions() {
        const questionsMatiere = baseDeDonnees[matiere];
        const indexNiveau = mappingNiveaux[niveau];
        return questionsMatiere[indexNiveau];
    }


    // =====================================================
    // AFFICHAGE DES QUESTIONS ET PROPOSITIONS
    // =====================================================

    function AfficherQuestion(numero) {
        const questions = chargerQuestions();

        if (!questions || numero > questions.questions.length) return;

        document.getElementById("numerodelaquestion").textContent = numero;
        document.getElementById("questionAafficher").textContent = questions.questions[numero - 1];

        AfficherPropositions(questions.propositions[numero - 1]);
    }

    function AfficherPropositions(propositions) {
        const conteneur = document.querySelector(".conteneur3-propositions");
        conteneur.innerHTML = "";

        propositions.forEach((prop, index) => {
            conteneur.innerHTML += `
                <div>
                    <input type="radio" name="propositions" 
                           id="prop-${index}" value="${prop}">
                    <label for="prop-${index}">${prop}</label>
                </div>
            `;
        });
    }


    // =====================================================
    //  SÉLECTION D’UNE RÉPONSE
    // =====================================================

    const conteneurPropositions = document.querySelector(".conteneur3-propositions");

    if (conteneurPropositions) {
        conteneurPropositions.addEventListener("change", (event) => {
            if (event.target.name === "propositions") {
                reponse = event.target.value;
                boutonConfirmer.style.display = "block";
            }
        });
    }


    // =====================================================
    //  VALIDATION D’UNE RÉPONSE
    // =====================================================

    if (boutonConfirmer) {
        boutonConfirmer.addEventListener("click", (event) => {
            event.preventDefault();

            const questions = chargerQuestions();

            if (reponse === questions.reponses[QuestionActuelle - 1]) {
                score++;
            }

            QuestionActuelle++;
            reponse = "";
            boutonConfirmer.style.display = "none";

            if (QuestionActuelle <= questions.questions.length) {
                AfficherQuestion(QuestionActuelle);
            } else {
                AfficherResultats();
            }
        });
    }


    // =====================================================
    // AFFICHAGE DES RÉSULTATS
    // =====================================================

    const formulaire = document.getElementById("formulairequiz");

    function AfficherResultats() {
        let message = "";
        let couleur = "";

        if (score === 10) {
            message = "🏆 Félicitations ! Résultat parfait, tu maîtrises vraiment ce sujet. Continue comme ça, c’est impressionnant !";
            couleur = "#2ECC71";
        } else if (score >= 8) {
            message = "🚀 Excellent ! Tu as de solides connaissances. Encore un petit effort et tu atteindras la perfection !";
            couleur = "#3498DB";
        } else if (score >= 6) {
            message = "👍 Bien joué ! Tu es sur la bonne voie. Avec un peu plus de concentration, tu peux atteindre un excellent score.";
            couleur = "#F39C12";
        } else if (score >= 4) {
            message = "🙂 Pas mal ! Tu as quelques bonnes réponses, mais il reste du travail. Reprends les bases et réessaie.";
            couleur = "#9B59B6";
        } else {
            message = "😅 Ne te décourage pas ! Chaque erreur est une occasion d’apprendre. Continue et tu feras mieux la prochaine fois.";
            couleur = "#E74C3C";
        }

        formulaire.innerHTML = `
            <h3>Votre score est : ${score}/10</h3>
            <p style="color:${couleur}; font-weight:600">${message}</p>
            <button type="button" id="btnPartager">Partager</button>
        `;

        document.getElementById("btnPartager") .addEventListener("click", ouvrirPopup);
    }


    // =====================================================
    // GESTION DU POPUP DE PARTAGE
    // =====================================================

    const popupBackground = document.querySelector(".popupBackground");
    const btnEnvoyer = document.getElementById("btnEnvoyerMail");
    const nomInput = document.getElementById("nom");
    const emailInput = document.getElementById("email");
    const messageErreur = document.getElementById("ErreurMessage");

    popupBackground.style.display = "none";

    function ouvrirPopup() {
        popupBackground.style.display = "flex";
    }

    function fermerPopup() {
        popupBackground.style.display = "none";
        messageErreur.textContent = "";
    }

    popupBackground.addEventListener("click", (e) => {
        if (e.target === popupBackground) fermerPopup();
    });

    btnEnvoyer.addEventListener("click", (e) => {
        e.preventDefault();

        const nom = nomInput.value.trim();
        const email = emailInput.value.trim();
        const regexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,10}$/;

        if (nom === "") {
            messageErreur.textContent = "Le nom est obligatoire";
            messageErreur.style.color="red";
            return;
        }

        if (!regexEmail.test(email)) {
            messageErreur.textContent = "Email invalide";
            messageErreur.style.color="red";
            return;
        }

        envoyerEmail(nom, email, score);
    });

    function envoyerEmail(nom, email, score) {
        window.location.href =
            `mailto:${email}?subject=Partage du score Quiz Master&body=Salut, je suis ${nom} et je viens d’obtenir le score ${score}/10 sur le site Quiz Master !`;
    }


    // =====================================================
    // LANCEMENT DU QUIZ
    // =====================================================

    AfficherQuestion(QuestionActuelle);

});
