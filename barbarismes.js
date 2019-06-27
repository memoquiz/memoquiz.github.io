const entete = "Lequel de ces usages est un barbarisme :";
const nbr_choix = 6;
data = [
 {
   "FIELD2": "abattement",
   "FIELD1": "abatement",
   "FIELD3": "abatement"
 },
 {
   "FIELD2": "abréviation",
   "FIELD1": "abbréviation",
   "FIELD3": "abbreviation"
 },
 {
   "FIELD2": "abricot",
   "FIELD1": "apricot",
   "FIELD3": "apricot"
 },
 {
   "FIELD2": "académie",
   "FIELD1": "academie",
   "FIELD3": "academy"
 },
 {
   "FIELD2": "académique",
   "FIELD1": "académic",
   "FIELD3": "academic"
 },
 {
   "FIELD2": "accordéon",
   "FIELD1": "accordion",
   "FIELD3": "accordion"
 },
 {
   "FIELD2": "acide",
   "FIELD1": "acid",
   "FIELD3": "acid"
 },
 {
   "FIELD2": "acoustique",
   "FIELD1": "acoustic",
   "FIELD3": "acoustic"
 },
 {
   "FIELD2": "acrobate",
   "FIELD1": "acrobat",
   "FIELD3": "acrobat"
 },
 {
   "FIELD2": "adepte",
   "FIELD1": "adept",
   "FIELD3": "adept"
 },
 {
   "FIELD2": "adresse",
   "FIELD1": "addresse",
   "FIELD3": "address"
 },
 {
   "FIELD2": "adulte",
   "FIELD1": "adult",
   "FIELD3": "adult"
 },
 {
   "FIELD2": "affaire",
   "FIELD1": "affair",
   "FIELD3": "affair"
 },
 {
   "FIELD2": "agressif",
   "FIELD1": "aggressif",
   "FIELD3": "aggressive"
 },
 {
   "FIELD2": "agrément",
   "FIELD1": "agréement",
   "FIELD3": "agreement"
 },
 {
   "FIELD2": "alcool",
   "FIELD1": "alcohol",
   "FIELD3": "alcohol"
 },
 {
   "FIELD2": "aluminium",
   "FIELD1": "aluminum",
   "FIELD3": "aluminum"
 },
 {
   "FIELD2": "ancien",
   "FIELD1": "ancient",
   "FIELD3": "ancient"
 },
 {
   "FIELD2": "apparence",
   "FIELD1": "apparance",
   "FIELD3": "appearance"
 },
 {
   "FIELD2": "appartement",
   "FIELD1": "apartement",
   "FIELD3": "apartment"
 },
 {
   "FIELD2": "aréna",
   "FIELD1": "arena",
   "FIELD3": "arena"
 },
 {
   "FIELD2": "arlequin",
   "FIELD1": "harlequin",
   "FIELD3": "harlequin"
 },
 {
   "FIELD2": "aspirine",
   "FIELD1": "aspirin",
   "FIELD3": "aspirin"
 },
 {
   "FIELD2": "automatique",
   "FIELD1": "automatic",
   "FIELD3": "automatic"
 },
 {
   "FIELD2": "aventure",
   "FIELD1": "adventure",
   "FIELD3": "adventure"
 },
 {
   "FIELD2": "avocat",
   "FIELD1": "advocat",
   "FIELD3": "advocate"
 },
 {
   "FIELD2": "azur",
   "FIELD1": "azure",
   "FIELD3": "azure"
 },
 {
   "FIELD2": "bagage",
   "FIELD1": "baggage",
   "FIELD3": "baggage"
 },
 {
   "FIELD2": "banque",
   "FIELD1": "bank",
   "FIELD3": "bank"
 },
 {
   "FIELD2": "baril",
   "FIELD1": "barril",
   "FIELD3": "barrel"
 },
 {
   "FIELD2": "bâton",
   "FIELD1": "baton",
   "FIELD3": "baton"
 },
 {
   "FIELD2": "bazar",
   "FIELD1": "bazaar",
   "FIELD3": "bazaar"
 },
 {
   "FIELD2": "blason",
   "FIELD1": "blazon",
   "FIELD3": "blazon"
 },
 {
   "FIELD2": "bosse",
   "FIELD1": "boss",
   "FIELD3": "boss"
 },
 {
   "FIELD2": "bouledogue",
   "FIELD1": "bulldog",
   "FIELD3": "bulldog"
 },
 {
   "FIELD2": "bouton",
   "FIELD1": "boutton",
   "FIELD3": "button"
 },
 {
   "FIELD2": "bretzel",
   "FIELD1": "pretzel",
   "FIELD3": "pretzel"
 },
 {
   "FIELD2": "cabine",
   "FIELD1": "cabin",
   "FIELD3": "cabin"
 },
 {
   "FIELD2": "café",
   "FIELD1": "caffé",
   "FIELD3": "coffee"
 },
 {
   "FIELD2": "caméra",
   "FIELD1": "camera",
   "FIELD3": "camera"
 },
 {
   "FIELD2": "camomille",
   "FIELD1": "camomile",
   "FIELD3": "camomile"
 },
 {
   "FIELD2": "caractère",
   "FIELD1": "charactère",
   "FIELD3": "character"
 },
 {
   "FIELD2": "carbone",
   "FIELD1": "carbon",
   "FIELD3": "carbon"
 },
 {
   "FIELD2": "carpette",
   "FIELD1": "carpet",
   "FIELD3": "carpet"
 },
 {
   "FIELD2": "catholique",
   "FIELD1": "catholic",
   "FIELD3": "catholic"
 },
 {
   "FIELD2": "charte",
   "FIELD1": "chart",
   "FIELD3": "chart"
 },
 {
   "FIELD2": "chèque",
   "FIELD1": "check",
   "FIELD3": "cheque, check"
 },
 {
   "FIELD2": "choc",
   "FIELD1": "shock",
   "FIELD3": "shock"
 },
 {
   "FIELD2": "choquant",
   "FIELD1": "shockant",
   "FIELD3": "shocking"
 },
 {
   "FIELD2": "cigare",
   "FIELD1": "cigar",
   "FIELD3": "cigar"
 },
 {
   "FIELD2": "collège",
   "FIELD1": "college",
   "FIELD3": "college"
 },
 {
   "FIELD2": "comique",
   "FIELD1": "comic",
   "FIELD3": "comic"
 },
 {
   "FIELD2": "commande",
   "FIELD1": "command",
   "FIELD3": "command"
 },
 {
   "FIELD2": "conférence",
   "FIELD1": "conference",
   "FIELD3": "conference"
 },
 {
   "FIELD2": "confort",
   "FIELD1": "comfort",
   "FIELD3": "comfort"
 },
 {
   "FIELD2": "confortable",
   "FIELD1": "comfortable",
   "FIELD3": "comfortable"
 },
 {
   "FIELD2": "connexion",
   "FIELD1": "connection",
   "FIELD3": "connection"
 },
 {
   "FIELD2": "consistance",
   "FIELD1": "consistence",
   "FIELD3": "consistence"
 },
 {
   "FIELD2": "contrôle",
   "FIELD1": "controle",
   "FIELD3": "control"
 },
 {
   "FIELD2": "correspondance",
   "FIELD1": "correspondence",
   "FIELD3": "correspondence"
 },
 {
   "FIELD2": "coton",
   "FIELD1": "cotton",
   "FIELD3": "cotton"
 },
 {
   "FIELD2": "crâne",
   "FIELD1": "crane",
   "FIELD3": "crane"
 },
 {
   "FIELD2": "crier",
   "FIELD1": "cryer",
   "FIELD3": "to cry"
 },
 {
   "FIELD2": "culte",
   "FIELD1": "cult",
   "FIELD3": "cult"
 },
 {
   "FIELD2": "danse",
   "FIELD1": "dance",
   "FIELD3": "dance"
 },
 {
   "FIELD2": "déception",
   "FIELD1": "deception",
   "FIELD3": "deception"
 },
 {
   "FIELD2": "défense",
   "FIELD1": "défence",
   "FIELD3": "defence"
 },
 {
   "FIELD2": "degré",
   "FIELD1": "degree",
   "FIELD3": "degree"
 },
 {
   "FIELD2": "dépendance",
   "FIELD1": "dépendence",
   "FIELD3": "dependence"
 },
 {
   "FIELD2": "dépôt",
   "FIELD1": "depot",
   "FIELD3": "depot"
 },
 {
   "FIELD2": "désagrément",
   "FIELD1": "désagréement",
   "FIELD3": "disagreement"
 },
 {
   "FIELD2": "développement",
   "FIELD1": "dévelopement",
   "FIELD3": "development"
 },
 {
   "FIELD2": "dîner",
   "FIELD1": "dinner",
   "FIELD3": "dinner"
 },
 {
   "FIELD2": "disque",
   "FIELD1": "disc",
   "FIELD3": "disc"
 },
 {
   "FIELD2": "disquette",
   "FIELD1": "diskette",
   "FIELD3": "diskette"
 },
 {
   "FIELD2": "dommage",
   "FIELD1": "domage",
   "FIELD3": "damage"
 },
 {
   "FIELD2": "drogue",
   "FIELD1": "drog",
   "FIELD3": "drug"
 },
 {
   "FIELD2": "effet",
   "FIELD1": "effect",
   "FIELD3": "effect"
 },
 {
   "FIELD2": "embrasser",
   "FIELD1": "embracer",
   "FIELD3": "to embrace"
 },
 {
   "FIELD2": "enveloppe",
   "FIELD1": "envelope",
   "FIELD3": "envelope"
 },
 {
   "FIELD2": "esquimau",
   "FIELD1": "eskimo",
   "FIELD3": "Eskimo"
 },
 {
   "FIELD2": "essai",
   "FIELD1": "essay",
   "FIELD3": "essay"
 },
 {
   "FIELD2": "évidence",
   "FIELD1": "evidence",
   "FIELD3": "evidence"
 },
 {
   "FIELD2": "exemple",
   "FIELD1": "example",
   "FIELD3": "example"
 },
 {
   "FIELD2": "exercice",
   "FIELD1": "exercise",
   "FIELD3": "exercise"
 },
 {
   "FIELD2": "fabrique",
   "FIELD1": "fabric",
   "FIELD3": "fabric"
 },
 {
   "FIELD2": "faute",
   "FIELD1": "faulte",
   "FIELD3": "fault"
 },
 {
   "FIELD2": "finalement",
   "FIELD1": "finallement",
   "FIELD3": "finally"
 },
 {
   "FIELD2": "flamme",
   "FIELD1": "flame",
   "FIELD3": "flame"
 },
 {
   "FIELD2": "flanelle",
   "FIELD1": "flannel",
   "FIELD3": "flannel"
 },
 {
   "FIELD2": "fonction",
   "FIELD1": "function",
   "FIELD3": "function"
 },
 {
   "FIELD2": "futur",
   "FIELD1": "future",
   "FIELD3": "future"
 },
 {
   "FIELD2": "galant",
   "FIELD1": "gallant",
   "FIELD3": "gallant"
 },
 {
   "FIELD2": "galerie",
   "FIELD1": "gallerie",
   "FIELD3": "gallery"
 },
 {
   "FIELD2": "galop",
   "FIELD1": "gallop",
   "FIELD3": "gallop"
 },
 {
   "FIELD2": "garde",
   "FIELD1": "guarde",
   "FIELD3": "guard"
 },
 {
   "FIELD2": "gardien",
   "FIELD1": "guardien",
   "FIELD3": "guardian"
 },
 {
   "FIELD2": "germe",
   "FIELD1": "germ",
   "FIELD3": "germ"
 },
 {
   "FIELD2": "girafe",
   "FIELD1": "giraffe",
   "FIELD3": "giraffe"
 },
 {
   "FIELD2": "grappe",
   "FIELD1": "grape",
   "FIELD3": "grape"
 },
 {
   "FIELD2": "gril",
   "FIELD1": "grill",
   "FIELD3": "grill"
 },
 {
   "FIELD2": "habileté",
   "FIELD1": "abileté",
   "FIELD3": "ability"
 },
 {
   "FIELD2": "hagard",
   "FIELD1": "haggard",
   "FIELD3": "haggard"
 },
 {
   "FIELD2": "hasard",
   "FIELD1": "hazard",
   "FIELD3": "hazard"
 },
 {
   "FIELD2": "héroïque",
   "FIELD1": "héroic",
   "FIELD3": "heroic"
 },
 {
   "FIELD2": "héros",
   "FIELD1": "héro",
   "FIELD3": "hero"
 },
 {
   "FIELD2": "hourra",
   "FIELD1": "hurrah",
   "FIELD3": "hurrah"
 },
 {
   "FIELD2": "inconvénient",
   "FIELD1": "inconvenient",
   "FIELD3": "inconvenient"
 },
 {
   "FIELD2": "initialement",
   "FIELD1": "initiallement",
   "FIELD3": "initially"
 },
 {
   "FIELD2": "initialiser",
   "FIELD1": "initializer",
   "FIELD3": "to initialize"
 },
 {
   "FIELD2": "invalide",
   "FIELD1": "invalid",
   "FIELD3": "invalid"
 },
 {
   "FIELD2": "juste",
   "FIELD1": "just",
   "FIELD3": "just"
 },
 {
   "FIELD2": "langage",
   "FIELD1": "language",
   "FIELD3": "language"
 },
 {
   "FIELD2": "lentille",
   "FIELD1": "lentile",
   "FIELD3": "lentil"
 },
 {
   "FIELD2": "licence",
   "FIELD1": "license",
   "FIELD3": "license"
 },
 {
   "FIELD2": "linoléum",
   "FIELD1": "linoleum",
   "FIELD3": "linoleum"
 },
 {
   "FIELD2": "liquide",
   "FIELD1": "liquid",
   "FIELD3": "liquid"
 },
 {
   "FIELD2": "littérature",
   "FIELD1": "litérature",
   "FIELD3": "literature"
 },
 {
   "FIELD2": "lunatique",
   "FIELD1": "lunatic",
   "FIELD3": "lunatic"
 },
 {
   "FIELD2": "magique",
   "FIELD1": "magic",
   "FIELD3": "magic"
 },
 {
   "FIELD2": "mâle",
   "FIELD1": "male",
   "FIELD3": "male"
 },
 {
   "FIELD2": "maniaque",
   "FIELD1": "maniac",
   "FIELD3": "maniac"
 },
 {
   "FIELD2": "manucure",
   "FIELD1": "manicure",
   "FIELD3": "manicure"
 },
 {
   "FIELD2": "mariage",
   "FIELD1": "marriage",
   "FIELD3": "marriage"
 },
 {
   "FIELD2": "médecine",
   "FIELD1": "medecine",
   "FIELD3": "medicine"
 },
 {
   "FIELD2": "mitaine",
   "FIELD1": "mittaine",
   "FIELD3": "mitt, mitten"
 },
 {
   "FIELD2": "mille",
   "FIELD1": "mile",
   "FIELD3": "mile"
 },
 {
   "FIELD2": "mocassin",
   "FIELD1": "moccassin",
   "FIELD3": "moccasin"
 },
 {
   "FIELD2": "moderne",
   "FIELD1": "modern",
   "FIELD3": "modern"
 },
 {
   "FIELD2": "négociable",
   "FIELD1": "négotiable",
   "FIELD3": "negotiable"
 },
 {
   "FIELD2": "objet",
   "FIELD1": "object",
   "FIELD3": "object"
 },
 {
   "FIELD2": "organisation",
   "FIELD1": "organization",
   "FIELD3": "organization"
 },
 {
   "FIELD2": "paquet",
   "FIELD1": "packet",
   "FIELD3": "packet"
 },
 {
   "FIELD2": "peroxyde",
   "FIELD1": "peroxide",
   "FIELD3": "peroxide"
 },
 {
   "FIELD2": "personnalité",
   "FIELD1": "personalité",
   "FIELD3": "personality"
 },
 {
   "FIELD2": "pique-nique",
   "FIELD1": "pic-nic",
   "FIELD3": "picnic"
 },
 {
   "FIELD2": "poste",
   "FIELD1": "post",
   "FIELD3": "post"
 },
 {
   "FIELD2": "préjudice",
   "FIELD1": "prejudice",
   "FIELD3": "prejudice"
 },
 {
   "FIELD2": "professionnel",
   "FIELD1": "professionel",
   "FIELD3": "professional"
 },
 {
   "FIELD2": "projet",
   "FIELD1": "project",
   "FIELD3": "project"
 },
 {
   "FIELD2": "pyjama",
   "FIELD1": "pyjamas",
   "FIELD3": "pyjamas"
 },
 {
   "FIELD2": "raisonnable",
   "FIELD1": "raisonable",
   "FIELD3": "reasonable"
 },
 {
   "FIELD2": "rasoir",
   "FIELD1": "razoir",
   "FIELD3": "razor"
 },
 {
   "FIELD2": "réalisation",
   "FIELD1": "réalization",
   "FIELD3": "realization"
 },
 {
   "FIELD2": "récipient",
   "FIELD1": "recipient",
   "FIELD3": "recipient"
 },
 {
   "FIELD2": "recommandation",
   "FIELD1": "recommendation",
   "FIELD3": "recommendation"
 },
 {
   "FIELD2": "ressemblance",
   "FIELD1": "resemblance",
   "FIELD3": "resemblance"
 },
 {
   "FIELD2": "réunion",
   "FIELD1": "reunion",
   "FIELD3": "reunion"
 },
 {
   "FIELD2": "rincer",
   "FIELD1": "rinser",
   "FIELD3": "rinse, to"
 },
 {
   "FIELD2": "rythme",
   "FIELD1": "rhythm",
   "FIELD3": "rhythm"
 },
 {
   "FIELD2": "salade",
   "FIELD1": "salad",
   "FIELD3": "salad"
 },
 {
   "FIELD2": "scène",
   "FIELD1": "scene",
   "FIELD3": "scene"
 },
 {
   "FIELD2": "sirop",
   "FIELD1": "syrop",
   "FIELD3": "syrup"
 },
 {
   "FIELD2": "statu quo",
   "FIELD1": "status quo",
   "FIELD3": "status quo"
 },
 {
   "FIELD2": "symbolique",
   "FIELD1": "symbolic",
   "FIELD3": "symbolic"
 },
 {
   "FIELD2": "tabou",
   "FIELD1": "taboo",
   "FIELD3": "taboo"
 },
 {
   "FIELD2": "taverne",
   "FIELD1": "tavern",
   "FIELD3": "tavern"
 },
 {
   "FIELD2": "taxe",
   "FIELD1": "tax",
   "FIELD3": "tax"
 },
 {
   "FIELD2": "théâtre",
   "FIELD1": "théatre",
   "FIELD3": "theatre"
 },
 {
   "FIELD2": "tissu",
   "FIELD1": "tissue",
   "FIELD3": "tissue"
 },
 {
   "FIELD2": "toilette",
   "FIELD1": "toilet",
   "FIELD3": "toilet"
 },
 {
   "FIELD2": "trafic",
   "FIELD1": "traffic",
   "FIELD3": "traffic"
 },
 {
   "FIELD2": "transfert",
   "FIELD1": "transfer",
   "FIELD3": "transfer"
 },
 {
   "FIELD2": "triomphe",
   "FIELD1": "triumphe",
   "FIELD3": "triumph"
 },
 {
   "FIELD2": "velours",
   "FIELD1": "velour",
   "FIELD3": "velour(s)"
 },
 {
   "FIELD2": "vertu",
   "FIELD1": "vertue",
   "FIELD3": "virtue"
 },
 {
   "FIELD2": "vilain",
   "FIELD1": "villain",
   "FIELD3": "villain"
 },
 {
   "FIELD2": "vipère",
   "FIELD1": "viper",
   "FIELD3": "viper"
 },
 {
   "FIELD2": "viril",
   "FIELD1": "virile",
   "FIELD3": "virile"
 },
 {
   "FIELD2": "volatil",
   "FIELD1": "volatile",
   "FIELD3": "volatile"
 },
 {
   "FIELD2": "zéro",
   "FIELD1": "zero",
   "FIELD3": "zero"
 }
];
