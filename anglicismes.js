const entete = "Lequel de ces usages est un anglicisme :";
const nbr_choix = 4;
const data = [
 {
   "FIELD1": "abolir complètement",
   "FIELD2": "abolir"
 },
 {
   "FIELD1": "académique (année ~ , formation ~)",
   "FIELD2": "scolaire (année ~ , formation ~)"
 },
 {
   "FIELD1": "accéder des informations",
   "FIELD2": "accéder à des informations"
 },
 {
   "FIELD1": "accumuler les erreurs les unes sur les autres",
   "FIELD2": "Accumuler les erreurs"
 },
 {
   "FIELD1": "acétate (sur un rétroprojecteur)",
   "FIELD2": "transparent (sur un rétroprojecteur)"
 },
 {
   "FIELD1": "à chaque (~ fois, ~ jour)",
   "FIELD2": "chaque (~ fois, ~ jour)"
 },
 {
   "FIELD1": "achever complètement (~ un ouvrage)",
   "FIELD2": "achever (~ un ouvrage)"
 },
 {
   "FIELD1": "acquis (prendre pour ~)",
   "FIELD2": "tenir pour acquis"
 },
 {
   "FIELD1": "à date (~ il n'y a rien de nouveau)",
   "FIELD2": "à ce jour, jusqu'à maintenant (~ il n'y a rien de nouveau)"
 },
 {
   "FIELD1": "à date (le rapport est ~)",
   "FIELD2": "à jour (le rapport est ~)"
 },
 {
   "FIELD1": "admission (payer son ~ au cinéma)",
   "FIELD2": "entrée (payer son ~ au cinéma)"
 },
 {
   "FIELD1": "adresse (le ministre a fait une ~ à la population)",
   "FIELD2": "allocution (le ministre a fait une ~ à la population) [il n’y a adresse que si le discours est dirigé vers un souverain]"
 },
 {
   "FIELD1": "adresser une tâche, un problème",
   "FIELD2": "s'atteler à une tâche, s'attaquer à, traiter"
 },
 {
   "FIELD1": "affaires (être en ~)",
   "FIELD2": "affaires (être dans les ~, faire des ~)"
 },
 {
   "FIELD1": "affaires (être d'~)",
   "FIELD2": "affaires (avoir le sens des ~)"
 },
 {
   "FIELD1": "affaires (faire ~ au Québec)",
   "FIELD2": "être établi (~ au Québec)"
 },
 {
   "FIELD1": "affaires (se lancer en ~)",
   "FIELD2": "affaires (se lancer dans les ~)"
 },
 {
   "FIELD1": "agenda (ce n'est pas à l'~ de la réunion)",
   "FIELD2": "ordre du jour (ce n'est pas à l'~ de la réunion)"
 },
 {
   "FIELD1": "aider (lui ~ / leur ~)",
   "FIELD2": "aider (l' ~ / les ~)"
 },
 {
   "FIELD1": "aiguiser un crayon",
   "FIELD2": "tailler un crayon"
 },
 {
   "FIELD1": "agressif (un représentant ~)",
   "FIELD2": "dynamique (un représentant ~)"
 },
 {
   "FIELD1": "ajusteur d'assurances",
   "FIELD2": "expert en sinistre"
 },
 {
   "FIELD1": "à l'effet que (l'information ~)",
   "FIELD2": "voulant que, selon laquelle (l'information ~)"
 },
 {
   "FIELD1": "altérations (faire des ~)",
   "FIELD2": "retouches, modifications (faire des ~)"
 },
 {
   "FIELD1": "alternatives (deux ~)",
   "FIELD2": "possibilités, solutions (deux ~) [une alternative comporte toujours deux termes, deux voies, deux solutions.]"
 },
 {
   "FIELD1": "anéantir complètement",
   "FIELD2": "anéantir"
 },
 {
   "FIELD1": "année fiscale",
   "FIELD2": "exercice financier"
 },
 {
   "FIELD1": "année longue (à l'~)",
   "FIELD2": "longueur d'année (à ~)"
 },
 {
   "FIELD1": "annonces classées",
   "FIELD2": "petites annonces"
 },
 {
   "FIELD1": "anxieux (être ~ de rencontrer...)",
   "FIELD2": "impatient  (être ~ de rencontrer...), avoir hâte (~ de rencontrer...) [en français, anxieux = inquiet et la forme de la colonne de gauche est correcte si la rencontre vous rend inquiet]"
 },
 {
   "FIELD1": "apogée (au maximum de son ~)",
   "FIELD2": "apogée (à son ~)"
 },
 {
   "FIELD1": "à pleine capacité",
   "FIELD2": "bondé, plein à craquer"
 },
 {
   "FIELD1": "appel conférence",
   "FIELD2": "conférence téléphonique"
 },
 {
   "FIELD1": "application (faire une ~)",
   "FIELD2": "demande d'emploi (faire une ~)"
 },
 {
   "FIELD1": "appointement (un ~ chez le dentiste)",
   "FIELD2": "rendez-vous (un ~ chez le dentiste)"
 },
 {
   "FIELD1": "apprécier que (vous devez ~ je vous aie aidé)",
   "FIELD2": "être reconnaissant, aimer (vous devez ~ que je vous aie aidé) [on ne peut qu'apprécier une chose, un spectacle, une oeuvre d'art, etc.]"
 },
 {
   "FIELD1": "après que l'orage soit passé",
   "FIELD2": "après que l'orage est passé [on doit utiliser un temps de l'indicatif après l'expression après que]"
 },
 {
   "FIELD1": "à prime abord",
   "FIELD2": "de prime abord"
 },
 {
   "FIELD1": "À qui de droit, (en début de lettre)",
   "FIELD2": "Madame, Monsieur ou Mesdames, Messieurs"
 },
 {
   "FIELD1": "argents (les ~)",
   "FIELD2": "sommes, fonds (les ~)"
 },
 {
   "FIELD1": "argument (avoir un ~ avec)",
   "FIELD2": "discuter (~ avec)"
 },
 {
   "FIELD1": "arriérages",
   "FIELD2": "arrérages"
 },
 {
   "FIELD1": "à son meilleur ( une athlète ~)",
   "FIELD2": "au meilleur de sa forme ( une athlète ~)"
 },
 {
   "FIELD1": "assemblée spéciale",
   "FIELD2": "assemblée extraordinaire"
 },
 {
   "FIELD1": "assignation (~ temporaire)",
   "FIELD2": "affectation (~ temporaire)"
 },
 {
   "FIELD1": "assigner ( ~ qqn à une tâche)",
   "FIELD2": "assigner ( ~ une tâche à qqn)"
 },
 {
   "FIELD1": "assumer (~ que vous parlez russe)",
   "FIELD2": "présumer, supposer (~ que vous parlez russe)"
 },
 {
   "FIELD1": "audience (ce discours connaît une grande ~)",
   "FIELD2": "écoute (ce discours connaît une grande ~)"
 },
 {
   "FIELD1": "autant pour moi",
   "FIELD2": "au temps pour moi"
 },
 {
   "FIELD1": "autant que (en ~)",
   "FIELD2": "dans la mesure où"
 },
 {
   "FIELD1": "avant (le jour ~)",
   "FIELD2": "précédent (le jour ~)"
 },
 {
   "FIELD1": "avec (s'enrhumer ~ ce froid)",
   "FIELD2": "par (s'enrhumer ~ ce froid)"
 },
 {
   "FIELD1": "avec (arriver ~ rien)",
   "FIELD2": "sans (arriver ~ rien)"
 },
 {
   "FIELD1": "avérer (cela pourrait s'avérer faux)",
   "FIELD2": "révéler (cela pourrait se ~ faux) [le verbe AVÉRER ne peut jamais être suivi d'un mot à sens négatif parce que ce verbe contient l’idée de vérité.]"
 },
 {
   "FIELD1": "avérer (cela pourrait s'avérer vrai)",
   "FIELD2": "s'avérer, se vérifier [s'avérer contient déjà l'idée de vérité]"
 },
 {
   "FIELD1": "aviseur (~ légal, ~ technique)",
   "FIELD2": "conseiller (~ juridique, ~ technique)"
 },
 {
   "FIELD1": "aviseur (comité ~)",
   "FIELD2": "conseil (comité ~)"
 },
 {
   "FIELD1": "avoir (cet arbre va ~ de beaux fruits)",
   "FIELD2": "porter, donner  (cet arbre va ~ de beaux fruits)"
 },
 {
   "FIELD1": "avoir (il va ~ droit de sortir)",
   "FIELD2": "avoir (il va ~ le droit de sortir)"
 },
 {
   "FIELD1": "Background",
   "FIELD2": "arrière-plan, contexte, antécédents, acquis"
 },
 {
   "FIELD1": "bal de graduation",
   "FIELD2": "bal de finissants, de fin d'études"
 },
 {
   "FIELD1": "balance (la ~ de mon compte)",
   "FIELD2": "solde (le ~ de mon compte)"
 },
 {
   "FIELD1": "bar à salades",
   "FIELD2": "comptoir à salades, buffet à salades"
 },
 {
   "FIELD1": "bed and breakfast",
   "FIELD2": "gîte touristique"
 },
 {
   "FIELD1": "bénéfice (réclamer un ~)",
   "FIELD2": "indemnité (réclamer une ~)"
 },
 {
   "FIELD1": "bénéfices marginaux",
   "FIELD2": "avantages sociaux"
 },
 {
   "FIELD1": "bénéficier (cela va ~ à tous)",
   "FIELD2": "profiter (cela va ~ à tous)"
 },
 {
   "FIELD1": "bip (après le ~ sonore)",
   "FIELD2": "bip (après le ~ )"
 },
 {
   "FIELD1": "blanc de mémoire",
   "FIELD2": "trou de mémoire"
 },
 {
   "FIELD1": "bloc (vivre dans un ~)",
   "FIELD2": "immeuble (vivre dans un ~)"
 },
 {
   "FIELD1": "boîte téléphonique",
   "FIELD2": "cabine téléphonique"
 },
 {
   "FIELD1": "boîte (la ~ d'un camion)",
   "FIELD2": "benne (la ~ d'un camion)"
 },
 {
   "FIELD1": "bon de réquisition",
   "FIELD2": "demande de (matériel, fournitures, etc.)"
 },
 {
   "FIELD1": "bonus (un ~ de 50 $)",
   "FIELD2": "prime (une ~ de 50 $)"
 },
 {
   "FIELD1": "brain-trust",
   "FIELD2": "conseil de direction"
 },
 {
   "FIELD1": "branche (une ~ d'une compagnie)",
   "FIELD2": "succursale (une ~ d'une compagnie)"
 },
 {
   "FIELD1": "branche (être compétent dans une ~)",
   "FIELD2": "domaine (être compétent dans un ~)"
 },
 {
   "FIELD1": "braquette de revenu",
   "FIELD2": "tranche de revenu"
 },
 {
   "FIELD1": "brasser les cartes",
   "FIELD2": "battre les cartes"
 },
 {
   "FIELD1": "bris de contrat",
   "FIELD2": "rupture de contrat"
 },
 {
   "FIELD1": "brocheuse (rassembler des feuilles avec une ~)",
   "FIELD2": "agrafeuse (rassembler des feuilles avec une ~) [une brocheuse est une machine pour faire la reliure de livres ou cahiers]"
 },
 {
   "FIELD1": "browseur",
   "FIELD2": "fureteur"
 },
 {
   "FIELD1": "bumper (~ un collègue à un poste)",
   "FIELD2": "supplanter (~ un collègue à un poste)"
 },
 {
   "FIELD1": "bureau chef",
   "FIELD2": "siège social"
 },
 {
   "FIELD1": "cachet d'aspirine",
   "FIELD2": "comprimé d'aspirine [le cachet est une enveloppe contenant un médicament en poudre]"
 },
 {
   "FIELD1": "cadre (dans le ~ du congrès, on a présenté...)",
   "FIELD2": "à l'occasion (~ du congrès, on a présenté...)"
 },
 {
   "FIELD1": "calendrier (année de ~)",
   "FIELD2": "civile (année ~)"
 },
 {
   "FIELD1": "camionette (une petite ~)",
   "FIELD2": "camionnette (une  ~)"
 },
 {
   "FIELD1": "canceller (~ un rendez-vous)",
   "FIELD2": "annuler  (~ un rendez-vous)"
 },
 {
   "FIELD1": "candidature (poser sa ~) pour un poste",
   "FIELD2": "candidature (poser sa ~) à un poste"
 },
 {
   "FIELD1": "car en effet",
   "FIELD2": "car"
 },
 {
   "FIELD1": "carte d'affaires",
   "FIELD2": "carte professionnelle"
 },
 {
   "FIELD1": "carte d'identification",
   "FIELD2": "carte d'identité"
 },
 {
   "FIELD1": "cash (payer ~)",
   "FIELD2": "comptant (payer ~)"
 },
 {
   "FIELD1": "casier postal",
   "FIELD2": "case postale"
 },
 {
   "FIELD1": "cauchemar (un mauvais ~)",
   "FIELD2": "cauchemar (un  ~)"
 },
 {
   "FIELD1": "cédule",
   "FIELD2": "calendrier, horaire"
 },
 {
   "FIELD1": "centre d'achats",
   "FIELD2": "centre commercial"
 },
 {
   "FIELD1": "certificat de naissance",
   "FIELD2": "acte de naissance"
 },
 {
   "FIELD1": "chambre de bain",
   "FIELD2": "salle de bain"
 },
 {
   "FIELD1": "chambre des joueurs",
   "FIELD2": "vestiaire"
 },
 {
   "FIELD1": "chances (les ~ d'une explosion)",
   "FIELD2": "risques (les ~ d'une explosion)"
 },
 {
   "FIELD1": "chaque (à ~ fois, à ~ jour)",
   "FIELD2": "chaque (~ fois, ~ jour)"
 },
 {
   "FIELD1": "chaque (j'ai payé les livres 20$ ~)",
   "FIELD2": "chacun (j'ai payé les livres 20$ ~)"
 },
 {
   "FIELD1": "charge (une personne en ~ de)",
   "FIELD2": "responsable (une personne ~ de)"
 },
 {
   "FIELD1": "charges renversées",
   "FIELD2": "frais virés"
 },
 {
   "FIELD1": "charger (~ 225 $)",
   "FIELD2": "facturer (~ 225 $)"
 },
 {
   "FIELD1": "charger (~ la soupe et le café)",
   "FIELD2": "facturer (~ la soupe et le café)"
 },
 {
   "FIELD1": "charter",
   "FIELD2": "vol ou avion nolisé"
 },
 {
   "FIELD1": "chercher après qqn ou qqch",
   "FIELD2": "chercher  qqn ou qqch"
 },
 {
   "FIELD1": "chiffre (~ de nuit)",
   "FIELD2": "quart, équipe (~ de nuit)"
 },
 {
   "FIELD1": "choisir au hasard",
   "FIELD2": "prendre au hasard [si on choisit, il n'y a plus de hasard]"
 },
 {
   "FIELD1": "ci-bas mentionné",
   "FIELD2": "mentionné ci-dessous"
 },
 {
   "FIELD1": "ciel constellé d'étoiles",
   "FIELD2": "ciel constellé (constellé veut dire étoilé)"
 },
 {
   "FIELD1": "ci-haut mentionné",
   "FIELD2": "mentionné ci-dessus"
 },
 {
   "FIELD1": "circulaire de publicité",
   "FIELD2": "dépliant publicitaire"
 },
 {
   "FIELD1": "clair (300 $ ~)",
   "FIELD2": "net (300 $ ~)"
 },
 {
   "FIELD1": "clairer (se faire ~)",
   "FIELD2": "congédier (se faire ~)"
 },
 {
   "FIELD1": "clauses orphelines",
   "FIELD2": "clauses de disparité de traitement"
 },
 {
   "FIELD1": "clé (appuyer sur la ~ retour)",
   "FIELD2": "touche (appuyer sur la ~ retour)"
 },
 {
   "FIELD1": "clérical (travail ~, personnel ~)",
   "FIELD2": "de bureau (travail ~, personnel ~)"
 },
 {
   "FIELD1": "cockpit (~ d'un avion)",
   "FIELD2": "poste ou cabine de pilotage (~ d'un avion)"
 },
 {
   "FIELD1": "code régional",
   "FIELD2": "indicatif régional"
 },
 {
   "FIELD1": "collaborer ensemble",
   "FIELD2": "collaborer"
 },
 {
   "FIELD1": "combler un poste",
   "FIELD2": "pourvoir un poste"
 },
 {
   "FIELD1": "commencer d'abord par...",
   "FIELD2": "commencer  par..."
 },
 {
   "FIELD1": "commémorer l'anniversaire de la naissance de...",
   "FIELD2": "commémorer la naissance de..."
 },
 {
   "FIELD1": "commémorer une personne, un anniversaire, un souvenir",
   "FIELD2": "célébrer une personne, un anniversaire, un souvenir [on commémore une naissance, une mort, un mariage, une victoire, etc.]"
 },
 {
   "FIELD1": "comme par exemple",
   "FIELD2": "par exemple"
 },
 {
   "FIELD1": "commercial (un ~ à la télévision)",
   "FIELD2": "message publicitaire (un ~ à la télévision)"
 },
 {
   "FIELD1": "compagnie (~ de finance)",
   "FIELD2": "société (~ de prêts, de crédit, de financement)"
 },
 {
   "FIELD1": "comparaison ( par ~ à)",
   "FIELD2": "comparaison (en ~ de), (par ~ avec)"
 },
 {
   "FIELD1": "comparer X et Y entre eux",
   "FIELD2": "comparer X et Y"
 },
 {
   "FIELD1": "compléter un formulaire",
   "FIELD2": "remplir un formulaire"
 },
 {
   "FIELD1": "compléter (~ des études de sciences)",
   "FIELD2": "terminer ou faire (~ des études de sciences)"
 },
 {
   "FIELD1": "complétion (la ~ d'une tâche)",
   "FIELD2": "achèvement (l'~ d'une tâche)"
 },
 {
   "FIELD1": "comporter en soi",
   "FIELD2": "comporter [en soi est redondant]"
 },
 {
   "FIELD1": "comptes payables",
   "FIELD2": "comptes fournisseurs"
 },
 {
   "FIELD1": "comptes recevables",
   "FIELD2": "comptes clients"
 },
 {
   "FIELD1": "comté (le député du ~)",
   "FIELD2": "circonscription (le député de la ~)"
 },
 {
   "FIELD1": "concerné (il est ~ par ce problème de chimie)",
   "FIELD2": "intéressé (il est ~ à ce problème de chimie)"
 },
 {
   "FIELD1": "conduire un orchestre",
   "FIELD2": "conduire un orchestre (faussement considéré comme un anglicisme)"
 },
 {
   "FIELD1": "confiant que (je suis ~  vous réussirez)",
   "FIELD2": "bon espoir que (j'ai ~ que vous réussirez) [Pour utiliser confiant il faut le faire suivre de EN ou de DANS suivi d'un nom. Je suis confiant dans votre succès.]"
 },
 {
   "FIELD1": "confortable (être ~ avec une décision, un règlement)",
   "FIELD2": "à l'aise  (être ~ avec une décision, un règlement)"
 },
 {
   "FIELD1": "conjoint (comité ~)",
   "FIELD2": "paritaire (comité ~)"
 },
 {
   "FIELD1": "connecter (~ un appareil)",
   "FIELD2": "brancher (~ un appareil)"
 },
 {
   "FIELD1": "concerter (se ~ ensemble)",
   "FIELD2": "se concerter"
 },
 {
   "FIELD1": "consensus commun",
   "FIELD2": "consensus"
 },
 {
   "FIELD1": "conservateur (un montant ~)",
   "FIELD2": "prudent (un montant ~)"
 },
 {
   "FIELD1": "considérer (le ~ habile) (le ~ imprudent)",
   "FIELD2": "considérer comme (le ~ habile) (le ~ imprudent)"
 },
 {
   "FIELD1": "consigne stricte",
   "FIELD2": "consigne (qui est déjà stricte)"
 },
 {
   "FIELD1": "container",
   "FIELD2": "conteneur"
 },
 {
   "FIELD1": "contracteur",
   "FIELD2": "entrepreneur"
 },
 {
   "FIELD1": "convention (la ~ des programmeurs)",
   "FIELD2": "congrès (le ~ des programmeurs)"
 },
 {
   "FIELD1": "cool (il semblait ~)",
   "FIELD2": "calme, détendu (il semblait ~)"
 },
 {
   "FIELD1": "cool (je trouve cela ~)",
   "FIELD2": "cela me va / cela me plaît"
 },
 {
   "FIELD1": "coordinateur",
   "FIELD2": "coordonnateur"
 },
 {
   "FIELD1": "copie (il n'y a plus aucune ~ de ce livre \n             dans les librairies)",
   "FIELD2": "exemplaire (il n'y a plus aucun ~ de ce livre dans les librairies) [une copie est une reproduction]"
 },
 {
   "FIELD1": "corporatif (droit ~, profil ~ )",
   "FIELD2": "entreprise(s) (droit des ~, profil de l'~)"
 },
 {
   "FIELD1": "corriger après coup",
   "FIELD2": "corriger (qui se fait toujours après avoir fait une erreur)"
 },
 {
   "FIELD1": "couler (laisser ~ de l'information)",
   "FIELD2": "filtrer (laisser ~ de l'information)"
 },
 {
   "FIELD1": "couper un poste (~ dans une entreprise)",
   "FIELD2": "supprimer un poste (~ dans une entreprise)"
 },
 {
   "FIELD1": "coupures budgétaires",
   "FIELD2": "restrictions budgétaires"
 },
 {
   "FIELD1": "cours privé",
   "FIELD2": "cours particulier"
 },
 {
   "FIELD1": "courtoisie (une ~ de la compagnie ZZ)",
   "FIELD2": "gracieuseté (une ~ de la compagnie ZZ)"
 },
 {
   "FIELD1": "coûts d'opération",
   "FIELD2": "frais d'exploitation"
 },
 {
   "FIELD1": "crack (un ~ de l'informatique)",
   "FIELD2": "as (un ~ de l'informatique)"
 },
 {
   "FIELD1": "créditer une somme à qqn",
   "FIELD2": "porter une somme à son compte"
 },
 {
   "FIELD1": "Dards (jouer aux ~)",
   "FIELD2": "fléchettes (jouer aux ~)"
 },
 {
   "FIELD1": "date (à ~)",
   "FIELD2": "à ce jour, jusqu'à maintenant"
 },
 {
   "FIELD1": "date (le rapport est à ~)",
   "FIELD2": "jour (le rapport est à ~)"
 },
 {
   "FIELD1": "date due (la ~ d'un paiement)",
   "FIELD2": "échéance (l' ~ d'un paiement)"
 },
 {
   "FIELD1": "date effective",
   "FIELD2": "date d'entrée en vigueur"
 },
 {
   "FIELD1": "déboursés (les ~)",
   "FIELD2": "débours (les ~)"
 },
 {
   "FIELD1": "débuter (~ un travail)",
   "FIELD2": "commencer (~ un travail) [Le verbe DÉBUTER n'a jamais de complément : Le spectacle débute à 8 heures.)"
 },
 {
   "FIELD1": "déconnecter (~ le téléphone)",
   "FIELD2": "débrancher (~ le téléphone)"
 },
 {
   "FIELD1": "dedans (en ~ de x minutes)",
   "FIELD2": "d'ici à (~ x minutes)"
 },
 {
   "FIELD1": "dédié (~ à son travail)",
   "FIELD2": "bien impliqué (~ dans son travail)"
 },
 {
   "FIELD1": "déductible (un ~ dans un contrat d'assurance)",
   "FIELD2": "franchise (une ~ dans un contrat d'assurance)"
 },
 {
   "FIELD1": "déduction (une ~ sur le salaire)",
   "FIELD2": "retenue (une ~ sur le salaire)"
 },
 {
   "FIELD1": "défendre une thèse",
   "FIELD2": "soutenir une thèse"
 },
 {
   "FIELD1": "définitivement (il sera ~ fâché)",
   "FIELD2": "assurément, certainement (il sera ~ fâché)"
 },
 {
   "FIELD1": "défrayer les dépenses de qqn",
   "FIELD2": "défrayer qqn"
 },
 {
   "FIELD1": "degré d'instruction",
   "FIELD2": "niveau de scolarité"
 },
 {
   "FIELD1": "délai (arriver avec un ~)",
   "FIELD2": "retard (arriver avec un ~)"
 },
 {
   "FIELD1": "demander après qqn ou qqch",
   "FIELD2": "demander  qqn ou qqch"
 },
 {
   "FIELD1": "démotion",
   "FIELD2": "rétrogradation"
 },
 {
   "FIELD1": "département (le ~ des chaussures)",
   "FIELD2": "rayon (le ~ des chaussures)"
 },
 {
   "FIELD1": "département de service",
   "FIELD2": "service de réparation"
 },
 {
   "FIELD1": "dépendamment (~ de la situation)",
   "FIELD2": "selon (~ la situation)"
 },
 {
   "FIELD1": "dépendants",
   "FIELD2": "personnes à charge"
 },
 {
   "FIELD1": "dépendant de la situation, ...",
   "FIELD2": "selon la situation, ..."
 },
 {
   "FIELD1": "dépenses d'opération",
   "FIELD2": "frais d'exploitation"
 },
 {
   "FIELD1": "dépôt (verser un ~ pour réserver un article)",
   "FIELD2": "acompte (verser un ~ pour réserver un article)"
 },
 {
   "FIELD1": "dépôt direct",
   "FIELD2": "virement automatique"
 },
 {
   "FIELD1": "dernières (les ~ 24 heures)",
   "FIELD2": "dernières (les 24 ~ heures)"
 },
 {
   "FIELD1": "derniers (les ~ trois jours)",
   "FIELD2": "derniers (les trois ~ jours)"
 },
 {
   "FIELD1": "descendre en bas",
   "FIELD2": "descendre / aller en bas"
 },
 {
   "FIELD1": "développement d'habitation",
   "FIELD2": "lotissement"
 },
 {
   "FIELD1": "devoir (être en ~)",
   "FIELD2": "service (être de ~)"
 },
 {
   "FIELD1": "différer à une date ultérieure",
   "FIELD2": "différer"
 },
 {
   "FIELD1": "digital(e) (montre ~)",
   "FIELD2": "numérique (montre ~)"
 },
 {
   "FIELD1": "digitaliser",
   "FIELD2": "numériser"
 },
 {
   "FIELD1": "directions (les ~ de montage)",
   "FIELD2": "directives (les ~ de montage)"
 },
 {
   "FIELD1": "directions (les ~ d'utilisation)",
   "FIELD2": "le mode d'emploi"
 },
 {
   "FIELD1": "disponible (un produit ~)",
   "FIELD2": "en vente (un produit ~) [il n'y a que les personnes qui puissent être disponibles]"
 },
 {
   "FIELD1": "disponibilité (être à la ~ de qqn)",
   "FIELD2": "disposition (être à la ~ de qqn)"
 },
 {
   "FIELD1": "disposer (~ qqch. dans la poubelle)",
   "FIELD2": "jeter (~ qqch. dans la poubelle)"
 },
 {
   "FIELD1": "disposer (~ d'une question, d'un problème)",
   "FIELD2": "débattre, régler (~ d'une question, d'un problème)"
 },
 {
   "FIELD1": "disposer (~ d'un opposant)",
   "FIELD2": "battre, vaincre (~ un opposant)"
 },
 {
   "FIELD1": "divorcer (se) (ils se sont divorcés)",
   "FIELD2": "divorcer (ils ont divorcé) [ne s'emploie jamais à la forme pronominale]"
 },
 {
   "FIELD1": "domestique (le commerce ~)",
   "FIELD2": "intérieur (le commerce ~)"
 },
 {
   "FIELD1": "donc par conséquent",
   "FIELD2": "donc"
 },
 {
   "FIELD1": "dont (c'est de cela ~ je veux vous parler) / (c'est de cela ~ il a besoin)",
   "FIELD2": "que ou qu' (c'est de cela ~ je veux vous parler) / (c'est de cela ~ il a besoin) [le mot dont n'est pas utile parce qu'il y a le mot de avant le mot cela]"
 },
 {
   "FIELD1": "double (lit ~) (occupation ~)",
   "FIELD2": "pour deux personnes (lit ~) (occupation ~)"
 },
 {
   "FIELD1": "dramatique (le prix chute de façon ~)",
   "FIELD2": "importante (le prix chute de façon ~)"
 },
 {
   "FIELD1": "dramatiquement (les prix chutent ~)",
   "FIELD2": "beaucoup, énormément (les prix chutent ~)"
 },
 {
   "FIELD1": "drastique (une mesure ~)",
   "FIELD2": "draconienne (une mesure ~) [drastique s'applique à un médicament fort]"
 },
 {
   "FIELD1": "droit (il va avoir ~  de sortir)",
   "FIELD2": "le droit (il va avoir ~  de sortir)"
 },
 {
   "FIELD1": "dû à (~ la tempête, on ...)",
   "FIELD2": "en raison de (~ la tempête, on ...)"
 },
 {
   "FIELD1": "dû (compte passé ~)",
   "FIELD2": "échu (compte ~), en souffrance  (compte ~)"
 },
 {
   "FIELD1": "d'un couvert à l'autre",
   "FIELD2": "de la première à la dernière page"
 },
 {
   "FIELD1": "Échapper qqch",
   "FIELD2": "laisser échapper qqch"
 },
 {
   "FIELD1": "écharpe ( se planter une ~ dans le pied)",
   "FIELD2": "écharde ( se planter une ~ dans le pied) [une écharpe est une bande de tissu que l'on met autour de son cou]"
 },
 {
   "FIELD1": "échouer un cours",
   "FIELD2": "échouer à un cours"
 },
 {
   "FIELD1": "éditeur (l'~ du journal Le Devoir)",
   "FIELD2": "rédacteur en chef (le ~ du journal Le Devoir)"
 },
 {
   "FIELD1": "effectif (~ le 12 du mois)",
   "FIELD2": "en vigueur (~ le 12 du mois)"
 },
 {
   "FIELD1": "effet que (l'information à l'~)",
   "FIELD2": "voulant que, selon laquelle (l'information ~)"
 },
 {
   "FIELD1": "élaborer (~ sur un sujet, une question)",
   "FIELD2": "s'étendre (~ sur un sujet, une question)"
 },
 {
   "FIELD1": "éligible (~ à un emploi, à une indemnité)",
   "FIELD2": "admissible (~ à un emploi, à une indemnité) [on est éligible qu'à un poste où on peut être ÉLU.]"
 },
 {
   "FIELD1": "e-mail",
   "FIELD2": "courriel"
 },
 {
   "FIELD1": "émettre (~ un reçu, un permis)",
   "FIELD2": "donner, faire (~ un reçu, un permis)"
 },
 {
   "FIELD1": "émigrer (~ au Québec)",
   "FIELD2": "immigrer (~ au Québec) [on émigre lorsque l'on sort de son pays]"
 },
 {
   "FIELD1": "emploi de (être à l'~ )",
   "FIELD2": "travailler pour, chez"
 },
 {
   "FIELD1": "emphase (mettre l'~ sur)",
   "FIELD2": "accent (mettre l'~ sur)"
 },
 {
   "FIELD1": "en dedans (~ de x minutes)",
   "FIELD2": "d'ici à (~ x minutes)"
 },
 {
   "FIELD1": "endos (à l' ~ de)",
   "FIELD2": "verso (au ~ de)"
 },
 {
   "FIELD1": "endosser (j'endosse votre opinion, votre choix)",
   "FIELD2": "approuver (j'approuve votre opinion, votre choix)"
 },
 {
   "FIELD1": "engagée (la ligne est ~)",
   "FIELD2": "occupée (la ligne est ~)"
 },
 {
   "FIELD1": "en liste (candidats ~)",
   "FIELD2": "en lice (candidats ~)"
 },
 {
   "FIELD1": "enquêter qqch",
   "FIELD2": "enquêter sur qqch"
 },
 {
   "FIELD1": "enregistré (courrier ~)",
   "FIELD2": "recommandé (courrier ~)"
 },
 {
   "FIELD1": "enregistrements (les ~ d'une auto)",
   "FIELD2": "certificat d'immatriculation (le ~ d'une auto)"
 },
 {
   "FIELD1": "enregistrer (s'~ à l'hôtel)",
   "FIELD2": "inscrire (s'~ à l'hôtel)"
 },
 {
   "FIELD1": "en spécial (produits ~)",
   "FIELD2": "en solde (produits ~)"
 },
 {
   "FIELD1": "entraider mutuellement (s' ~)",
   "FIELD2": "s'entraider"
 },
 {
   "FIELD1": "entraider l'un l'autre (s' ~)",
   "FIELD2": "s'entraider"
 },
 {
   "FIELD1": "entrepreneurship",
   "FIELD2": "entrepreneuriat"
 },
 {
   "FIELD1": "enveloppe préadressée",
   "FIELD2": "enveloppe-réponse"
 },
 {
   "FIELD1": "enveloppe-retour",
   "FIELD2": "enveloppe-réponse"
 },
 {
   "FIELD1": "envers (écrire à l'~ d'une feuille)",
   "FIELD2": "dos (écrire au ~ d'une feuille)"
 },
 {
   "FIELD1": "erreur involontaire",
   "FIELD2": "erreur"
 },
 {
   "FIELD1": "escompte (~ sur un produit)",
   "FIELD2": "rabais, remise (~ sur un produit)"
 },
 {
   "FIELD1": "espace (double ~ entre les lignes)",
   "FIELD2": "interligne (double ~)"
 },
 {
   "FIELD1": "espace à bureaux",
   "FIELD2": "bureaux"
 },
 {
   "FIELD1": "espace à louer",
   "FIELD2": "locaux à louer"
 },
 {
   "FIELD1": "estimé (faire un ~ des coûts)",
   "FIELD2": "estimation (faire une ~ des coûts)"
 },
 {
   "FIELD1": "étampe (l'~ du service des finances)",
   "FIELD2": "tampon, timbre (le ~ du service des finances)"
 },
 {
   "FIELD1": "étamper (~ un document)",
   "FIELD2": "timbrer (~ un document)"
 },
 {
   "FIELD1": "être sous l'impression",
   "FIELD2": "avoir l'impression"
 },
 {
   "FIELD1": "exécutif (l'~ de la compagnie)",
   "FIELD2": "conseil de direction (le ~ de la cie)"
 },
 {
   "FIELD1": "exécutif (secrétaire ~)",
   "FIELD2": "direction (secrétaire de ~)"
 },
 {
   "FIELD1": "exécutif (vice-président ~)",
   "FIELD2": "directeur (vice-président ~)"
 },
 {
   "FIELD1": "exporter à l'étranger",
   "FIELD2": "exporter"
 },
 {
   "FIELD1": "extension 18",
   "FIELD2": "poste 18"
 },
 {
   "FIELD1": "extensionner (~ ses heures)",
   "FIELD2": "prolonger (~ ses heures)"
 },
 {
   "FIELD1": "extrait tiré de",
   "FIELD2": "extrait de"
 },
 {
   "FIELD1": "Facilités (les ~ de l'hôtel)",
   "FIELD2": "services, commodités (les ~ de l'hôtel)"
 },
 {
   "FIELD1": "faire un fou de soi",
   "FIELD2": "se rendre ridicule"
 },
 {
   "FIELD1": "familier (avec une chose)",
   "FIELD2": "habitué (à une chose)"
 },
 {
   "FIELD1": "faudrait mieux",
   "FIELD2": "vaudrait mieux"
 },
 {
   "FIELD1": "fax",
   "FIELD2": "télécopie"
 },
 {
   "FIELD1": "faxer",
   "FIELD2": "télécopier"
 },
 {
   "FIELD1": "fête (demain c'est sa ~ et il aura 18 ans)",
   "FIELD2": "anniversaire (demain c'est son ~ et il aura 18 ans)"
 },
 {
   "FIELD1": "feuille de temps",
   "FIELD2": "feuille de présence"
 },
 {
   "FIELD1": "figurer le coût",
   "FIELD2": "calculer, estimer le coût"
 },
 {
   "FIELD1": "filière (placer un document dans une ~)",
   "FIELD2": "classeur (placer un document dans un ~)"
 },
 {
   "FIELD1": "finale (une décision ~)",
   "FIELD2": "sans appel (une décision ~)"
 },
 {
   "FIELD1": "finale (une vente ~)",
   "FIELD2": "ferme (une vente ~)"
 },
 {
   "FIELD1": "finale (une version ~)",
   "FIELD2": "définitive (une version ~)"
 },
 {
   "FIELD1": "finaliser (~ une tâche, un rapport)",
   "FIELD2": "terminer (~ une tâche, un rapport)"
 },
 {
   "FIELD1": "focusser sur, mettre le focus sur",
   "FIELD2": "mettre l'accent sur"
 },
 {
   "FIELD1": "fonds de pension",
   "FIELD2": "caisse de retraite"
 },
 {
   "FIELD1": "force (un règlement en ~)",
   "FIELD2": "vigueur (un règlement en ~)"
 },
 {
   "FIELD1": "fou (faire un ~ de soi)",
   "FIELD2": "se rendre ridicule"
 },
 {
   "FIELD1": "frais onéreux",
   "FIELD2": "frais importants"
 },
 {
   "FIELD1": "fusionner (la cie X et la cie Y vont se ~)",
   "FIELD2": "fusionner (la cie X et la cie Y vont ~) [fusionner n'est jamais pronominal]"
 },
 {
   "FIELD1": "futur (je ne ferai plus cela dans le ~)",
   "FIELD2": "avenir (je ne ferai plus cela à l'~)"
 },
 {
   "FIELD1": "Gérant d'artistes",
   "FIELD2": "agent d'artistes"
 },
 {
   "FIELD1": "gérant de banque",
   "FIELD2": "directeur de banque"
 },
 {
   "FIELD1": "gérant des ventes",
   "FIELD2": "directeur commercial"
 },
 {
   "FIELD1": "global (un problème ~ de grippe)",
   "FIELD2": "mondial, planétaire  (un problème ~ de grippe) [on utilise global quand on considère une chose dans son ensemble ex. : approche globale, système global]"
 },
 {
   "FIELD1": "graduation (bal de ~)",
   "FIELD2": "fin d'études /  finissants (bal de ~ / des)"
 },
 {
   "FIELD1": "graduer (je vais ~) gradué (j'ai ~)",
   "FIELD2": "diplômé (je vais être ~) (j'ai été diplômé) [en français, graduer est en rapport avec une échelle ou des niveaux: on va graduer un contenant pour mesurer; on va graduer le niveau de difficulté, en augmenter la difficulté]"
 },
 {
   "FIELD1": "Hémorragie sanguine",
   "FIELD2": "hémorragie"
 },
 {
   "FIELD1": "heures d'affaires",
   "FIELD2": "heures d'ouverture"
 },
 {
   "FIELD1": "Identification (carte d'~)",
   "FIELD2": "identité (carte d'~)"
 },
 {
   "FIELD1": "identifier (~ un concept, une idée)",
   "FIELD2": "déterminer, définir (~ un concept, une idée) [identifier = déterminer la nature d'un être, d'un objet ou l'identité d'une personne]"
 },
 {
   "FIELD1": "identifier (~ des erreurs dans un texte)",
   "FIELD2": "déceler, découvrir (~ des erreurs dans un texte) [identifier = déterminer la nature d'un être, d'un objet ou l'identité d'une personne]"
 },
 {
   "FIELD1": "immigrer (~ hors de son pays)",
   "FIELD2": "émigrer (~ hors de son pays) [on immigre lorsque l'on entre dans un pays d'adoption]"
 },
 {
   "FIELD1": "importer de l'étranger",
   "FIELD2": "importer"
 },
 {
   "FIELD1": "impôt (une déclaration d'~)",
   "FIELD2": "revenus (un déclaration de ~)"
 },
 {
   "FIELD1": "impression (être sous l'~)",
   "FIELD2": "impression (avoir l'~)"
 },
 {
   "FIELD1": "imputable à (elle est ~)",
   "FIELD2": "responsable devant (elle est ~)"
 },
 {
   "FIELD1": "imputabilité (~ des fonctionnaires)",
   "FIELD2": "responsabilisation (~ des fonctionnaires)"
 },
 {
   "FIELD1": "inaugurer l'ouverture d'un congrès",
   "FIELD2": "inaugurer un congrès"
 },
 {
   "FIELD1": "initialer (~ un document)",
   "FIELD2": "parapher ou parafer (~ un document)"
 },
 {
   "FIELD1": "initier (~ une tâche)",
   "FIELD2": "commencer (~ une tâche)"
 },
 {
   "FIELD1": "initier (~ une nouvelle règle)",
   "FIELD2": "instaurer (~ une nouvelle règle) [INITIER a toujours le sens de commencer (à apprendre) : Je me suis initié à l'informatique.)"
 },
 {
   "FIELD1": "instance décisionnelle",
   "FIELD2": "instance"
 },
 {
   "FIELD1": "instruction (degré d'~)",
   "FIELD2": "scolarité (niveau de ~)"
 },
 {
   "FIELD1": "investiguer (~ une fraude)",
   "FIELD2": "investiguer (~ sur une fraude)"
 },
 {
   "FIELD1": "item (~ d'une discussion, ~ d'un ordre du jour)",
   "FIELD2": "point (~ d'une discussion, ~ d'un ordre du jour)"
 },
 {
   "FIELD1": "item (~ d'une commande)",
   "FIELD2": "article (~ d'une commande)"
 },
 {
   "FIELD1": "Joindre ensemble",
   "FIELD2": "joindre"
 },
 {
   "FIELD1": "joueur (un nouveau ~ en politique)",
   "FIELD2": "acteur (un nouvel ~ en politique)"
 },
 {
   "FIELD1": "journée longue (à la ~)",
   "FIELD2": "longueur de journée (à ~), toute la journée"
 },
 {
   "FIELD1": "justifié (être ~ de faire une chose)",
   "FIELD2": "avoir raison (~ de faire une chose)"
 },
 {
   "FIELD1": "Laisser savoir",
   "FIELD2": "faire savoir"
 },
 {
   "FIELD1": "légal (service ~, poursuite ~, secrétaire ~)",
   "FIELD2": "juridique (service ~, poursuite ~, secrétaire ~)"
 },
 {
   "FIELD1": "le moins pire",
   "FIELD2": "le moins mauvais"
 },
 {
   "FIELD1": "lettre de références",
   "FIELD2": "lettre de recommandation"
 },
 {
   "FIELD1": "lettres moulées",
   "FIELD2": "caractères d'imprimerie"
 },
 {
   "FIELD1": "levée de fonds",
   "FIELD2": "collecte de fonds, campagne de financement"
 },
 {
   "FIELD1": "lever (se ~ debout)",
   "FIELD2": "se lever"
 },
 {
   "FIELD1": "licence (~ d'un véhicule)",
   "FIELD2": "plaque d'immatriculation (~ d'un véhicule)"
 },
 {
   "FIELD1": "licences de chauffeur",
   "FIELD2": "permis de conduire"
 },
 {
   "FIELD1": "ligne (la ~ a été coupée)",
   "FIELD2": "communication (la ~ a été coupée)"
 },
 {
   "FIELD1": "ligne (gardez la ~)",
   "FIELD2": "ne quittez pas"
 },
 {
   "FIELD1": "ligne ouverte",
   "FIELD2": "tribune téléphonique"
 },
 {
   "FIELD1": "lire sur le journal",
   "FIELD2": "lire dans le journal"
 },
 {
   "FIELD1": "liste des vins",
   "FIELD2": "carte des vins"
 },
 {
   "FIELD1": "livre des minutes",
   "FIELD2": "registre des procès-verbaux"
 },
 {
   "FIELD1": "livrer la marchandise (le gouvernement va ~)",
   "FIELD2": "respecter son engagement (le gouvernement va ~)"
 },
 {
   "FIELD1": "loger (~ un appel téléphonique)",
   "FIELD2": "faire (~ un appel téléphonique)"
 },
 {
   "FIELD1": "loger (~ un grief, une plainte)",
   "FIELD2": "déposer (~ un grief, une plainte)"
 },
 {
   "FIELD1": "longue distance (un appel ~)",
   "FIELD2": "interurbain (un appel ~)"
 },
 {
   "FIELD1": "lui aider, leur aider",
   "FIELD2": "l'aider, les aider"
 },
 {
   "FIELD1": "lumière (arrêter à la ~ rouge)",
   "FIELD2": "feu (arrêter au ~ rouge)"
 },
 {
   "FIELD1": "lumières (allumer les ~ d'une voiture)",
   "FIELD2": "phares (allumer les ~ d'une voiture)"
 },
 {
   "FIELD1": "lumières ( les ~ arrière d'une voiture)",
   "FIELD2": "feux ( les ~ arrière d'une voiture)"
 },
 {
   "FIELD1": "Mais cependant",
   "FIELD2": "cependant"
 },
 {
   "FIELD1": "mais pourtant",
   "FIELD2": "pourtant"
 },
 {
   "FIELD1": "mais toutefois",
   "FIELD2": "toutefois"
 },
 {
   "FIELD1": "maller une lettre",
   "FIELD2": "poster une lettre"
 },
 {
   "FIELD1": "marche (prendre une ~)",
   "FIELD2": "marche (faire une ~)"
 },
 {
   "FIELD1": "marcher à pied",
   "FIELD2": "marcher ou aller à pied"
 },
 {
   "FIELD1": "matériel (du ~ pour faire une chemise)",
   "FIELD2": "tissu (du ~ pour faire une chemise)"
 },
 {
   "FIELD1": "meilleur (être à son ~)",
   "FIELD2": "sommet de sa forme (être au ~)"
 },
 {
   "FIELD1": "meilleur vendeur (cet outil est notre ~)",
   "FIELD2": "le plus vendu (cet outil est ~)"
 },
 {
   "FIELD1": "mériter (se ~ une récompense)",
   "FIELD2": "mériter (~ une récompense) [mériter : jamais pronominal]"
 },
 {
   "FIELD1": "mettre (~ du bois franc sur les planchers)",
   "FIELD2": "poser (~ du bois franc sur les planchers)"
 },
 {
   "FIELD1": "minimiser (~ le nombre de cas)",
   "FIELD2": "réduire (~ le nombre de cas) [minimiser = accorder moins d'importance]"
 },
 {
   "FIELD1": "minutes (les ~ de la réunion)",
   "FIELD2": "procès-verbal (le ~ de la réunion)"
 },
 {
   "FIELD1": "moi pour un",
   "FIELD2": "pour ma part"
 },
 {
   "FIELD1": "monétaire (clause ~ d'un contrat de travail)",
   "FIELD2": "salariale (clause ~ d'un contrat de travail) [monétaire est relatif à la monnaie ex. : la politique monétaire d'un pays par rapport à sa devise]"
 },
 {
   "FIELD1": "monopole exclusif",
   "FIELD2": "monopole"
 },
 {
   "FIELD1": "monter en haut",
   "FIELD2": "monter / aller en haut"
 },
 {
   "FIELD1": "moulées (en lettres ~)",
   "FIELD2": "caractères d'imprimerie (en ~)"
 },
 {
   "FIELD1": "NA ou N/A",
   "FIELD2": "S.O. [signifie Sans Objet]"
 },
 {
   "FIELD1": "niveau (au ~ financier)",
   "FIELD2": "en ce qui concerne (~ les finances) / du côté (~ des finances)"
 },
 {
   "FIELD1": "numéro civique",
   "FIELD2": "adresse"
 },
 {
   "FIELD1": "Objecter (s'~ à)",
   "FIELD2": "opposer (s'~ à) [objecter: jamais pronominal]"
 },
 {
   "FIELD1": "observation (sous ~)",
   "FIELD2": "observation (en ~)"
 },
 {
   "FIELD1": "occupation (~ pour gagner sa vie)",
   "FIELD2": "métier, profession (~ pour gagner sa vie)"
 },
 {
   "FIELD1": "occupation double (une chambre en ~)",
   "FIELD2": "pour deux personnes (une chambre ~)"
 },
 {
   "FIELD1": "officier du syndicat",
   "FIELD2": "membre du bureau syndical"
 },
 {
   "FIELD1": "opération (usine en ~)",
   "FIELD2": "activité (usine en ~)"
 },
 {
   "FIELD1": "opérer (un commerce)",
   "FIELD2": "avoir, exploiter, administrer (un commerce)"
 },
 {
   "FIELD1": "opérer (une machine)",
   "FIELD2": "faire fonctionner, manoeuvrer (une machine)"
 },
 {
   "FIELD1": "opportunité (une ~)",
   "FIELD2": "chance, occasion (une ~)"
 },
 {
   "FIELD1": "orage électrique",
   "FIELD2": "orage"
 },
 {
   "FIELD1": "ordre (appareil en ~)",
   "FIELD2": "bon état (appareil en ~)"
 },
 {
   "FIELD1": "ordre (permis en ~)",
   "FIELD2": "règle (permis en ~)"
 },
 {
   "FIELD1": "originer de",
   "FIELD2": "provenir de [originer : toujours pronominal]"
 },
 {
   "FIELD1": "oubli involontaire",
   "FIELD2": "oubli [qui est toujours involontaire]"
 },
 {
   "FIELD1": "ouverture [si tu te cherches un emploi, il y a une ~ dans cette compagnie]",
   "FIELD2": "poste vacant [si tu te cherches un emploi, il y a un ~ dans cette compagnie]"
 },
 {
   "FIELD1": "ouvertures [ce produit a plusieurs ~]",
   "FIELD2": "débouchés [ce produit a plusieurs ~]"
 },
 {
   "FIELD1": "overtime",
   "FIELD2": "heures supplémentaires"
 },
 {
   "FIELD1": "Pacemaker",
   "FIELD2": "stimulateur cardiaque"
 },
 {
   "FIELD1": "pallier à qqch",
   "FIELD2": "pallier qqch"
 },
 {
   "FIELD1": "pamphlet publicitaire",
   "FIELD2": "brochure, dépliant publicitaire"
 },
 {
   "FIELD1": "panel",
   "FIELD2": "groupe de discussion, table ronde"
 },
 {
   "FIELD1": "papier de toilette",
   "FIELD2": "papier hygiénique"
 },
 {
   "FIELD1": "paqueté",
   "FIELD2": "ivre"
 },
 {
   "FIELD1": "par (4 ~ 4)",
   "FIELD2": "sur (4 ~ 4)"
 },
 {
   "FIELD1": "pareil comme / pareil que (un manteau ~ le mien)",
   "FIELD2": "pareil à / au (un manteau ~ mien)"
 },
 {
   "FIELD1": "parent avec (je suis ~ lui)",
   "FIELD2": "parent (je suis son ~)"
 },
 {
   "FIELD1": "parier pour (~ 50$)",
   "FIELD2": "parier (~ 50 $)"
 },
 {
   "FIELD1": "part (à ~) de ça",
   "FIELD2": "à part ça"
 },
 {
   "FIELD1": "part (à ~) de (il ne fait rien à part de jouer)",
   "FIELD2": "part (à ~)  (il ne fait rien à part  jouer)"
 },
 {
   "FIELD1": "parts (acheter des ~ d'une compagnie)",
   "FIELD2": "actions (acheter des ~ d'une compagnie)"
 },
 {
   "FIELD1": "partir (~ un moteur, une entreprise)",
   "FIELD2": "démarrer (~ un moteur, une entreprise)"
 },
 {
   "FIELD1": "partir (~ à son compte)",
   "FIELD2": "s'établir (~ à son compte)"
 },
 {
   "FIELD1": "partir pendant un mois",
   "FIELD2": "partir pour un mois [le départ (l'action de partir) ne peut pas durer un mois]"
 },
 {
   "FIELD1": "passé date",
   "FIELD2": "périmé"
 },
 {
   "FIELD1": "passé dû (compte ~)",
   "FIELD2": "échu (compte ~)"
 },
 {
   "FIELD1": "patchage",
   "FIELD2": "rafistolage"
 },
 {
   "FIELD1": "patron (j'aime le ~ de ce tissu)",
   "FIELD2": "motif (j'aime le ~ de ce tissu)"
 },
 {
   "FIELD1": "patronage",
   "FIELD2": "favoritisme"
 },
 {
   "FIELD1": "pattern",
   "FIELD2": "modèle ou patron"
 },
 {
   "FIELD1": "paver la voie (~ à l'autre génération)",
   "FIELD2": "ouvrir la voie (~ à l'autre génération)"
 },
 {
   "FIELD1": "payant (téléphone ~)",
   "FIELD2": "public (téléphone ~)"
 },
 {
   "FIELD1": "payeur de taxes",
   "FIELD2": "contribuable"
 },
 {
   "FIELD1": "pécunier (un problème ~)",
   "FIELD2": "pécuniaire (un problème ~)"
 },
 {
   "FIELD1": "pénitencière (une administration ~)",
   "FIELD2": "pénitentiaire (une administration ~) (le personnel ~) [pénitentiaire est masculin et féminin] [pénitencier est un nom qui n'a pas de féminin]"
 },
 {
   "FIELD1": "performance (la ~ d'un placement)",
   "FIELD2": "rendement (le ~ d'un placement)"
 },
 {
   "FIELD1": "performance (la ~ d'un artiste)",
   "FIELD2": "interprétation (l'~ d'un artiste) [on peut parler de performance d'un appareil ou de performance sportive]"
 },
 {
   "FIELD1": "perspectives d'avenir",
   "FIELD2": "perspectives"
 },
 {
   "FIELD1": "pesanteur (la ~ d'une boîte)",
   "FIELD2": "poids (le ~ d'une boîte)"
 },
 {
   "FIELD1": "pilote (le ~ de la cuisinière au gaz)",
   "FIELD2": "lampe témoin (la ~ de la cuisinière au gaz)"
 },
 {
   "FIELD1": "place d'affaires",
   "FIELD2": "établissement, bureau"
 },
 {
   "FIELD1": "placer (~ un appel, un grief)",
   "FIELD2": "faire (~ un appel, un grief)"
 },
 {
   "FIELD1": "placer (~ une commande)",
   "FIELD2": "faire, passer (~ une commande)"
 },
 {
   "FIELD1": "plaisir (il me fait ~ de...)",
   "FIELD2": "plaisir (c'est avec ~ que...) (j'ai le ~ de...)"
 },
 {
   "FIELD1": "plan (au ~ de la sécurité)",
   "FIELD2": "sur le plan (~ de la sécurité)"
 },
 {
   "FIELD1": "plan (~ d'assurance, de pension)",
   "FIELD2": "régime (~ d'assurance, de retraite)"
 },
 {
   "FIELD1": "plancher (au troisième ~)",
   "FIELD2": "étage (au troisième ~)"
 },
 {
   "FIELD1": "poinçonner (~ en rentrant au travail)",
   "FIELD2": "pointer (~ en rentrant au travail)"
 },
 {
   "FIELD1": "point tournant (un ~ dans sa vie)",
   "FIELD2": "moment décisif (un ~ dans sa vie)"
 },
 {
   "FIELD1": "poll (~ pour une élection)",
   "FIELD2": "bureau de scrutin"
 },
 {
   "FIELD1": "position (une ~ dans une entreprise)",
   "FIELD2": "poste, emploi (un ~ dans une entreprise)"
 },
 {
   "FIELD1": "possiblement",
   "FIELD2": "vraisemblablement"
 },
 {
   "FIELD1": "pour votre information",
   "FIELD2": "pour information, à titre indicatif"
 },
 {
   "FIELD1": "précepteur d'impôts",
   "FIELD2": "percepteur d'impôts [un précepteur s'occupe de l'éducation d'un enfant au domicile de celui-ci]"
 },
 {
   "FIELD1": "prédire à l'avance, d'avance",
   "FIELD2": "prédire"
 },
 {
   "FIELD1": "prendre une chance",
   "FIELD2": "courir le risque, courir la chance"
 },
 {
   "FIELD1": "prendre qqch personnel",
   "FIELD2": "prendre qqch pour soi, en faire une affaire personnelle"
 },
 {
   "FIELD1": "prendre place (le congrès va ~)",
   "FIELD2": "avoir lieu, se tenir (le congrès va ~)"
 },
 {
   "FIELD1": "prendre pour acquis",
   "FIELD2": "tenir pour acquis"
 },
 {
   "FIELD1": "prendre un cours",
   "FIELD2": "suivre un cours"
 },
 {
   "FIELD1": "prendre une marche",
   "FIELD2": "faire une marche"
 },
 {
   "FIELD1": "prérequis (un ~)",
   "FIELD2": "préalable (un ~)"
 },
 {
   "FIELD1": "prescription (j'ai montré la ~ au pharmacien)",
   "FIELD2": "ordonnance (j'ai montré l' ~ au pharmacien) prescription (le médecin a fait une ~ de repos) le médecin a fait une prescription sans écrire d'ordonnance"
 },
 {
   "FIELD1": "prévenir d'avance",
   "FIELD2": "prévenir"
 },
 {
   "FIELD1": "prévoir d'avance, à l'avance",
   "FIELD2": "prévoir"
 },
 {
   "FIELD1": "prime de séparation",
   "FIELD2": "indemnité de départ, de licenciement"
 },
 {
   "FIELD1": "primer sur (le bonheur doit primer sur l'argent)",
   "FIELD2": "primer  (le bonheur doit primer  l'argent)"
 },
 {
   "FIELD1": "prioriser",
   "FIELD2": "donner la priorité"
 },
 {
   "FIELD1": "priorité (première ~)",
   "FIELD2": "priorité [une priorité est toujours au premier rang]"
 },
 {
   "FIELD1": "prix de liste",
   "FIELD2": "prix courant"
 },
 {
   "FIELD1": "projet (vous trouverez le contremaître sur le ~)",
   "FIELD2": "chantier (vous trouverez le contremaître sur le ~)"
 },
 {
   "FIELD1": "projet futur",
   "FIELD2": "projet"
 },
 {
   "FIELD1": "prolongement (un ~ pour remettre un rapport)",
   "FIELD2": "prolongation (une ~ pour remettre un rapport) [prolongement a le sens d'une augmentation de la longueur; ex. : prolongement d'une route]"
 },
 {
   "FIELD1": "promouvoit (il ~)",
   "FIELD2": "promeut (il ~)"
 },
 {
   "FIELD1": "Qualifications (avoir les ~ pour un emploi)",
   "FIELD2": "qualification (avoir la ~ pour un emploi)"
 },
 {
   "FIELD1": "question (demander une ~)",
   "FIELD2": "question (poser une ~)"
 },
 {
   "FIELD1": "questionner (~ une théorie)",
   "FIELD2": "mettre en doute, contester (~ une théorie)"
 },
 {
   "FIELD1": "Rapporter (se ~ à son patron)",
   "FIELD2": "rendre des comptes (~ à son patron)"
 },
 {
   "FIELD1": "rappeler de (se ~ qqch)",
   "FIELD2": "rappeler (se ~ qqch)"
 },
 {
   "FIELD1": "refaire encore",
   "FIELD2": "refaire"
 },
 {
   "FIELD1": "références (lettre de ~)",
   "FIELD2": "recommandation (lettre de ~)"
 },
 {
   "FIELD1": "référer (~ une affaire à)",
   "FIELD2": "confier (~ une affaire à)"
 },
 {
   "FIELD1": "référer (~ un client à)",
   "FIELD2": "envoyer (~ un client à)"
 },
 {
   "FIELD1": "référer (~ un employé à un employeur)",
   "FIELD2": "recommander (~ un employé à un employeur)"
 },
 {
   "FIELD1": "référer (~ un problème à un comité)",
   "FIELD2": "soumettre (~ un problème à un comité)"
 },
 {
   "FIELD1": "relocaliser (~ un commerce)",
   "FIELD2": "déménager (~ un commerce)"
 },
 {
   "FIELD1": "rencontrer (~ des attentes)",
   "FIELD2": "satisfaire, répondre à (~ des attentes)"
 },
 {
   "FIELD1": "rencontrer (~ une échéance)",
   "FIELD2": "respecter (~ une échéance)"
 },
 {
   "FIELD1": "rencontrer (~ une exigence)",
   "FIELD2": "se conformer à (~ une exigence)"
 },
 {
   "FIELD1": "rencontrer (~ un objectif)",
   "FIELD2": "atteindre (~ un objectif)"
 },
 {
   "FIELD1": "rencontrer (~ des difficultés)",
   "FIELD2": "éprouver (~ des difficultés)"
 },
 {
   "FIELD1": "rendez-vous (consultation avec ~ seulement)",
   "FIELD2": "rendez-vous (consultation sur ~ seulement)"
 },
 {
   "FIELD1": "réouvrir ( la route va ~)",
   "FIELD2": "rouvrir ( la route va ~)"
 },
 {
   "FIELD1": "réserver d'avance",
   "FIELD2": "réserver"
 },
 {
   "FIELD1": "rester (~ à Montréal depuis sa naissance)",
   "FIELD2": "habiter (~ à Montréal depuis sa naissance)"
 },
 {
   "FIELD1": "retourner un appel",
   "FIELD2": "rappeler"
 },
 {
   "FIELD1": "rouler (ce logiciel peut ~ sur cet ordinateur)",
   "FIELD2": "tourner (ce logiciel peut ~ sur cet ordinateur)"
 },
 {
   "FIELD1": "routine (~ faite par mon entraîneur)",
   "FIELD2": "programme (~ fait par mon entraîneur)"
 },
 {
   "FIELD1": "Sabrer dans (~ les dépenses)",
   "FIELD2": "sabrer (~ les dépenses)"
 },
 {
   "FIELD1": "salle à dîner",
   "FIELD2": "salle à manger"
 },
 {
   "FIELD1": "salle de montre",
   "FIELD2": "salle d'exposition"
 },
 {
   "FIELD1": "sans dessus dessous",
   "FIELD2": "sens dessus dessous"
 },
 {
   "FIELD1": "sans devant derrière",
   "FIELD2": "sens devant derrière"
 },
 {
   "FIELD1": "sans préjudice",
   "FIELD2": "sous toute réserve"
 },
 {
   "FIELD1": "sauver de l'argent",
   "FIELD2": "épargner de l'argent"
 },
 {
   "FIELD1": "sauver du temps",
   "FIELD2": "gagner du temps"
 },
 {
   "FIELD1": "sauver des données",
   "FIELD2": "sauvegarder des données"
 },
 {
   "FIELD1": "scie à chaîne",
   "FIELD2": "tronçonneuse"
 },
 {
   "FIELD1": "scientistes (les ~ craignent une pandémie)",
   "FIELD2": "scientifiques (les ~ craignent une pandémie) [le scientisme est une philosophie]"
 },
 {
   "FIELD1": "seconde main (un meuble de ~)",
   "FIELD2": "occasion (un meuble d' ~)"
 },
 {
   "FIELD1": "seconder (~ une proposition)",
   "FIELD2": "appuyer (~ une proposition)"
 },
 {
   "FIELD1": "section (la ~ 32 de la loi sur...)",
   "FIELD2": "article (l' ~ 32 de la loi sur...)"
 },
 {
   "FIELD1": "se fier sur (~ qqn)",
   "FIELD2": "se fier à (~ qqn)"
 },
 {
   "FIELD1": "sénior (un vendeur ~)",
   "FIELD2": "expérimenté (un vendeur ~)"
 },
 {
   "FIELD1": "sensible (une question ~)",
   "FIELD2": "délicate, controversée (une question ~)"
 },
 {
   "FIELD1": "session (une ~ de massage de 30 minutes)",
   "FIELD2": "séance (une ~ de massage de 30 minutes)"
 },
 {
   "FIELD1": "siéger sur (~ un comité)",
   "FIELD2": "siéger à (~ un comité)"
 },
 {
   "FIELD1": "signaler (~ un numéro de téléphone)",
   "FIELD2": "composer (~ un numéro de téléphone)"
 },
 {
   "FIELD1": "slash",
   "FIELD2": "barre oblique"
 },
 {
   "FIELD1": "s'objecter à",
   "FIELD2": "s'opposer à [objecter : jamais pronominal]"
 },
 {
   "FIELD1": "solide (une table en bois ~)",
   "FIELD2": "massif (une table en bois ~)"
 },
 {
   "FIELD1": "solutionner (~ un problème)",
   "FIELD2": "résoudre (~ un problème) [l'usage du verbe solutionner est étonnamment critiqué par plusieurs auteurs bien que sa forme respecte le génie de la langue française]"
 },
 {
   "FIELD1": "sous-contracteur",
   "FIELD2": "sous-traitant"
 },
 {
   "FIELD1": "sous-total",
   "FIELD2": "somme partielle"
 },
 {
   "FIELD1": "speedomètre",
   "FIELD2": "indicateur de vitesse"
 },
 {
   "FIELD1": "statut civil",
   "FIELD2": "état civil"
 },
 {
   "FIELD1": "statut marital",
   "FIELD2": "état matrimonial"
 },
 {
   "FIELD1": "suite (1030, rue Cherrier, ~ 507)",
   "FIELD2": "bureau (1030, rue Cherrier, ~ 507)"
 },
 {
   "FIELD1": "sujet à modification",
   "FIELD2": "modifiable"
 },
 {
   "FIELD1": "supporter (~ un candidat)",
   "FIELD2": "appuyer (~ un candidat)"
 },
 {
   "FIELD1": "sur la rue",
   "FIELD2": "dans la rue"
 },
 {
   "FIELD1": "sur le journal",
   "FIELD2": "dans le journal"
 },
 {
   "FIELD1": "sur semaine",
   "FIELD2": "en semaine"
 },
 {
   "FIELD1": "surtemps",
   "FIELD2": "heures supplémentaires"
 },
 {
   "FIELD1": "survenir (~ à ses besoins)",
   "FIELD2": "subvenir (~ à ses besoins) [survenir a le sens de SE PRODUIRE DE FAÇON INATTENDUE]"
 },
 {
   "FIELD1": "système (ce médicament va protéger mon ~)",
   "FIELD2": "organisme (ce médicament va protéger mon ~)"
 },
 {
   "FIELD1": "Tablette (prendre une note sur une ~)",
   "FIELD2": "bloc-note (prendre une note sur un ~)"
 },
 {
   "FIELD1": "tablette (une ~ d'aspirine)",
   "FIELD2": "comprimé (un ~ d'aspirine)"
 },
 {
   "FIELD1": "tablette (le lait est sur une ~ du réfrigérateur)",
   "FIELD2": "clayette (le lait est sur une ~ du réfrigérateur)"
 },
 {
   "FIELD1": "tant qu'à ( ~ moi)",
   "FIELD2": "quant à (~ moi)"
 },
 {
   "FIELD1": "tasse de thé (ce n'est pas ma ~)",
   "FIELD2": "ce que je préfère (ce n'est pas ~)"
 },
 {
   "FIELD1": "technicalité (ne pas tenir compte d'une ~)",
   "FIELD2": "détail, point technique, point de détail (ne pas tenir compte d'un ~)"
 },
 {
   "FIELD1": "téléphone (faire un ~)",
   "FIELD2": "appel téléphonique (faire un ~)"
 },
 {
   "FIELD1": "téléphone (recevoir un ~)",
   "FIELD2": "appel téléphonique (recevoir un ~)"
 },
 {
   "FIELD1": "téléphone payant",
   "FIELD2": "téléphone public"
 },
 {
   "FIELD1": "télévision (j'ai acheté une nouvelle ~ à écran plat)",
   "FIELD2": "téléviseur (j'ai acheté un nouveau ~ à écran plat)"
 },
 {
   "FIELD1": "tel que (un événement ~ décrit dans...)",
   "FIELD2": "tel qu'il a été (un événement ~ décrit dans...)"
 },
 {
   "FIELD1": "tel que convenu",
   "FIELD2": "comme convenu"
 },
 {
   "FIELD1": "temps plein",
   "FIELD2": "plein temps"
 },
 {
   "FIELD1": "temps réel (en ~)",
   "FIELD2": "simultané (en ~), synchronisme (en ~) [l'expression TEMPS RÉEL est critiquée par certains et acceptée par d'autres]"
 },
 {
   "FIELD1": "temps supplémentaire",
   "FIELD2": "heures supplémentaires"
 },
 {
   "FIELD1": "termes (en ~ d'efficacité)",
   "FIELD2": "pour ce qui est (~ de l'efficacité)"
 },
 {
   "FIELD1": "topographie des lieux",
   "FIELD2": "topographie"
 },
 {
   "FIELD1": "traite (payer la ~)",
   "FIELD2": "tournée (payer la ~)"
 },
 {
   "FIELD1": "transférer qqn (~ à un autre ministère)",
   "FIELD2": "muter qqn (~ à un autre ministère)"
 },
 {
   "FIELD1": "transfert d'autobus",
   "FIELD2": "une correspondance d'autobus"
 },
 {
   "FIELD1": "transiger (~ un contrat)",
   "FIELD2": "négocier (~ un contrat) [on ne transige pas qqch, on transige avec qqn]"
 },
 {
   "FIELD1": "travailler dans une firme",
   "FIELD2": "travailler pour une firme"
 },
 {
   "FIELD1": "tuile (remplacer une ~ du plancher)",
   "FIELD2": "carreau (remplacer un ~ du plancher) [une tuile est une plaque de terre cuite que l'on pose sur un toit]"
 },
 {
   "FIELD1": "Usagé (un meuble ~)",
   "FIELD2": "occasion (un meuble d' ~)"
 },
 {
   "FIELD1": "vacance (partir en ~)",
   "FIELD2": "vacances (partir en ~) [au singulier, vacance signifie une place vacante dans une organisation, une entreprise]"
 },
 {
   "FIELD1": "varia d'un ordre du jour",
   "FIELD2": "questions diverses"
 },
 {
   "FIELD1": "vente (payer moins parce que c'est en ~)",
   "FIELD2": "solde (payer moins parce que c'est en ~)"
 },
 {
   "FIELD1": "vendeur (cet article est le meilleur ~)",
   "FIELD2": "le plus vendu, le plus populaire (cet article est ~)"
 },
 {
   "FIELD1": "versatile (un employé~, un outil ~)",
   "FIELD2": "polyvalent (un employé~, un outil ~) [versatile a le sens péjoratif d'instable en français et ne s'utilise que pour les personnes]"
 },
 {
   "FIELD1": "vidanges (ramasser les ~ le long des rues)",
   "FIELD2": "déchets / ordures (ramasser les ~ le long des rues) [le mot vidange a le sens de l'action de vider un contenant dans le but de le nettoyer]"
 },
 {
   "FIELD1": "vidangeur (un ~ ramasse les déchets)",
   "FIELD2": "éboueur (un ~ ramasse les déchets) [un vidangeur est celui qui vide les fosses d'aisance]"
 },
 {
   "FIELD1": "voire même (une personne effrayée, ~ paniquée)",
   "FIELD2": "voire (une personne effrayée, ~ paniquée)"
 }
];