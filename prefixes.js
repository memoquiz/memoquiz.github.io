const entete = "Quelle est la signification de :";
const nbr_choix = 6;
const data = [
 {
   "Prefixe": "acantho-",
   "Sens": "épine",
   "Exemple": "acanthacées, acanthe"
 },
 {
   "Prefixe": "acou-",
   "Sens": "entendre",
   "Exemple": "acoustique, acouphène"
 },
 {
   "Prefixe": "acro-, acrie-",
   "Sens": "extrémité",
   "Exemple": "acrobate, acrostiche"
 },
 {
   "Prefixe": "actino-",
   "Sens": "rayon",
   "Exemple": "actinique, actinomètre"
 },
 {
   "Prefixe": "ad-",
   "Sens": "vers, ajouté à ",
   "Exemple": "administré"
 },
 {
   "Prefixe": "adén-",
   "Sens": "glande, ganglion lymphatique",
   "Exemple": "adénome, adénoïde"
 },
 {
   "Prefixe": "aéro-",
   "Sens": "air",
   "Exemple": "aéronaute, aéronef, aérophagie, aérostat"
 },
 {
   "Prefixe": "agro-",
   "Sens": "champ",
   "Exemple": "agronome"
 },
 {
   "Prefixe": "all-, allo-",
   "Sens": "étranger",
   "Exemple": "allopathie, allophone"
 },
 {
   "Prefixe": "ambi-",
   "Sens": "deux, autour, doublement",
   "Exemple": "ambidextre, ambivalent"
 },
 {
   "Prefixe": "amphi-",
   "Sens": "autour, doublement",
   "Exemple": "amphithéâtre, amphibie"
 },
 {
   "Prefixe": "an-",
   "Sens": "sans",
   "Exemple": "analphabète, anarchie"
 },
 {
   "Prefixe": "ana-",
   "Sens": "de bas en haut, à  l'inverse",
   "Exemple": "anagramme, anachronisme, anastrophe"
 },
 {
   "Prefixe": "andro-",
   "Sens": "homme (mâle)",
   "Exemple": "androgyne"
 },
 {
   "Prefixe": "anémo-",
   "Sens": "vent",
   "Exemple": "anémomètre"
 },
 {
   "Prefixe": "angio-",
   "Sens": "vaisseau",
   "Exemple": "angioplastie"
 },
 {
   "Prefixe": "anté-",
   "Sens": "avant, précédent",
   "Exemple": "antérieur, antédiluvien"
 },
 {
   "Prefixe": "anth(o)-",
   "Sens": "fleur, meilleur",
   "Exemple": "anthémis, anthologie"
 },
 {
   "Prefixe": "anthrac-",
   "Sens": "charbon",
   "Exemple": "anthracite"
 },
 {
   "Prefixe": "anthropo-",
   "Sens": "homme (espèce)",
   "Exemple": "anthropologie"
 },
 {
   "Prefixe": "anti-",
   "Sens": "contre",
   "Exemple": "antipathie, antireligieux"
 },
 {
   "Prefixe": "apo-",
   "Sens": "éloignement",
   "Exemple": "apogée"
 },
 {
   "Prefixe": "apo-",
   "Sens": "hors de, à  partir de, loin de",
   "Exemple": "apostasie, apostrophe, apothéose"
 },
 {
   "Prefixe": "arch-",
   "Sens": "qui commande, au-dessus",
   "Exemple": "archevêque"
 },
 {
   "Prefixe": "archéo-",
   "Sens": "ancien",
   "Exemple": "archéologie"
 },
 {
   "Prefixe": "archi-",
   "Sens": "supériorité, au plus haut degré",
   "Exemple": "archiprêtre, archimillionnaire"
 },
 {
   "Prefixe": "arithm(o)-",
   "Sens": "nombre",
   "Exemple": "arithmétique"
 },
 {
   "Prefixe": "artério-",
   "Sens": "artère",
   "Exemple": "artériosclérose"
 },
 {
   "Prefixe": "arthr(o)-",
   "Sens": "articulation",
   "Exemple": "arthrite, arthropodes"
 },
 {
   "Prefixe": "astér(o)-, astr(o)-",
   "Sens": "astre, étoile",
   "Exemple": "astérisque, astronaute"
 },
 {
   "Prefixe": "audi-",
   "Sens": "audition",
   "Exemple": "audimat"
 },
 {
   "Prefixe": "auto-",
   "Sens": "de soi-même",
   "Exemple": "autobiographie, autodidacte, automobile"
 },
 {
   "Prefixe": "bactéri(o)-",
   "Sens": "bâton",
   "Exemple": "bactéricide, bactériologie"
 },
 {
   "Prefixe": "bar-, baro",
   "Sens": "pression",
   "Exemple": "baromètre"
 },
 {
   "Prefixe": "béné-, bien-",
   "Sens": "bien",
   "Exemple": "bienfaiteur, bénéfique"
 },
 {
   "Prefixe": "bi-, bis-, bes-",
   "Sens": "deux fois",
   "Exemple": "bipède"
 },
 {
   "Prefixe": "biblio-",
   "Sens": "livre",
   "Exemple": "bibliographie, bibliothèque"
 },
 {
   "Prefixe": "bio-",
   "Sens": "vivant",
   "Exemple": "biographie, biologie"
 },
 {
   "Prefixe": "blasto-",
   "Sens": "germe",
   "Exemple": "blastoderme"
 },
 {
   "Prefixe": "bléphar(o)-",
   "Sens": "paupière",
   "Exemple": "blépharite"
 },
 {
   "Prefixe": "brachy-",
   "Sens": "court",
   "Exemple": "brachycéphale"
 },
 {
   "Prefixe": "brady-",
   "Sens": "lent",
   "Exemple": "bradycardie, bradypsychie"
 },
 {
   "Prefixe": "brom(o)-",
   "Sens": "puanteur",
   "Exemple": "brome, bromure"
 },
 {
   "Prefixe": "bronch(o)-",
   "Sens": "gorge, bronche",
   "Exemple": "bronche, bronchique"
 },
 {
   "Prefixe": "bryo-",
   "Sens": "mousse",
   "Exemple": "bryophile"
 },
 {
   "Prefixe": "bucc-",
   "Sens": "bouche",
   "Exemple": "buccal"
 },
 {
   "Prefixe": "butyr(o)-",
   "Sens": "beurre",
   "Exemple": "butyrique"
 },
 {
   "Prefixe": "caco-, cach-",
   "Sens": "mauvais",
   "Exemple": "cacographie, cacophonie"
 },
 {
   "Prefixe": "calc-",
   "Sens": "calcium",
   "Exemple": "calcification"
 },
 {
   "Prefixe": "calli-",
   "Sens": "beau",
   "Exemple": "calligraphie, callipyge"
 },
 {
   "Prefixe": "cardi(o)-",
   "Sens": "coeur",
   "Exemple": "cardiaque, cardiogramme, cardiographie"
 },
 {
   "Prefixe": "caryo-",
   "Sens": "noyau cellulaire",
   "Exemple": "caryopse"
 },
 {
   "Prefixe": "cata-",
   "Sens": "de haut en bas, complètement",
   "Exemple": "cataracte, catastrophe"
 },
 {
   "Prefixe": "cata-",
   "Sens": "en bas",
   "Exemple": "catacombes"
 },
 {
   "Prefixe": "cén(o)-",
   "Sens": "commun",
   "Exemple": "cenobite, cénesthésie"
 },
 {
   "Prefixe": "céno-",
   "Sens": "vide",
   "Exemple": "cénotaphe"
 },
 {
   "Prefixe": "céphal(o)-",
   "Sens": "tête",
   "Exemple": "céphalalgie, céphalopodes"
 },
 {
   "Prefixe": "cérébell-",
   "Sens": "cervelet",
   "Exemple": "cérébelleux"
 },
 {
   "Prefixe": "cervic-",
   "Sens": "cou, col",
   "Exemple": "cervical"
 },
 {
   "Prefixe": "chalco-",
   "Sens": "cuivre",
   "Exemple": "chalcographie"
 },
 {
   "Prefixe": "cheir-, chir-",
   "Sens": "main",
   "Exemple": "chiromancie, chiropratique"
 },
 {
   "Prefixe": "chimi-",
   "Sens": "substance chimique",
   "Exemple": "chimiothérapie"
 },
 {
   "Prefixe": "chloro-",
   "Sens": "vert",
   "Exemple": "chlorate, chlorhydrique, chlorophyle"
 },
 {
   "Prefixe": "chol(é)-",
   "Sens": "bile",
   "Exemple": "cholagogue, cholémie"
 },
 {
   "Prefixe": "chromat-, chrom(o)-",
   "Sens": "couleur",
   "Exemple": "chromatique, chromosome"
 },
 {
   "Prefixe": "chron(o)-",
   "Sens": "temps",
   "Exemple": "chronique, chronographie, chronologie, chronomètre"
 },
 {
   "Prefixe": "chrys(o)-",
   "Sens": "or",
   "Exemple": "chrysostome, chrysolithe"
 },
 {
   "Prefixe": "cinémat(o)-ciné-, cinét(o)-",
   "Sens": "mouvement",
   "Exemple": "cinématographe, cinétique"
 },
 {
   "Prefixe": "circum-, circon-",
   "Sens": "autour",
   "Exemple": "circonvenir, circumpolaire,\n cironférence"
 },
 {
   "Prefixe": "cis-",
   "Sens": "en deçà  de",
   "Exemple": "cisalpin"
 },
 {
   "Prefixe": "co-, com-, con-, cor-",
   "Sens": "avec",
   "Exemple": "cohabiter"
 },
 {
   "Prefixe": "col-",
   "Sens": "côlon (gros intestin)",
   "Exemple": "colique"
 },
 {
   "Prefixe": "colp-",
   "Sens": "vagin",
   "Exemple": "colpocèle"
 },
 {
   "Prefixe": "conch(o)-",
   "Sens": "coquille",
   "Exemple": "conchylien, conchyliologie"
 },
 {
   "Prefixe": "contra-, contre-",
   "Sens": "contre, en face de",
   "Exemple": "contresens, contradiction"
 },
 {
   "Prefixe": "cosm(o)-",
   "Sens": "monde",
   "Exemple": "cosmique, cosmogonie, cosmopolite"
 },
 {
   "Prefixe": "cox-",
   "Sens": "hanche",
   "Exemple": "coxalgie"
 },
 {
   "Prefixe": "crâni-",
   "Sens": "crâne",
   "Exemple": "crâniopharyngiome"
 },
 {
   "Prefixe": "cry-",
   "Sens": "froid",
   "Exemple": "cryogénique"
 },
 {
   "Prefixe": "crypt(o)-",
   "Sens": "caché",
   "Exemple": "crypte, cryptogame"
 },
 {
   "Prefixe": "cyan-, cyano-",
   "Sens": "bleu",
   "Exemple": "cyanure"
 },
 {
   "Prefixe": "cycl(o)-",
   "Sens": "cercle",
   "Exemple": "cyclique, cyclone, cyclotourisme"
 },
 {
   "Prefixe": "cyst-",
   "Sens": "vessie, poche",
   "Exemple": "cystite, cystique"
 },
 {
   "Prefixe": "cyto-",
   "Sens": "cellule",
   "Exemple": "cytologie"
 },
 {
   "Prefixe": "dactyl(o)-",
   "Sens": "doigt",
   "Exemple": "dactylographie"
 },
 {
   "Prefixe": "dé-, des-",
   "Sens": "cessation",
   "Exemple": "désunion"
 },
 {
   "Prefixe": "déca-, déci-",
   "Sens": "dix",
   "Exemple": "décamètre, décimètre"
 },
 {
   "Prefixe": "dém(o)-",
   "Sens": "peuple",
   "Exemple": "démocrate, démographie"
 },
 {
   "Prefixe": "derm(o)-, dermato-",
   "Sens": "peau",
   "Exemple": "derme, dermique, dermatologie"
 },
 {
   "Prefixe": "deut-",
   "Sens": "second",
   "Exemple": "deutéron"
 },
 {
   "Prefixe": "di-",
   "Sens": "deux fois",
   "Exemple": "diptyque, disyllabe"
 },
 {
   "Prefixe": "dia-",
   "Sens": "à  travers, séparé de",
   "Exemple": "diagonal, diaphane, diorama"
 },
 {
   "Prefixe": "didact-",
   "Sens": "enseigner",
   "Exemple": "didactique"
 },
 {
   "Prefixe": "dis-, dif-, dis-",
   "Sens": "séparation",
   "Exemple": "diverger"
 },
 {
   "Prefixe": "disc-",
   "Sens": "disque intervertébral",
   "Exemple": "hernie discale"
 },
 {
   "Prefixe": "dodéca-",
   "Sens": "douze",
   "Exemple": "dodécagone"
 },
 {
   "Prefixe": "dolicho-",
   "Sens": "long",
   "Exemple": "dolichocéphale"
 },
 {
   "Prefixe": "dors-",
   "Sens": "dos",
   "Exemple": "dorsal"
 },
 {
   "Prefixe": "dory-",
   "Sens": "lance",
   "Exemple": "doryphore"
 },
 {
   "Prefixe": "dynam(o)-",
   "Sens": "force",
   "Exemple": "dynamite, dynamomètre"
 },
 {
   "Prefixe": "dys-",
   "Sens": "difficulté",
   "Exemple": "dyspepsie, dyslexie"
 },
 {
   "Prefixe": "échin(o)-",
   "Sens": "épine, hérisson",
   "Exemple": "échinoderme"
 },
 {
   "Prefixe": "électr(o)-",
   "Sens": "ambre jaune",
   "Exemple": "électrochoc"
 },
 {
   "Prefixe": "embryo-",
   "Sens": "foetus",
   "Exemple": "embryologie"
 },
 {
   "Prefixe": "en-, em-",
   "Sens": "dans",
   "Exemple": "encéphale, endémie, enfermer"
 },
 {
   "Prefixe": "endo-",
   "Sens": "en dedans",
   "Exemple": "endoderme, endocarde, endocrine"
 },
 {
   "Prefixe": "entér(o)-",
   "Sens": "entrailles",
   "Exemple": "entérite"
 },
 {
   "Prefixe": "entomo-",
   "Sens": "insecte",
   "Exemple": "entomologiste"
 },
 {
   "Prefixe": "entre-, inter-",
   "Sens": "Entre, réciproquement",
   "Exemple": "entreposer, entrecôte"
 },
 {
   "Prefixe": "éo-",
   "Sens": "aurore",
   "Exemple": "éocène"
 },
 {
   "Prefixe": "epi-",
   "Sens": "sur, au-dessus",
   "Exemple": "épiderme, épizootie"
 },
 {
   "Prefixe": "erg-",
   "Sens": "travail",
   "Exemple": "ergonomie"
 },
 {
   "Prefixe": "érythr-",
   "Sens": "rouge",
   "Exemple": "érythème, érythrine"
 },
 {
   "Prefixe": "eu-",
   "Sens": "agréable, bien, bon",
   "Exemple": "euphorie, euphémisme, euphonie"
 },
 {
   "Prefixe": "ex-",
   "Sens": "à  l'extérieur, hors, qui a cessé d'être",
   "Exemple": "expatrié, ex-employé"
 },
 {
   "Prefixe": "exo-",
   "Sens": "au-dehors",
   "Exemple": "exotisme, exonérer"
 },
 {
   "Prefixe": "extra-",
   "Sens": "superlatif, hors de",
   "Exemple": "extra-fin, extraordinaire, extra-territorialité"
 },
 {
   "Prefixe": "galact(o)-",
   "Sens": "lait",
   "Exemple": "galactose, galaxie"
 },
 {
   "Prefixe": "gam(o)-",
   "Sens": "mariage",
   "Exemple": "gamète"
 },
 {
   "Prefixe": "gastro-",
   "Sens": "ventre",
   "Exemple": "gastropodes, gastronome"
 },
 {
   "Prefixe": "gé(o)-",
   "Sens": "terre",
   "Exemple": "géographie, géologie"
 },
 {
   "Prefixe": "genu-",
   "Sens": "genou",
   "Exemple": "génuflexion"
 },
 {
   "Prefixe": "géront(o)-",
   "Sens": "vieillard",
   "Exemple": "gérontocratie"
 },
 {
   "Prefixe": "gingiv-",
   "Sens": "gencive",
   "Exemple": "gingivite"
 },
 {
   "Prefixe": "gloss(o)-",
   "Sens": "langue",
   "Exemple": "glossaire"
 },
 {
   "Prefixe": "gluc(o)-",
   "Sens": "doux",
   "Exemple": "glucose, glycogène"
 },
 {
   "Prefixe": "glyc(o)-, glycér(o)-",
   "Sens": "doux",
   "Exemple": "glycérine"
 },
 {
   "Prefixe": "granul-",
   "Sens": "granulation",
   "Exemple": "granuleux"
 },
 {
   "Prefixe": "graph(o)-",
   "Sens": "écrire",
   "Exemple": "graphologie, graphème"
 },
 {
   "Prefixe": "gyn(éco)-",
   "Sens": "femme",
   "Exemple": "gynécée, gynécologie"
 },
 {
   "Prefixe": "gyro-",
   "Sens": "cercle",
   "Exemple": "gyroscope"
 },
 {
   "Prefixe": "hagi(o)-",
   "Sens": "sacré",
   "Exemple": "hagiographie"
 },
 {
   "Prefixe": "halo-",
   "Sens": "sel",
   "Exemple": "halogène"
 },
 {
   "Prefixe": "hecto-",
   "Sens": "cent",
   "Exemple": "hectomètre"
 },
 {
   "Prefixe": "héli(o)-",
   "Sens": "soleil",
   "Exemple": "héliothérapie"
 },
 {
   "Prefixe": "hémat(o)-, hémo-",
   "Sens": "sang",
   "Exemple": "hématose, hémorragie"
 },
 {
   "Prefixe": "hémi-",
   "Sens": "demi",
   "Exemple": "hémicycle, hémisphère"
 },
 {
   "Prefixe": "hépat(o)-",
   "Sens": "foie",
   "Exemple": "hépatique, hépatite"
 },
 {
   "Prefixe": "hept(a)-",
   "Sens": "sept",
   "Exemple": "heptasyllabe"
 },
 {
   "Prefixe": "hétéro-",
   "Sens": "autre",
   "Exemple": "hétérogène"
 },
 {
   "Prefixe": "hexa-",
   "Sens": "six",
   "Exemple": "hexagone"
 },
 {
   "Prefixe": "hiér(o)-",
   "Sens": "sacré",
   "Exemple": "hiéroglyphe"
 },
 {
   "Prefixe": "hipp(o)-",
   "Sens": "cheval",
   "Exemple": "hippodrome"
 },
 {
   "Prefixe": "hist(o)-",
   "Sens": "tissu",
   "Exemple": "histologie"
 },
 {
   "Prefixe": "homéo-, hom(o)",
   "Sens": "semblable",
   "Exemple": "homéopathie, homologue"
 },
 {
   "Prefixe": "hor(o)-",
   "Sens": "heure",
   "Exemple": "horoscope, horodateur"
 },
 {
   "Prefixe": "hydr(o)-",
   "Sens": "eau (fluide)",
   "Exemple": "hydraulique, hydre, hydrologie, hydrothérapie"
 },
 {
   "Prefixe": "hygro-",
   "Sens": "humide",
   "Exemple": "hygromètre, hygroscope"
 },
 {
   "Prefixe": "hyper-",
   "Sens": "plus, au dessus",
   "Exemple": "hypermétrope, hypertension, hypertrophie"
 },
 {
   "Prefixe": "hypn(o)-",
   "Sens": "sommeil",
   "Exemple": "hypnose, hypnotisme"
 },
 {
   "Prefixe": "hypo-",
   "Sens": "moins, en dessous",
   "Exemple": "hypophyse, hypodermique"
 },
 {
   "Prefixe": "hystér(o)-",
   "Sens": "utérus",
   "Exemple": "hystérographie"
 },
 {
   "Prefixe": "iatr-, -iâtre",
   "Sens": "médecin",
   "Exemple": "pédiatre"
 },
 {
   "Prefixe": "icon(o)-",
   "Sens": "image",
   "Exemple": "icône, iconoclaste"
 },
 {
   "Prefixe": "idé(o)-",
   "Sens": "idée",
   "Exemple": "idéogramme, idéologie"
 },
 {
   "Prefixe": "idi(o)-",
   "Sens": "particulier",
   "Exemple": "idiome, idiotisme"
 },
 {
   "Prefixe": "in-, im-, il-, ir-",
   "Sens": "entrer, privé de, négation",
   "Exemple": "infiltrer, insinuer, illettré, impropre, inexact"
 },
 {
   "Prefixe": "inter-",
   "Sens": "entre",
   "Exemple": "interallié, interligne"
 },
 {
   "Prefixe": "intra-",
   "Sens": "au-dedans",
   "Exemple": "intramusculaire"
 },
 {
   "Prefixe": "isch-",
   "Sens": "suppression, arrêt",
   "Exemple": "ischémique"
 },
 {
   "Prefixe": "iso-",
   "Sens": "égal",
   "Exemple": "isomorphe, isotherme"
 },
 {
   "Prefixe": "juxta-",
   "Sens": "auprès de",
   "Exemple": "juxtalinéaire, juxtaposer"
 },
 {
   "Prefixe": "kali-",
   "Sens": "potassium",
   "Exemple": "kaliémie"
 },
 {
   "Prefixe": "kilo-",
   "Sens": "mille",
   "Exemple": "kilogramme"
 },
 {
   "Prefixe": "kinés-, kinét-",
   "Sens": "mouvement",
   "Exemple": "kinestésie"
 },
 {
   "Prefixe": "lapar-",
   "Sens": "paroi abdominale",
   "Exemple": "laparoscopie"
 },
 {
   "Prefixe": "laryng(o)-",
   "Sens": "gorge",
   "Exemple": "laryngologie"
 },
 {
   "Prefixe": "leuc-, leuco-",
   "Sens": "blanc",
   "Exemple": "leucocyte, leucémie"
 },
 {
   "Prefixe": "lipo-",
   "Sens": "lipide",
   "Exemple": "liposuccion"
 },
 {
   "Prefixe": "litho-",
   "Sens": "pierre",
   "Exemple": "lithographique"
 },
 {
   "Prefixe": "loco-",
   "Sens": "mettre en mouvement",
   "Exemple": "locomotion"
 },
 {
   "Prefixe": "log(o)-",
   "Sens": "discours, science",
   "Exemple": "logomachie"
 },
 {
   "Prefixe": "lomb-",
   "Sens": "région lombaire",
   "Exemple": "lombalgie"
 },
 {
   "Prefixe": "lum-",
   "Sens": "lumière, partie creuse d'un tube",
   "Exemple": "luminaire, luminance, luminisme, lumitype"
 },
 {
   "Prefixe": "macro-",
   "Sens": "grand",
   "Exemple": "macrocosme"
 },
 {
   "Prefixe": "mi-",
   "Sens": "milieu",
   "Exemple": "midi, mi-figue, mi-raisin"
 },
 {
   "Prefixe": "micro-",
   "Sens": "petit",
   "Exemple": "microbe, microbiologie"
 },
 {
   "Prefixe": "mis(o)-",
   "Sens": "haine",
   "Exemple": "misanthrope, misogyne"
 },
 {
   "Prefixe": "mném(o)-",
   "Sens": "mémoire",
   "Exemple": "mnémotechnique"
 },
 {
   "Prefixe": "mono-",
   "Sens": "seul",
   "Exemple": "monogramme, monolithe"
 },
 {
   "Prefixe": "morpho-",
   "Sens": "forme",
   "Exemple": "morphologie"
 },
 {
   "Prefixe": "multi-",
   "Sens": "nombreux",
   "Exemple": "multicolore, multiforme, multiple"
 },
 {
   "Prefixe": "myco-",
   "Sens": "champignon",
   "Exemple": "mycologie"
 },
 {
   "Prefixe": "myél-",
   "Sens": "moelle",
   "Exemple": "myélopathie"
 },
 {
   "Prefixe": "myo-",
   "Sens": "muscle",
   "Exemple": "myocarde"
 },
 {
   "Prefixe": "myri(a)-",
   "Sens": "dix mille",
   "Exemple": "myriade"
 },
 {
   "Prefixe": "mythe-",
   "Sens": "légende",
   "Exemple": "mythologie"
 },
 {
   "Prefixe": "nas-",
   "Sens": "nez",
   "Exemple": "nasalisation, nasique"
 },
 {
   "Prefixe": "natr-",
   "Sens": "sodium",
   "Exemple": "natrémie"
 },
 {
   "Prefixe": "nécro-",
   "Sens": "mort",
   "Exemple": "nécrologie, nécropole"
 },
 {
   "Prefixe": "néo-",
   "Sens": "nouveau",
   "Exemple": "néologisme, néophyte"
 },
 {
   "Prefixe": "néphr(o)-",
   "Sens": "rein",
   "Exemple": "néphrite"
 },
 {
   "Prefixe": "neuro-, névr-",
   "Sens": "nerf",
   "Exemple": "neurologie, névralgie"
 },
 {
   "Prefixe": "névr-",
   "Sens": "nerf",
   "Exemple": "névrose"
 },
 {
   "Prefixe": "nigr-, négr(o)-",
   "Sens": "noir",
   "Exemple": "nigéro-congolais, négritude"
 },
 {
   "Prefixe": "non-",
   "Sens": "négation",
   "Exemple": "nonchalant"
 },
 {
   "Prefixe": "noso-",
   "Sens": "maladie",
   "Exemple": "nosologie"
 },
 {
   "Prefixe": "nuclé-",
   "Sens": "noyau",
   "Exemple": "nucléaire"
 },
 {
   "Prefixe": "ob-, oc-, of-, op-",
   "Sens": "devant, en opposition",
   "Exemple": "obnubiler"
 },
 {
   "Prefixe": "octa-, octo-",
   "Sens": "huit",
   "Exemple": "octaèdre, octogone"
 },
 {
   "Prefixe": "ocul-",
   "Sens": "oeil",
   "Exemple": "occulter"
 },
 {
   "Prefixe": "odont(o)-",
   "Sens": "dent",
   "Exemple": "odontologie"
 },
 {
   "Prefixe": "olfact-",
   "Sens": "odorat",
   "Exemple": "olfactif"
 },
 {
   "Prefixe": "olig(o)-",
   "Sens": "peu nombreux",
   "Exemple": "oligarchie"
 },
 {
   "Prefixe": "omni-",
   "Sens": "tout",
   "Exemple": "omniscient, omnivore"
 },
 {
   "Prefixe": "onco-",
   "Sens": "tumeur",
   "Exemple": "oncologie"
 },
 {
   "Prefixe": "oniro-",
   "Sens": "songé",
   "Exemple": "oniromancie, onirique"
 },
 {
   "Prefixe": "ophtalm(o)-",
   "Sens": "oeil",
   "Exemple": "ophtalmologie"
 },
 {
   "Prefixe": "orchi-",
   "Sens": "testicule",
   "Exemple": "orchidée"
 },
 {
   "Prefixe": "ornitho-",
   "Sens": "oiseau",
   "Exemple": "ornithologiste"
 },
 {
   "Prefixe": "oro-",
   "Sens": "montagne",
   "Exemple": "orographie"
 },
 {
   "Prefixe": "ortho-",
   "Sens": "droit",
   "Exemple": "orthographe, orthopédie"
 },
 {
   "Prefixe": "osm-",
   "Sens": "odeur",
   "Exemple": "osmium"
 },
 {
   "Prefixe": "osté(o)-",
   "Sens": "os",
   "Exemple": "ostéite, ostéomyélite"
 },
 {
   "Prefixe": "ot(o)-",
   "Sens": "oreille",
   "Exemple": "oto-rhino-laryngologie"
 },
 {
   "Prefixe": "outre-",
   "Sens": "au-delà  de",
   "Exemple": "outrepasser"
 },
 {
   "Prefixe": "ovari-",
   "Sens": "ovaire",
   "Exemple": "ovarien, ovarite"
 },
 {
   "Prefixe": "oxy-",
   "Sens": "aigu, acide",
   "Exemple": "oxyton, oxygène"
 },
 {
   "Prefixe": "pachy-",
   "Sens": "épais",
   "Exemple": "pachyderme"
 },
 {
   "Prefixe": "paléo-",
   "Sens": "ancien",
   "Exemple": "paléographie, paléolithique"
 },
 {
   "Prefixe": "pan-, pant(o)-",
   "Sens": "tout",
   "Exemple": "panthéisme, pantographe"
 },
 {
   "Prefixe": "par-, per-",
   "Sens": "à  travers, achèvement",
   "Exemple": "parcourir"
 },
 {
   "Prefixe": "para-",
   "Sens": "contre, auprès",
   "Exemple": "parasite"
 },
 {
   "Prefixe": "path-",
   "Sens": "maladie",
   "Exemple": "pathologie"
 },
 {
   "Prefixe": "path(o)-",
   "Sens": "souffrance",
   "Exemple": "pathogène, pathologie"
 },
 {
   "Prefixe": "péd-",
   "Sens": "enfant",
   "Exemple": "pédagogie, pédiatrie"
 },
 {
   "Prefixe": "péni-",
   "Sens": "pauvreté, diminution",
   "Exemple": "pénitence, pénitencier"
 },
 {
   "Prefixe": "penta-",
   "Sens": "cinq",
   "Exemple": "pentagone"
 },
 {
   "Prefixe": "per-",
   "Sens": "à  travers",
   "Exemple": "percolateur, perforer"
 },
 {
   "Prefixe": "peri-",
   "Sens": "autour",
   "Exemple": "périoste, périphrase, périphérique"
 },
 {
   "Prefixe": "phago-",
   "Sens": "manger",
   "Exemple": "phagocyte"
 },
 {
   "Prefixe": "pharmac(o)-",
   "Sens": "médicament",
   "Exemple": "pharmaceutique, pharmacopée"
 },
 {
   "Prefixe": "pharyng(o)-",
   "Sens": "gosier",
   "Exemple": "pharyngite"
 },
 {
   "Prefixe": "phén(o)-",
   "Sens": "apparaître",
   "Exemple": "phénomène"
 },
 {
   "Prefixe": "phil(o)-",
   "Sens": "qui aime",
   "Exemple": "philanthrope, philatélie, philosophie"
 },
 {
   "Prefixe": "phléb-",
   "Sens": "veine",
   "Exemple": "phlébite"
 },
 {
   "Prefixe": "phon(o)-",
   "Sens": "voix",
   "Exemple": "phonographe"
 },
 {
   "Prefixe": "photo-",
   "Sens": "lumière",
   "Exemple": "photographe"
 },
 {
   "Prefixe": "phréno-",
   "Sens": "diaphragme",
   "Exemple": "phrénique"
 },
 {
   "Prefixe": "phyllo-",
   "Sens": "feuille",
   "Exemple": "phylloxéra"
 },
 {
   "Prefixe": "phys(io)-",
   "Sens": "nature",
   "Exemple": "physiocrate, physique"
 },
 {
   "Prefixe": "phyt(o)-",
   "Sens": "plante",
   "Exemple": "phytophage"
 },
 {
   "Prefixe": "plast-",
   "Sens": "façonné",
   "Exemple": "plasticité, plastique"
 },
 {
   "Prefixe": "pleur-",
   "Sens": "plèvre (membrane du thorax)",
   "Exemple": "pleurodynie"
 },
 {
   "Prefixe": "pleur(o)-",
   "Sens": "côté",
   "Exemple": "pleurite"
 },
 {
   "Prefixe": "plouto-",
   "Sens": "richesse",
   "Exemple": "ploutocratie"
 },
 {
   "Prefixe": "pneum-, pneumat-",
   "Sens": "air, respiration",
   "Exemple": "pneumatique"
 },
 {
   "Prefixe": "pneumo-",
   "Sens": "poumon",
   "Exemple": "pneumonie"
 },
 {
   "Prefixe": "pod(o)-",
   "Sens": "pied",
   "Exemple": "podomètre"
 },
 {
   "Prefixe": "polio-",
   "Sens": "substance grise",
   "Exemple": "poliomyélite"
 },
 {
   "Prefixe": "poly-",
   "Sens": "nombreux",
   "Exemple": "polyèdre, polygone"
 },
 {
   "Prefixe": "post-",
   "Sens": "après",
   "Exemple": "postdater, postscolaire"
 },
 {
   "Prefixe": "pré-",
   "Sens": "devant",
   "Exemple": "préétabli, préhistoire, préliminaire"
 },
 {
   "Prefixe": "pro-",
   "Sens": "en avant",
   "Exemple": "proposer, projeter, prolonger"
 },
 {
   "Prefixe": "proct-",
   "Sens": "anus",
   "Exemple": "proctologie"
 },
 {
   "Prefixe": "prosop-",
   "Sens": "visage",
   "Exemple": "prosopopée"
 },
 {
   "Prefixe": "prosta-",
   "Sens": "prostate",
   "Exemple": "prostatique"
 },
 {
   "Prefixe": "prot(o)-",
   "Sens": "premier",
   "Exemple": "prototype"
 },
 {
   "Prefixe": "proté-",
   "Sens": "protéine, forme changeante",
   "Exemple": "protéolyse"
 },
 {
   "Prefixe": "pseud(o)-",
   "Sens": "faux",
   "Exemple": "pseudonyme"
 },
 {
   "Prefixe": "psych(o)-",
   "Sens": "âme",
   "Exemple": "psychologue"
 },
 {
   "Prefixe": "ptéro-",
   "Sens": "aile",
   "Exemple": "ptérodactyle"
 },
 {
   "Prefixe": "pulm-",
   "Sens": "poumon",
   "Exemple": "pulmonaire"
 },
 {
   "Prefixe": "pyél-",
   "Sens": "bassinet du rein",
   "Exemple": "pyélite"
 },
 {
   "Prefixe": "pyo-",
   "Sens": "pus, suppuration",
   "Exemple": "pyogène"
 },
 {
   "Prefixe": "pyr(o)-",
   "Sens": "feu",
   "Exemple": "pyrotechnie"
 },
 {
   "Prefixe": "quadr(i)-, quadru-",
   "Sens": "quatre",
   "Exemple": "quadrijumeaux, quadrupède"
 },
 {
   "Prefixe": "quasi-",
   "Sens": "presque",
   "Exemple": "quasi-contrat, quasi-délit"
 },
 {
   "Prefixe": "quinqu-",
   "Sens": "cinq",
   "Exemple": "quinquagénaire, quinquennal"
 },
 {
   "Prefixe": "r(e)-",
   "Sens": "de nouveau",
   "Exemple": "rouvrir, réargenter"
 },
 {
   "Prefixe": "rachi-",
   "Sens": "colonne vertébrale",
   "Exemple": "rachidien"
 },
 {
   "Prefixe": "radio-",
   "Sens": "rayon",
   "Exemple": "radiographie, radiologie"
 },
 {
   "Prefixe": "rect-",
   "Sens": "rectum",
   "Exemple": "rectoscopie"
 },
 {
   "Prefixe": "rétro-",
   "Sens": "en retour",
   "Exemple": "rétroactif, rétrograder"
 },
 {
   "Prefixe": "rhino-",
   "Sens": "nez",
   "Exemple": "rhinocéros"
 },
 {
   "Prefixe": "rhizo-",
   "Sens": "racine",
   "Exemple": "rhizome, rhizopodes"
 },
 {
   "Prefixe": "rhodo-",
   "Sens": "rose",
   "Exemple": "rhododendron"
 },
 {
   "Prefixe": "rub-",
   "Sens": "rouge",
   "Exemple": "rubéole"
 },
 {
   "Prefixe": "sarco-",
   "Sens": "chair",
   "Exemple": "sarcophage"
 },
 {
   "Prefixe": "saur-",
   "Sens": "lézard",
   "Exemple": "sauriens"
 },
 {
   "Prefixe": "scaph-",
   "Sens": "barque",
   "Exemple": "scaphandrier"
 },
 {
   "Prefixe": "schizo-",
   "Sens": "qui fend",
   "Exemple": "schizophrénie"
 },
 {
   "Prefixe": "séma-",
   "Sens": "signe",
   "Exemple": "sémantique, sémaphore"
 },
 {
   "Prefixe": "séméio-, sémio-",
   "Sens": "signe",
   "Exemple": "sémiologie"
 },
 {
   "Prefixe": "semi-",
   "Sens": "demi",
   "Exemple": "semi-circulaire"
 },
 {
   "Prefixe": "sidér(o)-",
   "Sens": "fer",
   "Exemple": "sidérurgique"
 },
 {
   "Prefixe": "simili-",
   "Sens": "semblable",
   "Exemple": "similigravure, simili marbre"
 },
 {
   "Prefixe": "solén(o)-",
   "Sens": "tuyau",
   "Exemple": "solénoïde"
 },
 {
   "Prefixe": "somat(o)-",
   "Sens": "corps",
   "Exemple": "somatique"
 },
 {
   "Prefixe": "sou-, sous-, suc-, suf-, sug-, sup-",
   "Sens": "sous, presque",
   "Exemple": "soucoupe"
 },
 {
   "Prefixe": "spélé(o)-",
   "Sens": "caverne",
   "Exemple": "spéléologie"
 },
 {
   "Prefixe": "sphéno-",
   "Sens": "coin",
   "Exemple": "sphénoïde"
 },
 {
   "Prefixe": "sphér(o)-",
   "Sens": "globe",
   "Exemple": "sphérique, sphénoïde"
 },
 {
   "Prefixe": "spin-",
   "Sens": "épine, moelle épinière",
   "Exemple": "spinal"
 },
 {
   "Prefixe": "splén-",
   "Sens": "rate",
   "Exemple": "splénite"
 },
 {
   "Prefixe": "spondyl-",
   "Sens": "vertèbre",
   "Exemple": "spondylite"
 },
 {
   "Prefixe": "stat-",
   "Sens": "stable",
   "Exemple": "statique, statistique"
 },
 {
   "Prefixe": "stéa-",
   "Sens": "graisse",
   "Exemple": "stéarine"
 },
 {
   "Prefixe": "stéré(o)-",
   "Sens": "solide",
   "Exemple": "stéréoscope"
 },
 {
   "Prefixe": "stomat(o)-",
   "Sens": "bouche",
   "Exemple": "stomatologie"
 },
 {
   "Prefixe": "styl(o)-",
   "Sens": "colonne",
   "Exemple": "stylite"
 },
 {
   "Prefixe": "sub-",
   "Sens": "sous",
   "Exemple": "subalterne, subdélégué, subdiviser"
 },
 {
   "Prefixe": "super-, supra-",
   "Sens": "au-dessus",
   "Exemple": "superstructure, supranational"
 },
 {
   "Prefixe": "sus-",
   "Sens": "au dessus, plus",
   "Exemple": "sus-mentionné"
 },
 {
   "Prefixe": "sy-, syn-, sym-",
   "Sens": "avec",
   "Exemple": "sympathie, synonyme"
 },
 {
   "Prefixe": "tachy-",
   "Sens": "rapide",
   "Exemple": "tachymètre"
 },
 {
   "Prefixe": "tauto-",
   "Sens": "le même",
   "Exemple": "tautologie"
 },
 {
   "Prefixe": "taxi-",
   "Sens": "taxe",
   "Exemple": "taximètre"
 },
 {
   "Prefixe": "techn(o)-",
   "Sens": "art",
   "Exemple": "technique, technologie"
 },
 {
   "Prefixe": "télé-",
   "Sens": "loin",
   "Exemple": "télépathie, téléphone"
 },
 {
   "Prefixe": "térat-",
   "Sens": "monstre",
   "Exemple": "tératologie"
 },
 {
   "Prefixe": "tétra-",
   "Sens": "quatre",
   "Exemple": "tétragone"
 },
 {
   "Prefixe": "thalasso-",
   "Sens": "mer",
   "Exemple": "thalassothérapie"
 },
 {
   "Prefixe": "théo-",
   "Sens": "dieu",
   "Exemple": "théocratie, théologie"
 },
 {
   "Prefixe": "thérapeut-",
   "Sens": "qui soigne",
   "Exemple": "thérapeutique"
 },
 {
   "Prefixe": "therm(o)-",
   "Sens": "chaleur",
   "Exemple": "thermomètre"
 },
 {
   "Prefixe": "thorac-",
   "Sens": "thorax",
   "Exemple": "thoracique"
 },
 {
   "Prefixe": "thromb-",
   "Sens": "coagulation, caillot",
   "Exemple": "thrombose"
 },
 {
   "Prefixe": "top(o)-",
   "Sens": "lieu",
   "Exemple": "topographie, toponymie"
 },
 {
   "Prefixe": "trans-",
   "Sens": "au-delà  de, à  travers",
   "Exemple": "transformer, transhumant"
 },
 {
   "Prefixe": "trauma-, traumat-",
   "Sens": "blessure, choc violent",
   "Exemple": "traumatisé"
 },
 {
   "Prefixe": "tré-",
   "Sens": "au-delà ",
   "Exemple": "trépasser"
 },
 {
   "Prefixe": "tri-",
   "Sens": "trois",
   "Exemple": "tripartite, trisaieul, tricolore"
 },
 {
   "Prefixe": "trich-",
   "Sens": "poil",
   "Exemple": "trichogramme"
 },
 {
   "Prefixe": "typo-",
   "Sens": "caractère",
   "Exemple": "typographie, typologie"
 },
 {
   "Prefixe": "ultra-",
   "Sens": "au-delà  de",
   "Exemple": "ultrason, ultraviolet"
 },
 {
   "Prefixe": "uni-",
   "Sens": "un",
   "Exemple": "uniforme"
 },
 {
   "Prefixe": "urano-",
   "Sens": "ciel",
   "Exemple": "uranographie"
 },
 {
   "Prefixe": "uré-",
   "Sens": "urine",
   "Exemple": "urémie"
 },
 {
   "Prefixe": "urétr-",
   "Sens": "urètre",
   "Exemple": "urétral"
 },
 {
   "Prefixe": "vas-",
   "Sens": "vaisseau",
   "Exemple": "vasomoteur"
 },
 {
   "Prefixe": "vascul-",
   "Sens": "vaisseau sanguin",
   "Exemple": "vasculaire"
 },
 {
   "Prefixe": "vésic-",
   "Sens": "vessie",
   "Exemple": "vésicule"
 },
 {
   "Prefixe": "vi-, vice-",
   "Sens": "suppléance",
   "Exemple": "vice-président, vice-amiral"
 },
 {
   "Prefixe": "viscér-",
   "Sens": "viscère",
   "Exemple": "viscéral"
 },
 {
   "Prefixe": "xanth-",
   "Sens": "jaune",
   "Exemple": "xanthine"
 },
 {
   "Prefixe": "xén(o)-",
   "Sens": "étranger",
   "Exemple": "xénophobe"
 },
 {
   "Prefixe": "xér(o)-",
   "Sens": "sec",
   "Exemple": "xérophagie"
 },
 {
   "Prefixe": "xylo-",
   "Sens": "bois",
   "Exemple": "xylophone"
 },
 {
   "Prefixe": "zoo-",
   "Sens": "animal",
   "Exemple": "zoologie"
 },
 {
   "Prefixe": "mal-, malé-, mau-",
   "Sens": "mauvais",
   "Exemple": "malodorant, maléfique"
 },
 {
   "Prefixe": "mé-, més-",
   "Sens": "mauvais",
   "Exemple": "médisance, mésalliance"
 },
 {
   "Prefixe": "médull-",
   "Sens": "moelle",
   "Exemple": "médullaire"
 },
 {
   "Prefixe": "méga-, mégalo-",
   "Sens": "grand, gros",
   "Exemple": "mégalithe, mégalomane"
 },
 {
   "Prefixe": "melo-",
   "Sens": "chant",
   "Exemple": "mélodique, mélodrame"
 },
 {
   "Prefixe": "més(o)-",
   "Sens": "milieu",
   "Exemple": "mésopotamien"
 },
 {
   "Prefixe": "meta-",
   "Sens": "après, changement",
   "Exemple": "métamorphose, métaphysique"
 },
 {
   "Prefixe": "météor(o)-",
   "Sens": "élevé dans les airs",
   "Exemple": "météore, météorologie"
 },
 {
   "Prefixe": "métr(o)-",
   "Sens": "mesure",
   "Exemple": "métrique, métronome"
 }
];
