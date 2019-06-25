const entete = "Quelle est la sens de :";
const nbr_choix = 6;
const data = [
 {
   "FIELD1": "acantho-",
   "FIELD2": "épine",
   "FIELD3": "acanthacées, acanthe"
 },
 {
   "FIELD1": "acou-",
   "FIELD2": "entendre",
   "FIELD3": "acoustique, acouphène"
 },
 {
   "FIELD1": "acro-, acrie-",
   "FIELD2": "extrémité",
   "FIELD3": "acrobate, acrostiche"
 },
 {
   "FIELD1": "actino-",
   "FIELD2": "rayon",
   "FIELD3": "actinique, actinomètre"
 },
 {
   "FIELD1": "ad-",
   "FIELD2": "vers, ajouté à ",
   "FIELD3": "administré"
 },
 {
   "FIELD1": "adén-",
   "FIELD2": "glande, ganglion lymphatique",
   "FIELD3": "adénome, adénoïde"
 },
 {
   "FIELD1": "aéro-",
   "FIELD2": "air",
   "FIELD3": "aéronaute, aéronef, aérophagie, aérostat"
 },
 {
   "FIELD1": "agro-",
   "FIELD2": "champ",
   "FIELD3": "agronome"
 },
 {
   "FIELD1": "all-, allo-",
   "FIELD2": "étranger",
   "FIELD3": "allopathie, allophone"
 },
 {
   "FIELD1": "ambi-",
   "FIELD2": "deux, autour, doublement",
   "FIELD3": "ambidextre, ambivalent"
 },
 {
   "FIELD1": "amphi-",
   "FIELD2": "autour, doublement",
   "FIELD3": "amphithéâtre, amphibie"
 },
 {
   "FIELD1": "an-",
   "FIELD2": "sans",
   "FIELD3": "analphabète, anarchie"
 },
 {
   "FIELD1": "ana-",
   "FIELD2": "de bas en haut, à  l'inverse",
   "FIELD3": "anagramme, anachronisme, anastrophe"
 },
 {
   "FIELD1": "andro-",
   "FIELD2": "homme (mâle)",
   "FIELD3": "androgyne"
 },
 {
   "FIELD1": "anémo-",
   "FIELD2": "vent",
   "FIELD3": "anémomètre"
 },
 {
   "FIELD1": "angio-",
   "FIELD2": "vaisseau",
   "FIELD3": "angioplastie"
 },
 {
   "FIELD1": "anté-",
   "FIELD2": "avant, précédent",
   "FIELD3": "antérieur, antédiluvien"
 },
 {
   "FIELD1": "anth(o)-",
   "FIELD2": "fleur, meilleur",
   "FIELD3": "anthémis, anthologie"
 },
 {
   "FIELD1": "anthrac-",
   "FIELD2": "charbon",
   "FIELD3": "anthracite"
 },
 {
   "FIELD1": "anthropo-",
   "FIELD2": "homme (espèce)",
   "FIELD3": "anthropologie"
 },
 {
   "FIELD1": "anti-",
   "FIELD2": "contre",
   "FIELD3": "antipathie, antireligieux"
 },
 {
   "FIELD1": "apo-",
   "FIELD2": "éloignement",
   "FIELD3": "apogée"
 },
 {
   "FIELD1": "apo-",
   "FIELD2": "hors de, à  partir de, loin de",
   "FIELD3": "apostasie, apostrophe, apothéose"
 },
 {
   "FIELD1": "arch-",
   "FIELD2": "qui commande, au-dessus",
   "FIELD3": "archevêque"
 },
 {
   "FIELD1": "archéo-",
   "FIELD2": "ancien",
   "FIELD3": "archéologie"
 },
 {
   "FIELD1": "archi-",
   "FIELD2": "supériorité, au plus haut degré",
   "FIELD3": "archiprêtre, archimillionnaire"
 },
 {
   "FIELD1": "arithm(o)-",
   "FIELD2": "nombre",
   "FIELD3": "arithmétique"
 },
 {
   "FIELD1": "artério-",
   "FIELD2": "artère",
   "FIELD3": "artériosclérose"
 },
 {
   "FIELD1": "arthr(o)-",
   "FIELD2": "articulation",
   "FIELD3": "arthrite, arthropodes"
 },
 {
   "FIELD1": "astér(o)-, astr(o)-",
   "FIELD2": "astre, étoile",
   "FIELD3": "astérisque, astronaute"
 },
 {
   "FIELD1": "audi-",
   "FIELD2": "audition",
   "FIELD3": "audimat"
 },
 {
   "FIELD1": "auto-",
   "FIELD2": "de soi-même",
   "FIELD3": "autobiographie, autodidacte, automobile"
 },
 {
   "FIELD1": "bactéri(o)-",
   "FIELD2": "bâton",
   "FIELD3": "bactéricide, bactériologie"
 },
 {
   "FIELD1": "bar-, baro",
   "FIELD2": "pression",
   "FIELD3": "baromètre"
 },
 {
   "FIELD1": "béné-, bien-",
   "FIELD2": "bien",
   "FIELD3": "bienfaiteur, bénéfique"
 },
 {
   "FIELD1": "bi-, bis-, bes-",
   "FIELD2": "deux fois",
   "FIELD3": "bipède"
 },
 {
   "FIELD1": "biblio-",
   "FIELD2": "livre",
   "FIELD3": "bibliographie, bibliothèque"
 },
 {
   "FIELD1": "bio-",
   "FIELD2": "vivant",
   "FIELD3": "biographie, biologie"
 },
 {
   "FIELD1": "blasto-",
   "FIELD2": "germe",
   "FIELD3": "blastoderme"
 },
 {
   "FIELD1": "bléphar(o)-",
   "FIELD2": "paupière",
   "FIELD3": "blépharite"
 },
 {
   "FIELD1": "brachy-",
   "FIELD2": "court",
   "FIELD3": "brachycéphale"
 },
 {
   "FIELD1": "brady-",
   "FIELD2": "lent",
   "FIELD3": "bradycardie, bradypsychie"
 },
 {
   "FIELD1": "brom(o)-",
   "FIELD2": "puanteur",
   "FIELD3": "brome, bromure"
 },
 {
   "FIELD1": "bronch(o)-",
   "FIELD2": "gorge, bronche",
   "FIELD3": "bronche, bronchique"
 },
 {
   "FIELD1": "bryo-",
   "FIELD2": "mousse",
   "FIELD3": "bryophile"
 },
 {
   "FIELD1": "bucc-",
   "FIELD2": "bouche",
   "FIELD3": "buccal"
 },
 {
   "FIELD1": "butyr(o)-",
   "FIELD2": "beurre",
   "FIELD3": "butyrique"
 },
 {
   "FIELD1": "caco-, cach-",
   "FIELD2": "mauvais",
   "FIELD3": "cacographie, cacophonie"
 },
 {
   "FIELD1": "calc-",
   "FIELD2": "calcium",
   "FIELD3": "calcification"
 },
 {
   "FIELD1": "calli-",
   "FIELD2": "beau",
   "FIELD3": "calligraphie, callipyge"
 },
 {
   "FIELD1": "cardi(o)-",
   "FIELD2": "coeur",
   "FIELD3": "cardiaque, cardiogramme, cardiographie"
 },
 {
   "FIELD1": "caryo-",
   "FIELD2": "noyau cellulaire",
   "FIELD3": "caryopse"
 },
 {
   "FIELD1": "cata-",
   "FIELD2": "de haut en bas, complètement",
   "FIELD3": "cataracte, catastrophe"
 },
 {
   "FIELD1": "cata-",
   "FIELD2": "en bas",
   "FIELD3": "catacombes"
 },
 {
   "FIELD1": "cén(o)-",
   "FIELD2": "commun",
   "FIELD3": "cenobite, cénesthésie"
 },
 {
   "FIELD1": "céno-",
   "FIELD2": "vide",
   "FIELD3": "cénotaphe"
 },
 {
   "FIELD1": "céphal(o)-",
   "FIELD2": "tête",
   "FIELD3": "céphalalgie, céphalopodes"
 },
 {
   "FIELD1": "cérébell-",
   "FIELD2": "cervelet",
   "FIELD3": "cérébelleux"
 },
 {
   "FIELD1": "cervic-",
   "FIELD2": "cou, col",
   "FIELD3": "cervical"
 },
 {
   "FIELD1": "chalco-",
   "FIELD2": "cuivre",
   "FIELD3": "chalcographie"
 },
 {
   "FIELD1": "cheir-, chir-",
   "FIELD2": "main",
   "FIELD3": "chiromancie, chiropratique"
 },
 {
   "FIELD1": "chimi-",
   "FIELD2": "substance chimique",
   "FIELD3": "chimiothérapie"
 },
 {
   "FIELD1": "chloro-",
   "FIELD2": "vert",
   "FIELD3": "chlorate, chlorhydrique, chlorophyle"
 },
 {
   "FIELD1": "chol(é)-",
   "FIELD2": "bile",
   "FIELD3": "cholagogue, cholémie"
 },
 {
   "FIELD1": "chromat-, chrom(o)-",
   "FIELD2": "couleur",
   "FIELD3": "chromatique, chromosome"
 },
 {
   "FIELD1": "chron(o)-",
   "FIELD2": "temps",
   "FIELD3": "chronique, chronographie, chronologie, chronomètre"
 },
 {
   "FIELD1": "chrys(o)-",
   "FIELD2": "or",
   "FIELD3": "chrysostome, chrysolithe"
 },
 {
   "FIELD1": "cinémat(o)-ciné-, cinét(o)-",
   "FIELD2": "mouvement",
   "FIELD3": "cinématographe, cinétique"
 },
 {
   "FIELD1": "circum-, circon-",
   "FIELD2": "autour",
   "FIELD3": "circonvenir, circumpolaire,\n cironférence"
 },
 {
   "FIELD1": "cis-",
   "FIELD2": "en deçà  de",
   "FIELD3": "cisalpin"
 },
 {
   "FIELD1": "co-, com-, con-, cor-",
   "FIELD2": "avec",
   "FIELD3": "cohabiter"
 },
 {
   "FIELD1": "col-",
   "FIELD2": "côlon (gros intestin)",
   "FIELD3": "colique"
 },
 {
   "FIELD1": "colp-",
   "FIELD2": "vagin",
   "FIELD3": "colpocèle"
 },
 {
   "FIELD1": "conch(o)-",
   "FIELD2": "coquille",
   "FIELD3": "conchylien, conchyliologie"
 },
 {
   "FIELD1": "contra-, contre-",
   "FIELD2": "contre, en face de",
   "FIELD3": "contresens, contradiction"
 },
 {
   "FIELD1": "cosm(o)-",
   "FIELD2": "monde",
   "FIELD3": "cosmique, cosmogonie, cosmopolite"
 },
 {
   "FIELD1": "cox-",
   "FIELD2": "hanche",
   "FIELD3": "coxalgie"
 },
 {
   "FIELD1": "crâni-",
   "FIELD2": "crâne",
   "FIELD3": "crâniopharyngiome"
 },
 {
   "FIELD1": "cry-",
   "FIELD2": "froid",
   "FIELD3": "cryogénique"
 },
 {
   "FIELD1": "crypt(o)-",
   "FIELD2": "caché",
   "FIELD3": "crypte, cryptogame"
 },
 {
   "FIELD1": "cyan-, cyano-",
   "FIELD2": "bleu",
   "FIELD3": "cyanure"
 },
 {
   "FIELD1": "cycl(o)-",
   "FIELD2": "cercle",
   "FIELD3": "cyclique, cyclone, cyclotourisme"
 },
 {
   "FIELD1": "cyst-",
   "FIELD2": "vessie, poche",
   "FIELD3": "cystite, cystique"
 },
 {
   "FIELD1": "cyto-",
   "FIELD2": "cellule",
   "FIELD3": "cytologie"
 },
 {
   "FIELD1": "dactyl(o)-",
   "FIELD2": "doigt",
   "FIELD3": "dactylographie"
 },
 {
   "FIELD1": "dé-, des-",
   "FIELD2": "cessation",
   "FIELD3": "désunion"
 },
 {
   "FIELD1": "déca-, déci-",
   "FIELD2": "dix",
   "FIELD3": "décamètre, décimètre"
 },
 {
   "FIELD1": "dém(o)-",
   "FIELD2": "peuple",
   "FIELD3": "démocrate, démographie"
 },
 {
   "FIELD1": "derm(o)-, dermato-",
   "FIELD2": "peau",
   "FIELD3": "derme, dermique, dermatologie"
 },
 {
   "FIELD1": "deut-",
   "FIELD2": "second",
   "FIELD3": "deutéron"
 },
 {
   "FIELD1": "di-",
   "FIELD2": "deux fois",
   "FIELD3": "diptyque, disyllabe"
 },
 {
   "FIELD1": "dia-",
   "FIELD2": "à  travers, séparé de",
   "FIELD3": "diagonal, diaphane, diorama"
 },
 {
   "FIELD1": "didact-",
   "FIELD2": "enseigner",
   "FIELD3": "didactique"
 },
 {
   "FIELD1": "dis-, dif-, dis-",
   "FIELD2": "séparation",
   "FIELD3": "diverger"
 },
 {
   "FIELD1": "disc-",
   "FIELD2": "disque intervertébral",
   "FIELD3": "hernie discale"
 },
 {
   "FIELD1": "dodéca-",
   "FIELD2": "douze",
   "FIELD3": "dodécagone"
 },
 {
   "FIELD1": "dolicho-",
   "FIELD2": "long",
   "FIELD3": "dolichocéphale"
 },
 {
   "FIELD1": "dors-",
   "FIELD2": "dos",
   "FIELD3": "dorsal"
 },
 {
   "FIELD1": "dory-",
   "FIELD2": "lance",
   "FIELD3": "doryphore"
 },
 {
   "FIELD1": "dynam(o)-",
   "FIELD2": "force",
   "FIELD3": "dynamite, dynamomètre"
 },
 {
   "FIELD1": "dys-",
   "FIELD2": "difficulté",
   "FIELD3": "dyspepsie, dyslexie"
 },
 {
   "FIELD1": "échin(o)-",
   "FIELD2": "épine, hérisson",
   "FIELD3": "échinoderme"
 },
 {
   "FIELD1": "électr(o)-",
   "FIELD2": "ambre jaune",
   "FIELD3": "électrochoc"
 },
 {
   "FIELD1": "embryo-",
   "FIELD2": "foetus",
   "FIELD3": "embryologie"
 },
 {
   "FIELD1": "en-, em-",
   "FIELD2": "dans",
   "FIELD3": "encéphale, endémie, enfermer"
 },
 {
   "FIELD1": "endo-",
   "FIELD2": "en dedans",
   "FIELD3": "endoderme, endocarde, endocrine"
 },
 {
   "FIELD1": "entér(o)-",
   "FIELD2": "entrailles",
   "FIELD3": "entérite"
 },
 {
   "FIELD1": "entomo-",
   "FIELD2": "insecte",
   "FIELD3": "entomologiste"
 },
 {
   "FIELD1": "entre-, inter-",
   "FIELD2": "Entre, réciproquement",
   "FIELD3": "entreposer, entrecôte"
 },
 {
   "FIELD1": "éo-",
   "FIELD2": "aurore",
   "FIELD3": "éocène"
 },
 {
   "FIELD1": "epi-",
   "FIELD2": "sur, au-dessus",
   "FIELD3": "épiderme, épizootie"
 },
 {
   "FIELD1": "erg-",
   "FIELD2": "travail",
   "FIELD3": "ergonomie"
 },
 {
   "FIELD1": "érythr-",
   "FIELD2": "rouge",
   "FIELD3": "érythème, érythrine"
 },
 {
   "FIELD1": "eu-",
   "FIELD2": "agréable, bien, bon",
   "FIELD3": "euphorie, euphémisme, euphonie"
 },
 {
   "FIELD1": "ex-",
   "FIELD2": "à  l'extérieur, hors, qui a cessé d'être",
   "FIELD3": "expatrié, ex-employé"
 },
 {
   "FIELD1": "exo-",
   "FIELD2": "au-dehors",
   "FIELD3": "exotisme, exonérer"
 },
 {
   "FIELD1": "extra-",
   "FIELD2": "superlatif, hors de",
   "FIELD3": "extra-fin, extraordinaire, extra-territorialité"
 },
 {
   "FIELD1": "galact(o)-",
   "FIELD2": "lait",
   "FIELD3": "galactose, galaxie"
 },
 {
   "FIELD1": "gam(o)-",
   "FIELD2": "mariage",
   "FIELD3": "gamète"
 },
 {
   "FIELD1": "gastro-",
   "FIELD2": "ventre",
   "FIELD3": "gastropodes, gastronome"
 },
 {
   "FIELD1": "gé(o)-",
   "FIELD2": "terre",
   "FIELD3": "géographie, géologie"
 },
 {
   "FIELD1": "genu-",
   "FIELD2": "genou",
   "FIELD3": "génuflexion"
 },
 {
   "FIELD1": "géront(o)-",
   "FIELD2": "vieillard",
   "FIELD3": "gérontocratie"
 },
 {
   "FIELD1": "gingiv-",
   "FIELD2": "gencive",
   "FIELD3": "gingivite"
 },
 {
   "FIELD1": "gloss(o)-",
   "FIELD2": "langue",
   "FIELD3": "glossaire"
 },
 {
   "FIELD1": "gluc(o)-",
   "FIELD2": "doux",
   "FIELD3": "glucose, glycogène"
 },
 {
   "FIELD1": "glyc(o)-, glycér(o)-",
   "FIELD2": "doux",
   "FIELD3": "glycérine"
 },
 {
   "FIELD1": "granul-",
   "FIELD2": "granulation",
   "FIELD3": "granuleux"
 },
 {
   "FIELD1": "graph(o)-",
   "FIELD2": "écrire",
   "FIELD3": "graphologie, graphème"
 },
 {
   "FIELD1": "gyn(éco)-",
   "FIELD2": "femme",
   "FIELD3": "gynécée, gynécologie"
 },
 {
   "FIELD1": "gyro-",
   "FIELD2": "cercle",
   "FIELD3": "gyroscope"
 },
 {
   "FIELD1": "hagi(o)-",
   "FIELD2": "sacré",
   "FIELD3": "hagiographie"
 },
 {
   "FIELD1": "halo-",
   "FIELD2": "sel",
   "FIELD3": "halogène"
 },
 {
   "FIELD1": "hecto-",
   "FIELD2": "cent",
   "FIELD3": "hectomètre"
 },
 {
   "FIELD1": "héli(o)-",
   "FIELD2": "soleil",
   "FIELD3": "héliothérapie"
 },
 {
   "FIELD1": "hémat(o)-, hémo-",
   "FIELD2": "sang",
   "FIELD3": "hématose, hémorragie"
 },
 {
   "FIELD1": "hémi-",
   "FIELD2": "demi",
   "FIELD3": "hémicycle, hémisphère"
 },
 {
   "FIELD1": "hépat(o)-",
   "FIELD2": "foie",
   "FIELD3": "hépatique, hépatite"
 },
 {
   "FIELD1": "hept(a)-",
   "FIELD2": "sept",
   "FIELD3": "heptasyllabe"
 },
 {
   "FIELD1": "hétéro-",
   "FIELD2": "autre",
   "FIELD3": "hétérogène"
 },
 {
   "FIELD1": "hexa-",
   "FIELD2": "six",
   "FIELD3": "hexagone"
 },
 {
   "FIELD1": "hiér(o)-",
   "FIELD2": "sacré",
   "FIELD3": "hiéroglyphe"
 },
 {
   "FIELD1": "hipp(o)-",
   "FIELD2": "cheval",
   "FIELD3": "hippodrome"
 },
 {
   "FIELD1": "hist(o)-",
   "FIELD2": "tissu",
   "FIELD3": "histologie"
 },
 {
   "FIELD1": "homéo-, hom(o)",
   "FIELD2": "semblable",
   "FIELD3": "homéopathie, homologue"
 },
 {
   "FIELD1": "hor(o)-",
   "FIELD2": "heure",
   "FIELD3": "horoscope, horodateur"
 },
 {
   "FIELD1": "hydr(o)-",
   "FIELD2": "eau (fluide)",
   "FIELD3": "hydraulique, hydre, hydrologie, hydrothérapie"
 },
 {
   "FIELD1": "hygro-",
   "FIELD2": "humide",
   "FIELD3": "hygromètre, hygroscope"
 },
 {
   "FIELD1": "hyper-",
   "FIELD2": "plus, au dessus",
   "FIELD3": "hypermétrope, hypertension, hypertrophie"
 },
 {
   "FIELD1": "hypn(o)-",
   "FIELD2": "sommeil",
   "FIELD3": "hypnose, hypnotisme"
 },
 {
   "FIELD1": "hypo-",
   "FIELD2": "moins, en dessous",
   "FIELD3": "hypophyse, hypodermique"
 },
 {
   "FIELD1": "hystér(o)-",
   "FIELD2": "utérus",
   "FIELD3": "hystérographie"
 },
 {
   "FIELD1": "iatr-, -iâtre",
   "FIELD2": "médecin",
   "FIELD3": "pédiatre"
 },
 {
   "FIELD1": "icon(o)-",
   "FIELD2": "image",
   "FIELD3": "icône, iconoclaste"
 },
 {
   "FIELD1": "idé(o)-",
   "FIELD2": "idée",
   "FIELD3": "idéogramme, idéologie"
 },
 {
   "FIELD1": "idi(o)-",
   "FIELD2": "particulier",
   "FIELD3": "idiome, idiotisme"
 },
 {
   "FIELD1": "in-, im-, il-, ir-",
   "FIELD2": "entrer, privé de, négation",
   "FIELD3": "infiltrer, insinuer, illettré, impropre, inexact"
 },
 {
   "FIELD1": "inter-",
   "FIELD2": "entre",
   "FIELD3": "interallié, interligne"
 },
 {
   "FIELD1": "intra-",
   "FIELD2": "au-dedans",
   "FIELD3": "intramusculaire"
 },
 {
   "FIELD1": "isch-",
   "FIELD2": "suppression, arrêt",
   "FIELD3": "ischémique"
 },
 {
   "FIELD1": "iso-",
   "FIELD2": "égal",
   "FIELD3": "isomorphe, isotherme"
 },
 {
   "FIELD1": "juxta-",
   "FIELD2": "auprès de",
   "FIELD3": "juxtalinéaire, juxtaposer"
 },
 {
   "FIELD1": "kali-",
   "FIELD2": "potassium",
   "FIELD3": "kaliémie"
 },
 {
   "FIELD1": "kilo-",
   "FIELD2": "mille",
   "FIELD3": "kilogramme"
 },
 {
   "FIELD1": "kinés-, kinét-",
   "FIELD2": "mouvement",
   "FIELD3": "kinestésie"
 },
 {
   "FIELD1": "lapar-",
   "FIELD2": "paroi abdominale",
   "FIELD3": "laparoscopie"
 },
 {
   "FIELD1": "laryng(o)-",
   "FIELD2": "gorge",
   "FIELD3": "laryngologie"
 },
 {
   "FIELD1": "leuc-, leuco-",
   "FIELD2": "blanc",
   "FIELD3": "leucocyte, leucémie"
 },
 {
   "FIELD1": "lipo-",
   "FIELD2": "lipide",
   "FIELD3": "liposuccion"
 },
 {
   "FIELD1": "litho-",
   "FIELD2": "pierre",
   "FIELD3": "lithographique"
 },
 {
   "FIELD1": "loco-",
   "FIELD2": "mettre en mouvement",
   "FIELD3": "locomotion"
 },
 {
   "FIELD1": "log(o)-",
   "FIELD2": "discours, science",
   "FIELD3": "logomachie"
 },
 {
   "FIELD1": "lomb-",
   "FIELD2": "région lombaire",
   "FIELD3": "lombalgie"
 },
 {
   "FIELD1": "lum-",
   "FIELD2": "lumière, partie creuse d'un tube",
   "FIELD3": "luminaire, luminance, luminisme, lumitype"
 },
 {
   "FIELD1": "macro-",
   "FIELD2": "grand",
   "FIELD3": "macrocosme"
 },
 {
   "FIELD1": "mi-",
   "FIELD2": "milieu",
   "FIELD3": "midi, mi-figue, mi-raisin"
 },
 {
   "FIELD1": "micro-",
   "FIELD2": "petit",
   "FIELD3": "microbe, microbiologie"
 },
 {
   "FIELD1": "mis(o)-",
   "FIELD2": "haine",
   "FIELD3": "misanthrope, misogyne"
 },
 {
   "FIELD1": "mném(o)-",
   "FIELD2": "mémoire",
   "FIELD3": "mnémotechnique"
 },
 {
   "FIELD1": "mono-",
   "FIELD2": "seul",
   "FIELD3": "monogramme, monolithe"
 },
 {
   "FIELD1": "morpho-",
   "FIELD2": "forme",
   "FIELD3": "morphologie"
 },
 {
   "FIELD1": "multi-",
   "FIELD2": "nombreux",
   "FIELD3": "multicolore, multiforme, multiple"
 },
 {
   "FIELD1": "myco-",
   "FIELD2": "champignon",
   "FIELD3": "mycologie"
 },
 {
   "FIELD1": "myél-",
   "FIELD2": "moelle",
   "FIELD3": "myélopathie"
 },
 {
   "FIELD1": "myo-",
   "FIELD2": "muscle",
   "FIELD3": "myocarde"
 },
 {
   "FIELD1": "myri(a)-",
   "FIELD2": "dix mille",
   "FIELD3": "myriade"
 },
 {
   "FIELD1": "mythe-",
   "FIELD2": "légende",
   "FIELD3": "mythologie"
 },
 {
   "FIELD1": "nas-",
   "FIELD2": "nez",
   "FIELD3": "nasalisation, nasique"
 },
 {
   "FIELD1": "natr-",
   "FIELD2": "sodium",
   "FIELD3": "natrémie"
 },
 {
   "FIELD1": "nécro-",
   "FIELD2": "mort",
   "FIELD3": "nécrologie, nécropole"
 },
 {
   "FIELD1": "néo-",
   "FIELD2": "nouveau",
   "FIELD3": "néologisme, néophyte"
 },
 {
   "FIELD1": "néphr(o)-",
   "FIELD2": "rein",
   "FIELD3": "néphrite"
 },
 {
   "FIELD1": "neuro-, névr-",
   "FIELD2": "nerf",
   "FIELD3": "neurologie, névralgie"
 },
 {
   "FIELD1": "névr-",
   "FIELD2": "nerf",
   "FIELD3": "névrose"
 },
 {
   "FIELD1": "nigr-, négr(o)-",
   "FIELD2": "noir",
   "FIELD3": "nigéro-congolais, négritude"
 },
 {
   "FIELD1": "non-",
   "FIELD2": "négation",
   "FIELD3": "nonchalant"
 },
 {
   "FIELD1": "noso-",
   "FIELD2": "maladie",
   "FIELD3": "nosologie"
 },
 {
   "FIELD1": "nuclé-",
   "FIELD2": "noyau",
   "FIELD3": "nucléaire"
 },
 {
   "FIELD1": "ob-, oc-, of-, op-",
   "FIELD2": "devant, en opposition",
   "FIELD3": "obnubiler"
 },
 {
   "FIELD1": "octa-, octo-",
   "FIELD2": "huit",
   "FIELD3": "octaèdre, octogone"
 },
 {
   "FIELD1": "ocul-",
   "FIELD2": "oeil",
   "FIELD3": "occulter"
 },
 {
   "FIELD1": "odont(o)-",
   "FIELD2": "dent",
   "FIELD3": "odontologie"
 },
 {
   "FIELD1": "olfact-",
   "FIELD2": "odorat",
   "FIELD3": "olfactif"
 },
 {
   "FIELD1": "olig(o)-",
   "FIELD2": "peu nombreux",
   "FIELD3": "oligarchie"
 },
 {
   "FIELD1": "omni-",
   "FIELD2": "tout",
   "FIELD3": "omniscient, omnivore"
 },
 {
   "FIELD1": "onco-",
   "FIELD2": "tumeur",
   "FIELD3": "oncologie"
 },
 {
   "FIELD1": "oniro-",
   "FIELD2": "songé",
   "FIELD3": "oniromancie, onirique"
 },
 {
   "FIELD1": "ophtalm(o)-",
   "FIELD2": "oeil",
   "FIELD3": "ophtalmologie"
 },
 {
   "FIELD1": "orchi-",
   "FIELD2": "testicule",
   "FIELD3": "orchidée"
 },
 {
   "FIELD1": "ornitho-",
   "FIELD2": "oiseau",
   "FIELD3": "ornithologiste"
 },
 {
   "FIELD1": "oro-",
   "FIELD2": "montagne",
   "FIELD3": "orographie"
 },
 {
   "FIELD1": "ortho-",
   "FIELD2": "droit",
   "FIELD3": "orthographe, orthopédie"
 },
 {
   "FIELD1": "osm-",
   "FIELD2": "odeur",
   "FIELD3": "osmium"
 },
 {
   "FIELD1": "osté(o)-",
   "FIELD2": "os",
   "FIELD3": "ostéite, ostéomyélite"
 },
 {
   "FIELD1": "ot(o)-",
   "FIELD2": "oreille",
   "FIELD3": "oto-rhino-laryngologie"
 },
 {
   "FIELD1": "outre-",
   "FIELD2": "au-delà  de",
   "FIELD3": "outrepasser"
 },
 {
   "FIELD1": "ovari-",
   "FIELD2": "ovaire",
   "FIELD3": "ovarien, ovarite"
 },
 {
   "FIELD1": "oxy-",
   "FIELD2": "aigu, acide",
   "FIELD3": "oxyton, oxygène"
 },
 {
   "FIELD1": "pachy-",
   "FIELD2": "épais",
   "FIELD3": "pachyderme"
 },
 {
   "FIELD1": "paléo-",
   "FIELD2": "ancien",
   "FIELD3": "paléographie, paléolithique"
 },
 {
   "FIELD1": "pan-, pant(o)-",
   "FIELD2": "tout",
   "FIELD3": "panthéisme, pantographe"
 },
 {
   "FIELD1": "par-, per-",
   "FIELD2": "à  travers, achèvement",
   "FIELD3": "parcourir"
 },
 {
   "FIELD1": "para-",
   "FIELD2": "contre, auprès",
   "FIELD3": "parasite"
 },
 {
   "FIELD1": "path-",
   "FIELD2": "maladie",
   "FIELD3": "pathologie"
 },
 {
   "FIELD1": "path(o)-",
   "FIELD2": "souffrance",
   "FIELD3": "pathogène, pathologie"
 },
 {
   "FIELD1": "péd-",
   "FIELD2": "enfant",
   "FIELD3": "pédagogie, pédiatrie"
 },
 {
   "FIELD1": "péni-",
   "FIELD2": "pauvreté, diminution",
   "FIELD3": "pénitence, pénitencier"
 },
 {
   "FIELD1": "penta-",
   "FIELD2": "cinq",
   "FIELD3": "pentagone"
 },
 {
   "FIELD1": "per-",
   "FIELD2": "à  travers",
   "FIELD3": "percolateur, perforer"
 },
 {
   "FIELD1": "peri-",
   "FIELD2": "autour",
   "FIELD3": "périoste, périphrase, périphérique"
 },
 {
   "FIELD1": "phago-",
   "FIELD2": "manger",
   "FIELD3": "phagocyte"
 },
 {
   "FIELD1": "pharmac(o)-",
   "FIELD2": "médicament",
   "FIELD3": "pharmaceutique, pharmacopée"
 },
 {
   "FIELD1": "pharyng(o)-",
   "FIELD2": "gosier",
   "FIELD3": "pharyngite"
 },
 {
   "FIELD1": "phén(o)-",
   "FIELD2": "apparaître",
   "FIELD3": "phénomène"
 },
 {
   "FIELD1": "phil(o)-",
   "FIELD2": "qui aime",
   "FIELD3": "philanthrope, philatélie, philosophie"
 },
 {
   "FIELD1": "phléb-",
   "FIELD2": "veine",
   "FIELD3": "phlébite"
 },
 {
   "FIELD1": "phon(o)-",
   "FIELD2": "voix",
   "FIELD3": "phonographe"
 },
 {
   "FIELD1": "photo-",
   "FIELD2": "lumière",
   "FIELD3": "photographe"
 },
 {
   "FIELD1": "phréno-",
   "FIELD2": "diaphragme",
   "FIELD3": "phrénique"
 },
 {
   "FIELD1": "phyllo-",
   "FIELD2": "feuille",
   "FIELD3": "phylloxéra"
 },
 {
   "FIELD1": "phys(io)-",
   "FIELD2": "nature",
   "FIELD3": "physiocrate, physique"
 },
 {
   "FIELD1": "phyt(o)-",
   "FIELD2": "plante",
   "FIELD3": "phytophage"
 },
 {
   "FIELD1": "plast-",
   "FIELD2": "façonné",
   "FIELD3": "plasticité, plastique"
 },
 {
   "FIELD1": "pleur-",
   "FIELD2": "plèvre (membrane du thorax)",
   "FIELD3": "pleurodynie"
 },
 {
   "FIELD1": "pleur(o)-",
   "FIELD2": "côté",
   "FIELD3": "pleurite"
 },
 {
   "FIELD1": "plouto-",
   "FIELD2": "richesse",
   "FIELD3": "ploutocratie"
 },
 {
   "FIELD1": "pneum-, pneumat-",
   "FIELD2": "air, respiration",
   "FIELD3": "pneumatique"
 },
 {
   "FIELD1": "pneumo-",
   "FIELD2": "poumon",
   "FIELD3": "pneumonie"
 },
 {
   "FIELD1": "pod(o)-",
   "FIELD2": "pied",
   "FIELD3": "podomètre"
 },
 {
   "FIELD1": "polio-",
   "FIELD2": "substance grise",
   "FIELD3": "poliomyélite"
 },
 {
   "FIELD1": "poly-",
   "FIELD2": "nombreux",
   "FIELD3": "polyèdre, polygone"
 },
 {
   "FIELD1": "post-",
   "FIELD2": "après",
   "FIELD3": "postdater, postscolaire"
 },
 {
   "FIELD1": "pré-",
   "FIELD2": "devant",
   "FIELD3": "préétabli, préhistoire, préliminaire"
 },
 {
   "FIELD1": "pro-",
   "FIELD2": "en avant",
   "FIELD3": "proposer, projeter, prolonger"
 },
 {
   "FIELD1": "proct-",
   "FIELD2": "anus",
   "FIELD3": "proctologie"
 },
 {
   "FIELD1": "prosop-",
   "FIELD2": "visage",
   "FIELD3": "prosopopée"
 },
 {
   "FIELD1": "prosta-",
   "FIELD2": "prostate",
   "FIELD3": "prostatique"
 },
 {
   "FIELD1": "prot(o)-",
   "FIELD2": "premier",
   "FIELD3": "prototype"
 },
 {
   "FIELD1": "proté-",
   "FIELD2": "protéine, forme changeante",
   "FIELD3": "protéolyse"
 },
 {
   "FIELD1": "pseud(o)-",
   "FIELD2": "faux",
   "FIELD3": "pseudonyme"
 },
 {
   "FIELD1": "psych(o)-",
   "FIELD2": "âme",
   "FIELD3": "psychologue"
 },
 {
   "FIELD1": "ptéro-",
   "FIELD2": "aile",
   "FIELD3": "ptérodactyle"
 },
 {
   "FIELD1": "pulm-",
   "FIELD2": "poumon",
   "FIELD3": "pulmonaire"
 },
 {
   "FIELD1": "pyél-",
   "FIELD2": "bassinet du rein",
   "FIELD3": "pyélite"
 },
 {
   "FIELD1": "pyo-",
   "FIELD2": "pus, suppuration",
   "FIELD3": "pyogène"
 },
 {
   "FIELD1": "pyr(o)-",
   "FIELD2": "feu",
   "FIELD3": "pyrotechnie"
 },
 {
   "FIELD1": "quadr(i)-, quadru-",
   "FIELD2": "quatre",
   "FIELD3": "quadrijumeaux, quadrupède"
 },
 {
   "FIELD1": "quasi-",
   "FIELD2": "presque",
   "FIELD3": "quasi-contrat, quasi-délit"
 },
 {
   "FIELD1": "quinqu-",
   "FIELD2": "cinq",
   "FIELD3": "quinquagénaire, quinquennal"
 },
 {
   "FIELD1": "r(e)-",
   "FIELD2": "de nouveau",
   "FIELD3": "rouvrir, réargenter"
 },
 {
   "FIELD1": "rachi-",
   "FIELD2": "colonne vertébrale",
   "FIELD3": "rachidien"
 },
 {
   "FIELD1": "radio-",
   "FIELD2": "rayon",
   "FIELD3": "radiographie, radiologie"
 },
 {
   "FIELD1": "rect-",
   "FIELD2": "rectum",
   "FIELD3": "rectoscopie"
 },
 {
   "FIELD1": "rétro-",
   "FIELD2": "en retour",
   "FIELD3": "rétroactif, rétrograder"
 },
 {
   "FIELD1": "rhino-",
   "FIELD2": "nez",
   "FIELD3": "rhinocéros"
 },
 {
   "FIELD1": "rhizo-",
   "FIELD2": "racine",
   "FIELD3": "rhizome, rhizopodes"
 },
 {
   "FIELD1": "rhodo-",
   "FIELD2": "rose",
   "FIELD3": "rhododendron"
 },
 {
   "FIELD1": "rub-",
   "FIELD2": "rouge",
   "FIELD3": "rubéole"
 },
 {
   "FIELD1": "sarco-",
   "FIELD2": "chair",
   "FIELD3": "sarcophage"
 },
 {
   "FIELD1": "saur-",
   "FIELD2": "lézard",
   "FIELD3": "sauriens"
 },
 {
   "FIELD1": "scaph-",
   "FIELD2": "barque",
   "FIELD3": "scaphandrier"
 },
 {
   "FIELD1": "schizo-",
   "FIELD2": "qui fend",
   "FIELD3": "schizophrénie"
 },
 {
   "FIELD1": "séma-",
   "FIELD2": "signe",
   "FIELD3": "sémantique, sémaphore"
 },
 {
   "FIELD1": "séméio-, sémio-",
   "FIELD2": "signe",
   "FIELD3": "sémiologie"
 },
 {
   "FIELD1": "semi-",
   "FIELD2": "demi",
   "FIELD3": "semi-circulaire"
 },
 {
   "FIELD1": "sidér(o)-",
   "FIELD2": "fer",
   "FIELD3": "sidérurgique"
 },
 {
   "FIELD1": "simili-",
   "FIELD2": "semblable",
   "FIELD3": "similigravure, simili marbre"
 },
 {
   "FIELD1": "solén(o)-",
   "FIELD2": "tuyau",
   "FIELD3": "solénoïde"
 },
 {
   "FIELD1": "somat(o)-",
   "FIELD2": "corps",
   "FIELD3": "somatique"
 },
 {
   "FIELD1": "sou-, sous-, suc-, suf-, sug-, sup-",
   "FIELD2": "sous, presque",
   "FIELD3": "soucoupe"
 },
 {
   "FIELD1": "spélé(o)-",
   "FIELD2": "caverne",
   "FIELD3": "spéléologie"
 },
 {
   "FIELD1": "sphéno-",
   "FIELD2": "coin",
   "FIELD3": "sphénoïde"
 },
 {
   "FIELD1": "sphér(o)-",
   "FIELD2": "globe",
   "FIELD3": "sphérique, sphénoïde"
 },
 {
   "FIELD1": "spin-",
   "FIELD2": "épine, moelle épinière",
   "FIELD3": "spinal"
 },
 {
   "FIELD1": "splén-",
   "FIELD2": "rate",
   "FIELD3": "splénite"
 },
 {
   "FIELD1": "spondyl-",
   "FIELD2": "vertèbre",
   "FIELD3": "spondylite"
 },
 {
   "FIELD1": "stat-",
   "FIELD2": "stable",
   "FIELD3": "statique, statistique"
 },
 {
   "FIELD1": "stéa-",
   "FIELD2": "graisse",
   "FIELD3": "stéarine"
 },
 {
   "FIELD1": "stéré(o)-",
   "FIELD2": "solide",
   "FIELD3": "stéréoscope"
 },
 {
   "FIELD1": "stomat(o)-",
   "FIELD2": "bouche",
   "FIELD3": "stomatologie"
 },
 {
   "FIELD1": "styl(o)-",
   "FIELD2": "colonne",
   "FIELD3": "stylite"
 },
 {
   "FIELD1": "sub-",
   "FIELD2": "sous",
   "FIELD3": "subalterne, subdélégué, subdiviser"
 },
 {
   "FIELD1": "super-, supra-",
   "FIELD2": "au-dessus",
   "FIELD3": "superstructure, supranational"
 },
 {
   "FIELD1": "sus-",
   "FIELD2": "au dessus, plus",
   "FIELD3": "sus-mentionné"
 },
 {
   "FIELD1": "sy-, syn-, sym-",
   "FIELD2": "avec",
   "FIELD3": "sympathie, synonyme"
 },
 {
   "FIELD1": "tachy-",
   "FIELD2": "rapide",
   "FIELD3": "tachymètre"
 },
 {
   "FIELD1": "tauto-",
   "FIELD2": "le même",
   "FIELD3": "tautologie"
 },
 {
   "FIELD1": "taxi-",
   "FIELD2": "taxe",
   "FIELD3": "taximètre"
 },
 {
   "FIELD1": "techn(o)-",
   "FIELD2": "art",
   "FIELD3": "technique, technologie"
 },
 {
   "FIELD1": "télé-",
   "FIELD2": "loin",
   "FIELD3": "télépathie, téléphone"
 },
 {
   "FIELD1": "térat-",
   "FIELD2": "monstre",
   "FIELD3": "tératologie"
 },
 {
   "FIELD1": "tétra-",
   "FIELD2": "quatre",
   "FIELD3": "tétragone"
 },
 {
   "FIELD1": "thalasso-",
   "FIELD2": "mer",
   "FIELD3": "thalassothérapie"
 },
 {
   "FIELD1": "théo-",
   "FIELD2": "dieu",
   "FIELD3": "théocratie, théologie"
 },
 {
   "FIELD1": "thérapeut-",
   "FIELD2": "qui soigne",
   "FIELD3": "thérapeutique"
 },
 {
   "FIELD1": "therm(o)-",
   "FIELD2": "chaleur",
   "FIELD3": "thermomètre"
 },
 {
   "FIELD1": "thorac-",
   "FIELD2": "thorax",
   "FIELD3": "thoracique"
 },
 {
   "FIELD1": "thromb-",
   "FIELD2": "coagulation, caillot",
   "FIELD3": "thrombose"
 },
 {
   "FIELD1": "top(o)-",
   "FIELD2": "lieu",
   "FIELD3": "topographie, toponymie"
 },
 {
   "FIELD1": "trans-",
   "FIELD2": "au-delà  de, à  travers",
   "FIELD3": "transformer, transhumant"
 },
 {
   "FIELD1": "trauma-, traumat-",
   "FIELD2": "blessure, choc violent",
   "FIELD3": "traumatisé"
 },
 {
   "FIELD1": "tré-",
   "FIELD2": "au-delà ",
   "FIELD3": "trépasser"
 },
 {
   "FIELD1": "tri-",
   "FIELD2": "trois",
   "FIELD3": "tripartite, trisaieul, tricolore"
 },
 {
   "FIELD1": "trich-",
   "FIELD2": "poil",
   "FIELD3": "trichogramme"
 },
 {
   "FIELD1": "typo-",
   "FIELD2": "caractère",
   "FIELD3": "typographie, typologie"
 },
 {
   "FIELD1": "ultra-",
   "FIELD2": "au-delà  de",
   "FIELD3": "ultrason, ultraviolet"
 },
 {
   "FIELD1": "uni-",
   "FIELD2": "un",
   "FIELD3": "uniforme"
 },
 {
   "FIELD1": "urano-",
   "FIELD2": "ciel",
   "FIELD3": "uranographie"
 },
 {
   "FIELD1": "uré-",
   "FIELD2": "urine",
   "FIELD3": "urémie"
 },
 {
   "FIELD1": "urétr-",
   "FIELD2": "urètre",
   "FIELD3": "urétral"
 },
 {
   "FIELD1": "vas-",
   "FIELD2": "vaisseau",
   "FIELD3": "vasomoteur"
 },
 {
   "FIELD1": "vascul-",
   "FIELD2": "vaisseau sanguin",
   "FIELD3": "vasculaire"
 },
 {
   "FIELD1": "vésic-",
   "FIELD2": "vessie",
   "FIELD3": "vésicule"
 },
 {
   "FIELD1": "vi-, vice-",
   "FIELD2": "suppléance",
   "FIELD3": "vice-président, vice-amiral"
 },
 {
   "FIELD1": "viscér-",
   "FIELD2": "viscère",
   "FIELD3": "viscéral"
 },
 {
   "FIELD1": "xanth-",
   "FIELD2": "jaune",
   "FIELD3": "xanthine"
 },
 {
   "FIELD1": "xén(o)-",
   "FIELD2": "étranger",
   "FIELD3": "xénophobe"
 },
 {
   "FIELD1": "xér(o)-",
   "FIELD2": "sec",
   "FIELD3": "xérophagie"
 },
 {
   "FIELD1": "xylo-",
   "FIELD2": "bois",
   "FIELD3": "xylophone"
 },
 {
   "FIELD1": "zoo-",
   "FIELD2": "animal",
   "FIELD3": "zoologie"
 },
 {
   "FIELD1": "mal-, malé-, mau-",
   "FIELD2": "mauvais",
   "FIELD3": "malodorant, maléfique"
 },
 {
   "FIELD1": "mé-, més-",
   "FIELD2": "mauvais",
   "FIELD3": "médisance, mésalliance"
 },
 {
   "FIELD1": "médull-",
   "FIELD2": "moelle",
   "FIELD3": "médullaire"
 },
 {
   "FIELD1": "méga-, mégalo-",
   "FIELD2": "grand, gros",
   "FIELD3": "mégalithe, mégalomane"
 },
 {
   "FIELD1": "melo-",
   "FIELD2": "chant",
   "FIELD3": "mélodique, mélodrame"
 },
 {
   "FIELD1": "més(o)-",
   "FIELD2": "milieu",
   "FIELD3": "mésopotamien"
 },
 {
   "FIELD1": "meta-",
   "FIELD2": "après, changement",
   "FIELD3": "métamorphose, métaphysique"
 },
 {
   "FIELD1": "météor(o)-",
   "FIELD2": "élevé dans les airs",
   "FIELD3": "météore, météorologie"
 },
 {
   "FIELD1": "métr(o)-",
   "FIELD2": "mesure",
   "FIELD3": "métrique, métronome"
 }
];
