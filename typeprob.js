const entete = "Quel est le type de probabilité de l'événement suivant ?";
const nbr_choix = 3;
data = [
        {
            "FIELD1": "Obtenir face à pile ou face",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Obtenir un \"3\" lors d'un lancer de dé",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Piger une bille rouge dans un sac contenant 3 billes noires et 2 billes rouges",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Piger une carte de pique dans un paquet de carte",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Piger 2 cartes de cœur dans un paquet de carte",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Obtenir un \"Flush Royale\" au poker",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Gagner à la 649",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "Obtenir (F,F) lors de deux lancer de pile ou face",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "D'obtenir un chiffre pair lors d'un lancer d'un dé à 16 faces",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "D'obtenir un chiffre impair lors d'un lancer d'un dé à 12 faces",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "D'obtenir un chiffre < 5 lors d'un lancer d'un dé à 6 faces",
            "FIELD2": "Théorique"
        },
        {
            "FIELD1": "De trouver un érable à sucre parmis tous les arbres de la forêt derrière l'école",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "Qu'une pièce de voiture se brise lors de sa première utilisation",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "De trouver un sac de Skittles avec 3 bonbons rouges",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "Qu'un écureuil traverse la rue sans se faire écraser",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "Qu'une grenouille attrape un moustique déposé sur son nez",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "De trouver une pièce de 1975 parmis 100 pièces de monnaie",
            "FIELD2": "Fréquentielle"
        },
        {
            "FIELD1": "Que le Canadien de Montréal gagne 4 parties de suite malgré plusieurs joueurs blessés",
            "FIELD2": "Subjective"
        },
        {
            "FIELD1": "Que P.K. Subban score 3 buts à son prochain match",
            "FIELD2": "Subjective"
        },
        {
            "FIELD1": "Que le film Tenet gagne un oscar",
            "FIELD2": "Subjective"
        },
        {
            "FIELD1": "Que les raptors gagnent la coupe l'année prochaine",
            "FIELD2": "Subjective"
        },
        {
            "FIELD1": "Que le restaurant \"La tablée des cochons\" obtienne une étoile Michelin",
            "FIELD2": "Subjective"
        },
        {
            "FIELD1": "Qu'un malade avec des conditions particulières se rétablisse d'une maladie très rare",
            "FIELD2": "Subjective"
        }
    ]
