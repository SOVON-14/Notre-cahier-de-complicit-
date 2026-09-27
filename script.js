/* ============================================================
   100+ COMPREHENSIVE QUESTIONS DATABASE
   ============================================================ */
const rawQuestionsData = [
  // SOUVENIRS & DÉBUTS
  { cat: "SOUVENIRS", int: "Doux", q: "Quel est ton souvenir le plus précis de notre toute première journée ensemble ?", opts: ["La première tenue portée", "Notre premier fou rire", "L'endroit exact où l'on était", "La chanson qui passait dans la pièce"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel petit détail m'a fait craquer chez toi au premier regard ?", opts: ["Ton sourire timide", "Ton regard pétillant", "Ta voix douce", "Ton sens de l'humour immédiat"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Où s'est déroulé notre premier baiser inoubliable ?", opts: ["Sous la pluie ou en extérieur", "À la maison au calme", "Dans la voiture", "À la sortie d'un rendez-vous"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quelle première attention romantique t'a le plus marqué(e) ?", opts: ["Un message adorable au réveil", "Un petit cadeau surprise", "Un câlin chaleureux inattendu", "Un compliment sincère qui a touché le cœur"] },
  { cat: "SOUVENIRS", int: "Profond", q: "À quel moment exact as-tu réalisé que notre histoire devenait sérieuse ?", opts: ["Lors de notre première longue discussion nocturne", "Quand on a présenté l'autre à nos proches", "Pendant notre premier voyage ensemble", "Lors d'un moment difficile où l'on s'est soutenus"] },
  { cat: "SOUVENIRS", int: "Profond", q: "Quelle est la première promesse réciproque que nous avons tenue ?", opts: ["Toujours se dire la vérité avec bienveillance", "Prendre du temps pour nous chaque semaine", "Rire au moins une fois par jour", "Construire nos projets pas à pas"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel voyage ou week-end ensemble reste gravé dans ta mémoire ?", opts: ["Notre première escapade en amoureux", "Un week-end imprévu sur un coup de tête", "Des vacances d'été au soleil", "Une journée détente toute simple mais magique"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quelle a été notre toute première dispute et comment l'a-t-on désamorcée ?", opts: ["Un malentendu stupide suivi d'un fou rire", "Une discussion calme avec un câlin de réconciliation", "Un petit silence puis un 'je t'aime'", "Un compromis rapide autour d'un bon repas"] },
  { cat: "SOUVENIRS", int: "Piquant", q: "Quel est le souvenir le plus coquin de nos débuts ?", opts: ["Un baiser volé dans un endroit insolite", "Une soirée romantique improvisée", "Un regard complice très évocateur", "Un message mystérieux envoyé durant la journée"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quelle chanson nous replonge immédiatement dans nos souvenirs ?", opts: ["La musique de notre premier slow/danse", "L'air que l'on écoute en voiture", "La chanson qui passait lors de notre rencontre", "Un morceau qu'on chante à tue-tête à deux"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel est le surnom le plus mignon que l'on s'est donné ?", opts: ["Mon cœur / Mon amour", "Un petit nom d'animal mignon", "Un surnom rigolo venu d'une blague", "Mon ange / Ma pépite"] },
  { cat: "SOUVENIRS", int: "Profond", q: "Quel obstacle avons-nous surmonté ensemble avec le plus de fierté ?", opts: ["Gérer la distance ou les emplois du temps", "Traverser une période de stress professionnel", "Organiser un grand changement de vie", "S'adapter aux habitudes de chacun"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel est le plus beau compliment que tu m'as fait au début ?", opts: ["'Tu éclaires mes journées'", "'Je me sens tellement bien avec toi'", "'Tu es une personne incroyable'", "'Tu me fais rire comme personne'"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Si tu devais résumer nos débuts en un mot ?", opts: ["Magique", "Évident", "Passionnant", "Doux"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel repas ou plat symbolise notre rencontre ?", opts: ["Notre premier dîner au restaurant", "Un plat cuisiné maison un peu raté mais drôle", "Une pizza partagée devant un film", "Un dessert gourmand partagé à deux"] },
  { cat: "SOUVENIRS", int: "Piquant", q: "Quelle tenue que j'ai portée t'a le plus marqué(e) ?", opts: ["Une tenue très élégante pour une sortie", "Un style décontracté au naturel", "Une tenue romantique/séduisante", "Mon Pyjama ultra confortable"] },
  { cat: "SOUVENIRS", int: "Doux", q: "Quel premier cadeau offert par l'un de nous t'a le plus touché(e) ?", opts: ["Un objet symbolique chargé de sens", "Quelque chose fait main ou écrit", "Une surprise attendue depuis longtemps", "Un moment d'expérience à vivre ensemble"] },

  // GOÛTS, PASSIONS & HABITUDES
  { cat: "GOUTS", int: "Doux", q: "Quel est mon rituel du matin préféré ?", opts: ["Un bon café/thé au chaud", "Traîner 10 minutes sous la couette", "Écouter de la musique pour se motiver", "Un câlin du matin indispensable"] },
  { cat: "GOUTS", int: "Doux", q: "Si on commande à manger ce soir sans cuisiner, je choisis quoi ?", opts: ["Sushi frais", "Pizza au fromage fondant", "Plat asiatique savoureux", "Burger artisanal généreux"] },
  { cat: "GOUTS", int: "Doux", q: "Quel type de film nous met d'accord à coup sûr ?", opts: ["Comédie romantique drôle", "Thriller / Enquête captivante", "Film d'aventure / Action", "Animation douce ou magique"] },
  { cat: "GOUTS", int: "Doux", q: "Quelle est ma gourmandise secrète irrésistible ?", opts: ["Le chocolat sous toutes ses formes", "Les bonbons ou friandises", "Les pâtisseries bien crémées", "Le salé (chips, fromage, apéro)"] },
  { cat: "GOUTS", int: "Doux", q: "Comment je réagis quand je suis fatigué(e) ?", opts: ["Je deviens très calme et silencieux(se)", "Je cherche des câlins et du réconfort", "Je ris pour un rien", "Je râle gentiment pour de petites choses"] },
  { cat: "GOUTS", int: "Doux", q: "Quel est mon endroit réconfortant préféré à la maison ?", opts: ["Bien au chaud sous le plaid dans le canapé", "Dans le lit douillet", "Dans la cuisine à préparer de bonnes choses", "Dans un coin calme pour lire ou écouter du son"] },
  { cat: "GOUTS", int: "Profond", q: "Qu'est-ce qui me redonne instantanément le sourire après une grosse journée ?", opts: ["Ton accueil chaleureux et un câlin", "Raconter ma journée et être écouté(e)", "Un bon repas préparé ensemble", "Une pause silence et détente absolue"] },
  { cat: "GOUTS", int: "Doux", q: "Quel est mon style de musique pour chanter sous la douche ou en voiture ?", opts: ["Variété / Pop entraînante", "Hits nostalgiques des années 2000", "Musique douce et acoustique", "Rock ou Hip-hop dynamique"] },
  { cat: "GOUTS", int: "Doux", q: "Si je devais pratiquer une nouvelle passion demain ?", opts: ["Un art créatif (peinture, dessin, écriture)", "Un sport d'aventure ou plein air", "La cuisine ou pâtisserie avancée", "La musique ou un instrument"] },
  { cat: "GOUTS", int: "Doux", q: "Quelle est ma boisson signature pour me faire plaisir ?", opts: ["Un chocolat chaud gourmand", "Un smoothie / jus frais", "Un verre de bon vin ou cocktail pétillant", "Un thé/infusion parfumée"] },
  { cat: "GOUTS", int: "Doux", q: "Quel genre de tenue vestimentaire me décrit le mieux ?", opts: ["Chic et soigné", "Décontracté et ultra confortable", "Sportswear / Moderne", "Original et coloré"] },
  { cat: "GOUTS", int: "Doux", q: "Quelle saison de l'année me correspond le mieux ?", opts: ["Le Printemps pour la fraîcheur", "L'Été pour le soleil et la chaleur", "L'Automne pour l'ambiance cocooning", "L'Hiver pour les soirées douillettes"] },
  { cat: "GOUTS", int: "Doux", q: "Quel est mon petit tic ou habitude amusante ?", opts: ["Vérifier 3 fois si la porte est fermée", "Ranger les objets de manière très précise", "Chantonner sans m'en rendre compte", "Parler avec les mains avec passion"] },
  { cat: "GOUTS", int: "Doux", q: "Si l'on devait passer un dimanche idéal, que ferait-on ?", opts: ["Grasse matinée et brunch maison", "Balade en nature et grand air", "Marathon séries sous le plaid", "Shopping et café en ville"] },
  { cat: "GOUTS", int: "Doux", q: "Quelle est la qualité que j'admire le plus chez les autres ?", opts: ["La gentillesse sincère", "L'humour et l'autodérision", "La loyauté sans faille", "L'ambition et la passion"] },
  { cat: "GOUTS", int: "Doux", q: "Quel objet de mon quotidien ne me quitte presque jamais ?", opts: ["Mon téléphone portable", "Ma gourde ou tasse de café", "Un bijou ou vêtement fétiche", "Mes écouteurs de musique"] },

  // PROJETS, RÊVES & AVENIR
  { cat: "PROJETS", int: "Doux", q: "Quel est notre prochain projet de voyage de rêve ?", opts: ["Découvrir une île tropicale bordée d'eau claire", "Visiter une grande métropole vibrante", "Explorer des grands espaces naturels sauvages", "S'offrir un séjour dans un chalet cosy"] },
  { cat: "PROJETS", int: "Profond", q: "Comment tu nous vois dans 5 ans ?", opts: ["Installés dans un nid douillet personnalisé", "En plein tour du monde de nos passions", "Construisant une belle famille épanouie", "Heureux et complices avec plein de projets réussis"] },
  { cat: "PROJETS", int: "Doux", q: "Quel logement de rêve aimerais-tu que l'on habite un jour ?", opts: ["Une maison chaleureuse avec un grand jardin", "Un appartement moderne lumineux en centre-ville", "Une villa au bord de la mer", "Une maison en bois écologique dans la nature"] },
  { cat: "PROJETS", int: "Doux", q: "Quel animal de compagnie aimerais-tu accueillir chez nous ?", opts: ["Un chien joueur et fidèle", "Un chat câlin et indépendant", "Plusieurs animaux rigolos", "Aucun animal, juste nous deux !"] },
  { cat: "PROJETS", int: "Profond", q: "Quelle tradition de couple aimerais-tu instaurer chaque année ?", opts: ["Un grand voyage surprise pour notre anniversaire", "Une soirée d'écriture de nos vœux ou souvenirs", "Une journée annuelle dédiée au bien-être absolu", "Planter un arbre ou célébrer un rituel symbolique"] },
  { cat: "PROJETS", int: "Doux", q: "Quel défi sportif ou créatif devrions-nous relever ensemble ?", opts: ["Apprendre une danse de couple (salsa, slow)", "Courir une course solidaire ou randonner fort", "Apprendre une nouvelle langue étrangère à deux", "Rénover ou fabriquer un meuble ensemble"] },
  { cat: "PROJETS", int: "Profond", q: "Quelle est ta définition d'une vie de couple réussie ?", opts: ["S'encourager dans tous nos rêves individuels", "Rire tous les jours et garder la complicité", "Construire une stabilité solide et sereine", "Vivre des aventures passionnantes sans routine"] },
  { cat: "PROJETS", int: "Doux", q: "Si nous pouvions adopter une nouvelle compétence commune ?", opts: ["Devenir d'excellents cuisiniers gourmets", "Savoir masser comme de vrais pros", "Parler couramment une langue rare", "Maîtriser la photographie de voyage"] },
  { cat: "PROJETS", int: "Profond", q: "Quel rêve secret d'enfance aimerais-tu réaliser avec mon aide ?", opts: ["Écrire un livre ou créer une œuvre", "Visiter un lieu magique qui t'inspirait jeune", "Sauter en parachute ou vivre une sensation forte", "Avoir un atelier ou espace de création dédié"] },
  { cat: "PROJETS", int: "Doux", q: "Quelle fête ou célébration rêves-tu d'organiser à deux ?", opts: ["Une fête costumée inoubliable avec nos proches", "Un anniversaire surprise magique", "Un mariage ou renouvellement de vœux féerique", "Une crémaillère festive et conviviale"] },
  { cat: "PROJETS", int: "Profond", q: "Quel engagement fort a le plus de valeur à tes yeux ?", opts: ["Se soutenir fidèlement dans les épreuves", "Rester toujours à l'écoute avec bienveillance", "Cultiver la passion au fil des années", "Construire un foyer rassurant et joyeux"] },
  { cat: "PROJETS", int: "Doux", q: "Si on achetait un petit véhicule aménagé pour le week-end ?", opts: ["Un combi vintage pour sillonner les plages", "Un van moderne hyper confortable", "Des vélos avec sacoches pour l'aventure", "Pas de véhicule, la marche à pied et le train !"] },
  { cat: "PROJETS", int: "Doux", q: "Quelle habitude écologique ou saine aimerais-tu adopter à deux ?", opts: ["Cuisiner 100% fait maison avec produits locaux", "Faire plus de méditation ou yoga duo", "Réduire nos déchets et consommer local", "Se déconnecter des écrans un soir par semaine"] },
  { cat: "PROJETS", int: "Profond", q: "Comment souhaites-tu que l'on gère notre équilibre vie pro / vie perso ?", opts: ["Priorité absolue à nos moments de couple le soir", "S'entraider pour réussir nos carrières respectives", "Se réserver un week-end d'évasion par mois", "Créer un espace de travail inspirant chacun"] },

  // AMOUR, ÉMOTIONS & INTIMITÉ
  { cat: "EMOTIONS", int: "Profond", q: "Qu'est-ce qui te fait te sentir le plus aimé(e) au quotidien ?", opts: ["Des compliments sincères et mots doux", "Des câlins et contacts physiques fréquents", "Des petits services rendus pour m'aider", "Du temps de qualité passé yeux dans les yeux"] },
  { cat: "EMOTIONS", int: "Doux", q: "Quel geste d'affection simple me caractérise le plus ?", opts: ["Te tenir la main en marchant", "Te faire un bisou sur le front ou la joue", "Te serrer fort dans mes bras le soir", "Poser ma main sur toi gentiment"] },
  { cat: "EMOTIONS", int: "Profond", q: "Quand je suis triste ou anxieux(se), de quoi ai-je le plus besoin ?", opts: ["Qu'on me prenne dans les bras en silence", "Qu'on m'écoute vider mon sac sans jugement", "Qu'on me propose une solution pratique", "Qu'on me laisse un petit moment au calme"] },
  { cat: "EMOTIONS", int: "Piquant", q: "Quel endroit de ton corps est le plus sensible à mes caresses ?", opts: ["Le cou et derrière les oreilles", "Le bas du dos", "Les cheveux et le cuir chevelu", "Les mains et les bras"] },
  { cat: "EMOTIONS", int: "Profond", q: "Quelle force notre couple possède-t-il selon toi ?", opts: ["Notre capacité à communiquer et tout se dire", "Notre complicité et notre humour partagé", "Notre soutien inconditionnel dans les projets", "Notre alchimie physique et émotionnelle"] },
  { cat: "EMOTIONS", int: "Doux", q: "Quel mot doux ou phrase dite par moi te touche en plein cœur ?", opts: ["'Je suis tellement fier/fière de toi'", "'Je me sens en sécurité dans tes bras'", "'Tu es magnifique aujourd'hui'", "'Merci d'être là dans ma vie'"] },
  { cat: "EMOTIONS", int: "Piquant", q: "Quel est ton type de baiser préféré entre nous ?", opts: ["Le baiser passionné et intense", "Le bisou doux et prolongé", "Le petit baiser volé et coquin", "Le baiser tendresse sur les yeux ou la joue"] },
  { cat: "EMOTIONS", int: "Profond", q: "Comment décrirais-tu le sentiment de sécurité dans notre relation ?", opts: ["Pouvoir être 100% moi-même sans filtre", "Savoir que tu seras toujours là pour moi", "Ne jamais craindre le jugement", "Se sentir écouté(e) et compris(e) à chaque instant"] },
  { cat: "EMOTIONS", int: "Piquant", q: "Quelle ambiance crée immédiatement une étincelle romantique entre nous ?", opts: ["Une lumière tamisée avec bougies et musique", "Un bain chaud aux huiles essentielles à deux", "Un massage relaxant aux huiles parfumées", "Un regard mystérieux et soutenu"] },
  { cat: "EMOTIONS", int: "Profond", q: "Qu'as-tu appris sur toi-même depuis que nous sommes ensemble ?", opts: ["À m'ouvrir davantage émotionnellement", "À être plus patient(e) et à l'écoute", "À aimer plus profondément et sans peur", "À accorder plus de valeur aux petites choses"] },
  { cat: "EMOTIONS", int: "Doux", q: "Quel compliment sur ta personnalité te fait le plus plaisir ?", opts: ["'Tu es d'une bienveillance incroyable'", "'Ta joie de vivre est contagieuse'", "'Tu es une personne tellement intelligente'", "'Tu as une âme magnifique'"] },
  { cat: "EMOTIONS", int: "Piquant", q: "Quel est le moment de la journée où tu me trouves le/la plus irrésistible ?", opts: ["Au réveil, au naturel dans le lit", "Quand je suis habillé(e) élégamment pour sortir", "Quand je suis concentré(e) sur ce que j'aime", "En sortant de la douche, tout(e) frais/fraîche"] },
  { cat: "EMOTIONS", int: "Profond", q: "Comment surmontes-tu un doute ou une crainte dans ta vie ?", opts: ["En t'en confiant immédiatement à moi", "En prenant un peu de recul pour réfléchir", "En faisant du sport ou une activité pour évacuer", "En cherchant du réconfort dans mes bras"] },
  { cat: "EMOTIONS", int: "Piquant", q: "Si l'on devait programmer une soirée 100% séduction ?", opts: ["Un rendez-vous secret dans un hôtel d'exception", "Un jeu de rôle ou d'énigmes complices", "Un dîner épicé aux chandelles suivi d'un massage", "Une nuit blanche à discuter et se faire des câlins"] },

  // SECRETS, ANECDOTES & HUMOUR
  { cat: "ANECDOTES", int: "Doux", q: "Quelle est notre blague ou anecdote privée la plus drôle ?", opts: ["Une erreur de mot ou un lapsus mémorable", "Un moment de maladresse en public", "Une situation absurde vécue en vacances", "Une imitation ratée mais désopilante"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quel est le talent caché le plus inattendu chez moi ?", opts: ["Imiter des voix ou des personnes", "Retenir des détails ou dates incroyables", "Trouver des solutions créatives bizarres", "Deviner ce que tu penses avant que tu le dises"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quelle est la chose la plus maladroite que j'ai faite récemment ?", opts: ["Faire tomber ou casser un objet par terre", "Me tromper de direction en marchant", "Mettre mes vêtements à l'envers", "Oublier où j'avais posé mes clés/téléphone"] },
  { cat: "ANECDOTES", int: "Doux", q: "Si j'étais un super-héros, quel serait mon pouvoir comique ?", opts: ["Le pouvoir de retrouver tous les objets perdus", "Transformer l'eau en café ou chocolat chaud", "Faire rire n'importe qui en moins de 5 secondes", "Endormir n'importe qui avec un câlin"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quelle expression ou mot bizarre j'utilise tout le temps ?", opts: ["Un petit mot d'amour inventé", "Un juron rigolo ou mignon", "Une expression de ma région ou enfance", "Un bruit d'étonnement caractéristique"] },
  { cat: "ANECDOTES", int: "Doux", q: "Si on participait à un jeu télévisé en duo ?", opts: ["Pékin Express (Aventure et orientation)", "Les Amours (Questions de complicité)", "Un jeu de culture générale éprouvant", "Une compétition de cuisine en binôme"] },
  { cat: "ANECDOTES", int: "Piquant", q: "Quel est le secret le plus mignon que tu ne m'as avoué que tardivement ?", opts: ["J'ai répété mon premier 'je t'aime' devant le miroir", "J'ai demandé conseil à mes ami(e)s pour ma tenue", "J'ai gardé le premier billet/ticket de notre sortie", "J'étais ultra stressé(e) avant notre 1er RDV"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quel genre d'élève étais-tu à l'école ?", opts: ["Le/la bavard(e) au fond de la classe", "Le/la sage au premier rang", "Le/la rêveur(se) qui regardait par la fenêtre", "Le/la rigolo(te) qui faisait rire tout le monde"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quelle peur enfantine un peu ridicule as-tu gardée ?", opts: ["Peur du noir ou des monstres sous le lit", "Peur de certains insectes rigolos", "Peur du vide ou des manèges", "Peur d'arriver en retard à un rendez-vous"] },
  { cat: "ANECDOTES", int: "Doux", q: "Si notre vie de couple était une série TV, quelle serait sa catégorie ?", opts: ["Une comédie romantique feel-good", "Une série d'aventure pleine de rebondissements", "Un sitcom désopilant plein de fous rires", "Un drame passionné et palpitant"] },
  { cat: "ANECDOTES", int: "Doux", q: "Quelle est la folie culinaire la plus bizarre que j'aime manger ?", opts: ["Mélanger du sucré et du salé étrange", "Mettre du fromage sur tout", "Manger des snacks très tard le soir", "Manger des plats très très épicés"] },

  // DILEMMES ROMANTIQUES & "TU PRÉFÈRES..."
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Un week-end insolite dans les arbres ou un hôtel SPA de luxe ?", opts: ["Cabane haut perchée dans les arbres", "Hôtel SPA 5 étoiles ultra confortable", "Un mix des deux si possible !", "Plutôt du camping sauvage à la dure"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Ne plus jamais pouvoir me faire de bisous ou ne plus me faire de câlins ?", opts: ["Garder les bisous à tout prix !", "Garder les grands câlins réconfortants !", "Impossible de choisir, c'est cruel !", "Je refuse ce dilemme !"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Cuisiner un festin à deux ou te faire livrer ton plat préféré ?", opts: ["Cuisiner en musique ensemble", "Se faire livrer et ne rien faire", "Aller directement au restaurant", "Préparer un pique-nique"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Un réveil avec petit-déjeuner au lit ou un massage des épaules le soir ?", opts: ["Le petit-déjeuner gourmand au lit", "Le massage relaxant en fin de journée", "Les deux le même jour !", "Un mot doux sur l'oreiller"] },
  { cat: "DILEMMES", int: "Piquant", q: "Tu préfères : Un baiser passionné sous une pluie battante ou un baiser doux au coucher de soleil ?", opts: ["Sous la pluie battante façon cinéma", "Au coucher de soleil sur la plage", "Au coin du feu pendant l'hiver", "Au sommet d'une montagne"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Recevoir une lettre d'amour écrite à la main ou une surprise matérielle ?", opts: ["La lettre d'amour écrite avec le cœur", "La surprise matérielle dont je rêvais", "Un voyage surprise organisé", "Un poème rigolo inventé"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Qu'on s'habille sur notre 31 pour sortir ou rester en pyjama douillet ?", opts: ["S'habiller ultra chic pour une grande soirée", "Pyjama ultra confortable devant un film", "Chic au resto puis pyjama à la maison !", "Tenue décontractée chic"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Passer une soirée à observer les étoiles ou visiter un musée d'art moderne ?", opts: ["Observer les étoiles allongés dans l'herbe", "Flâner dans un beau musée passionnant", "Faire un concert de musique en plein air", "Aller au cinéma voir un grand film"] },
  { cat: "DILEMMES", int: "Piquant", q: "Tu préfères : Un baiser volé dans un ascenseur ou un mot coquin glissé dans la poche ?", opts: ["Le baiser volé dans l'ascenseur", "Le petit mot secret dans la poche", "Un regard complice de loin", "Un appel secret durant la journée"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Découvrir un nouveau pays chaque année ou avoir un refuge secret adoré ?", opts: ["Voyager et explorer de nouveaux pays", "Avoir notre refuge coup de cœur où revenir", "Alterner un an sur deux", "Rester explorer nos magnifiques régions"] },
];

/* ============================================================
   QUESTIONS FOR FRIENDS (AMIS)
   ============================================================ */
const friendsQuestionsData = [
  // RENCONTRE & DÉBUTS D'AMITIÉ
  { cat: "RENCONTRE", int: "Doux", q: "Comment on s'est rencontrés pour la première fois ?", opts: ["À l'école/université", "Dans un événement social", "Par des amis communs", "Au travail"] },
  { cat: "RENCONTRE", int: "Doux", q: "Ce qui m'a le plus marqué chez toi quand on s'est connus ?", opts: ["Ton sens de l'humour", "Ta gentillesse", "Ton intelligence", "Ton énergie"] },
  { cat: "RENCONTRE", int: "Profond", q: "À quel moment as-tu réalisé qu'on serait de vrais amis ?", opts: ["Après notre première longue conversation", "Quand on a vécu quelque chose ensemble", "Quand tu m'as aidé dans un moment difficile", "Ça a été naturel dès le début"] },
  { cat: "RENCONTRE", int: "Doux", q: "Quel est notre premier souvenir ensemble le plus drôle ?", opts: ["Une situation maladroite", "Un fou rire mémorable", "Une activity ratée mais drôle", "Une conversation absurde"] },

  // INTÉRÊTS & LOISIRS
  { cat: "INTERETS", int: "Doux", q: "Quelle activity on aime faire ensemble ?", opts: ["Sport/fitness", "Jeux vidéo", "Sorties culturelles", " Cuisine/restauration"] },
  { cat: "INTERETS", int: "Doux", q: "Quel genre de film/série on regarde ensemble ?", opts: ["Comédie", "Action/aventure", "Science-fiction", "Documentaires"] },
  { cat: "INTERETS", int: "Doux", q: "Quelle musique on écoute ensembles ?", opts: ["Pop/variété", "Rock/métal", "Hip-hop/rap", "Électro/EDM"] },
  { cat: "INTERETS", int: "Profond", q: "Quel sujet de conversation on pourrait avoir pendant des heures ?", opts: ["Nos projets et rêves", "Philosophie et vie", "Technologie et innovations", "Expériences de vie"] },

  // VALEURS & OPINIONS
  { cat: "VALEURS", int: "Profond", q: "Quelle valeur est la plus importante pour toi dans l'amitié ?", opts: ["La loyauté", "L'honnêteté", "Le soutien", "La liberté"] },
  { cat: "VALEURS", int: "Profond", q: "Comment tu définis une vraie amitié ?", opts: ["Quelqu'un sur qui compter", "Partager des moments bons et mauvais", "Pouvoir être soi-même", "Grandir ensemble"] },
  { cat: "VALEURS", int: "Doux", q: "Quelle qualité tu admires le plus chez moi ?", opts: ["Ton écoute", "Ta créativité", "Ta persévérance", "Ton optimisme"] },
  { cat: "VALEURS", int: "Profond", q: "Qu'est-ce qui pourrait briser notre amitié ?", opts: ["La trahison", "Le manque de respect", "L'éloignement progressif", "Les valeurs incompatibles"] },

  // PROJETS & AVENIR
  { cat: "PROJETS", int: "Doux", q: "Quel voyage on aimerait faire ensemble ?", opts: ["Road trip across le pays", "Voyage en Asie", "Week-end dans une ville européenne", "Aventure dans la nature"] },
  { cat: "PROJETS", int: "Profond", q: "Où tu nous vois dans 5 ans ?", opts: ["Toujours aussi proches", "Avec nos propres familles mais amis", "Collaborant sur un projet", "Vivant dans la même ville"] },
  { cat: "PROJETS", int: "Doux", q: "Quel challenge on pourrait relever ensemble ?", opts: ["Un marathon ou course", "Apprendre une nouvelle compétence", "Lancer un projet/business", "Un voyage audacieux"] },

  // CONFIDENCES & ANECDOTES
  { cat: "CONFIDENCES", int: "Doux", q: "Quel secret ou confidence personnelle tu m'as fait ?", opts: ["Une peur cachée", "Un rêve secret", "Une expérience passée", "Un weakness"] },
  { cat: "CONFIDENCES", int: "Profond", q: "De quoi as-tu le plus besoin dans les moments difficiles ?", opts: ["Que tu m'écoutes sans juger", "Des conseils pratiques", "Juste ta présence", "De l'humour pour détendre"] },
  { cat: "CONFIDENCES", int: "Doux", q: "Quelle est la chose la plus drôle que tu as apprise sur moi ?", opts: ["Une habitude bizarre", "Un talent caché", "Une expérience absurde", "Un childhood memory"] },
  { cat: "CONFIDENCES", int: "Profond", q: "Quel regret as-tu dans notre amitié ?", opts: ["Ne pas avoir passé plus de temps ensemble", "Ne pas avoir dit quelque chose important", "Avoir laissé des malentendus", "Rien de significatif"] },

  // DILEMMES D'AMITIÉ
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : On part en voyage tous les deux ou on invite un groupe d'amis ?", opts: ["Juste nous deux pour l'aventure", "Plus on est de fous plus on rit", "Dépend de la destination", "Alternatif entre les deux"] },
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : On va à un concert ou on fait une activité calme ?", opts: ["Concert pour l'énergie", "Activity calme pour discuter", "Dépend de l'humeur", "Les deux dans la même journée"] },
  { cat: "DILEMMES", int: "Profond", q: "Tu préfères : Une amitié profonde mais distante ou une amitié proche mais superficielle ?", opts: ["Profonde même si rare", "Proximité même si légère", "Les deux si possible", "Profonde et proche"] },
];

/* ============================================================
   QUESTIONS FOR FAMILY (FAMILLE)
   ============================================================ */
const familyQuestionsData = [
  // ENFANCE & SOUVENIRS
  { cat: "ENFANCE", int: "Doux", q: "Quel est ton premier souvenir de moi ?", opts: ["Quand je suis né(e)", "Une activity ensemble", "Un moment familial", "Une célébration"] },
  { cat: "ENFANCE", int: "Doux", q: "Quelle tradition familiale tu préfères ?", opts: ["Les repas du dimanche", "Les vacances en famille", "Les fêtes religieuses", "Les anniversaires"] },
  { cat: "ENFANCE", int: "Profond", q: "Comment notre famille a changé depuis ton enfance ?", opts: ["On est plus proches", "On s'est éloignés", "On a mûri ensemble", "Les dynamiques ont évolué"] },
  { cat: "ENFANCE", int: "Doux", q: "Quel moment familial reste gravé dans ta mémoire ?", opts: ["Un mariage important", "Une vacances mémorable", "Un moment difficile surmonté", "Une célébration joyeuse"] },

  // RELATIONS PARENTS-ENFANTS
  { cat: "RELATIONS", int: "Profond", q: "Comment tu décrirais notre relation ?", opts: ["Très proche et ouverte", "Respectueuse mais distante", "Parfois difficile mais sincère", "En évolution"] },
  { cat: "RELATIONS", int: "Profond", q: "De quoi as-tu le plus besoin de ma part ?", opts: ["De soutien émotionnel", "De conseils pratiques", "D'indépendance et confiance", "De temps ensemble"] },
  { cat: "RELATIONS", int: "Doux", q: "Quelle activité familiale tu aimes le plus ?", opts: ["Cuisiner ensemble", "Regarder des films", "Sortir en nature", "Discuter autour d'un repas"] },
  { cat: "RELATIONS", int: "Profond", q: "Y a-t-il quelque chose que tu n'as jamais dit à la famille ?", opts: ["Un rêve personnel", "Une difficulté cachée", "Un regret", "Un besoin non exprimé"] },

  // VALEURS FAMILIALES
  { cat: "VALEURS", int: "Profond", q: "Quelle valeur familiale est la plus importante pour toi ?", opts: ["La loyauté familiale", "Le soutien mutuel", "Le respect des traditions", "L'ouverture et le progrès"] },
  { cat: "VALEURS", int: "Profond", q: "Comment tu perçois le rôle de chacun dans notre famille ?", opts: ["Chacun a sa place claire", "Les rôles sont flexibles", "Certains rôles sont pesants", "En transition"] },
  { cat: "VALEURS", int: "Doux", q: "Quelle qualité familiale tu admires le plus ?", opts: ["La résilience", "La générosité", "L'unité", "L'humour"] },
  { cat: "VALEURS", int: "Profond", q: "Qu'est-ce qui pourrait renforcer nos liens familiaux ?", opts: ["Plus de communication", "Plus de temps ensemble", "Moins de jugement", "De nouvelles traditions"] },

  // PROJETS & AVENIR
  { cat: "PROJETS", int: "Doux", q: "Quel projet familial on pourrait réaliser ?", opts: ["Voyage en famille", "Rénovation de la maison", "Création d'entreprise familiale", "Project caritatif"] },
  { cat: "PROJETS", int: "Profond", q: "Comment tu imagines notre famille dans 10 ans ?", opts: ["Plus unie que jamais", "Avec les nouvelles générations", "Évoluant naturellement", "Forte malgré les distances"] },
  { cat: "PROJETS", int: "Doux", q: "Quelle nouvelle tradition on pourrait instaurer ?", opts: ["Réunion annuelle", "Vacances ensemble", "Activity mensuelle", "Communication régulière"] },

  // CONFLITS & RÉSOLUTIONS
  { cat: "CONFLITS", int: "Profond", q: "Comment on gère les conflits dans notre famille ?", opts: ["On les évite", "On les discute calmement", "Ça explose puis on se réconcilie", "Chacun gère son côté"] },
  { cat: "CONFLITS", int: "Profond", q: "Y a-t-il un non-dit dans notre famille ?", opts: ["Un secret familial", "Un ressentiment ancien", "Un sujet tabou", "Des attentes non exprimées"] },
  { cat: "CONFLITS", int: "Doux", q: "Quelle dispute a marqué notre relation ?", opts: ["Un malentamentu sérieux", "Un désaccord de valeurs", "Une situation financière", "Un choix de vie"] },

  // DILEMMES FAMILIAUX
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Une famille nombreuse ou une famille restreinte mais très unie ?", opts: ["Nombreuse pour la joie collective", "Restreinte pour la qualité des liens", "Équilibre entre les deux", "La qualité prime sur la quantité"] },
  { cat: "DILEMMES", int: "Profond", q: "Tu préfères : Vivre proche de la famille ou à distance mais indépendant ?", opts: ["Proximité pour le soutien", "Distance pour l'indépendance", "Visites régulières", "Voir au cas par cas"] },
];

/* ============================================================
   QUESTIONS FOR COLLEAGUES (COLLÈGUES)
   ============================================================ */
const colleaguesQuestionsData = [
  // COLLABORATION
  { cat: "COLLABORATION", int: "Doux", q: "Qu'est-ce que tu apprécies le plus dans notre collaboration ?", opts: ["Ta créativité", "Ta fiabilité", "Ton expertise", "Ta communication"] },
  { cat: "COLLABORATION", int: "Profond", q: "Comment tu décrirais notre style de travail ensemble ?", opts: ["Complémentaire", "Similaire et cohérent", "Parfois difficile mais productif", "En évolution"] },
  { cat: "COLLABORATION", int: "Doux", q: "Quel projet on a réalisé ensemble dont tu es fier ?", opts: ["Le projet X", "La campagne Y", "L'initiative Z", "Notre routine quotidienne"] },
  { cat: "COLLABORATION", int: "Profond", q: "Qu'est-ce qui pourrait améliorer notre collaboration ?", opts: ["Plus de communication", "Meilleure répartition des tâches", "Plus de feedback", "Plus de flexibilité"] },

  // COMMUNICATION
  { cat: "COMMUNICATION", int: "Doux", q: "Comment tu préfères communiquer au travail ?", opts: ["En face à face", "Par email", "Par messagerie instantanée", "Par visioconférence"] },
  { cat: "COMMUNICATION", int: "Profond", q: "Y a-t-il des sujets qu'on évite de discuter ?", opts: ["Les problèmes personnels", "Les critiques constructives", "Les ambitions individuelles", "Les conflits"] },
  { cat: "COMMUNICATION", int: "Doux", q: "Quel type de feedback tu préfères recevoir ?", opts: ["Direct et honnête", "Doux et constructif", "Donné en privé", "Avec des exemples concrets"] },

  // VALEURS PROFESSIONNELLES
  { cat: "VALEURS", int: "Profond", q: "Quelle valeur professionnelle est la plus importante pour toi ?", opts: ["L'excellence", "L'innovation", "Le travail d'équipe", "L'équilibre vie pro/perso"] },
  { cat: "VALEURS", int: "Profond", q: "Comment tu perçois l'ambiance de notre équipe ?", opts: ["Très positive et motivante", "Correcte mais impersonnelle", "Parfois tendue", "En amélioration"] },
  { cat: "VALEURS", int: "Doux", q: "Quelle qualité professionnelle tu admires le plus chez moi ?", opts: ["Ton leadership", "Ta technique", "Ta diplomatie", "Ta résilience"] },

  // DÉFIS & OBJECTIFS
  { cat: "DEFIS", int: "Doux", q: "Quel défi professionnel on pourrait relever ensemble ?", opts: ["Un projet ambitieux", "Une certification", "Une innovation", "Une amélioration de processus"] },
  { cat: "DEFIS", int: "Profond", q: "Quels sont tes objectifs professionnels à moyen terme ?", opts: ["Évolution de carrière", "Équilibre de vie", "Reconnaissance", "Impact significatif"] },
  { cat: "DEFIS", int: "Doux", q: "Comment tu vois notre évolution professionnelle ?", opts: ["Continuer ensemble", "Prendre des chemins différents", "Collaborer ponctuellement", "Mentoring"] },

  // CONFLITS & RÉSOLUTIONS
  { cat: "CONFLITS", int: "Profond", q: "Comment on gère les désaccords professionnels ?", opts: ["On les discute calmement", "On les évite", "Chacun défend son position", "On demande de l'aide"] },
  { cat: "CONFLITS", int: "Doux", q: "Y a-t-il eu un malentendu entre nous ?", opts: ["Oui, mais résolu", "Oui, encore présent", "Non, on s'entend bien", "Des petits malentendus parfois"] },

  // DILEMMES PROFESSIONNELS
  { cat: "DILEMMES", int: "Doux", q: "Tu préfères : Travailler en équipe ou en autonomie ?", opts: ["En équipe pour la synergie", "En autonomie pour l'efficacité", "Alternatif selon les projets", "Équipe mais avec rôles clairs"] },
  { cat: "DILEMMES", int: "Profond", q: "Tu préfères : Un poste stable ou des opportunités de croissance ?", opts: ["Stabilité pour la sécurité", "Croissance pour l'ambition", "Équilibre entre les deux", "Voir les opportunités"] },
];

/* ============================================================
   APPLICATION STATE MANAGEMENT
   ============================================================ */
let questionsBank = [];
let activeSessionQuestions = [];
let currentQuestionIndex = 0;
let currentTurnPlayer = 1; // 1 = P1, 2 = P2
let selectedOptionIndex = null;
let isCustomSelected = false;
let currentRelationType = "COUPLE"; // COUPLE | AMIS | FAMILLE | COLLEGUES

// Local Storage Keys
const LS_BANK_KEY = "complicite_bank_data";
const LS_JOURNAL_KEY = "complicite_journal_data";
const LS_RELATION_KEY = "complicite_relation_type";

/* ============================================================
   RELATION TYPE CONFIGURATION
   ============================================================ */
const RELATION_CONFIG = {
  COUPLE: {
    name: "Couple",
    icon: "fa-heart",
    color: "rose",
    questions: rawQuestionsData,
    categories: {
      "ALL": "Toutes les catégories (100+ questions)",
      "SOUVENIRS": "📜 Souvenirs & Débuts",
      "GOUTS": "☕ Goûts, Passions & Habitudes",
      "PROJETS": "✈️ Projets, Rêves & Avenir",
      "EMOTIONS": "💬 Amour, Émotions & Intimité",
      "ANECDOTES": "🎭 Secrets, Anecdotes & Humour",
      "DILEMMES": "⚖️ Dilemmes & 'Tu préfères...'"
    },
    labels: {
      p1: "Partenaire A",
      p2: "Partenaire B",
      title: "Notre Cahier de Complicité",
      subtitle: "Plus de 100 questions pour vibrer ensemble"
    }
  },
  AMIS: {
    name: "Amis",
    icon: "fa-user-group",
    color: "blue",
    questions: friendsQuestionsData,
    categories: {
      "ALL": "Toutes les catégories (30+ questions)",
      "RENCONTRE": "🤝 Rencontre & Débuts",
      "INTERETS": "🎯 Intérêts & Loisirs",
      "VALEURS": "💎 Valeurs & Opinions",
      "PROJETS": "🚀 Projets & Avenir",
      "CONFIDENCES": "🔒 Confidences & Anecdotes",
      "DILEMMES": "⚖️ Dilemmes d'Amitié"
    },
    labels: {
      p1: "Ami(e) A",
      p2: "Ami(e) B",
      title: "Notre Cahier d'Amitié",
      subtitle: "Questions pour approfondir votre amitié"
    }
  },
  FAMILLE: {
    name: "Famille",
    icon: "fa-house-chimney",
    color: "amber",
    questions: familyQuestionsData,
    categories: {
      "ALL": "Toutes les catégories (25+ questions)",
      "ENFANCE": "👶 Enfance & Souvenirs",
      "RELATIONS": "👨‍👩‍👧 Relations Familiales",
      "VALEURS": "💝 Valeurs Familiales",
      "PROJETS": "🏠 Projets & Avenir",
      "CONFLITS": "🛡️ Conflits & Résolutions",
      "DILEMMES": "⚖️ Dilemmes Familiaux"
    },
    labels: {
      p1: "Membre A",
      p2: "Membre B",
      title: "Notre Cahier de Famille",
      subtitle: "Questions pour renforcer les liens familiaux"
    }
  },
  COLLEGUES: {
    name: "Collègues",
    icon: "fa-briefcase",
    color: "emerald",
    questions: colleaguesQuestionsData,
    categories: {
      "ALL": "Toutes les catégories (20+ questions)",
      "COLLABORATION": "🤝 Collaboration",
      "COMMUNICATION": "💬 Communication",
      "VALEURS": "🎯 Valeurs Professionnelles",
      "DEFIS": "🏆 Défis & Objectifs",
      "CONFLITS": "⚡ Conflits & Résolutions",
      "DILEMMES": "⚖️ Dilemmes Professionnels"
    },
    labels: {
      p1: "Collègue A",
      p2: "Collègue B",
      title: "Notre Cahier Professionnel",
      subtitle: "Questions pour améliorer la collaboration"
    }
  }
};

/* ============================================================
   VALIDATION & SANITIZATION
   ============================================================ */

// Validation des entrées utilisateur pour sécurité
const VALIDATION_RULES = {
  MAX_NAME_LENGTH: 30,
  MIN_NAME_LENGTH: 1,
  MAX_ANSWER_LENGTH: 500,
  MAX_QUESTION_LENGTH: 200,
  MAX_OPTION_LENGTH: 100,
  ALLOWED_NAME_CHARS: /^[a-zA-Zàáâäãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż\s'-]+$/,
  SAFE_TEXT_REGEX: /^[\p{L}\p{N}\p{P}\p{S}\s]+$/u
};

function sanitizeInput(input, maxLength = 500) {
  if (typeof input !== 'string') return '';
  const trimmed = input.trim();
  if (trimmed.length === 0) return '';
  if (trimmed.length > maxLength) return trimmed.substring(0, maxLength);
  return trimmed;
}

function validateName(name) {
  const sanitized = sanitizeInput(name, VALIDATION_RULES.MAX_NAME_LENGTH);
  if (sanitized.length < VALIDATION_RULES.MIN_NAME_LENGTH) {
    return { valid: false, error: 'Le nom doit contenir au moins 1 caractère' };
  }
  if (!VALIDATION_RULES.ALLOWED_NAME_CHARS.test(sanitized)) {
    return { valid: false, error: 'Le nom contient des caractères non autorisés' };
  }
  return { valid: true, value: sanitized };
}

function validateAnswer(answer) {
  const sanitized = sanitizeInput(answer, VALIDATION_RULES.MAX_ANSWER_LENGTH);
  if (sanitized.length === 0) {
    return { valid: false, error: 'La réponse ne peut pas être vide' };
  }
  if (!VALIDATION_RULES.SAFE_TEXT_REGEX.test(sanitized)) {
    return { valid: false, error: 'La réponse contient des caractères non autorisés' };
  }
  return { valid: true, value: sanitized };
}

function validateQuestion(question) {
  const sanitizedQ = sanitizeInput(question, VALIDATION_RULES.MAX_QUESTION_LENGTH);
  if (sanitizedQ.length < 5) {
    return { valid: false, error: 'La question doit contenir au moins 5 caractères' };
  }
  if (!VALIDATION_RULES.SAFE_TEXT_REGEX.test(sanitizedQ)) {
    return { valid: false, error: 'La question contient des caractères non autorisés' };
  }
  return { valid: true, value: sanitizedQ };
}

function validateOption(option) {
  const sanitized = sanitizeInput(option, VALIDATION_RULES.MAX_OPTION_LENGTH);
  if (sanitized.length === 0) {
    return { valid: false, error: 'L\'option ne peut pas être vide' };
  }
  if (!VALIDATION_RULES.SAFE_TEXT_REGEX.test(sanitized)) {
    return { valid: false, error: 'L\'option contient des caractères non autorisés' };
  }
  return { valid: true, value: sanitized };
}

function validateRoomCode(code) {
  if (!code || typeof code !== 'string') {
    return { valid: false, error: 'Code de session invalide' };
  }
  const sanitized = code.trim().toUpperCase();
  if (!/^[A-Z0-9]{3,10}$/.test(sanitized)) {
    return { valid: false, error: 'Le code doit contenir 3-10 caractères alphanumériques' };
  }
  return { valid: true, value: sanitized };
}

/* ============================================================
   HELPERS - Fonctions utilitaires communes
   ============================================================ */
function escapeHTML(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Fonction générique pour créer des éléments DOM avec attributs
function createElementWithAttributes(tag, attributes = {}) {
  const element = document.createElement(tag);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else {
      element.setAttribute(key, value);
    }
  });
  
  return element;
}

// Fonction générique pour afficher/cacher des éléments
function toggleElementDisplay(elementId, show) {
  const element = qs(elementId);
  if (element) {
    element.classList.toggle('hidden', !show);
  }
}

// Fonction générique pour mettre à jour le texte d'un élément
function updateElementText(elementId, text) {
  const element = qs(elementId);
  if (element) {
    element.innerText = text;
  }
}

// Fonction générique pour formater les dates
function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'short', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
}

function getPlayerNames() {
  const p1Input = document.getElementById('p1Name').value.trim();
  const p2Input = document.getElementById('p2Name').value.trim();
  
  const p1Validation = validateName(p1Input);
  const p2Validation = validateName(p2Input);
  
  return {
    p1: p1Validation.valid ? p1Validation.value : "Camille",
    p2: p2Validation.valid ? p2Validation.value : "Alex"
  };
}

function partnerFirstName() {
  return (partnerName || '').split(/[\s'-]/)[0] || partnerName;
}

/* ============================================================
   MÉMOIRE DE SESSION (sessionStorage) — pour la reconnexion
   ============================================================ */
function saveSessionState() {
  if (!onlineMode || !roomCode) return;
  try {
    sessionStorage.setItem(SS_SESSION_KEY, JSON.stringify({
      code: roomCode,
      role: iAmHost ? 'host' : 'guest',
      myName,
      partnerName,
      timerSeconds,
      questionIndex: currentQuestionIndex,
      // L'ordre mélangé doit survivre : sinon l'hôte qui reprend
      // regénérerait un autre ordre et se désynchroniserait.
      questions: activeSessionQuestions,
      savedAt: Date.now()
    }));
  } catch (e) { /* sessionStorage indisponible (navigation privée) : on ignore */ }
}

function loadSessionState() {
  try {
    const raw = sessionStorage.getItem(SS_SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.code || !/^[A-Z0-9]{3,10}$/.test(s.code)) return null;
    return s;
  } catch (e) { return null; }
}

function clearSessionState() {
  try { sessionStorage.removeItem(SS_SESSION_KEY); } catch (e) {}
}

function qs(id) {
  return document.getElementById(id);
}

/* Mélange uniforme de Fisher-Yates : chaque permutation équiprobable.
   (Remplace le tri biaisé `sort(() => Math.random() - 0.5)`) */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================
   MINUTEUR PAR QUESTION (optionnel) — anneau de progression SVG
   ============================================================ */
let timerSeconds = 0;      // durée choisie en secondes (0 = sans limite)
let timerInterval = null;  // handle du tick 1 s
let timerRemaining = 0;    // secondes restantes
const TIMER_RING_CIRCUMFERENCE = 97.39; // 2π × r (r = 15.5)

function getSelectedTimerSeconds() {
  const btn = document.querySelector('.timer-choice.selected');
  return btn ? (parseInt(btn.dataset.seconds, 10) || 0) : 0;
}

function startQuestionTimer() {
  stopQuestionTimer();
  const wrap = qs('timerRingWrap');
  if (!timerSeconds || timerSeconds <= 0) {
    wrap.classList.add('hidden');
    return;
  }
  wrap.classList.remove('hidden');
  wrap.classList.remove('timer-critical');
  timerRemaining = timerSeconds;
  updateTimerUI();
  timerInterval = setInterval(tickQuestionTimer, 1000);
}

function tickQuestionTimer() {
  timerRemaining--;
  updateTimerUI();
  if (timerRemaining <= 0) {
    stopQuestionTimer();
    onTimerExpired();
  }
}

function stopQuestionTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  const wrap = qs('timerRingWrap');
  if (wrap) wrap.classList.add('hidden');
}

function updateTimerUI() {
  if (!timerSeconds) return;
  const ring = qs('timerRing');
  const text = qs('timerRingText');
  const wrap = qs('timerRingWrap');
  if (!ring || !text || !wrap) return;

  const fraction = Math.max(0, timerRemaining) / timerSeconds;
  ring.style.strokeDashoffset = String(TIMER_RING_CIRCUMFERENCE * (1 - fraction));

  // Texte : secondes sous 1 min, minutes à partir d'une minute
  text.innerText = timerRemaining >= 60
    ? `${Math.round(timerRemaining / 60)}m`
    : String(Math.max(0, timerRemaining));

  // Couleur : rose → ambre (dernier quart) → rouge pulsé (10 dernières s)
  if (timerRemaining <= 10) {
    ring.style.stroke = '#be123c';
    wrap.classList.add('timer-critical');
  } else {
    ring.style.stroke = timerRemaining <= timerSeconds * 0.25 ? '#f59e0b' : '#e11d48';
    wrap.classList.remove('timer-critical');
  }
}

function onTimerExpired() {
  // Ne rien faire si la carte question n'est plus à l'écran
  if (qs('questionCard').classList.contains('hidden')) return;
  if (onlineMode && answeredLocal) return; // déjà répondu, en attente du partenaire

  if (isCustomSelected) {
    const input = document.getElementById('customAnswerInput');
    if (!input.value.trim()) {
      input.value = '⏰ Temps écoulé — pas eu le temps de répondre !';
      updateValidateBtnState(true);
    }
  } else if (selectedOptionIndex === null) {
    // Rien de sélectionné : réponse honnête « temps écoulé »
    isCustomSelected = true;
    document.getElementById('customAnswerInput').value = '⏰ Temps écoulé — pas eu le temps de répondre !';
    updateValidateBtnState(true);
  }
  submitAnswer();
}

/* ============================================================
   PASTILLE DE STATUT DU PARTENAIRE (temps réel)
   ============================================================ */
const PARTNER_STATUS_STYLES = {
  thinking: { dot: 'bg-amber-400 animate-pulse',   label: 'Réfléchit…',   pill: 'bg-amber-50 border-amber-200 text-amber-700' },
  answered: { dot: 'bg-emerald-500',               label: 'A répondu',    pill: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  online:   { dot: 'bg-emerald-500',               label: 'En ligne',     pill: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  offline:  { dot: 'bg-slate-400',                 label: 'Hors ligne',   pill: 'bg-slate-100 border-slate-200 text-slate-500' }
};

function setPartnerStatus(status) {
  if (!PARTNER_STATUS_STYLES[status]) return;
  if (partnerStatus === status) return; // pas de re-render inutile
  partnerStatus = status;
  updatePartnerStatusPill();
}

function updatePartnerStatusPill() {
  const pill = qs('partnerPill');
  if (!pill) return;
  if (!onlineMode) {
    pill.classList.add('hidden');
    return;
  }
  const s = PARTNER_STATUS_STYLES[partnerStatus] || PARTNER_STATUS_STYLES.offline;
  pill.classList.remove('hidden');
  // Classes dynamiques : on nettoie les anciennes avant d'appliquer les nouvelles
  pill.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold transition-all duration-300 ' + s.pill;
  qs('partnerPillDot').className = 'w-2 h-2 rounded-full transition-colors duration-300 ' + s.dot;
  qs('partnerPillLabel').innerText = `${partnerFirstName() || 'Il/elle'} · ${s.label}`;
}

/* ============================================================
   ONLINE STATE (P2P)
   ============================================================ */
let onlineMode = false;      // partie en ligne (à distance) ?
let iAmHost = false;         // hôte = créateur de la session
let roomCode = null;         // code partagé
let myName = null;           // mon prénom (online)
let partnerName = null;      // prénom du/de la partenaire (online)
let answeredLocal = false;   // j'ai répondu à la question courante
let partnerAnswered = false; // l'autre a répondu
let partnerAnswer = null;    // sa réponse (scellée jusqu'à révélation)
let remoteRevealDone = false;// révélation effectuée pour cette question
let advancedThisQuestion = false; // protection anti-double-avance
let invitedCode = null;      // code extrait du lien d'invitation (?rejoindre=…)
let partnerStatus = 'offline'; // 'thinking' | 'answered' | 'online' | 'offline'
let isNetworkOnline = true;  // état de la connexion réseau

// Clé sessionStorage : mémorise la session online le temps de l'onglet
const SS_SESSION_KEY = 'cc_active_session';

/* ============================================================
   DÉTECTION DE CONNEXION RÉSEAU
   ============================================================ */
function initNetworkDetection() {
  // État initial
  isNetworkOnline = navigator.onLine;
  
  // Écouteurs d'événements de connexion
  window.addEventListener('online', handleNetworkOnline);
  window.addEventListener('offline', handleNetworkOffline);
}

function handleNetworkOnline() {
  if (!isNetworkOnline) {
    isNetworkOnline = true;
    console.log('Connexion réseau rétablie');
    
    // Notification visuelle
    showNetworkNotification('Connexion rétablie', 'success');
    
    // Tenter de reconnecter si en mode online
    if (onlineMode && roomCode && !conn) {
      setTimeout(() => {
        if (iAmHost) {
          startHost();
        } else {
          joinRoom();
        }
      }, 1000);
    }
  }
}

function handleNetworkOffline() {
  if (isNetworkOnline) {
    isNetworkOnline = false;
    console.log('Connexion réseau perdue');
    
    // Notification visuelle
    showNetworkNotification('Connexion perdue - Vérifiez votre internet', 'error');
    
    // Mettre à jour le statut du partenaire
    if (onlineMode) {
      setPartnerStatus('offline');
    }
    
    // Arrêter les timers en cours
    stopQuestionTimer();
  }
}

function showNetworkNotification(message, type) {
  // Créer une notification temporaire
  const notification = document.createElement('div');
  notification.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-xl shadow-lg z-50 text-xs font-bold transition-all duration-300 ${
    type === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
  }`;
  notification.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-wifi' : 'fa-wifi-slash'} mr-2"></i>${message}`;
  notification.style.opacity = '0';
  notification.style.transform = 'translate(-50%, -20px)';
  
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translate(-50%, 0)';
  }, 10);
  
  // Auto-suppression après 3 secondes
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translate(-50%, -20px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
window.onload = function() {
  loadQuestionsBank();
  loadJournalData();
  loadRelationType();
  updateBadges();
  initCanvasHearts();
  initApp();
  initTimerChoice();
  initReactionBar();
  initNetworkDetection(); // détection de connexion réseau
  initKeyboardNavigation(); // navigation clavier accessibilité
  initRelationTypeSelector(); // sélecteur de type de relation
  offerResume(); // bandeau « Reprendre la session » si sessionStorage en contient une
};

// Sélection du minuteur dans le setup (groupe de boutons exclusifs)
function initTimerChoice() {
  const group = document.getElementById('timerChoiceGroup');
  if (!group) return;
  group.addEventListener('click', (e) => {
    const btn = e.target.closest('.timer-choice');
    if (!btn) return;
    group.querySelectorAll('.timer-choice').forEach(b => {
      b.classList.toggle('selected', b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
  });
}

function loadJournalData() {
  renderJournal();
}

function loadRelationType() {
  const stored = localStorage.getItem(LS_RELATION_KEY);
  if (stored && RELATION_CONFIG[stored]) {
    currentRelationType = stored;
  } else {
    currentRelationType = "COUPLE";
  }
}

function saveRelationType() {
  localStorage.setItem(LS_RELATION_KEY, currentRelationType);
}

function loadQuestionsBank() {
  const storageKey = `${LS_BANK_KEY}_${currentRelationType}`;
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      questionsBank = JSON.parse(stored);
    } catch(e) {
      // Charger selon le type de relation actuel
      questionsBank = [...RELATION_CONFIG[currentRelationType].questions];
    }
  } else {
    // Charger selon le type de relation actuel
    questionsBank = [...RELATION_CONFIG[currentRelationType].questions];
    saveBankToStorage();
  }
}

function initRelationTypeSelector() {
  const buttons = document.querySelectorAll('.relation-btn');
  const categoryFilter = document.getElementById('categoryFilter');
  const bankCategoryFilter = document.getElementById('bankCategoryFilter');
  
  // Initialiser les catégories selon le type de relation actuel
  updateCategoryOptions();
  updateBankCategoryOptions();
  updateUIForRelationType();
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const relationType = btn.dataset.relation;
      if (RELATION_CONFIG[relationType]) {
        // Mettre à jour l'état
        currentRelationType = relationType;
        saveRelationType();
        
        // Mettre à jour l'UI
        buttons.forEach(b => {
          b.classList.remove('border-rose-500', 'bg-rose-50', 'text-rose-700');
          b.classList.add('border-slate-200', 'bg-white', 'text-slate-600');
          b.setAttribute('aria-pressed', 'false');
        });
        
        btn.classList.remove('border-slate-200', 'bg-white', 'text-slate-600');
        btn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-700');
        btn.setAttribute('aria-pressed', 'true');
        
        // Recharger les questions et mettre à jour l'UI
        questionsBank = [...RELATION_CONFIG[currentRelationType].questions];
        updateCategoryOptions();
        updateBankCategoryOptions();
        updateUIForRelationType();
        updateBadges();
      }
    });
  });
}

function updateBankCategoryOptions() {
  const bankCategoryFilter = document.getElementById('bankCategoryFilter');
  const categories = RELATION_CONFIG[currentRelationType].categories;
  
  bankCategoryFilter.innerHTML = '';
  Object.entries(categories).forEach(([key, label]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = label;
    bankCategoryFilter.appendChild(option);
  });
}

function updateCategoryOptions() {
  const categoryFilter = document.getElementById('categoryFilter');
  const categories = RELATION_CONFIG[currentRelationType].categories;
  
  categoryFilter.innerHTML = '';
  Object.entries(categories).forEach(([key, label]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = label;
    categoryFilter.appendChild(option);
  });
}

function updateUIForRelationType() {
  const config = RELATION_CONFIG[currentRelationType];
  
  // Mettre à jour les labels
  document.getElementById('p1Label').textContent = config.labels.p1;
  document.getElementById('p2Label').textContent = config.labels.p2;
  
  // Mettre à jour les icônes
  const p1Icon = document.getElementById('p1Icon');
  const p2Icon = document.getElementById('p2Icon');
  p1Icon.innerHTML = `<i class="fa-solid ${config.icon}"></i>`;
  p2Icon.innerHTML = `<i class="fa-solid ${config.icon}"></i>`;
  
  // Mettre à jour les couleurs (optionnel - pourrait être étendu)
  // Pour l'instant on garde les couleurs rose/purple pour la cohérence
  
  // Mettre à jour le titre principal si nécessaire
  const headerTitle = document.querySelector('h1.font-cursive');
  if (headerTitle) {
    headerTitle.textContent = config.labels.title;
  }
  
  const headerSubtitle = document.querySelector('p.text-purple-700');
  if (headerSubtitle) {
    headerSubtitle.textContent = config.labels.subtitle;
  }
}

function saveBankToStorage() {
  // Sauvegarder avec préfixe selon le type de relation
  const storageKey = `${LS_BANK_KEY}_${currentRelationType}`;
  localStorage.setItem(storageKey, JSON.stringify(questionsBank));
  updateBadges();
}

function updateBadges() {
  document.getElementById('bankCountBadge').innerText = questionsBank.length;
  const journal = getJournalFromStorage();
  document.getElementById('journalCountBadge').innerText = journal.length;
}

/* ============================================================
   APP INIT & SCREEN ROUTING
   ============================================================ */
function initApp() {
  const params = new URLSearchParams(location.search);
  const code = (params.get('rejoindre') || (location.hash || '').replace('#', '')).toUpperCase().trim();

  if (code && /^[A-Z0-9]{3,10}$/.test(code)) {
    invitedCode = code; // mémorisé AVANT de nettoyer l'URL
    qs('setupCard').classList.add('hidden');
    qs('joinNameCard').classList.remove('hidden');
    qs('joinHostPreview').innerText = `Code ${code} ·`;
    history.replaceState(null, '', location.pathname);
  }
}

/* ============================================================
   P2P ONLINE MODE (WebRTC via PeerJS — aucun serveur à nous)
   ============================================================ */
let peer = null; // signalisation (broker public PeerJS)
let conn = null; // canal de données direct avec le/la partenaire

function makeRoomCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return code;
}

function createRoom() {
  // Réinitialiser toute session précédente sur cette page
  if (peer) { try { peer.destroy(); } catch (e) {} peer = null; }
  conn = null;

  const names = getPlayerNames();
  myName = names.p1 || 'Camille';
  partnerName = names.p2 || 'Ton/ta partenaire';
  timerSeconds = getSelectedTimerSeconds(); // figé à la création, partagé via welcome
  roomCode = makeRoomCode();
  
  // Validation du code généré
  const codeValidation = validateRoomCode(roomCode);
  if (!codeValidation.valid) {
    showJoinError('Erreur lors de la création de la session. Réessayez.');
    return;
  }
  roomCode = codeValidation.value;
  
  iAmHost = true;
  onlineMode = true;

  qs('setupCard').classList.add('hidden');
  qs('hostRoomCard').classList.remove('hidden');
  qs('hostPartnerName').innerText = partnerName;
  qs('roomCodeDisplay').innerText = roomCode;

  const link = `${location.origin}${location.pathname}?rejoindre=${roomCode}`;
  qs('inviteLinkDisplay').innerText = link;
  qs('whatsappShareBtn').href = `https://wa.me/?text=${encodeURIComponent(`Rejoins-moi sur le Cahier de Complicité 💖 : ${link}`)}`;

  const qrBox = qs('qrCodeBox');
  qrBox.innerHTML = '';
  new QRCode(qrBox, { text: link, width: 148, height: 148, correctLevel: QRCode.CorrectLevel.M });

  startHost();
}

function startHost() {
  peer = new Peer(`cc-${roomCode}`, { debug: 1 });

  peer.on('open', () => {
    qs('waitingText').innerText = 'Session active — en attente de ton/ta partenaire…';
    qs('waitingDot').classList.remove('animate-ping');
  });

  peer.on('connection', (incoming) => {
    if (conn && conn.open) {
      incoming.on('open', () => incoming.send({ t: 'busy' }));
      setTimeout(() => incoming.close(), 500);
      return;
    }
    conn = incoming;
    bindConn(incoming);
  });

  peer.on('error', (err) => {
    handlePeerError(err, 'host');
  });
}

function handlePeerError(err, context) {
  console.error('PeerJS Error:', err);
  
  const errorMessages = {
    'unavailable-id': 'Ce code de session est déjà utilisé. Génération d\'un nouveau code…',
    'peer-unavailable': context === 'host' 
      ? 'Impossible de se connecter au partenaire. Vérifiez que le code est correct.' 
      : 'Session introuvable ou expirée. Demande un nouveau lien 💗',
    'disconnected': 'Connexion interrompue. Tentative de reconnexion…',
    'network': 'Problème de réseau détecté. Vérifiez votre connexion internet.',
    'server-error': 'Erreur du serveur de signalisation. Réessayez dans quelques instants.',
    'ssl-unavailable': 'Connexion sécurisée requise. Veuillez utiliser HTTPS.',
    'browser-incompatible': 'Votre navigateur ne supporte pas WebRTC. Essayez Chrome ou Firefox.'
  };
  
  const userMessage = errorMessages[err.type] || 'Erreur de connexion inconnue. Réessayez.';
  
  if (err.type === 'unavailable-id' && context === 'host') {
    // Auto-récupération: générer un nouveau code
    roomCode = makeRoomCode();
    qs('roomCodeDisplay').innerText = roomCode;
    const link = `${location.origin}${location.pathname}?rejoindre=${roomCode}`;
    qs('inviteLinkDisplay').innerText = link;
    qs('whatsappShareBtn').href = `https://wa.me/?text=${encodeURIComponent(`Rejoins-moi sur le Cahier de Complicité 💖 : ${link}`)}`;
    
    // Mettre à jour le QR code
    const qrBox = qs('qrCodeBox');
    qrBox.innerHTML = '';
    new QRCode(qrBox, { text: link, width: 148, height: 148, correctLevel: QRCode.CorrectLevel.M });
    
    // Redémarrer avec le nouveau code
    setTimeout(() => startHost(), 1000);
  } else if (err.type === 'disconnected') {
    // Tentative de reconnexion automatique
    if (onlineMode && roomCode) {
      setTimeout(() => {
        if (iAmHost) {
          startHost();
        } else {
          joinRoom();
        }
      }, 3000);
    }
  } else {
    // Afficher l'erreur à l'utilisateur
    if (context === 'host') {
      qs('waitingText').innerText = userMessage;
      qs('waitingDot').classList.remove('animate-ping');
      qs('waitingDotCore').classList.remove('bg-rose-500');
      qs('waitingDotCore').classList.add('bg-amber-500');
    } else {
      showJoinError(userMessage);
    }
  }
}

function joinRoom() {
  const name = qs('joinNameInput').value.trim();
  const nameValidation = validateName(name);
  
  if (!nameValidation.valid) {
    showJoinError(nameValidation.error || 'Entre ton prénom pour continuer 💗');
    return;
  }
  
  const params = new URLSearchParams(location.search);
  const rawCode = invitedCode || (params.get('rejoindre') || (location.hash || '').replace('#', '')).toUpperCase().trim();
  const codeValidation = validateRoomCode(rawCode);
  
  if (!codeValidation.valid) {
    showJoinError(codeValidation.error || "Lien d'invitation invalide.");
    return;
  }

  myName = nameValidation.value;
  roomCode = codeValidation.value;
  iAmHost = false;
  onlineMode = true;

  // Réinitialiser toute session précédente sur cette page
  if (peer) { try { peer.destroy(); } catch (e) {} peer = null; }
  conn = null;

  qs('joinNameCard').classList.add('hidden');
  qs('connectingCard').classList.remove('hidden');
  qs('connectingText').innerText = `On rejoint la session ${code}…`;

  peer = new Peer(null, { debug: 1 });
  peer.on('open', () => {
    conn = peer.connect(`cc-${code}`, { reliable: true });
    bindConn(conn);
  });
  peer.on('error', (err) => {
    handlePeerError(err, 'guest');
  });
}

function showJoinError(msg) {
  const el = qs('joinError');
  el.innerText = msg;
  el.classList.remove('hidden');
  const card = qs('joinNameCard');
  card.classList.remove('shake');
  void card.offsetWidth;
  card.classList.add('shake');
}

/* ============================================================
   RECONNEXION — récupérer une session interrompue
   ============================================================ */
function offerResume() {
  const saved = loadSessionState();
  if (!saved) return;

  const banner = qs('resumeBanner');
  banner.classList.remove('hidden');
  qs('resumeText').innerHTML = `Session <strong>${saved.code}</strong> avec <strong>${escapeHTML(saved.partnerName || 'ton/ta partenaire')}</strong> trouvée (question ${saved.questionIndex + 1}).`;

  qs('resumeBtn').onclick = () => reconnectSession();
  qs('resumeDismissBtn').onclick = () => {
    banner.classList.add('hidden');
    clearSessionState(); // refus → on purge, pas de relance au prochain reload
  };
}

function reconnectSession() {
  const saved = loadSessionState();
  if (!saved) return;

  // Restaurer l'état AVANT d'afficher quoi que ce soit
  roomCode = saved.code;
  iAmHost = saved.role === 'host';
  myName = saved.myName;
  partnerName = saved.partnerName;
  timerSeconds = saved.timerSeconds || 0;
  onlineMode = true;
  invitedCode = saved.code;
  activeSessionQuestions = Array.isArray(saved.questions) ? saved.questions : [];
  currentQuestionIndex = Number.isInteger(saved.questionIndex) && saved.questionIndex >= 0 ? saved.questionIndex : 0;
  answeredLocal = false;
  partnerAnswered = false;
  partnerAnswer = null;
  remoteRevealDone = false;
  advancedThisQuestion = false;

  // Masquer tous les autres écrans
  ['setupCard', 'hostRoomCard', 'joinNameCard', 'connectingCard'].forEach(id => qs(id).classList.add('hidden'));
  qs('resumeBanner').classList.add('hidden');
  qs('connectingCard').classList.remove('hidden');
  qs('connectingText').innerText = `Reconnexion à la session ${roomCode}…`;

  if (peer) { try { peer.destroy(); } catch (e) {} peer = null; }
  conn = null;

  if (iAmHost) {
    // L'hôte RÉ-ENREGISTRE le même code de room (les invités s'y connectent)
    peer = new Peer(`cc-${roomCode}`, { debug: 1 });
    peer.on('connection', (incoming) => {
      if (conn && conn.open) {
        incoming.on('open', () => incoming.send({ t: 'busy' }));
        setTimeout(() => incoming.close(), 500);
        return;
      }
      conn = incoming;
      bindConn(incoming);
    });
    peer.on('open', () => {
      qs('connectingText').innerText = `Session ${roomCode} prête — en attente de ${partnerFirstName() || 'ton/ta partenaire'}…`;
    });
    peer.on('error', (err) => {
      handlePeerError(err, 'host');
      qs('connectingCard').classList.add('hidden');
      showResumeError('Impossible de recréer la session. Réessaie dans un instant 💗');
    });
  } else {
    // L'invité se reconnecte à la room de l'hôte
    peer = new Peer(null, { debug: 1 });
    peer.on('open', () => {
      conn = peer.connect(`cc-${roomCode}`, { reliable: true });
      bindConn(conn);
    });
    peer.on('error', (err) => {
      handlePeerError(err, 'guest');
      qs('connectingCard').classList.add('hidden');
      // On garde la session mémorisée : l'hôte reviendra peut-être,
      // un rechargement de page ré-affichera le bandeau.
      showResumeError("L'hôte n'est pas encore revenu. Réessaie dans un instant 💗");
    });
  }
}

function showResumeError(msg) {
  const banner = qs('resumeBanner');
  banner.classList.remove('hidden');
  banner.classList.remove('border-rose-200', 'bg-white/80');
  banner.classList.add('border-amber-300', 'bg-amber-50/90');
  qs('resumeText').innerHTML = `<i class="fa-solid fa-heart-crack text-amber-500 mr-1"></i> ${escapeHTML(msg)}`;
  qs('resumeBtn').classList.add('hidden');
  qs('resumeDismissBtn').classList.add('hidden');
  const again = qs('resumeCloseBtn');
  again.classList.remove('hidden');
  again.onclick = () => banner.classList.add('hidden');
}

function bindConn(c) {
  c.on('open', () => {
    if (!iAmHost) {
      // L'invité annonce s'il REVIENT (session en cours) ou s'il arrive neuf
      const resuming = loadSessionState() && loadSessionState().code === roomCode && activeSessionQuestions.length > 0;
      c.send(resuming ? { t: 'hello', name: myName, resume: true, at: currentQuestionIndex }
                      : { t: 'hello', name: myName });
    }
  });
  c.on('data', handlePeerData);
  c.on('close', () => {
    if (onlineMode) {
      conn = null;
      qs('syncBadge').classList.add('hidden');
      setPartnerStatus('offline'); // 📴 le partenaire s'est déconnecté
    }
  });
  c.on('error', () => {});
}

function sendPeer(msg) {
  if (conn && conn.open) conn.send(msg);
}

function sendStatus(status) {
  sendPeer({ t: 'status', s: status });
}

/* ============================================================
   RÉACTIONS EN DIRECT (❤️ 😂 🔥) - Rate Limiting
   ============================================================ */
const REACTION_EMOJI = { heart: '❤️', laugh: '😂', fire: '🔥' };
let reactionBarInitialized = false;

// Rate limiting configuration
const RATE_LIMIT = {
  maxReactions: 10,        // Maximum de réactions par fenêtre
  windowMs: 5000,          // Fenêtre de temps en millisecondes (5 secondes)
  cooldownMs: 500          // Cooldown entre deux réactions (0.5 seconde)
};

let reactionTimestamps = [];
let lastReactionTime = 0;

function canSendReaction() {
  const now = Date.now();
  
  // Vérifier le cooldown individuel
  if (now - lastReactionTime < RATE_LIMIT.cooldownMs) {
    return false;
  }
  
  // Nettoyer les timestamps anciens (hors fenêtre)
  reactionTimestamps = reactionTimestamps.filter(
    timestamp => now - timestamp < RATE_LIMIT.windowMs
  );
  
  // Vérifier la limite par fenêtre
  if (reactionTimestamps.length >= RATE_LIMIT.maxReactions) {
    return false;
  }
  
  return true;
}

function recordReaction() {
  const now = Date.now();
  reactionTimestamps.push(now);
  lastReactionTime = now;
}

function initReactionBar() {
  if (reactionBarInitialized) return;
  const bar = qs('reactionBar');
  if (!bar) return;
  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.reaction-btn');
    if (!btn) return;
    const kind = btn.dataset.reaction;
    
    // Vérifier le rate limiting
    if (!canSendReaction()) {
      // Feedback visuel indiquant le rate limit
      btn.classList.add('opacity-50', 'cursor-not-allowed');
      setTimeout(() => {
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
      }, 200);
      return;
    }
    
    sendReaction(kind);
    recordReaction();
    
    // Feedback immédiat : petit rebond du bouton + émojis chez nous aussi
    btn.classList.remove('sent');
    void btn.offsetWidth;
    btn.classList.add('sent');
    spawnFloatingEmoji(kind, 2);
  });
  reactionBarInitialized = true;
}

function sendReaction(kind) {
  if (!REACTION_EMOJI[kind]) return;
  sendPeer({ t: 'reaction', r: kind });
}

function showIncomingReaction(kind) {
  if (!REACTION_EMOJI[kind]) kind = 'heart';
  spawnFloatingEmoji(kind, 5);
  triggerHeartsRain(10);
}

// Fait flotter `count` émojis depuis le bas de l'écran, positions/délais aléatoires
function spawnFloatingEmoji(kind, count = 4) {
  const emoji = REACTION_EMOJI[kind] || '❤️';
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'floating-emoji';
      el.textContent = emoji;
      el.style.left = (10 + Math.random() * 80) + 'vw';
      el.style.fontSize = (26 + Math.random() * 26) + 'px';
      const dur = 2.6 + Math.random() * 1.4;
      el.style.animationDuration = dur + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000 + 100);
    }, i * 160);
  }
}

function handlePeerData(msg) {
  if (!msg || !msg.t) return;
  switch (msg.t) {
    case 'status': {
      // Statut temps réel du partenaire : thinking | answered | online
      setPartnerStatus(String(msg.s));
      break;
    }

    case 'hello': {
      if (!iAmHost) return;
      partnerName = String(msg.name || 'Invité(e)').slice(0, 30);
      if (!activeSessionQuestions.length) prepareSessionFromSetup();
      // Reprise : l'invité reprend à SA position, l'hôte ajuste la sienne pour rester synchro
      const resumeAt = (msg.resume && Number.isInteger(msg.at) && msg.at >= 0 && msg.at < activeSessionQuestions.length)
        ? msg.at : 0;
      currentQuestionIndex = resumeAt;
      sendPeer({
        t: 'welcome',
        host: myName,
        guest: partnerName,
        questions: activeSessionQuestions,
        turnPlayer: 1,
        timer: timerSeconds,
        resumeAt
      });
      enterOnlineGame();
      break;
    }

    case 'welcome': {
      if (iAmHost) return;
      activeSessionQuestions = Array.isArray(msg.questions) ? msg.questions : [];
      // Reprise : l'hôte confirme la position (peut différer de notre mémoire)
      currentQuestionIndex = (Number.isInteger(msg.resumeAt) && msg.resumeAt > 0) ? msg.resumeAt : 0;
      currentTurnPlayer = msg.turnPlayer || 1;
      timerSeconds = Number(msg.timer) || 0; // même durée des deux côtés
      partnerName = String(msg.host || 'Hôte').slice(0, 30);
      enterOnlineGame();
      break;
    }

    case 'answer': {
      partnerAnswered = true;
      const answerValidation = validateAnswer(String(msg.payload.text || ''));
      partnerAnswer = { 
        text: answerValidation.valid ? answerValidation.value : '(réponse invalide)', 
        isCustom: !!msg.payload.isCustom 
      };
      setPartnerStatus('answered'); // ✅ le partenaire a répondu
      updateRevealUI();
      if (answeredLocal) doReveal();
      break;
    }

    case 'reveal': {
      doReveal();
      break;
    }

    case 'next': {
      if (!advancedThisQuestion) advanceAfterReveal();
      break;
    }

    case 'reaction': {
      // Réaction reçue du partenaire : émojis flottants à l'écran
      showIncomingReaction(String(msg.r || 'heart'));
      break;
    }

    case 'busy': {
      qs('connectingCard').classList.add('hidden');
      showJoinError('Cette session a déjà 2 joueurs. Demande un nouveau lien 💗');
      try { if (peer) peer.destroy(); } catch (e) {}
      break;
    }
  }
}

// L'hôte prépare la session avec ses filtres courants (sans changer d'écran)
function prepareSessionFromSetup() {
  const catFilter = qs('categoryFilter').value;
  const intFilter = qs('intensityFilter').value;
  activeSessionQuestions = questionsBank.filter(q => {
    const matchCat = (catFilter === 'ALL' || q.cat === catFilter);
    const matchInt = (intFilter === 'ALL' || q.int === intFilter);
    return matchCat && matchInt;
  });
  if (!activeSessionQuestions.length) activeSessionQuestions = [...questionsBank];
  shuffleArray(activeSessionQuestions);
  currentQuestionIndex = 0;
  currentTurnPlayer = 1;
}

function enterOnlineGame() {
  qs('hostRoomCard').classList.add('hidden');
  qs('joinNameCard').classList.add('hidden');
  qs('connectingCard').classList.add('hidden');
  qs('setupCard').classList.add('hidden');
  qs('questionCard').classList.remove('hidden');

  qs('syncBadge').classList.remove('hidden');
  qs('reactionBar').classList.remove('hidden'); // les réactions ne servent qu'en ligne
  setPartnerStatus('thinking'); // la partie commence : chacun réfléchit
  qs('p1Name').value = iAmHost ? myName : partnerName;
  qs('p2Name').value = iAmHost ? partnerName : myName;
  qs('p1Name').disabled = true;
  qs('p2Name').disabled = true;

  answeredLocal = false;
  partnerAnswered = false;
  partnerAnswer = null;
  remoteRevealDone = false;
  setPartnerStatus('thinking'); // nouvelle question → il/elle réfléchit
  displayQuestion();
  triggerHeartsRain(30);
}

function updateRevealUI() {
  const card = qs('remoteAnswerCard');
  if (!partnerAnswered && !remoteRevealDone) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');
  qs('remoteAnswerName').innerText = partnerName || 'Ton/ta partenaire';
  qs('remoteAvatar').innerText = (partnerName || '?').charAt(0).toUpperCase();

  const btn = qs('revealBtn');
  const bothAnswered = answeredLocal && partnerAnswered;

  if (remoteRevealDone) {
    // Révélé : le bouton devient « Continuer »
    qs('sealedHint').classList.add('hidden');
    const textEl = qs('remoteAnswerText');
    if (partnerAnswer) {
      textEl.textContent = partnerAnswer.text;
      textEl.classList.remove('hidden');
    }
    btn.disabled = false;
    btn.onclick = confirmAndNext;
    qs('revealBtnText').innerText = iAmHost ? 'Valider et question suivante' : 'C\'est noté ! Continuer…';
    return;
  }

  btn.onclick = revealRemoteAnswer;
  btn.disabled = !bothAnswered;
  qs('revealBtnText').innerText = bothAnswered
    ? 'Révéler la réponse'
    : (answeredLocal ? 'En attente de sa réponse…' : 'Réponds pour désceller');

  qs('sealedHint').classList.remove('hidden');
  const textEl2 = qs('remoteAnswerText');
  textEl2.classList.add('hidden');
  if (bothAnswered) triggerHeartsRain(15);
}

function revealRemoteAnswer() {
  if (!answeredLocal || !partnerAnswered || remoteRevealDone) return;
  doReveal();
  sendPeer({ t: 'reveal' });
  triggerHeartsRain(35);
}

function doReveal() {
  remoteRevealDone = true;
  stopQuestionTimer();
  setPartnerStatus('online'); // révélation faite → retour à « en ligne »
  updateRevealUI();
}

// Avancer ensemble après révélation : chaque appareil archive les 2 réponses
function advanceAfterReveal() {
  if (advancedThisQuestion) return;
  advancedThisQuestion = true;
  stopQuestionTimer();

  const q = activeSessionQuestions[currentQuestionIndex];
  const stamp = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  if (q) {
    saveJournalEntry({
      id: Date.now(), date: stamp, player: myName || getPlayerNames().p1,
      question: q.q, category: q.cat, intensity: q.int,
      answer: currentLocalAnswer(), isCustom: isCustomSelected
    });
    saveJournalEntry({
      id: Date.now() + 1, date: stamp, player: partnerName || getPlayerNames().p2,
      question: q.q, category: q.cat, intensity: q.int,
      answer: partnerAnswer ? partnerAnswer.text : "(non répondu)",
      isCustom: partnerAnswer ? partnerAnswer.isCustom : false
    });
  }

  const modal = qs('waitingPartnerModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  answeredLocal = false;
  partnerAnswered = false;
  partnerAnswer = null;
  remoteRevealDone = false;
  setPartnerStatus('thinking'); // nouvelle question chez nous aussi
  qs('remoteAnswerCard').classList.add('hidden');
  qs('remoteAnswerText').classList.add('hidden');
  currentQuestionIndex++;
  saveSessionState(); // avancement mémorisé à chaque question
  if (currentQuestionIndex < activeSessionQuestions.length) {
    displayQuestion();
  } else {
    clearSessionState(); // partie terminée → plus rien à reprendre
    alert("🎉 Vous avez terminé la session ! Retrouvez toutes vos réponses dans le Journal.");
    switchTab('journal');
  }
}

// Bouton post-révélation (les deux côtés, symétrique)
function confirmAndNext() {
  if (advancedThisQuestion) return;
  sendPeer({ t: 'next' });
  advanceAfterReveal();
}

/* ============================================================
   TAB NAVIGATION - Accessibilité clavier
   ============================================================ */
function switchTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('bg-rose-500', 'text-white', 'shadow');
    btn.classList.add('hover:bg-rose-50', 'text-slate-700');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('tabindex', '-1');
  });

  document.getElementById(`tab-${tabName}`).classList.add('active');

  const activeBtn = document.getElementById(`nav-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.remove('hover:bg-rose-50', 'text-slate-700');
    activeBtn.classList.add('bg-rose-500', 'text-white', 'shadow');
    activeBtn.setAttribute('aria-selected', 'true');
    activeBtn.setAttribute('tabindex', '0');
    activeBtn.focus();
  }

  if (tabName !== 'play') stopQuestionTimer();
  if (tabName === 'journal') renderJournal();
  if (tabName === 'bank') {
    updateBankCategoryOptions();
    renderBank();
  }
}

// Navigation au clavier pour les tabs
function initKeyboardNavigation() {
  const tabButtons = document.querySelectorAll('nav button');
  
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
      let nextIndex;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = (index + 1) % tabButtons.length;
          tabButtons[nextIndex].focus();
          tabButtons[nextIndex].click();
          break;
          
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[nextIndex].focus();
          tabButtons[nextIndex].click();
          break;
          
        case 'Home':
          e.preventDefault();
          tabButtons[0].focus();
          tabButtons[0].click();
          break;
          
        case 'End':
          e.preventDefault();
          tabButtons[tabButtons.length - 1].focus();
          tabButtons[tabButtons.length - 1].click();
          break;
      }
    });
  });
  
  // Navigation des boutons de choix avec clavier
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Fermer les modales
      const modal = document.getElementById('addQuestionModal');
      if (!modal.classList.contains('hidden')) {
        closeAddQuestionModal();
      }
    }
  });
}

/* ============================================================
   GAMEPLAY LOGIC
   ============================================================ */
function startGame() {
  const catFilter = document.getElementById('categoryFilter').value;
  const intFilter = document.getElementById('intensityFilter').value;

  activeSessionQuestions = questionsBank.filter(q => {
    const matchCat = (catFilter === 'ALL' || q.cat === catFilter);
    const matchInt = (intFilter === 'ALL' || q.int === intFilter);
    return matchCat && matchInt;
  });

  if (activeSessionQuestions.length === 0) {
    alert("Aucune question ne correspond à ce filtre ! Essayez d'élargir vos critères.");
    return;
  }

  timerSeconds = getSelectedTimerSeconds();
  shuffleArray(activeSessionQuestions);

  currentQuestionIndex = 0;
  currentTurnPlayer = 1;

  document.getElementById('setupCard').classList.add('hidden');
  document.getElementById('questionCard').classList.remove('hidden');

  displayQuestion();
  triggerHeartsRain(20);
}

function displayQuestion() {
  const q = activeSessionQuestions[currentQuestionIndex];
  const names = getPlayerNames();
  const p1 = names.p1;
  const p2 = names.p2;

  const activeName = currentTurnPlayer === 1 ? p1 : p2;
  const activeAvatar = activeName.charAt(0).toUpperCase();

  document.getElementById('qCategoryBadge').innerText = getCategoryName(q.cat);
  document.getElementById('qIntensityBadge').innerText = `${q.int === 'Doux' ? '🌸' : q.int === 'Profond' ? '🌊' : '🔥'} ${q.int}`;
  document.getElementById('qProgressText').innerText = `Question ${currentQuestionIndex + 1} / ${activeSessionQuestions.length}`;

  document.getElementById('playerTurnName').innerText = activeName;
  document.getElementById('playerTurnAvatar').innerText = activeAvatar;
  document.getElementById('playerTurnAvatar').className = `w-9 h-9 rounded-full ${currentTurnPlayer === 1 ? 'bg-rose-500' : 'bg-purple-600'} text-white flex items-center justify-center font-bold text-sm shadow`;

  if (onlineMode) {
    const myTurn = (currentTurnPlayer === 1) === (iAmHost ? true : false);
    document.getElementById('turnLabel').innerText = myTurn ? "C'est à toi" : `Au tour de`;
    document.getElementById('passTurnBtn').classList.add('hidden');
  } else {
    document.getElementById('turnLabel').innerText = "C'est au tour de";
    document.getElementById('passTurnBtn').classList.remove('hidden');
  }

  document.getElementById('questionText').innerText = q.q;

  const container = document.getElementById('choicesContainer');
  container.innerHTML = '';
  selectedOptionIndex = null;
  isCustomSelected = false;

  q.opts.forEach((optText, idx) => {
    const optBtn = document.createElement('button');
    optBtn.className = "choice-btn w-full p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-rose-50/70 text-left text-xs sm:text-sm font-medium text-slate-700 transition flex items-center justify-between group shadow-sm";
    optBtn.onclick = () => selectOption(idx, optBtn);
    optBtn.setAttribute('role', 'option');
    optBtn.setAttribute('aria-label', `Option ${String.fromCharCode(65 + idx)}: ${optText}`);
    optBtn.setAttribute('tabindex', '0');
    optBtn.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-500 group-hover:border-rose-400 group-hover:text-rose-600" aria-hidden="true">${String.fromCharCode(65 + idx)}</span>
        <span>${escapeHTML(optText)}</span>
      </div>
      <i class="fa-regular fa-circle text-slate-300 group-hover:text-rose-400 transition" aria-hidden="true"></i>
    `;
    container.appendChild(optBtn);
  });

  const customBtn = document.createElement('button');
  customBtn.className = "choice-btn w-full p-3.5 rounded-2xl border-2 border-dashed border-rose-300 bg-rose-50/50 hover:bg-rose-100/60 text-left text-xs sm:text-sm font-bold text-rose-700 transition flex items-center justify-between group shadow-sm";
  customBtn.onclick = () => selectCustomOption(customBtn);
  customBtn.setAttribute('role', 'option');
  customBtn.setAttribute('aria-label', 'Écrire votre propre réponse personnalisée');
  customBtn.setAttribute('tabindex', '0');
  customBtn.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="w-6 h-6 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-xs" aria-hidden="true">✍️</span>
      <span>Ma propre réponse / Autre...</span>
    </div>
    <i class="fa-solid fa-pen-nib text-rose-400" aria-hidden="true"></i>
  `;
  container.appendChild(customBtn);

  document.getElementById('customInputContainer').classList.add('hidden');
  document.getElementById('customAnswerInput').value = '';
  document.getElementById('remoteAnswerCard').classList.add('hidden');
  document.getElementById('remoteAnswerText').classList.add('hidden');
  advancedThisQuestion = false;

  // Ajouter support clavier pour les boutons de choix
  setupChoiceKeyboardNavigation();

  startQuestionTimer(); // (re)démarre le minuteur pour cette question
  updateValidateBtnState(false);
}

function setupChoiceKeyboardNavigation() {
  const choiceButtons = document.querySelectorAll('.choice-btn');
  
  choiceButtons.forEach((btn, index) => {
    // Supprimer les anciens listeners pour éviter les doublons
    btn.removeEventListener('keydown', handleChoiceKeydown);
    
    btn.addEventListener('keydown', handleChoiceKeydown);
  });
}

function handleChoiceKeydown(e) {
  const choiceButtons = Array.from(document.querySelectorAll('.choice-btn'));
  const currentIndex = choiceButtons.indexOf(e.currentTarget);
  
  switch (e.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % choiceButtons.length;
      choiceButtons[nextIndex].focus();
      break;
      
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + choiceButtons.length) % choiceButtons.length;
      choiceButtons[prevIndex].focus();
      break;
      
    case 'Enter':
    case ' ':
      e.preventDefault();
      e.currentTarget.click();
      break;
  }
}

function selectOption(index, btnEl) {
  isCustomSelected = false;
  selectedOptionIndex = index;
  if (onlineMode && !answeredLocal) sendStatus('thinking'); // il/elle prépare sa réponse

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.classList.remove('border-rose-500', 'bg-rose-100/80', 'font-bold', 'ring-2', 'ring-rose-200');
    const icon = b.querySelector('.fa-circle, .fa-circle-check');
    if (icon) {
      icon.className = "fa-regular fa-circle text-slate-300";
    }
  });

  btnEl.classList.add('border-rose-500', 'bg-rose-100/80', 'font-bold', 'ring-2', 'ring-rose-200');
  const icon = btnEl.querySelector('.fa-circle');
  if (icon) {
    icon.className = "fa-solid fa-circle-check text-rose-600";
  }

  document.getElementById('customInputContainer').classList.add('hidden');
  updateValidateBtnState(true);
}

function selectCustomOption(btnEl) {
  isCustomSelected = true;
  selectedOptionIndex = null;
  if (onlineMode && !answeredLocal) sendStatus('thinking');

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.classList.remove('border-rose-500', 'bg-rose-100/80', 'font-bold', 'ring-2', 'ring-rose-200');
  });

  btnEl.classList.add('border-rose-500', 'bg-rose-100/80', 'font-bold', 'ring-2', 'ring-rose-200');

  const customBox = document.getElementById('customInputContainer');
  customBox.classList.remove('hidden');
  document.getElementById('customAnswerInput').focus();

  document.getElementById('customAnswerInput').oninput = function() {
    const val = this.value.trim();
    updateValidateBtnState(val.length > 0);
  };

  updateValidateBtnState(document.getElementById('customAnswerInput').value.trim().length > 0);
}

function updateValidateBtnState(enabled) {
  const btn = document.getElementById('validateBtn');
  btn.disabled = !enabled;
  if (enabled) {
    btn.className = "w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg glow-effect transition flex items-center justify-center gap-2 cursor-pointer";
  } else {
    btn.className = "w-full bg-slate-300 text-slate-50 font-bold py-3.5 px-6 rounded-2xl cursor-not-allowed transition flex items-center justify-center gap-2";
  }
}

function switchPlayerTurn() {
  currentTurnPlayer = currentTurnPlayer === 1 ? 2 : 1;
  displayQuestion();
}

function submitAnswer() {
  stopQuestionTimer(); // le temps de cette question est écoulé (ou réponse donnée)
  const q = activeSessionQuestions[currentQuestionIndex];
  let playerName;

  let finalAnswerText = "";
  if (isCustomSelected) {
    finalAnswerText = document.getElementById('customAnswerInput').value.trim();
  } else if (selectedOptionIndex !== null) {
    finalAnswerText = q.opts[selectedOptionIndex];
  }

  if (!finalAnswerText) return;

  if (onlineMode) {
    playerName = myName;
    answeredLocal = true;
    saveSessionState(); // mémoriser l'avancement pour la reconnexion
    sendStatus('answered'); // j'ai répondu → le partenaire le voit
    sendPeer({ t: 'answer', payload: { text: finalAnswerText, isCustom: isCustomSelected } });
    const modal = document.getElementById('waitingPartnerModal');
    document.getElementById('waitingPartnerName').innerText = partnerName || 'Ton/ta partenaire';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    triggerHeartsRain(20);
    if (partnerAnswered) {
      // Les deux ont répondu : révélation immédiate des deux côtés
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      doReveal();
      sendPeer({ t: 'reveal' });
    } else {
      modal.classList.remove('hidden');
      updateRevealUI();
    }
  } else {
    const names = getPlayerNames();
    playerName = currentTurnPlayer === 1 ? names.p1 : names.p2;

    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
      player: playerName,
      question: q.q,
      category: q.cat,
      intensity: q.int,
      answer: finalAnswerText,
      isCustom: isCustomSelected
    };

    saveJournalEntry(entry);
    triggerHeartsRain(35);

    currentQuestionIndex++;
    currentTurnPlayer = currentTurnPlayer === 1 ? 2 : 1;

    if (currentQuestionIndex < activeSessionQuestions.length) {
      displayQuestion();
    } else {
      clearSessionState();
      alert("🎉 Bravo ! Vous avez terminé toutes les questions de cette session ! Retrouvez vos réponses dans le Journal.");
      switchTab('journal');
    }
  }
}

function currentLocalAnswer() {
  if (isCustomSelected) return document.getElementById('customAnswerInput').value.trim();
  if (selectedOptionIndex !== null) return activeSessionQuestions[currentQuestionIndex].opts[selectedOptionIndex];
  return "(non répondu)";
}

/* ============================================================
   JOURNAL DATA & RENDER
   ============================================================ */
function getJournalFromStorage() {
  const stored = localStorage.getItem(LS_JOURNAL_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch(e) { return []; }
  }
  return [];
}

function saveJournalEntry(entry) {
  const list = getJournalFromStorage();
  list.unshift(entry);
  localStorage.setItem(LS_JOURNAL_KEY, JSON.stringify(list));
  updateBadges();
}

function renderJournal() {
  const container = document.getElementById('journalEntriesContainer');
  const list = getJournalFromStorage();

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400">
        <i class="fa-solid fa-heart-crack text-4xl mb-2 opacity-40" aria-hidden="true"></i>
        <p class="text-xs font-semibold">Aucune réponse enregistrée pour le moment.</p>
        <p class="text-[11px]">Lancez une partie pour remplir votre Cahier de Complicité !</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  list.forEach(item => {
    const card = createElementWithAttributes('div', {
      className: "journal-card bg-white p-4 rounded-2xl border border-rose-100 shadow-sm space-y-2 text-xs"
    });
    
    card.innerHTML = `
      <div class="flex justify-between items-center text-[10px] text-slate-400 font-semibold border-b border-slate-50 pb-1.5">
        <span class="flex items-center gap-1.5">
          <span class="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[9px]" aria-hidden="true">${escapeHTML((item.player || '?').charAt(0).toUpperCase())}</span>
          <strong class="text-slate-700">${escapeHTML(item.player || '?')}</strong>
        </span>
        <span>${escapeHTML(item.date || '')}</span>
      </div>
      <div class="font-bold text-slate-800 text-xs sm:text-sm">
        ${escapeHTML(item.question || '')}
      </div>
      <div class="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950 font-medium leading-relaxed flex items-start gap-2">
        <span class="text-rose-500 font-bold" aria-hidden="true">${item.isCustom ? '✍️' : '💬'}</span>
        <span>${escapeHTML(item.answer || '')}</span>
      </div>
    `;
    
    container.appendChild(card);
  });
}

function filterJournal() {
  const query = document.getElementById('journalSearchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.journal-card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) card.style.display = 'block';
    else card.style.display = 'none';
  });
}

function clearJournal() {
  if (confirm("Voulez-vous vraiment effacer tout le journal des réponses ?")) {
    localStorage.removeItem(LS_JOURNAL_KEY);
    updateBadges();
    renderJournal();
  }
}

function exportJournalJSON() {
  const data = getJournalFromStorage();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cahier_complicite_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

/* ============================================================
   QUESTION BANK MANAGEMENT
   ============================================================ */
function renderBank() {
  const container = document.getElementById('bankContainer');
  container.innerHTML = '';

  questionsBank.forEach((q, idx) => {
    const row = createElementWithAttributes('div', {
      className: "bank-row bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs"
    });
    
    row.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-rose-100 text-rose-700 font-bold rounded-md text-[10px]">${escapeHTML(getCategoryName(q.cat))}</span>
          <span class="text-[10px] text-slate-400 font-semibold">${escapeHTML(q.int)}</span>
        </div>
        <div class="font-bold text-slate-800 text-xs sm:text-sm">${escapeHTML(q.q)}</div>
      </div>
      <button onclick="deleteBankQuestion(${idx})" class="text-slate-300 hover:text-rose-500 transition px-2 py-1" aria-label="Supprimer cette question">
        <i class="fa-solid fa-trash" aria-hidden="true"></i>
      </button>
    `;
    
    container.appendChild(row);
  });
}

function filterBank() {
  const query = document.getElementById('bankSearchInput').value.toLowerCase();
  const catVal = document.getElementById('bankCategoryFilter').value;
  const rows = document.querySelectorAll('.bank-row');

  rows.forEach((row, idx) => {
    const qObj = questionsBank[idx];
    const matchQuery = qObj.q.toLowerCase().includes(query);
    const matchCat = (catVal === 'ALL' || qObj.cat === catVal);

    if (matchQuery && matchCat) row.style.display = 'flex';
    else row.style.display = 'none';
  });
}

function openAddQuestionModal() {
  document.getElementById('addQuestionModal').classList.remove('hidden');
}

function closeAddQuestionModal() {
  document.getElementById('addQuestionModal').classList.add('hidden');
}

function saveNewQuestion() {
  const text = document.getElementById('newQText').value.trim();
  const cat = document.getElementById('newQCat').value;
  const int = document.getElementById('newQInt').value;
  const o0 = document.getElementById('newOpt0').value.trim();
  const o1 = document.getElementById('newOpt1').value.trim();
  const o2 = document.getElementById('newOpt2').value.trim();
  const o3 = document.getElementById('newOpt3').value.trim();

  // Validation de la question
  const questionValidation = validateQuestion(text);
  if (!questionValidation.valid) {
    alert(questionValidation.error || "Veuillez saisir une question valide.");
    return;
  }

  // Validation des options
  const options = [];
  for (let i = 0; i < 4; i++) {
    const optInput = document.getElementById(`newOpt${i}`).value.trim();
    const optValidation = validateOption(optInput);
    if (!optValidation.valid) {
      alert(`Option ${String.fromCharCode(65 + i)}: ${optValidation.error}`);
      return;
    }
    options.push(optValidation.value);
  }

  const newQ = {
    cat: cat,
    int: int,
    q: questionValidation.value,
    opts: options
  };

  questionsBank.unshift(newQ);
  saveBankToStorage();
  closeAddQuestionModal();
  renderBank();

  // Reset du formulaire
  document.getElementById('newQText').value = '';
  for (let i = 0; i < 4; i++) {
    document.getElementById(`newOpt${i}`).value = '';
  }
}

function deleteBankQuestion(index) {
  if (confirm("Supprimer cette question de la banque ?")) {
    questionsBank.splice(index, 1);
    saveBankToStorage();
    renderBank();
  }
}

function getCategoryName(catCode) {
  // Récupérer les catégories selon le type de relation actuel
  const categories = RELATION_CONFIG[currentRelationType].categories;
  return categories[catCode] || catCode;
}

/* ============================================================
   INVITATION UI HELPERS
   ============================================================ */
function copyInviteLink() {
  const link = qs('inviteLinkDisplay').innerText;
  navigator.clipboard.writeText(link).then(() => {
    const btn = event && event.currentTarget ? event.currentTarget : null;
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copié !';
      setTimeout(() => { btn.innerHTML = original; }, 2000);
    }
  }).catch(() => {});
}

/* ============================================================
   CANVAS HEART PARTICLES ANIMATION - Optimisée
   ============================================================ */
let canvas, ctx, particles = [];
let animationFrameId = null;
let isAnimationPaused = false;

// Configuration de performance
const PARTICLE_CONFIG = {
  MAX_PARTICLES: 100,         // Maximum de particules simultanées
  DEFAULT_BATCH_SIZE: 25,     // Nombre par défaut de particules par trigger
  SPAWN_INTERVAL: 30,         // Intervalle entre spawns (ms)
  REDUCED_MOTION: false       // Détecte les préférences utilisateur
};

function initCanvasHearts() {
  canvas = document.getElementById('canvasOverlay');
  ctx = canvas.getContext('2d');
  
  // Détecter les préférences de mouvement réduit
  PARTICLE_CONFIG.REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Écouter les changements de préférences
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    PARTICLE_CONFIG.REDUCED_MOTION = e.matches;
    if (PARTICLE_CONFIG.REDUCED_MOTION) {
      pauseAnimation();
    } else {
      resumeAnimation();
    }
  });
  
  // Démarrer l'animation seulement si pas de mouvement réduit
  if (!PARTICLE_CONFIG.REDUCED_MOTION) {
    startAnimation();
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function startAnimation() {
  if (!animationFrameId && !isAnimationPaused) {
    animParticles();
  }
}

function pauseAnimation() {
  isAnimationPaused = true;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function resumeAnimation() {
  isAnimationPaused = false;
  if (!animationFrameId) {
    startAnimation();
  }
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 12 + 6;
    this.speedY = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.opacity = 1;
    this.color = ['#f43f5e', '#fb7185', '#fda4af', '#c084fc', '#e11d48'][Math.floor(Math.random() * 5)];
  }

  update() {
    this.y -= this.speedY;
    this.x += Math.sin(this.y * 0.02) + this.speedX;
    this.opacity -= 0.005;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function triggerHeartsRain(count = PARTICLE_CONFIG.DEFAULT_BATCH_SIZE) {
  // Réduire le nombre de particules si mouvement réduit ou déjà beaucoup de particules
  if (PARTICLE_CONFIG.REDUCED_MOTION) {
    count = Math.min(count, 5);
  }
  
  const availableSlots = PARTICLE_CONFIG.MAX_PARTICLES - particles.length;
  const actualCount = Math.min(count, availableSlots);
  
  for (let i = 0; i < actualCount; i++) {
    setTimeout(() => {
      if (particles.length < PARTICLE_CONFIG.MAX_PARTICLES) {
        particles.push(new Particle());
      }
    }, i * PARTICLE_CONFIG.SPAWN_INTERVAL);
  }
}

function animParticles() {
  if (isAnimationPaused) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Optimisation: inverser la boucle pour éviter les problèmes de splice
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    
    // Supprimer les particules mortes
    if (particles[i].opacity <= 0 || particles[i].y < -20) {
      particles.splice(i, 1);
    }
  }
  
  animationFrameId = requestAnimationFrame(animParticles);
}
