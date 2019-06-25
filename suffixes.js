const entete = "Quelle est le sens de :";
const nbr_choix = 6;
data = [
 {
   "FIELD1": "-ade",
   "FIELD2": "collection, action",
   "FIELD3": "​colonnade, \nglissade"
 },
 {
   "FIELD1": "-age",
   "FIELD2": "collection, action, produit, état",
   "FIELD3": "feuillage,\nbrigandage, \ncirage, servage​"
 },
 {
   "FIELD1": "-ail",
   "FIELD2": "instrument",
   "FIELD3": "épouvantail"
 },
 {
   "FIELD1": "-aille",
   "FIELD2": "collection, action, péjoratif",
   "FIELD3": "pierraille,\ntrouvaille, \nferraille​"
 },
 {
   "FIELD1": "-aire",
   "FIELD2": "se rapportant à",
   "FIELD3": "moustiquaire,\nantiquaire,\nlégedaire,\ndébonnaire"
 },
 {
   "FIELD1": "-ais, -ois",
   "FIELD2": "qui habite",
   "FIELD3": "marseillais,\nniçois,\nquébécois​"
 },
 {
   "FIELD1": "-aison",
   "FIELD2": "action, résultat d'une action",
   "FIELD3": "fenaison, pendaison"
 },
 {
   "FIELD1": "-al, -el",
   "FIELD2": "qui a le caractère de",
   "FIELD3": "magistral, exceptionnel"
 },
 {
   "FIELD1": "-algie",
   "FIELD2": "douleur",
   "FIELD3": "névralgie"
 },
 {
   "FIELD1": "-an",
   "FIELD2": "qui habite, disciple de",
   "FIELD3": "persan, mahometan"
 },
 {
   "FIELD1": "-archie",
   "FIELD2": "commandement",
   "FIELD3": "monarchie"
 },
 {
   "FIELD1": "-ard",
   "FIELD2": "caractère, péjoratif",
   "FIELD3": "montagnard, pleurnichard"
 },
 {
   "FIELD1": "-arque",
   "FIELD2": "qui commande",
   "FIELD3": "triéarque"
 },
 {
   "FIELD1": "-at",
   "FIELD2": "état, institution",
   "FIELD3": "septennat,\npensionnat,\norphelinat​"
 },
 {
   "FIELD1": "-ateur",
   "FIELD2": "objet, profession",
   "FIELD3": "radiateur, administrateur"
 },
 {
   "FIELD1": "-atoire",
   "FIELD2": "lieu",
   "FIELD3": "réfectoire"
 },
 {
   "FIELD1": "-atre",
   "FIELD2": "qui soigne",
   "FIELD3": "pédiatre"
 },
 {
   "FIELD1": "-bole",
   "FIELD2": "qui lance",
   "FIELD3": "discobole"
 },
 {
   "FIELD1": "-carpe",
   "FIELD2": "fruit",
   "FIELD3": "péricarpe"
 },
 {
   "FIELD1": "-cide",
   "FIELD2": "qui tue",
   "FIELD3": "infanticide, homicide"
 },
 {
   "FIELD1": "-cole",
   "FIELD2": "relatif à la culture",
   "FIELD3": "vinicole, viticole"
 },
 {
   "FIELD1": "-crate",
   "FIELD2": "qui a le pouvoir",
   "FIELD3": "aristocrate, bureaucrate"
 },
 {
   "FIELD1": "-cratie",
   "FIELD2": "pouvoir",
   "FIELD3": "ploutocratie, démocratie"
 },
 {
   "FIELD1": "-culteur",
   "FIELD2": "celui qui cultive",
   "FIELD3": "agriculteur"
 },
 {
   "FIELD1": "-culture",
   "FIELD2": "art de cultiver",
   "FIELD3": "horticulture"
 },
 {
   "FIELD1": "-cycle",
   "FIELD2": "qui a une ou des roues",
   "FIELD3": "tricycle"
 },
 {
   "FIELD1": "-cène",
   "FIELD2": "récent",
   "FIELD3": "éocène"
 },
 {
   "FIELD1": "-céph​ale",
   "FIELD2": "tête",
   "FIELD3": "dolichocéphale"
 },
 {
   "FIELD1": "-dactyle",
   "FIELD2": "qui a des doigts",
   "FIELD3": "ptérodactyle"
 },
 {
   "FIELD1": "-doxe",
   "FIELD2": "opinion",
   "FIELD3": "paradoxe"
 },
 {
   "FIELD1": "-drome",
   "FIELD2": "course",
   "FIELD3": "hippodrome"
 },
 {
   "FIELD1": "-ectomie",
   "FIELD2": "ablation",
   "FIELD3": "vasectomie"
 },
 {
   "FIELD1": "-ement",
   "FIELD2": "action ou son résultat",
   "FIELD3": "logement,\nhabillement,\nbâtiment​"
 },
 {
   "FIELD1": "-er, -ier",
   "FIELD2": "caractère",
   "FIELD3": "passager, viager, printanier"
 },
 {
   "FIELD1": "-er, -ier, -ière",
   "FIELD2": "agent, réceptacle, arbre",
   "FIELD3": "herbier, archer, poirier"
 },
 {
   "FIELD1": "-erie, -ie",
   "FIELD2": "qualité, action, lieu",
   "FIELD3": "fourberie, folie, causerie, brasserie"
 },
 {
   "FIELD1": "-esque",
   "FIELD2": "qui a rapport à",
   "FIELD3": "livresque"
 },
 {
   "FIELD1": "-esse",
   "FIELD2": "qualité",
   "FIELD3": "finesse"
 },
 {
   "FIELD1": "-fier",
   "FIELD2": "idée de provoquer un phénomène",
   "FIELD3": "fortifier"
 },
 {
   "FIELD1": "-fique",
   "FIELD2": "qui produit",
   "FIELD3": "frigorifique, soporifique"
 },
 {
   "FIELD1": "-forme",
   "FIELD2": "qui a la forme de",
   "FIELD3": "cunéiforme, filiforme"
 },
 {
   "FIELD1": "-fuge",
   "FIELD2": "qui fuit ou fait fuir",
   "FIELD3": "transfuge, vermifuge, centrifuge"
 },
 {
   "FIELD1": "-fère",
   "FIELD2": "qui porte",
   "FIELD3": "mimmifère, somnifère"
 },
 {
   "FIELD1": "-game",
   "FIELD2": "qui engendre",
   "FIELD3": "cryptogame"
 },
 {
   "FIELD1": "-gamie",
   "FIELD2": "mariage",
   "FIELD3": "polygamie"
 },
 {
   "FIELD1": "-gone",
   "FIELD2": "angle",
   "FIELD3": "polygone"
 },
 {
   "FIELD1": "-gramme",
   "FIELD2": "un écrit",
   "FIELD3": "télégramme"
 },
 {
   "FIELD1": "-graphe",
   "FIELD2": "qui écrit",
   "FIELD3": "dactylographe"
 },
 {
   "FIELD1": "-graphie",
   "FIELD2": "art d'écrire",
   "FIELD3": "sténographie"
 },
 {
   "FIELD1": "-gène",
   "FIELD2": "qui engendre",
   "FIELD3": "hydrogène"
 },
 {
   "FIELD1": "-hydre",
   "FIELD2": "eau",
   "FIELD3": "anhydre"
 },
 {
   "FIELD1": "-ien",
   "FIELD2": "qui habite, qui s'occupe de",
   "FIELD3": "parisien, mécanicien, historien"
 },
 {
   "FIELD1": "-if",
   "FIELD2": "caractère",
   "FIELD3": "craintif, oisif"
 },
 {
   "FIELD1": "-il",
   "FIELD2": "lieu",
   "FIELD3": "chenil"
 },
 {
   "FIELD1": "-ille",
   "FIELD2": "diminutif",
   "FIELD3": "brindille, faucille"
 },
 {
   "FIELD1": "-in",
   "FIELD2": "diminutif",
   "FIELD3": "tambourin,enfantin,blondin"
 },
 {
   "FIELD1": "-â​tre",
   "FIELD2": "approximatif, péjoratif",
   "FIELD3": "noirâtre, bellâtre, marâtre"
 },
 {
   "FIELD1": "-èdre",
   "FIELD2": "face, base",
   "FIELD3": "dodécaèdre"
 },
 {
   "FIELD1": "-é",
   "FIELD2": "qui a le caractère de",
   "FIELD3": "imagé"
 },
 {
   "FIELD1": "-ée",
   "FIELD2": "contenu, qualité ou mesure",
   "FIELD3": "pelletée,\nbouchée,\ncuillèrée,\nassiettée​"
 },
 {
   "FIELD1": "-émie",
   "FIELD2": "sang",
   "FIELD3": "anémie"
 },
 {
   "FIELD1": "-​​cosm(o)",
   "FIELD2": "monde",
   "FIELD3": "microcosme"
 },
 {
   "FIELD1": "​-able,\n-i​​ble​,​​​​​\n-uble​",
   "FIELD2": "état actif ou passif",
   "FIELD3": "blâmable, éligible, soluble"
 },
 {
   "FIELD1": "​-aie,\n-eraie",
   "FIELD2": "plantation",
   "FIELD3": "chênaie,\npalmeraie,\npineraie​"
 },
 {
   "FIELD1": "​-ain,\n-aine",
   "FIELD2": "habitan de, collection",
   "FIELD3": "châtelain, riverain, douzaine"
 },
 {
   "FIELD1": "​-ance,\n-ence",
   "FIELD2": "action, résultat d'une action",
   "FIELD3": "alliance,\npuissance,\nprésidence​"
 },
 {
   "FIELD1": "​-as\n-asse",
   "FIELD2": "collection, péjoratif",
   "FIELD3": "plâtras, paperasse"
 },
 {
   "FIELD1": "​-ature,\n-ure",
   "FIELD2": "action, résultat d'une action, état, fonction, lieu, collection",
   "FIELD3": "brûlure,\nverdure,\nfilature,\nchevelure​"
 },
 {
   "FIELD1": "​-eau,\n-elle,\n-ceau,\n-ereau,\n-eteau,\n-isseau",
   "FIELD2": "diminutifs",
   "FIELD3": "lapereau,\nlouveteau,\narbrisseau​"
 },
 {
   "FIELD1": "​-et,\n-ette,\n-elet(te)",
   "FIELD2": "diminutifs",
   "FIELD3": "livret, fourchette, tratelette"
 },
 {
   "FIELD1": "​-eur,\n-euse,\n-eux",
   "FIELD2": "qualité, agent, instrument",
   "FIELD3": "grandeur,\nchercheur,\ncollectionneur,\nmitrailleuse,\nvengeur,\nrageur,\npeureux,\n​courageux"
 },
 {
   "FIELD1": "​-ien,\n-éen",
   "FIELD2": "profession, appartenance, nationalité",
   "FIELD3": "collégien​,\nguinéen,\npharmacien"
 }
];
