const entete = "Lequel est écrit correctement :";
const nbr_choix = 2;
const data = [
 {
   "FIELD1": "abattement",
   "FIELD2": "abatement",
   "FIELD3": "abatement"
 },
 {
   "FIELD1": "abréviation",
   "FIELD2": "abbréviation",
   "FIELD3": "abbreviation"
 },
 {
   "FIELD1": "abricot",
   "FIELD2": "apricot",
   "FIELD3": "apricot"
 },
 {
   "FIELD1": "académie",
   "FIELD2": "academie",
   "FIELD3": "academy"
 },
 {
   "FIELD1": "académique",
   "FIELD2": "académic",
   "FIELD3": "academic"
 },
 {
   "FIELD1": "accordéon",
   "FIELD2": "accordion",
   "FIELD3": "accordion"
 },
 {
   "FIELD1": "acide",
   "FIELD2": "acid",
   "FIELD3": "acid"
 },
 {
   "FIELD1": "acoustique",
   "FIELD2": "acoustic",
   "FIELD3": "acoustic"
 },
 {
   "FIELD1": "acrobate",
   "FIELD2": "acrobat",
   "FIELD3": "acrobat"
 },
 {
   "FIELD1": "adepte",
   "FIELD2": "adept",
   "FIELD3": "adept"
 },
 {
   "FIELD1": "adresse",
   "FIELD2": "addresse",
   "FIELD3": "address"
 },
 {
   "FIELD1": "adulte",
   "FIELD2": "adult",
   "FIELD3": "adult"
 },
 {
   "FIELD1": "affaire",
   "FIELD2": "affair",
   "FIELD3": "affair"
 },
 {
   "FIELD1": "agressif",
   "FIELD2": "aggressif",
   "FIELD3": "aggressive"
 },
 {
   "FIELD1": "agrément",
   "FIELD2": "agréement",
   "FIELD3": "agreement"
 },
 {
   "FIELD1": "alcool",
   "FIELD2": "alcohol",
   "FIELD3": "alcohol"
 },
 {
   "FIELD1": "aluminium",
   "FIELD2": "aluminum",
   "FIELD3": "aluminum"
 },
 {
   "FIELD1": "ancien",
   "FIELD2": "ancient",
   "FIELD3": "ancient"
 },
 {
   "FIELD1": "apparence",
   "FIELD2": "apparance",
   "FIELD3": "appearance"
 },
 {
   "FIELD1": "appartement",
   "FIELD2": "apartement",
   "FIELD3": "apartment"
 },
 {
   "FIELD1": "aréna",
   "FIELD2": "arena",
   "FIELD3": "arena"
 },
 {
   "FIELD1": "arlequin",
   "FIELD2": "harlequin",
   "FIELD3": "harlequin"
 },
 {
   "FIELD1": "aspirine",
   "FIELD2": "aspirin",
   "FIELD3": "aspirin"
 },
 {
   "FIELD1": "automatique",
   "FIELD2": "automatic",
   "FIELD3": "automatic"
 },
 {
   "FIELD1": "aventure",
   "FIELD2": "adventure",
   "FIELD3": "adventure"
 },
 {
   "FIELD1": "avocat",
   "FIELD2": "advocat",
   "FIELD3": "advocate"
 },
 {
   "FIELD1": "azur",
   "FIELD2": "azure",
   "FIELD3": "azure"
 },
 {
   "FIELD1": "bagage",
   "FIELD2": "baggage",
   "FIELD3": "baggage"
 },
 {
   "FIELD1": "banque",
   "FIELD2": "bank",
   "FIELD3": "bank"
 },
 {
   "FIELD1": "baril",
   "FIELD2": "barril",
   "FIELD3": "barrel"
 },
 {
   "FIELD1": "bâton",
   "FIELD2": "baton",
   "FIELD3": "baton"
 },
 {
   "FIELD1": "bazar",
   "FIELD2": "bazaar",
   "FIELD3": "bazaar"
 },
 {
   "FIELD1": "blason",
   "FIELD2": "blazon",
   "FIELD3": "blazon"
 },
 {
   "FIELD1": "bosse",
   "FIELD2": "boss",
   "FIELD3": "boss"
 },
 {
   "FIELD1": "bouledogue",
   "FIELD2": "bulldog",
   "FIELD3": "bulldog"
 },
 {
   "FIELD1": "bouton",
   "FIELD2": "boutton",
   "FIELD3": "button"
 },
 {
   "FIELD1": "bretzel",
   "FIELD2": "pretzel",
   "FIELD3": "pretzel"
 },
 {
   "FIELD1": "cabine",
   "FIELD2": "cabin",
   "FIELD3": "cabin"
 },
 {
   "FIELD1": "café",
   "FIELD2": "caffé",
   "FIELD3": "coffee"
 },
 {
   "FIELD1": "caméra",
   "FIELD2": "camera",
   "FIELD3": "camera"
 },
 {
   "FIELD1": "camomille",
   "FIELD2": "camomile",
   "FIELD3": "camomile"
 },
 {
   "FIELD1": "caractère",
   "FIELD2": "charactère",
   "FIELD3": "character"
 },
 {
   "FIELD1": "carbone",
   "FIELD2": "carbon",
   "FIELD3": "carbon"
 },
 {
   "FIELD1": "carpette",
   "FIELD2": "carpet",
   "FIELD3": "carpet"
 },
 {
   "FIELD1": "catholique",
   "FIELD2": "catholic",
   "FIELD3": "catholic"
 },
 {
   "FIELD1": "charte",
   "FIELD2": "chart",
   "FIELD3": "chart"
 },
 {
   "FIELD1": "chèque",
   "FIELD2": "check",
   "FIELD3": "cheque, check"
 },
 {
   "FIELD1": "choc",
   "FIELD2": "shock",
   "FIELD3": "shock"
 },
 {
   "FIELD1": "choquant",
   "FIELD2": "shockant",
   "FIELD3": "shocking"
 },
 {
   "FIELD1": "cigare",
   "FIELD2": "cigar",
   "FIELD3": "cigar"
 },
 {
   "FIELD1": "collège",
   "FIELD2": "college",
   "FIELD3": "college"
 },
 {
   "FIELD1": "comique",
   "FIELD2": "comic",
   "FIELD3": "comic"
 },
 {
   "FIELD1": "commande",
   "FIELD2": "command",
   "FIELD3": "command"
 },
 {
   "FIELD1": "conférence",
   "FIELD2": "conference",
   "FIELD3": "conference"
 },
 {
   "FIELD1": "confort",
   "FIELD2": "comfort",
   "FIELD3": "comfort"
 },
 {
   "FIELD1": "confortable",
   "FIELD2": "comfortable",
   "FIELD3": "comfortable"
 },
 {
   "FIELD1": "connexion",
   "FIELD2": "connection",
   "FIELD3": "connection"
 },
 {
   "FIELD1": "consistance",
   "FIELD2": "consistence",
   "FIELD3": "consistence"
 },
 {
   "FIELD1": "contrôle",
   "FIELD2": "controle",
   "FIELD3": "control"
 },
 {
   "FIELD1": "correspondance",
   "FIELD2": "correspondence",
   "FIELD3": "correspondence"
 },
 {
   "FIELD1": "coton",
   "FIELD2": "cotton",
   "FIELD3": "cotton"
 },
 {
   "FIELD1": "crâne",
   "FIELD2": "crane",
   "FIELD3": "crane"
 },
 {
   "FIELD1": "crier",
   "FIELD2": "cryer",
   "FIELD3": "to cry"
 },
 {
   "FIELD1": "culte",
   "FIELD2": "cult",
   "FIELD3": "cult"
 },
 {
   "FIELD1": "danse",
   "FIELD2": "dance",
   "FIELD3": "dance"
 },
 {
   "FIELD1": "déception",
   "FIELD2": "deception",
   "FIELD3": "deception"
 },
 {
   "FIELD1": "défense",
   "FIELD2": "défence",
   "FIELD3": "defence"
 },
 {
   "FIELD1": "degré",
   "FIELD2": "degree",
   "FIELD3": "degree"
 },
 {
   "FIELD1": "dépendance",
   "FIELD2": "dépendence",
   "FIELD3": "dependence"
 },
 {
   "FIELD1": "dépôt",
   "FIELD2": "depot",
   "FIELD3": "depot"
 },
 {
   "FIELD1": "désagrément",
   "FIELD2": "désagréement",
   "FIELD3": "disagreement"
 },
 {
   "FIELD1": "développement",
   "FIELD2": "dévelopement",
   "FIELD3": "development"
 },
 {
   "FIELD1": "dîner",
   "FIELD2": "dinner",
   "FIELD3": "dinner"
 },
 {
   "FIELD1": "disque",
   "FIELD2": "disc",
   "FIELD3": "disc"
 },
 {
   "FIELD1": "disquette",
   "FIELD2": "diskette",
   "FIELD3": "diskette"
 },
 {
   "FIELD1": "dommage",
   "FIELD2": "domage",
   "FIELD3": "damage"
 },
 {
   "FIELD1": "drogue",
   "FIELD2": "drog",
   "FIELD3": "drug"
 },
 {
   "FIELD1": "effet",
   "FIELD2": "effect",
   "FIELD3": "effect"
 },
 {
   "FIELD1": "embrasser",
   "FIELD2": "embracer",
   "FIELD3": "to embrace"
 },
 {
   "FIELD1": "enveloppe",
   "FIELD2": "envelope",
   "FIELD3": "envelope"
 },
 {
   "FIELD1": "esquimau",
   "FIELD2": "eskimo",
   "FIELD3": "Eskimo"
 },
 {
   "FIELD1": "essai",
   "FIELD2": "essay",
   "FIELD3": "essay"
 },
 {
   "FIELD1": "évidence",
   "FIELD2": "evidence",
   "FIELD3": "evidence"
 },
 {
   "FIELD1": "exemple",
   "FIELD2": "example",
   "FIELD3": "example"
 },
 {
   "FIELD1": "exercice",
   "FIELD2": "exercise",
   "FIELD3": "exercise"
 },
 {
   "FIELD1": "fabrique",
   "FIELD2": "fabric",
   "FIELD3": "fabric"
 },
 {
   "FIELD1": "faute",
   "FIELD2": "faulte",
   "FIELD3": "fault"
 },
 {
   "FIELD1": "finalement",
   "FIELD2": "finallement",
   "FIELD3": "finally"
 },
 {
   "FIELD1": "flamme",
   "FIELD2": "flame",
   "FIELD3": "flame"
 },
 {
   "FIELD1": "flanelle",
   "FIELD2": "flannel",
   "FIELD3": "flannel"
 },
 {
   "FIELD1": "fonction",
   "FIELD2": "function",
   "FIELD3": "function"
 },
 {
   "FIELD1": "futur",
   "FIELD2": "future",
   "FIELD3": "future"
 },
 {
   "FIELD1": "galant",
   "FIELD2": "gallant",
   "FIELD3": "gallant"
 },
 {
   "FIELD1": "galerie",
   "FIELD2": "gallerie",
   "FIELD3": "gallery"
 },
 {
   "FIELD1": "galop",
   "FIELD2": "gallop",
   "FIELD3": "gallop"
 },
 {
   "FIELD1": "garde",
   "FIELD2": "guarde",
   "FIELD3": "guard"
 },
 {
   "FIELD1": "gardien",
   "FIELD2": "guardien",
   "FIELD3": "guardian"
 },
 {
   "FIELD1": "germe",
   "FIELD2": "germ",
   "FIELD3": "germ"
 },
 {
   "FIELD1": "girafe",
   "FIELD2": "giraffe",
   "FIELD3": "giraffe"
 },
 {
   "FIELD1": "grappe",
   "FIELD2": "grape",
   "FIELD3": "grape"
 },
 {
   "FIELD1": "gril",
   "FIELD2": "grill",
   "FIELD3": "grill"
 },
 {
   "FIELD1": "habileté",
   "FIELD2": "abileté",
   "FIELD3": "ability"
 },
 {
   "FIELD1": "hagard",
   "FIELD2": "haggard",
   "FIELD3": "haggard"
 },
 {
   "FIELD1": "hasard",
   "FIELD2": "hazard",
   "FIELD3": "hazard"
 },
 {
   "FIELD1": "héroïque",
   "FIELD2": "héroic",
   "FIELD3": "heroic"
 },
 {
   "FIELD1": "héros",
   "FIELD2": "héro",
   "FIELD3": "hero"
 },
 {
   "FIELD1": "hourra",
   "FIELD2": "hurrah",
   "FIELD3": "hurrah"
 },
 {
   "FIELD1": "inconvénient",
   "FIELD2": "inconvenient",
   "FIELD3": "inconvenient"
 },
 {
   "FIELD1": "initialement",
   "FIELD2": "initiallement",
   "FIELD3": "initially"
 },
 {
   "FIELD1": "initialiser",
   "FIELD2": "initializer",
   "FIELD3": "to initialize"
 },
 {
   "FIELD1": "invalide",
   "FIELD2": "invalid",
   "FIELD3": "invalid"
 },
 {
   "FIELD1": "juste",
   "FIELD2": "just",
   "FIELD3": "just"
 },
 {
   "FIELD1": "langage",
   "FIELD2": "language",
   "FIELD3": "language"
 },
 {
   "FIELD1": "lentille",
   "FIELD2": "lentile",
   "FIELD3": "lentil"
 },
 {
   "FIELD1": "licence",
   "FIELD2": "license",
   "FIELD3": "license"
 },
 {
   "FIELD1": "linoléum",
   "FIELD2": "linoleum",
   "FIELD3": "linoleum"
 },
 {
   "FIELD1": "liquide",
   "FIELD2": "liquid",
   "FIELD3": "liquid"
 },
 {
   "FIELD1": "littérature",
   "FIELD2": "litérature",
   "FIELD3": "literature"
 },
 {
   "FIELD1": "lunatique",
   "FIELD2": "lunatic",
   "FIELD3": "lunatic"
 },
 {
   "FIELD1": "magique",
   "FIELD2": "magic",
   "FIELD3": "magic"
 },
 {
   "FIELD1": "mâle",
   "FIELD2": "male",
   "FIELD3": "male"
 },
 {
   "FIELD1": "maniaque",
   "FIELD2": "maniac",
   "FIELD3": "maniac"
 },
 {
   "FIELD1": "manucure",
   "FIELD2": "manicure",
   "FIELD3": "manicure"
 },
 {
   "FIELD1": "mariage",
   "FIELD2": "marriage",
   "FIELD3": "marriage"
 },
 {
   "FIELD1": "médecine",
   "FIELD2": "medecine",
   "FIELD3": "medicine"
 },
 {
   "FIELD1": "mitaine",
   "FIELD2": "mittaine",
   "FIELD3": "mitt, mitten"
 },
 {
   "FIELD1": "mille",
   "FIELD2": "mile",
   "FIELD3": "mile"
 },
 {
   "FIELD1": "mocassin",
   "FIELD2": "moccassin",
   "FIELD3": "moccasin"
 },
 {
   "FIELD1": "moderne",
   "FIELD2": "modern",
   "FIELD3": "modern"
 },
 {
   "FIELD1": "négociable",
   "FIELD2": "négotiable",
   "FIELD3": "negotiable"
 },
 {
   "FIELD1": "objet",
   "FIELD2": "object",
   "FIELD3": "object"
 },
 {
   "FIELD1": "organisation",
   "FIELD2": "organization",
   "FIELD3": "organization"
 },
 {
   "FIELD1": "paquet",
   "FIELD2": "packet",
   "FIELD3": "packet"
 },
 {
   "FIELD1": "peroxyde",
   "FIELD2": "peroxide",
   "FIELD3": "peroxide"
 },
 {
   "FIELD1": "personnalité",
   "FIELD2": "personalité",
   "FIELD3": "personality"
 },
 {
   "FIELD1": "pique-nique",
   "FIELD2": "pic-nic",
   "FIELD3": "picnic"
 },
 {
   "FIELD1": "poste",
   "FIELD2": "post",
   "FIELD3": "post"
 },
 {
   "FIELD1": "préjudice",
   "FIELD2": "prejudice",
   "FIELD3": "prejudice"
 },
 {
   "FIELD1": "professionnel",
   "FIELD2": "professionel",
   "FIELD3": "professional"
 },
 {
   "FIELD1": "projet",
   "FIELD2": "project",
   "FIELD3": "project"
 },
 {
   "FIELD1": "pyjama",
   "FIELD2": "pyjamas",
   "FIELD3": "pyjamas"
 },
 {
   "FIELD1": "raisonnable",
   "FIELD2": "raisonable",
   "FIELD3": "reasonable"
 },
 {
   "FIELD1": "rasoir",
   "FIELD2": "razoir",
   "FIELD3": "razor"
 },
 {
   "FIELD1": "réalisation",
   "FIELD2": "réalization",
   "FIELD3": "realization"
 },
 {
   "FIELD1": "récipient",
   "FIELD2": "recipient",
   "FIELD3": "recipient"
 },
 {
   "FIELD1": "recommandation",
   "FIELD2": "recommendation",
   "FIELD3": "recommendation"
 },
 {
   "FIELD1": "ressemblance",
   "FIELD2": "resemblance",
   "FIELD3": "resemblance"
 },
 {
   "FIELD1": "réunion",
   "FIELD2": "reunion",
   "FIELD3": "reunion"
 },
 {
   "FIELD1": "rincer",
   "FIELD2": "rinser",
   "FIELD3": "rinse, to"
 },
 {
   "FIELD1": "rythme",
   "FIELD2": "rhythm",
   "FIELD3": "rhythm"
 },
 {
   "FIELD1": "salade",
   "FIELD2": "salad",
   "FIELD3": "salad"
 },
 {
   "FIELD1": "scène",
   "FIELD2": "scene",
   "FIELD3": "scene"
 },
 {
   "FIELD1": "sirop",
   "FIELD2": "syrop",
   "FIELD3": "syrup"
 },
 {
   "FIELD1": "statu quo",
   "FIELD2": "status quo",
   "FIELD3": "status quo"
 },
 {
   "FIELD1": "symbolique",
   "FIELD2": "symbolic",
   "FIELD3": "symbolic"
 },
 {
   "FIELD1": "tabou",
   "FIELD2": "taboo",
   "FIELD3": "taboo"
 },
 {
   "FIELD1": "taverne",
   "FIELD2": "tavern",
   "FIELD3": "tavern"
 },
 {
   "FIELD1": "taxe",
   "FIELD2": "tax",
   "FIELD3": "tax"
 },
 {
   "FIELD1": "théâtre",
   "FIELD2": "théatre",
   "FIELD3": "theatre"
 },
 {
   "FIELD1": "tissu",
   "FIELD2": "tissue",
   "FIELD3": "tissue"
 },
 {
   "FIELD1": "toilette",
   "FIELD2": "toilet",
   "FIELD3": "toilet"
 },
 {
   "FIELD1": "trafic",
   "FIELD2": "traffic",
   "FIELD3": "traffic"
 },
 {
   "FIELD1": "transfert",
   "FIELD2": "transfer",
   "FIELD3": "transfer"
 },
 {
   "FIELD1": "triomphe",
   "FIELD2": "triumphe",
   "FIELD3": "triumph"
 },
 {
   "FIELD1": "velours",
   "FIELD2": "velour",
   "FIELD3": "velour(s)"
 },
 {
   "FIELD1": "vertu",
   "FIELD2": "vertue",
   "FIELD3": "virtue"
 },
 {
   "FIELD1": "vilain",
   "FIELD2": "villain",
   "FIELD3": "villain"
 },
 {
   "FIELD1": "vipère",
   "FIELD2": "viper",
   "FIELD3": "viper"
 },
 {
   "FIELD1": "viril",
   "FIELD2": "virile",
   "FIELD3": "virile"
 },
 {
   "FIELD1": "volatil",
   "FIELD2": "volatile",
   "FIELD3": "volatile"
 },
 {
   "FIELD1": "zéro",
   "FIELD2": "zero",
   "FIELD3": "zero"
 }
];