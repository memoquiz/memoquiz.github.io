const entete = "Quelle est le sens de :";
const nbr_choix = 6;
data = [
 {
  "FIELD1": "Agglomérer",
  "FIELD2": "Unir en un tout compact"
 },
 {
  "FIELD1": "Ourdir",
  "FIELD2": "Organiser en secret, machiner, combiner"
 },
 {
  "FIELD1": "Chimère",
  "FIELD2": "Illusion, imagination vaine"
 },
 {
  "FIELD1": "Engoncé",
  "FIELD2": "Qui rentre le visage dans le corps"
 },
 {
  "FIELD1": "Allégation",
  "FIELD2": "Affirmations"
 },
 {
  "FIELD1": "Dubitatif",
  "FIELD2": "Exprime le doute"
 },
 {
  "FIELD1": "Prépondérant",
  "FIELD2": "Qui l’emporte en autorité, en influence, en importance"
 },
 {
  "FIELD1": "Paradoxe",
  "FIELD2": "Opinion qui va à l’encontre de l’opinion communément admise"
 },
 {
  "FIELD1": "Évoquer",
  "FIELD2": "Éveiller, souvenir, remémoré"
 },
 {
  "FIELD1": "Invoquer",
  "FIELD2": "Prier, conjurer, réclamer de l’aide"
 },
 {
  "FIELD1": "Bancal",
  "FIELD2": "Manque de rigueur, d’équilibre, de fondement"
 },
 {
  "FIELD1": "Congruent",
  "FIELD2": "Qui convient, s’applique bien. "
 },
 {
  "FIELD1": "Béret",
  "FIELD2": "Coiffure de laine souple, sans bord, ronde et plate"
 },
 {
  "FIELD1": "Vénéneuse",
  "FIELD2": "Qui contient un poison dont l’ingestion empoisonne (plante)"
 },
 {
  "FIELD1": "Venimeuse",
  "FIELD2": "Qui a du venin ; un serpent"
 },
 {
  "FIELD1": "Retors, retorse",
  "FIELD2": "Qui a été retordu, tordu en plusieurs tours *au bec retors (plein de ruse, malin, habileté tortueuse)"
 },
 {
  "FIELD1": "Baliverne",
  "FIELD2": "Propos futile et creux (histoires, sornettes)"
 },
 {
  "FIELD1": "Digression",
  "FIELD2": "Dév. oral ou écrit qui s’écarte du sujet"
 },
 {
  "FIELD1": "Tacite",
  "FIELD2": "Non exprimé, sous-entendu entre plusieurs personnes, implicite"
 },
 {
  "FIELD1": "Coercitif",
  "FIELD2": "Pouvoir de contraindre quelqu’un à se soumettre à la loi, qui exerce une contrainte"
 },
 {
  "FIELD1": "Indulgent",
  "FIELD2": "Qui excuse, pardonne facilement, tolérant"
 },
 {
  "FIELD1": "Exubérant",
  "FIELD2": "État de ce qui est très abondant (profusion), avec vivacité, enthousiasme"
 },
 {
  "FIELD1": "Entacher",
  "FIELD2": "Marquer d’une tache morale (image), salir moralement"
 },
 {
  "FIELD1": "Embrigader",
  "FIELD2": "Réunir en brigade, recruter"
 },
 {
  "FIELD1": "Élocution",
  "FIELD2": "Manière dont on exprime les sons en parlant, exprimer sa pensée oralement, façon d’articuler"
 },
 {
  "FIELD1": "Indigent",
  "FIELD2": "Qui manque les choses les plus nécessaires à la vie (pauvre, misérable, malheureux)"
 },
 {
  "FIELD1": "Harassé",
  "FIELD2": "accablé de fatigue, épuiser, exténué, à bout de force"
 },
 {
  "FIELD1": "Dissident",
  "FIELD2": "Opposé, désaccord, être en désaccord. *propos dissidents"
 },
 {
  "FIELD1": "Contusion",
  "FIELD2": "Lésion produite par un choc (bleu), sana déchirure de la peau, ecchymose"
 },
 {
  "FIELD1": "Aparté",
  "FIELD2": "Mot ou parole que l’acteur dit à part soi (seul le spectateur entend), entretien particulier (ou tout bas)"
 },
 {
  "FIELD1": "Acabit",
  "FIELD2": "Manière d’être (de même nature, de même genre)"
 },
 {
  "FIELD1": "Abhorrer",
  "FIELD2": "Avoir en horreur, détester au plus haut point"
 },
 {
  "FIELD1": "Balade",
  "FIELD2": "Marche, promenade"
 },
 {
  "FIELD1": "Ballade",
  "FIELD2": "Écouter une musique douce"
 },
 {
  "FIELD1": "Éclectique",
  "FIELD2": "Ne se consacre pas à une seule chose, Qui ne se limite pas à un seul objet. * variés"
 },
 {
  "FIELD1": "Darne",
  "FIELD2": "Tranche de poisson"
 },
 {
  "FIELD1": "Stator",
  "FIELD2": "Partie fixe d’un moteur"
 },
 {
  "FIELD1": "Morose",
  "FIELD2": "Humeur maussade, triste"
 },
 {
  "FIELD1": "Acolyte",
  "FIELD2": "Serviteur, servant, compagnon... complice qu’une personne traine toujours à sa suite"
 },
 {
  "FIELD1": "Idiome",
  "FIELD2": "Langue parlée, moyen d’expression, propre à une communauté"
 },
 {
  "FIELD1": "Polémique",
  "FIELD2": "Une attitude critique qui vise une discussion vive, querelle. (controverse)"
 },
 {
  "FIELD1": "Infime",
  "FIELD2": "Rang plus bas, minuscule ou très petit *une infime majorité"
 },
 {
  "FIELD1": "Hypocondrie",
  "FIELD2": "Maladie dépressive, tendance à ne penser qu’à ses maladies (imaginaires)"
 },
 {
  "FIELD1": "Allitération",
  "FIELD2": "Répétitions des mêmes consonnes dans des mots voisins"
 },
 {
  "FIELD1": "Panacée",
  "FIELD2": "Remède qui guérit toutes les maladies"
 },
 {
  "FIELD1": "Élocution",
  "FIELD2": "Manière d’exprimer sa pensée oralement. Façon d’articuler. (faire une élocution en classe)"
 },
 {
  "FIELD1": "Fauteur de troubles",
  "FIELD2": "Fomenteur, agitateur"
 },
 {
  "FIELD1": "Confortable",
  "FIELD2": "Présente et procure du confort, bienêtre, bourgeois... "
 },
 {
  "FIELD1": "Autodidacte",
  "FIELD2": "Qui s’instruit lui-même, sans maitre"
 },
 {
  "FIELD1": "Disparité/disparate",
  "FIELD2": "Absence d’accord, d’harmonie entre les éléments (disparité d’âge, entre couleurs, caractères, créé un déséquilibre)"
 },
 {
  "FIELD1": "Métamorphoser",
  "FIELD2": "Changer complètement quelqu’un ou quelque chose. "
 },
 {
  "FIELD1": "Probant",
  "FIELD2": "Qui prouve sérieusement, argument probant, concluent, convaincant, éloquent... (une pièce probante)"
 },
 {
  "FIELD1": "Prototype",
  "FIELD2": "Modèle premier, premier type"
 },
 {
  "FIELD1": "Sigle",
  "FIELD2": "Initiale servant d’abréviation. "
 },
 {
  "FIELD1": "Téméraire",
  "FIELD2": "Aventureux, imprudent, audacieux"
 },
 {
  "FIELD1": "Ultérieur",
  "FIELD2": "Arrivera dans le futur, date ultérieure"
 },
 {
  "FIELD1": "Permuter",
  "FIELD2": "Changer, échanger, intervertir (déplacer deux choses)"
 },
 {
  "FIELD1": "Séquelles",
  "FIELD2": "Traces, conséquences, répercussions"
 },
 {
  "FIELD1": "Apparier",
  "FIELD2": "Assortir par pair, par couple, *chaussettes, chevaux, oiseaux"
 },
 {
  "FIELD1": "Éloquence",
  "FIELD2": "Facilité à bien s’exprimer, don de la parole. "
 },
 {
  "FIELD1": "Impunément",
  "FIELD2": "Sans être puni, tuer impunément, sans risque"
 },
 {
  "FIELD1": "Nervation",
  "FIELD2": "Qui constitue les nervures d’une feuille. "
 },
 {
  "FIELD1": "Grammage",
  "FIELD2": "Mesure du poids d’une feuille"
 },
 {
  "FIELD1": "Convers",
  "FIELD2": "Une personne qui se consacre aux travaux manuels dans un monastère"
 },
 {
  "FIELD1": "Starets",
  "FIELD2": "Sage, pèlerin de l’ancienne Russie. "
 },
 {
  "FIELD1": "Éroder",
  "FIELD2": "Dégrader lentement"
 },
 {
  "FIELD1": "Précurseur",
  "FIELD2": "Celui qui innove, qui ouvre la voie"
 },
 {
  "FIELD1": "Dithyrambique",
  "FIELD2": "Très élogieux, parfois à l’excès. "
 },
 {
  "FIELD1": "Immunité",
  "FIELD2": "Privilège des diplomates auxquels seules les lois de leur pays d’origine s’appliquent. "
 },
 {
  "FIELD1": "Impavide",
  "FIELD2": "Qui ne manifeste aucune crainte, aucune peur"
 },
 {
  "FIELD1": "Éphéméride",
  "FIELD2": "Livre énumérant les évènements importants survenus le même jour de l’année à différentes époques. "
 },
 {
  "FIELD1": "Acerbe",
  "FIELD2": "aigre, âpre"
 },
 {
  "FIELD1": "Sémantique",
  "FIELD2": "Étude du sens des mots"
 },
 {
  "FIELD1": "Obséquieux",
  "FIELD2": "qui exagère les marques de politesse par servilité ou par hypocrisie"
 },
 {
  "FIELD1": "Jauger",
  "FIELD2": "Évaluer les capacités d’une personne. "
 },
 {
  "FIELD1": "Esclandre",
  "FIELD2": "Scandale, éclat"
 },
 {
  "FIELD1": "Flegme",
  "FIELD2": "Art de cacher parfaitement ses sentiments"
 },
 {
  "FIELD1": "Frontispice",
  "FIELD2": "Grand titre d’un ouvrage imprimé placé sur la première page. "
 },
 {
  "FIELD1": "Galimatias",
  "FIELD2": "Langage obscur, charabia"
 },
 {
  "FIELD1": "Borborygmes",
  "FIELD2": "gargouillis"
 },
 {
  "FIELD1": "Paronyme",
  "FIELD2": "Mots presque homonymes qui peuvent être confondus"
 },
 {
  "FIELD1": "Parturiente",
  "FIELD2": "Femme qui accouche"
 },
 {
  "FIELD1": "Logorrhée",
  "FIELD2": "Flux de paroles inutiles"
 },
 {
  "FIELD1": "Calleux",
  "FIELD2": "À la peau dure, épaisse"
 },
 {
  "FIELD1": "Embargo",
  "FIELD2": "Mesure de contrainte tendant à empêcher la libre circulation d’un objet. "
 },
 {
  "FIELD1": "Vétilles",
  "FIELD2": "Bagatelle, chose de peu de conséquences"
 },
 {
  "FIELD1": "Impondérable",
  "FIELD2": "Se dit de ce qu’il est impossible de prévoir; dont l’importance peut difficilement être évaluée "
 },
 {
  "FIELD1": "Goinfre",
  "FIELD2": "personne qui mange avec excès et salement"
 },
 {
  "FIELD1": "Hédonisme",
  "FIELD2": "doctrine qui prend pour principe de la moral la recherche du plaisir, satisfaction et l’évitement de la souffrance (maximum de satisfaction avec le moindre effort)"
 },
 {
  "FIELD1": "Égérie",
  "FIELD2": "Conseillère inspiratrice d’un homme politique, d’un artiste, d’un créateur "
 },
 {
  "FIELD1": "Policé",
  "FIELD2": "dont les mœurs sont adoucies par la civilisation"
 },
 {
  "FIELD1": "Viduité",
  "FIELD2": "État de veuve, de veuf"
 }
];
