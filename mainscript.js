"use strict";
var cardDict = {
    "adventurer": "Adventurer",
    "advisor": "Advisor",
    "alchemist": "Alchemist",
    "altar": "Altar",
    "ambassador": "Ambassador",
    "amulet": "Amulet",
    "apothecary": "Apothecary",
    "apprentice": "Apprentice",
    "archive": "Archive",
    "armory": "Armory",
    "artificer": "Artificer",
    "baker": "Baker",
    "banditcamp": "Bandit Camp",
    "bandofmisfits": "Band of Misfits",
    "bank": "Bank",
    "baron": "Baron",
    "bazaar": "Bazaar",
    "beggar": "Beggar",
    "bishop": "Bishop",
    "bordervillage": "Border Village",
    "bridge": "Bridge",
    "bridgetroll": "Bridge Troll",
    "bureaucrat": "Bureaucrat",
    "bustlingvillage": "Bustling Village",
    "butcher": "Butcher",
    "cache": "Cache",
    "candlestickmaker": "Candlestick Maker",
    "capital": "Capital",
    "caravan": "Caravan",
    "caravanguard": "Caravan Guard",
    "cartographer": "Cartographer",
    "castles": "Castles",
    "catacombs": "Catacombs",
    "catapult": "Catapult",
    "cellar": "Cellar",
    "chancellor": "Chancellor",
    "chapel": "Chapel",
    "chariotrace": "Chariot Race",
    "charm": "Charm",
    "city": "City",
    "cityquarter": "City Quarter",
    "coinoftherealm": "Coin of the Realm",
    "conspirator": "Conspirator",
    "contraband": "Contraband",
    "coppersmith": "Coppersmith",
    "councilroom": "Council Room",
    "count": "Count",
    "counterfeit": "Counterfeit",
    "countinghouse": "Counting House",
    "courtyard": "Courtyard",
    "crossroads": "Crossroads",
    "crown": "Crown",
    "cultist": "Cultist",
    "cutpurse": "Cutpurse",
    "deathcart": "Death Cart",
    "develop": "Develop",
    "distantlands": "Distant Lands",
    "doctor": "Doctor",
    "duchess": "Duchess",
    "duke": "Duke",
    "dungeon": "Dungeon",
    "duplicate": "Duplicate",
    "embargo": "Embargo",
    "embassy": "Embassy",
    "emporium": "Emporium",
    "encampment": "Encampment",
    "enchantress": "Enchantress",
    "engineer": "Engineer",
    "envoy": "Envoy",
    "expand": "Expand",
    "explorer": "Explorer",
    "fairgrounds": "Fairgrounds",
    "familiar": "Familiar",
    "farmersmarket": "Farmers' Market",
    "farmingvillage": "Farming Village",
    "farmland": "Farmland",
    "feast": "Feast",
    "feodum": "Feodum",
    "festival": "Festival",
    "fishingvillage": "Fishing Village",
    "foolsgold": "Fool's Gold",
    "forager": "Forager",
    "forge": "Forge",
    "fortress": "Fortress",
    "fortune": "Fortune",
    "fortuneteller": "Fortune Teller",
    "forum": "Forum",
    "gardens": "Gardens",
    "gear": "Gear",
    "ghostship": "Ghost Ship",
    "giant": "Giant",
    "gladiator": "Gladiator",
    "golem": "Golem",
    "goons": "Goons",
    "governor": "Governor",
    "grandmarket": "Grand Market",
    "graverobber": "Graverobber",
    "greathall": "Great Hall",
    "groundskeeper": "Groundskeeper",
    "guide": "Guide",
    "haggler": "Haggler",
    "hamlet": "Hamlet",
    "harem": "Harem",
    "harvest": "Harvest",
    "hauntedwoods": "Haunted Woods",
    "haven": "Haven",
    "herald": "Herald",
    "herbalist": "Herbalist",
    "hermit": "Hermit",
    "highway": "Highway",
    "hireling": "Hireling",
    "hoard": "Hoard",
    "hornofplenty": "Horn of Plenty",
    "horsetraders": "Horse Traders",
    "huntinggrounds": "Hunting Grounds",
    "huntingparty": "Hunting Party",
    "illgottengains": "Ill-Gotten Gains",
    "inn": "Inn",
    "ironmonger": "Ironmonger",
    "ironworks": "Ironworks",
    "island": "Island",
    "jackofalltrades": "Jack of all Trades",
    "jester": "Jester",
    "journeyman": "Journeyman",
    "junkdealer": "Junk Dealer",
    "kingscourt": "King's Court",
    "knights": "Knights",
    "laboratory": "Laboratory",
    "legionary": "Legionary",
    "library": "Library",
    "lighthouse": "Lighthouse",
    "loan": "Loan",
    "lookout": "Lookout",
    "lostcity": "Lost City",
    "magpie": "Magpie",
    "mandarin": "Mandarin",
    "marauder": "Marauder",
    "margrave": "Margrave",
    "market": "Market",
    "marketsquare": "Market Square",
    "masquerade": "Masquerade",
    "masterpiece": "Masterpiece",
    "menagerie": "Menagerie",
    "merchantguild": "Merchant Guild",
    "merchantship": "Merchant Ship",
    "messenger": "Messenger",
    "militia": "Militia",
    "mine": "Mine",
    "miningvillage": "Mining Village",
    "minion": "Minion",
    "mint": "Mint",
    "miser": "Miser",
    "moat": "Moat",
    "moneylender": "Moneylender",
    "monument": "Monument",
    "mountebank": "Mountebank",
    "mystic": "Mystic",
    "nativevillage": "Native Village",
    "navigator": "Navigator",
    "noblebrigand": "Noble Brigand",
    "nobles": "Nobles",
    "nomadcamp": "Nomad Camp",
    "oasis": "Oasis",
    "oracle": "Oracle",
    "outpost": "Outpost",
    "overlord": "Overlord",
    "page": "Page",
    "patrician": "Patrician",
    "pawn": "Pawn",
    "pearldiver": "Pearl Diver",
    "peasant": "Peasant",
    "peddler": "Peddler",
    "philosophersstone": "Philosopher's Stone",
    "pillage": "Pillage",
    "pirateship": "Pirate Ship",
    "plaza": "Plaza",
    "plunder": "Plunder",
    "poorhouse": "Poor House",
    "port": "Port",
    "possession": "Possession",
    "prince": "Prince",
    "procession": "Procession",
    "quarry": "Quarry",
    "rabble": "Rabble",
    "ranger": "Ranger",
    "ratcatcher": "Rat Catcher",
    "rats": "Rats",
    "raze": "Raze",
    "rebuild": "Rebuild",
    "relic": "Relic",
    "remake": "Remake",
    "remodel": "Remodel",
    "rocks": "Rocks",
    "rogue": "Rogue",
    "royalblacksmith": "Royal Blacksmith",
    "royalcarriage": "Royal Carriage",
    "royalseal": "Royal Seal",
    "saboteur": "Saboteur",
    "sacrifice": "Sacrifice",
    "sage": "Sage",
    "salvager": "Salvager",
    "scavenger": "Scavenger",
    "scheme": "Scheme",
    "scout": "Scout",
    "scryingpool": "Scrying Pool",
    "seahag": "Sea Hag",
    "secretchamber": "Secret Chamber",
    "settlers": "Settlers",
    "shantytown": "Shanty Town",
    "silkroad": "Silk Road",
    "smithy": "Smithy",
    "smugglers": "Smugglers",
    "soothsayer": "Soothsayer",
    "spicemerchant": "Spice Merchant",
    "spy": "Spy",
    "squire": "Squire",
    "stables": "Stables",
    "stash": "Stash",
    "steward": "Steward",
    "stonemason": "Stonemason",
    "storeroom": "Storeroom",
    "storyteller": "Storyteller",
    "sauna": "Sauna",
    "swamphag": "Swamphag",
    "swindler": "Swindler",
    "tactician": "Tactician",
    "talisman": "Talisman",
    "taxman": "Taxman",
    "temple": "Temple",
    "thief": "Thief",
    "throneroom": "Throne Room",
    "torturer": "Torturer",
    "tournament": "Tournament",
    "trader": "Trader",
    "traderoute": "Trade Route",
    "tradingpost": "Trading Post",
    "transmogrify": "Transmogrify",
    "transmute": "Transmute",
    "treasuremap": "Treasure Map",
    "treasuretrove": "Treasure Trove",
    "treasury": "Treasury",
    "tribute": "Tribute",
    "tunnel": "Tunnel",
    "university": "University",
    "upgrade": "Upgrade",
    "urchin": "Urchin",
    "vagrant": "Vangrant",
    "vault": "Vault",
    "venture": "Ventuer",
    "villa": "Villa",
    "village": "Village",
    "vineyard": "Vineyard",
    "walledvillage": "Walled Village",
    "wanderingminstrel": "Wandering Minstrel",
    "warehouse": "Warehouse",
    "watchtower": "Watchtower",
    "wharf": "Wharf",
    "wildhunt": "Wild Hunt",
    "winemerchant": "Wine Merchant",
    "wishingwell": "Wishing Well",
    "witch": "Witch",
    "woodcutter": "Woodcutter",
    "workersvillage": "Worker's Village",
    "workshop": "Workshop",
    "youngwitch": "Young Witch",
    "artisan": "Artisan",
    "bandit": "Bandit",
    "harbinger": "Harbinger",
    "merchant": "Merchant",
    "poacher": "Poacher",
    "sentry": "Sentry",
    "vassal": "Vassal",
    "courtier": "Courtier",
    "diplomat": "Diplomat",
    "lurker": "Lurker",
    "mill": "Mill",
    "patrol": "Patrol",
    "replace": "Replace",
    "secretpassage": "Secret Passage"
};

var setlist = [];
var promolist = [];
var cards = [];
var revealedCards = [];
var random_card1;
var random_card2;
var random_card3;

function checkAll(formname, checktoggle) {
    var checkboxes = [];
    var i;
    checkboxes = document[formname].getElementsByTagName('input');
    for (i = 0; i < checkboxes.length; i += 1) {
        if (checkboxes[i].type === 'checkbox') {
            checkboxes[i].checked = checktoggle;
        }
    }
}

function shuffle(cardArray) {
    var currentIndex = cardArray.length
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }
    return cardArray;
}


window.onload = function() {
    window.card_1_imageEl = document.getElementById("card_1_image");
    window.card_2_imageEl = document.getElementById("card_2_image");
    window.card_3_imageEl = document.getElementById("card_3_image");
    window.card_1_spanEl = document.getElementById("card_1_name");
    window.card_2_spanEl = document.getElementById("card_2_name");
    window.card_3_spanEl = document.getElementById("card_3_name");
    window.buy_card_1El = document.getElementById("buy1");
    window.buy_card_2El = document.getElementById("buy2");
    window.buy_card_3El = document.getElementById("buy3");
    window.buy_noneEl = document.getElementById("buynone");
    window.draw_buttonEl = document.getElementById("draw_button");
    window.cardsLeftEl = document.getElementById("cards_left");
}

function removeFromArray(array, element) {
    var index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

function generate() {
    if (sets.base.checked) {
        setlist.push("base");
    }
    if (sets.base1.checked) {
        setlist.push("base1");
    }
    if (sets.base2.checked) {
        setlist.push("base2");
    }
    if (sets.intrigue.checked) {
        setlist.push("intrigue");
    }
    if (sets.intrigue1.checked) {
        setlist.push("intrigue1");
    }
    if (sets.intrigue2.checked) {
        setlist.push("intrigue2");
    }
    if (sets.seaside.checked) {
        setlist.push("seaside");
    }
    if (sets.alchemy.checked) {
        setlist.push("alchemy");
    }
    if (sets.prosperity.checked) {
        setlist.push("prosperity");
    }
    if (sets.cornucopia.checked) {
        setlist.push("cornucopia");
    }
    if (sets.hinterlands.checked) {
        setlist.push("hinterlands");
    }
    if (sets.dark.checked) {
        setlist.push("dark");
    }
    if (sets.guilds.checked) {
        setlist.push("guilds");
    }
    if (sets.adventures.checked) {
        setlist.push("adventures");
    }
    if (sets.empires.checked) {
        setlist.push("empires");
    }
    if (sets.envoy.checked) {
        promolist.push("envoy");
    }
    if (sets.walled.checked) {       
        promolist.push("walled");
    }
    if (sets.governor.checked) {
        promolist.push("governor");
    }
    if (sets.stash.checked) {
        promolist.push("stash");
    }
    if (sets.prince.checked) {
        promolist.push("prince");
    }
    if (sets.sauna.checked) {
        promolist.push("sauna");
    }

    if (setlist.length < 1) {
        alert("Please pick at least one set!");
    } else {
        document.getElementById("choose_sets").style.display = "none";
        document.getElementById("cards_to_exclude").style.display = "block";
        if (setlist.indexOf("base") != -1) {
            cards.push("bureaucrat");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cellar");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("chapel");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("councilroom");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("festival");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("gardens");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("laboratory");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("library");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("market");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("militia");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mine");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("moat");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("moneylender");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("remodel");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("smithy");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("throneroom");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("village");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("workshop");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("base-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("base1") != -1) { //first edition exclusive
            cards.push("chancellor");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("woodcutter");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("feast");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("spy");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("thief");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("adventurer");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("base1-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("base2") != -1) { //second edition exclusive
            cards.push("artisan");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bandit");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("harbinger");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("merchant");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("poacher");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("sentry");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("vassal");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("base2-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("intrigue") != -1) {
            cards.push("baron");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bridge");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("conspirator");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("courtyard");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("duke");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("harem");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("ironworks");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("masquerade");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("miningvillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("minion");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("nobles");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("pawn");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("shantytown");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("steward");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("swindler");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("torturer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("tradingpost");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("upgrade");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("wishingwell");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("intrigue-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("intrigue1") != -1) { //first edition exclusive
            cards.push("secretchamber");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("greathall");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("coppersmith");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("scout");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("saboteur");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("tribute");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("intrigue1-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("intrigue2") != -1) { //second edition exclusive
            cards.push("courtier");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("diplomat");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("lurker");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mill");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("patrol");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("replace");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("secretpassage");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("intrigue2-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("seaside") != -1) {
            cards.push("ambassador");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bazaar");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("caravan");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cutpurse");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("embargo");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("explorer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("fishingvillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("ghostship");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("haven");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("island");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("lighthouse");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("lookout");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("merchantship");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("nativevillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("navigator");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("outpost");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("pearldiver");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("pirateship");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("salvager");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("seahag");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("smugglers");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("tactician");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("treasuremap");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("warehouse");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("wharf");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("seaside-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("alchemy") != -1) {
            cards.push("alchemist");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("apothecary");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("apprentice");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("familiar");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("golem");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("herbalist");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("philosophersstone");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("possession");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("scryingpool");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("transmute");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("university");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("vineyard");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("alchemy-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("prosperity") != -1) {
            cards.push("bank");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bishop");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("city");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("contraband");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("countinghouse");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("expand");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("forge");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("goons");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("grandmarket");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hoard");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("kingscourt");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("loan");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mint");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("monument");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mountebank");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("peddler");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("quarry");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("rabble");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("royalseal");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("talisman");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("traderoute");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("vault");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("venture");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("watchtower");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("workersvillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("prosperity-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("cornucopia") != -1) {
            cards.push("fairgrounds");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("farmingvillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("fortuneteller");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hamlet");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("harvest");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hornofplenty");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("horsetraders");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("huntingparty");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("jester");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("menagerie");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("remake");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("tournament");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("youngwitch");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("cornucopia-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("hinterlands") != -1) {
            cards.push("bordervillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cache");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cartographer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("crossroads");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("develop");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("duchess");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("embassy");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("farmland");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("foolsgold");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("haggler");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("highway");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("illgottengains");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("inn");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("jackofalltrades");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mandarin");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("margrave");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("noblebrigand");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("nomadcamp");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("oasis");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("oracle");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("scheme");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("silkroad");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("spicemerchant");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("stables");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("trader");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("tunnel");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("hinterlands-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("dark") != -1) {
            cards.push("altar");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("armory");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("banditcamp");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bandofmisfits");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("beggar");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("catacombs");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("count");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("counterfeit");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cultist");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("deathcart");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("feodum");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("forager");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("fortress");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("graverobber");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hermit");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("huntinggrounds");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("ironmonger");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("junkdealer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("knights");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("marauder");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("marketsquare");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("mystic");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("pillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("poorhouse");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("procession");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("rats");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("rebuild");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("rogue");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("sage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("scavenger");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("squire");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("storeroom");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("urchin");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("vagrant");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("wanderingminstrel");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("dark-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("guilds") != -1) {
            cards.push("advisor");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("baker");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("butcher");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("candlestickmaker");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("doctor");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("herald");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("journeyman");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("masterpiece");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("merchantguild");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("plaza");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("soothsayer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("stonemason");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("taxman");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("guilds-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("adventures") != -1) {
            cards.push("amulet");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("artificer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bridgetroll");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("caravanguard");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("coinoftherealm");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("distantlands");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("dungeon");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("duplicate");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("gear");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("giant");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hauntedwoods");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("hireling");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("lostcity");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("magpie");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("messenger");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("miser");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("page");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("peasant");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("port");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("ranger");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("ratcatcher");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("raze");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("relic");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("royalcarriage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("storyteller");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("swamphag");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("transmogrify");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("treasuretrove");
            console.log("added card " + cards[cards.length - 1]);  
            cards.push("warrior");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("winemerchant");
            document.getElementById("adventures-cards-to-exclude").style.display = "inline";
        }
        if (setlist.indexOf("empires") != -1) {
            cards.push("archive");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("bustlingvillage");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("capital");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("castles");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("catapult");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("chariotrace");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("charm");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("cityquarter");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("crown");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("emporium");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("encampment");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("enchantress");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("engineer");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("farmersmarket");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("fortune");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("forum");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("gladiator");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("groundskeeper");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("legionary");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("overlord");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("patrician");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("plunder");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("rocks");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("royalblacksmith");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("sacrifice");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("settlers");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("temple");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("villa");
            console.log("added card " + cards[cards.length - 1]);
            cards.push("wildhunt");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("empires-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("envoy") != -1) {
            cards.push("envoy");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("promo-cards-to-exclude").style.display = "inline";
            document.getElementById("envoy-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("walled") != -1) {
            cards.push("walledvillage");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("promo-cards-to-exclude").style.display = "inline";
            document.getElementById("walledvilage-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("governor") != -1) {
            cards.push("governor");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("promo-cards-to-exclude").style.display = "inline";
            document.getElementById("governor-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("stash") != -1) {
            cards.push("stash");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("promo-cards-to-exclude").style.display = "inline";
            document.getElementById("stash-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("prince") != -1) {
            cards.push("prince");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("promo-cards-to-exclude").style.display = "inline";
            document.getElementById("prince-cards-to-exclude").style.display = "inline";
        }
        if (promolist.indexOf("sauna") != -1) {
            cards.push("sauna");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("sauna-cards-to-exclude").style.display = "inline";
            document.getElementById("sauna-cards-to-exclude").style.display = "inline";
        }
        /* future sets:
        if (setlist.indexOf("")!=-1){
            cards.push("");
            console.log("added card " + cards[cards.length - 1]);
            document.getElementById("setname-cards-to-exclude").style.display = "inline";
        }
        */
    }

    window.scrollTo(0, 0);
}

function exclude_cards() {
    if (excludedcards.adventurer.checked) {
        removeFromArray(cards, "adventurer");
        console.log(cards);
    }
    if (excludedcards.bureaucrat.checked) {
        removeFromArray(cards, "bureaucrat");
        console.log(cards);
    }
    if (excludedcards.cellar.checked) {
        removeFromArray(cards, "cellar");
        console.log(cards);
    }
    if (excludedcards.chancellor.checked) {
        removeFromArray(cards, "chancellor");
        console.log(cards);
    }
    if (excludedcards.chapel.checked) {
        removeFromArray(cards, "chapel");
        console.log(cards);
    }
    if (excludedcards.councilroom.checked) {
        removeFromArray(cards, "councilroom");
        console.log(cards);
    }
    if (excludedcards.feast.checked) {
        removeFromArray(cards, "feast");
        console.log(cards);
    }
    if (excludedcards.festival.checked) {
        removeFromArray(cards, "festival");
        console.log(cards);
    }
    if (excludedcards.gardens.checked) {
        removeFromArray(cards, "gardens");
        console.log(cards);
    }
    if (excludedcards.laboratory.checked) {
        removeFromArray(cards, "laboratory");
        console.log(cards);
    }
    if (excludedcards.library.checked) {
        removeFromArray(cards, "library");
        console.log(cards);
    }
    if (excludedcards.market.checked) {
        removeFromArray(cards, "market");
        console.log(cards);
    }
    if (excludedcards.militia.checked) {
        removeFromArray(cards, "militia");
        console.log(cards);
    }
    if (excludedcards.mine.checked) {
        removeFromArray(cards, "mine");
        console.log(cards);
    }
    if (excludedcards.moat.checked) {
        removeFromArray(cards, "moat");
        console.log(cards);
    }
    if (excludedcards.moneylender.checked) {
        removeFromArray(cards, "moneylender");
        console.log(cards);
    }
    if (excludedcards.remodel.checked) {
        removeFromArray(cards, "remodel");
        console.log(cards);
    }
    if (excludedcards.smithy.checked) {
        removeFromArray(cards, "smithy");
        console.log(cards);
    }
    if (excludedcards.spy.checked) {
        removeFromArray(cards, "spy");
        console.log(cards);
    }
    if (excludedcards.thief.checked) {
        removeFromArray(cards, "thief");
        console.log(cards);
    }
    if (excludedcards.throneroom.checked) {
        removeFromArray(cards, "throneroom");
        console.log(cards);
    }
    if (excludedcards.village.checked) {
        removeFromArray(cards, "village");
        console.log(cards);
    }
    if (excludedcards.witch.checked) {
        removeFromArray(cards, "witch");
        console.log(cards);
    }
    if (excludedcards.woodcutter.checked) {
        removeFromArray(cards, "woodcutter");
        console.log(cards);
    }
    if (excludedcards.workshop.checked) {
        removeFromArray(cards, "workshop");
        console.log(cards);
    }
    if (excludedcards.baron.checked) {
        removeFromArray(cards, "baron");
        console.log(cards);
    }
    if (excludedcards.bridge.checked) {
        removeFromArray(cards, "bridge");
        console.log(cards);
    }
    if (excludedcards.conspirator.checked) {
        removeFromArray(cards, "conspirator");
        console.log(cards);
    }
    if (excludedcards.coppersmith.checked) {
        removeFromArray(cards, "coppersmith");
        console.log(cards);
    }
    if (excludedcards.courtyard.checked) {
        removeFromArray(cards, "courtyard");
        console.log(cards);
    }
    if (excludedcards.duke.checked) {
        removeFromArray(cards, "duke");
        console.log(cards);
    }
    if (excludedcards.greathall.checked) {
        removeFromArray(cards, "greathall");
        console.log(cards);
    }
    if (excludedcards.harem.checked) {
        removeFromArray(cards, "harem");
        console.log(cards);
    }
    if (excludedcards.ironworks.checked) {
        removeFromArray(cards, "ironworks");
        console.log(cards);
    }
    if (excludedcards.masquerade.checked) {
        removeFromArray(cards, "masquerade");
        console.log(cards);
    }
    if (excludedcards.miningvillage.checked) {
        removeFromArray(cards, "miningvillage");
        console.log(cards);
    }
    if (excludedcards.minion.checked) {
        removeFromArray(cards, "minion");
        console.log(cards);
    }
    if (excludedcards.nobles.checked) {
        removeFromArray(cards, "nobles");
        console.log(cards);
    }
    if (excludedcards.pawn.checked) {
        removeFromArray(cards, "pawn");
        console.log(cards);
    }
    if (excludedcards.saboteur.checked) {
        removeFromArray(cards, "saboteur");
        console.log(cards);
    }
    if (excludedcards.scout.checked) {
        removeFromArray(cards, "scout");
        console.log(cards);
    }
    if (excludedcards.secretchamber.checked) {
        removeFromArray(cards, "secretchamber");
        console.log(cards);
    }
    if (excludedcards.shantytown.checked) {
        removeFromArray(cards, "shantytown");
        console.log(cards);
    }
    if (excludedcards.steward.checked) {
        removeFromArray(cards, "swindler");
        console.log(cards);
    }
    if (excludedcards.torturer.checked) {
        removeFromArray(cards, "torturer");
        console.log(cards);
    }
    if (excludedcards.tradingpost.checked) {
        removeFromArray(cards, "tradingpost");
        console.log(cards);
    }
    if (excludedcards.tribute.checked) {
        removeFromArray(cards, "tribute");
        console.log(cards);
    }
    if (excludedcards.upgrade.checked) {
        removeFromArray(cards, "upgrade");
        console.log(cards);
    }
    if (excludedcards.wishingwell.checked) {
        removeFromArray(cards, "wishingwell");
        console.log(cards);
    }
    //2nd edition
    if (excludedcards.artisan.checked) {
        removeFromArray(cards, "artisan");
        console.log(cards);
    }
    if (excludedcards.bandit.checked) {
        removeFromArray(cards, "bandit");
        console.log(cards);
    }
    if (excludedcards.harbinger.checked) {
        removeFromArray(cards, "harbinger");
        console.log(cards);
    }
    if (excludedcards.merchant.checked) {
        removeFromArray(cards, "merchant");
        console.log(cards);
    }
    if (excludedcards.poacher.checked) {
        removeFromArray(cards, "poacher");
        console.log(cards);
    }
    if (excludedcards.sentry.checked) {
        removeFromArray(cards, "sentry");
        console.log(cards);
    }
    if (excludedcards.vassal.checked) {
        removeFromArray(cards, "vassal");
        console.log(cards);
    }
    if (excludedcards.courtier.checked) {
        removeFromArray(cards, "courtier");
        console.log(cards);
    }
    if (excludedcards.diplomat.checked) {
        removeFromArray(cards, "diplomat");
        console.log(cards);
    }
    if (excludedcards.lurker.checked) {
        removeFromArray(cards, "lurker");
        console.log(cards);
    }
    if (excludedcards.mill.checked) {
        removeFromArray(cards, "mill");
        console.log(cards);
    }
    if (excludedcards.patrol.checked) {
        removeFromArray(cards, "patrol");
        console.log(cards);
    }
    if (excludedcards.replace.checked) {
        removeFromArray(cards, "replace");
        console.log(cards);
    }
    if (excludedcards.secretpassage.checked) {
        removeFromArray(cards, "secretpassage");
        console.log(cards);
    }
    //end 2nd edition
    if (setlist.indexOf("seaside") != -1) {
        if (excludedcards.ambassador.checked) {
            removeFromArray(cards, "ambassador");
            console.log(cards);
        }
        if (excludedcards.bazaar.checked) {
            removeFromArray(cards, "bazaar");
            console.log(cards);
        }
        if (excludedcards.caravan.checked) {
            removeFromArray(cards, "caravan");
            console.log(cards);
        }
        if (excludedcards.cutpurse.checked) {
            removeFromArray(cards, "cutpurse");
            console.log(cards);
        }
        if (excludedcards.embargo.checked) {
            removeFromArray(cards, "embargo");
            console.log(cards);
        }
        if (excludedcards.explorer.checked) {
            removeFromArray(cards, "explorer");
            console.log(cards);
        }
        if (excludedcards.fishingvillage.checked) {
            removeFromArray(cards, "fishingvillage");
            console.log(cards);
        }
        if (excludedcards.ghostship.checked) {
            removeFromArray(cards, "ghostship");
            console.log(cards);
        }
        if (excludedcards.haven.checked) {
            removeFromArray(cards, "haven");
            console.log(cards);
        }
        if (excludedcards.island.checked) {
            removeFromArray(cards, "island");
            console.log(cards);
        }
        if (excludedcards.lighthouse.checked) {
            removeFromArray(cards, "lighthouse");
            console.log(cards);
        }
        if (excludedcards.lookout.checked) {
            removeFromArray(cards, "lookout");
            console.log(cards);
        }
        if (excludedcards.merchantship.checked) {
            removeFromArray(cards, "merchantship");
            console.log(cards);
        }
        if (excludedcards.nativevillage.checked) {
            removeFromArray(cards, "nativevillage");
            console.log(cards);
        }
        if (excludedcards.navigator.checked) {
            removeFromArray(cards, "navigator");
            console.log(cards);
        }
        if (excludedcards.outpost.checked) {
            removeFromArray(cards, "outpost");
            console.log(cards);
        }
        if (excludedcards.pearldiver.checked) {
            removeFromArray(cards, "pearldiver");
            console.log(cards);
        }
        if (excludedcards.pirateship.checked) {
            removeFromArray(cards, "pirateship");
            console.log(cards);
        }
        if (excludedcards.salvager.checked) {
            removeFromArray(cards, "salvager");
            console.log(cards);
        }
        if (excludedcards.seahag.checked) {
            removeFromArray(cards, "seahag");
            console.log(cards);
        }
        if (excludedcards.smugglers.checked) {
            removeFromArray(cards, "smugglers");
            console.log(cards);
        }
        if (excludedcards.tactician.checked) {
            removeFromArray(cards, "tactician");
            console.log(cards);
        }
        if (excludedcards.treasuremap.checked) {
            removeFromArray(cards, "treasuremap");
            console.log(cards);
        }
        if (excludedcards.treasury.checked) {
            removeFromArray(cards, "treasury");
            console.log(cards);
        }
        if (excludedcards.warehouse.checked) {
            removeFromArray(cards, "warehouse");
            console.log(cards);
        }
        if (excludedcards.wharf.checked) {
            removeFromArray(cards, "wharf");
            console.log(cards);
        }
    }
    if (setlist.indexOf("alchemy") != -1) {
        if (excludedcards.alchemist.checked) {
            removeFromArray(cards, "alchemist");
            console.log(cards);
        }
        if (excludedcards.apothecary.checked) {
            removeFromArray(cards, "apothecary");
            console.log(cards);
        }
        if (excludedcards.apprentice.checked) {
            removeFromArray(cards, "apprentice");
            console.log(cards);
        }
        if (excludedcards.familiar.checked) {
            removeFromArray(cards, "familiar");
            console.log(cards);
        }
        if (excludedcards.golem.checked) {
            removeFromArray(cards, "golem");
            console.log(cards);
        }
        if (excludedcards.herbalist.checked) {
            removeFromArray(cards, "herbalist");
            console.log(cards);
        }
        if (excludedcards.philosophersstone.checked) {
            removeFromArray(cards, "philosophersstone");
            console.log(cards);
        }
        if (excludedcards.possession.checked) {
            removeFromArray(cards, "possession");
            console.log(cards);
        }
        if (excludedcards.scryingpool.checked) {
            removeFromArray(cards, "scryingpool");
            console.log(cards);
        }
        if (excludedcards.transmute.checked) {
            removeFromArray(cards, "transmute");
            console.log(cards);
        }
        if (excludedcards.university.checked) {
            removeFromArray(cards, "university");
            console.log(cards);
        }
        if (excludedcards.vineyard.checked) {
            removeFromArray(cards, "vineyard");
            console.log(cards);
        }
    }
    if (setlist.indexOf("prosperity") != -1) {
        if (excludedcards.bank.checked) {
            removeFromArray(cards, "bank");
            console.log(cards);
        }
        if (excludedcards.bishop.checked) {
            removeFromArray(cards, "bishop");
            console.log(cards);
        }
        if (excludedcards.city.checked) {
            removeFromArray(cards, "city");
            console.log(cards);
        }
        if (excludedcards.contraband.checked) {
            removeFromArray(cards, "contraband");
            console.log(cards);
        }
        if (excludedcards.countinghouse.checked) {
            removeFromArray(cards, "countinghouse");
            console.log(cards);
        }
        if (excludedcards.expand.checked) {
            removeFromArray(cards, "expand");
            console.log(cards);
        }
        if (excludedcards.forge.checked) {
            removeFromArray(cards, "forge");
            console.log(cards);
        }
        if (excludedcards.goons.checked) {
            removeFromArray(cards, "goons");
            console.log(cards);
        }
        if (excludedcards.grandmarket.checked) {
            removeFromArray(cards, "grandmarket");
            console.log(cards);
        }
        if (excludedcards.hoard.checked) {
            removeFromArray(cards, "hoard");
            console.log(cards);
        }
        if (excludedcards.kingscourt.checked) {
            removeFromArray(cards, "kingscourt");
            console.log(cards);
        }
        if (excludedcards.loan.checked) {
            removeFromArray(cards, "loan");
            console.log(cards);
        }
        if (excludedcards.mint.checked) {
            removeFromArray(cards, "mint");
            console.log(cards);
        }
        if (excludedcards.monument.checked) {
            removeFromArray(cards, "monument");
            console.log(cards);
        }
        if (excludedcards.mountebank.checked) {
            removeFromArray(cards, "mountebank");
            console.log(cards);
        }
        if (excludedcards.peddler.checked) {
            removeFromArray(cards, "peddler");
            console.log(cards);
        }
        if (excludedcards.quarry.checked) {
            removeFromArray(cards, "quarry");
            console.log(cards);
        }
        if (excludedcards.rabble.checked) {
            removeFromArray(cards, "rabble");
            console.log(cards);
        }
        if (excludedcards.royalseal.checked) {
            removeFromArray(cards, "royalseal");
            console.log(cards);
        }
        if (excludedcards.talisman.checked) {
            removeFromArray(cards, "talisman");
            console.log(cards);
        }
        if (excludedcards.traderoute.checked) {
            removeFromArray(cards, "traderoute");
            console.log(cards);
        }
        if (excludedcards.vault.checked) {
            removeFromArray(cards, "vault");
            console.log(cards);
        }
        if (excludedcards.venture.checked) {
            removeFromArray(cards, "venture");
            console.log(cards);
        }
        if (excludedcards.watchtower.checked) {
            removeFromArray(cards, "watchtower");
            console.log(cards);
        }
        if (excludedcards.workersvillage.checked) {
            removeFromArray(cards, "workersvillage");
            console.log(cards);
        }
    }
    if (setlist.indexOf("cornucopia") != -1) {
        if (excludedcards.fairgrounds.checked) {
            removeFromArray(cards, "fairgrounds");
            console.log(cards);
        }
        if (excludedcards.farmingvillage.checked) {
            removeFromArray(cards, "farmingvillage");
            console.log(cards);
        }
        if (excludedcards.fortuneteller.checked) {
            removeFromArray(cards, "fortuneteller");
            console.log(cards);
        }
        if (excludedcards.hamlet.checked) {
            removeFromArray(cards, "hamlet");
            console.log(cards);
        }
        if (excludedcards.harvest.checked) {
            removeFromArray(cards, "harvest");
            console.log(cards);
        }
        if (excludedcards.hornofplenty.checked) {
            removeFromArray(cards, "hornofplenty");
            console.log(cards);
        }
        if (excludedcards.horsetraders.checked) {
            removeFromArray(cards, "horsetraders");
            console.log(cards);
        }
        if (excludedcards.huntingparty.checked) {
            removeFromArray(cards, "huntingparty");
            console.log(cards);
        }
        if (excludedcards.jester.checked) {
            removeFromArray(cards, "jester");
            console.log(cards);
        }
        if (excludedcards.menagerie.checked) {
            removeFromArray(cards, "menagerie");
            console.log(cards);
        }
        if (excludedcards.remake.checked) {
            removeFromArray(cards, "remake");
            console.log(cards);
        }
        if (excludedcards.tournament.checked) {
            removeFromArray(cards, "tournament");
            console.log(cards);
        }
        if (excludedcards.youngwitch.checked) {
            removeFromArray(cards, "youngwitch");
            console.log(cards);
        }
    }
    if (setlist.indexOf("dark") != -1) {
        if (excludedcards.altar.checked) {
            removeFromArray(cards, "altar");
            console.log(cards);
        }
        if (excludedcards.armory.checked) {
            removeFromArray(cards, "armory");
            console.log(cards);
        }
        if (excludedcards.banditcamp.checked) {
            removeFromArray(cards, "banditcamp");
            console.log(cards);
        }
        if (excludedcards.bandofmisfits.checked) {
            removeFromArray(cards, "bandofmisfits");
            console.log(cards);
        }
        if (excludedcards.beggar.checked) {
            removeFromArray(cards, "beggar");
            console.log(cards);
        }
        if (excludedcards.catacombs.checked) {
            removeFromArray(cards, "catacombs");
            console.log(cards);
        }
        if (excludedcards.count.checked) {
            removeFromArray(cards, "count");
            console.log(cards);
        }
        if (excludedcards.counterfeit.checked) {
            removeFromArray(cards, "counterfeit");
            console.log(cards);
        }
        if (excludedcards.cultist.checked) {
            removeFromArray(cards, "cultist");
            console.log(cards);
        }
        if (excludedcards.deathcart.checked) {
            removeFromArray(cards, "deathcart");
            console.log(cards);
        }
        if (excludedcards.feodum.checked) {
            removeFromArray(cards, "feodum");
            console.log(cards);
        }
        if (excludedcards.forager.checked) {
            removeFromArray(cards, "forager");
            console.log(cards);
        }
        if (excludedcards.fortress.checked) {
            removeFromArray(cards, "fortress");
            console.log(cards);
        }
        if (excludedcards.graverobber.checked) {
            removeFromArray(cards, "graverobber");
            console.log(cards);
        }
        if (excludedcards.hermit.checked) {
            removeFromArray(cards, "hermit");
            console.log(cards);
        }
        if (excludedcards.huntinggrounds.checked) {
            removeFromArray(cards, "huntinggrounds");
            console.log(cards);
        }
        if (excludedcards.ironmonger.checked) {
            removeFromArray(cards, "ironmonger");
            console.log(cards);
        }
        if (excludedcards.junkdealer.checked) {
            removeFromArray(cards, "junkdealer");
            console.log(cards);
        }
        if (excludedcards.knights.checked) {
            removeFromArray(cards, "knights");
            console.log(cards);
        }
        if (excludedcards.marauder.checked) {
            removeFromArray(cards, "marauder");
            console.log(cards);
        }
        if (excludedcards.marketsquare.checked) {
            removeFromArray(cards, "marketsquare");
            console.log(cards);
        }
        if (excludedcards.mystic.checked) {
            removeFromArray(cards, "mystic");
            console.log(cards);
        }
        if (excludedcards.pillage.checked) {
            removeFromArray(cards, "pillage");
            console.log(cards);
        }
        if (excludedcards.poorhouse.checked) {
            removeFromArray(cards, "poorhouse");
            console.log(cards);
        }
        if (excludedcards.procession.checked) {
            removeFromArray(cards, "procession");
            console.log(cards);
        }
        if (excludedcards.rats.checked) {
            removeFromArray(cards, "rats");
            console.log(cards);
        }
    }
    if (setlist.indexOf("guilds") != -1) {
        if (excludedcards.advisor.checked) {
            removeFromArray(cards, "advisor");
            console.log(cards);
        }
        if (excludedcards.baker.checked) {
            removeFromArray(cards, "baker");
            console.log(cards);
        }
        if (excludedcards.butcher.checked) {
            removeFromArray(cards, "butcher");
            console.log(cards);
        }
        if (excludedcards.candlestickmaker.checked) {
            removeFromArray(cards, "candlestickmaker");
            console.log(cards);
        }
        if (excludedcards.doctor.checked) {
            removeFromArray(cards, "doctor");
            console.log(cards);
        }
        if (excludedcards.herald.checked) {
            removeFromArray(cards, "herald");
            console.log(cards);
        }
        if (excludedcards.journeyman.checked) {
            removeFromArray(cards, "journeyman");
            console.log(cards);
        }
        if (excludedcards.masterpiece.checked) {
            removeFromArray(cards, "masterpiece");
            console.log(cards);
        }
        if (excludedcards.merchantguild.checked) {
            removeFromArray(cards, "merchantguild");
            console.log(cards);
        }
        if (excludedcards.plaza.checked) {
            removeFromArray(cards, "plaza");
            console.log(cards);
        }
        if (excludedcards.soothsayer.checked) {
            removeFromArray(cards, "soothsayer");
            console.log(cards);
        }
        if (excludedcards.stonemason.checked) {
            removeFromArray(cards, "stonemason");
            console.log(cards);
        }
        if (excludedcards.taxman.checked) {
            removeFromArray(cards, "taxman");
            console.log(cards);
        }
    }
    if (setlist.indexOf("adventures") != -1) {
        if (excludedcards.amulet.checked) {
            removeFromArray(cards, "amulet");
            console.log(cards);
        }
        if (excludedcards.artificer.checked) {
            removeFromArray(cards, "artificer");
            console.log(cards);
        }
        if (excludedcards.bridgetroll.checked) {
            removeFromArray(cards, "bridgetroll");
            console.log(cards);
        }
        if (excludedcards.caravanguard.checked) {
            removeFromArray(cards, "caravanguard");
            console.log(cards);
        }
        if (excludedcards.coinoftherealm.checked) {
            removeFromArray(cards, "coinoftherealm");
            console.log(cards);
        }
        if (excludedcards.distantlands.checked) {
            removeFromArray(cards, "distantlands");
            console.log(cards);
        }
        if (excludedcards.dungeon.checked) {
            removeFromArray(cards, "dungeon");
            console.log(cards);
        }
        if (excludedcards.duplicate.checked) {
            removeFromArray(cards, "duplicate");
            console.log(cards);
        }
        if (excludedcards.gear.checked) {
            removeFromArray(cards, "gear");
            console.log(cards);
        }
        if (excludedcards.giant.checked) {
            removeFromArray(cards, "giant");
            console.log(cards);
        }
        if (excludedcards.guide.checked) {
            removeFromArray(cards, "guide");
            console.log(cards);
        }
        if (excludedcards.hauntedwoods.checked) {
            removeFromArray(cards, "hauntedwoods");
            console.log(cards);
        }
        if (excludedcards.hireling.checked) {
            removeFromArray(cards, "hireling");
            console.log(cards);
        }
        if (excludedcards.illgottengains.checked) {
            removeFromArray(cards, "illgottengains");
            console.log(cards);
        }
        if (excludedcards.lostcity.checked) {
            removeFromArray(cards, "lostcity");
            console.log(cards);
        }
        if (excludedcards.magpie.checked) {
            removeFromArray(cards, "magpie");
            console.log(cards);
        }
        if (excludedcards.messenger.checked) {
            removeFromArray(cards, "messenger");
            console.log(cards);
        }
        if (excludedcards.miser.checked) {
            removeFromArray(cards, "miser");
            console.log(cards);
        }
        if (excludedcards.page.checked) {
            removeFromArray(cards, "page");
            console.log(cards);
        }
        if (excludedcards.peasant.checked) {
            removeFromArray(cards, "peasant");
            console.log(cards);
        }
        if (excludedcards.port.checked) {
            removeFromArray(cards, "port");
            console.log(cards);
        }
        if (excludedcards.ranger.checked) {
            removeFromArray(cards, "ranger");
            console.log(cards);
        }
        if (excludedcards.ratcatcher.checked) {
            removeFromArray(cards, "ratcatcher");
            console.log(cards);
        }
        if (excludedcards.raze.checked) {
            removeFromArray(cards, "raze");
            console.log(cards);
        }
        if (excludedcards.relic.checked) {
            removeFromArray(cards, "relic");
            console.log(cards);
        }
        if (excludedcards.royalcarriage.checked) {
            removeFromArray(cards, "royalcarriage");
            console.log(cards);
        }
        if (excludedcards.storyteller.checked) {
            removeFromArray(cards, "storyteller");
            console.log(cards);
        }
        if (excludedcards.swamphag.checked) {
            removeFromArray(cards, "swamphag");
            console.log(cards);
        }
        if (excludedcards.transmogrify.checked) {
            removeFromArray(cards, "transmogrify");
            console.log(cards);
        }
        if (excludedcards.treasuretrove.checked) {
            removeFromArray(cards, "treasuretrove");
            console.log(cards);
        }
        if (excludedcards.winemerchant.checked) {
            removeFromArray(cards, "winemerchant");
            console.log(cards);
        }
    }
    if (setlist.indexOf("empires") != -1) {
        if (excludedcards.archive.checked) {
            removeFromArray(cards, "archive");
            console.log(cards);
        }
        if (excludedcards.bustlingvillage.checked){
                    removeFromArray(cards,"bustlingvillage");
                    console.log(cards);
        }
        if (excludedcards.capital.checked) {
            removeFromArray(cards, "capital");
            console.log(cards);
        }
        if (excludedcards.castles.checked) {
            removeFromArray(cards, "castles");
            console.log(cards);
        }
        if (excludedcards.catapult.checked) {
            removeFromArray(cards, "catapult");
            console.log(cards);
        }
        if (excludedcards.chariotrace.checked) {
            removeFromArray(cards, "chariotrace");
            console.log(cards);
        }
        if (excludedcards.charm.checked) {
            removeFromArray(cards, "charm");
            console.log(cards);
        }
        if (excludedcards.cityquarter.checked) {
            removeFromArray(cards, "cityquarter");
            console.log(cards);
        }
        if (excludedcards.crown.checked) {
            removeFromArray(cards, "crown");
            console.log(cards);
        }
        if (excludedcards.emporium.checked){
            removeFromArray(cards,"emporium");
           console.log(cards);
         }
        if (excludedcards.encampment.checked) {
            removeFromArray(cards, "encampment");
            console.log(cards);
        }
        if (excludedcards.enchantress.checked) {
            removeFromArray(cards, "enchantress");
            console.log(cards);
        }
        if (excludedcards.engineer.checked) {
            removeFromArray(cards, "engineer");
            console.log(cards);
        }
        if (excludedcards.farmersmarket.checked) {
            removeFromArray(cards, "farmersmarket");
            console.log(cards);
        }
        if (excludedcards.fortune.checked){
            removeFromArray(cards,"fortune");
            console.log(cards);
        }
        if (excludedcards.forum.checked) {
            removeFromArray(cards, "forum");
            console.log(cards);
        }
        if (excludedcards.gladiator.checked) {
            removeFromArray(cards, "gladiator");
            console.log(cards);
        }
        if (excludedcards.groundskeeper.checked) {
            removeFromArray(cards, "groundskeeper");
            console.log(cards);
        }
        if (excludedcards.legionary.checked) {
            removeFromArray(cards, "legionary");
            console.log(cards);
        }
        if (excludedcards.overlord.checked) {
            removeFromArray(cards, "overlord");
            console.log(cards);
        }
        if (excludedcards.patrician.checked) {
            removeFromArray(cards, "patrician");
            console.log(cards);
        }
        if (excludedcards.plunder.checked){
            removeFromArray(cards,"plunder");
            console.log(cards);
        }
        if (excludedcards.rocks.checked){
            removeFromArray(cards,"rocks");
            console.log(cards);
        }
        if (excludedcards.royalblacksmith.checked) {
            removeFromArray(cards, "royalblacksmith");
            console.log(cards);
        }
        if (excludedcards.sacrifice.checked) {
            removeFromArray(cards, "sacrifice");
            console.log(cards);
        }
        if (excludedcards.settlers.checked) {
            removeFromArray(cards, "settlers");
            console.log(cards);
        }
        if (excludedcards.temple.checked) {
            removeFromArray(cards, "temple");
            console.log(cards);
        }
        if (excludedcards.villa.checked) {
            removeFromArray(cards, "villa");
            console.log(cards);
        }
        if (excludedcards.wildhunt.checked) {
            removeFromArray(cards, "wildhunt");
            console.log(cards);
        }
    }
    if (promolist.indexOf("envoy") != -1) {
        if (excludedcards.envoy.checked) {
            removeFromArray(cards, "envoy");
            console.log(cards);
        }
    }
    if (promolist.indexOf("governor") != -1) {
        if (excludedcards.governor.checked) {
            removeFromArray(cards, "governor");
            console.log(cards);
        }
    }
    if (promolist.indexOf("prince") != -1) {
        if (excludedcards.prince.checked) {
            removeFromArray(cards, "prince");
            console.log(cards);
        }
    }
    if (promolist.indexOf("stash") != -1) {
        if (excludedcards.stash.checked) {
            removeFromArray(cards, "stash");
            console.log(cards);
        }
    }
    if (promolist.indexOf("walled") != -1) {
        if (excludedcards.walledvillage.checked) {
            removeFromArray(cards, "walledvillage");
            console.log(cards);
        }
    }
    if (promolist.indexOf("sauna") != -1) {
        if (excludedcards.sauna.checked) {
            removeFromArray(cards, "sauna");
            console.log(cards);
        }
    }
    /*
    for future sets:
    if (setlist.indexOf("")!=-1){
        if (excludedcards..checked){
            removeFromArray(cards,"");
            console.log(cards);
        }
    }
    */
    var limit = excludedcards.deckLimit.value;

    cards = shuffle(cards);
    if(limit) cards = cards.splice(0,limit);
    document.getElementById("cards_to_exclude").style.display = "none";
    document.getElementById("deck_select").style.display = "block";
    cardsLeftEl.innerHTML = "Cards Remaining:&nbsp;" + cards.length;

    [].forEach.call(document.getElementsByClassName("cardRow"), function (el) {
        el.style.display= "none";
    });   
}

function draw_cards() {
    
    cardsLeftEl.innerHTML = "Cards Remaining:&nbsp;" + cards.length;
    if (cards.length > 2) {
        console.log(cards);

        random_card1 = cards.splice(0,1)[0];
        revealedCards.push(random_card1);

        random_card2 = cards.splice(0,1)[0];
        revealedCards.push(random_card2);

        random_card3 = cards.splice(0,1)[0];
        revealedCards.push(random_card3);

        card_1_imageEl.innerHTML = "<img  src='images/all/" + random_card1 + ".jpg'>";
        card_2_imageEl.innerHTML = "<img  src='images/all/" + random_card2 + ".jpg'>";
        card_3_imageEl.innerHTML = "<img  src='images/all/" + random_card3 + ".jpg'>";
        card_1_spanEl.innerHTML = cardDict[random_card1];
        card_2_spanEl.innerHTML = cardDict[random_card2];
        card_3_spanEl.innerHTML = cardDict[random_card3];
        draw_buttonEl.style.display = "none";
        card_1_imageEl.style.display = "inline";
        card_2_imageEl.style.display = "inline";
        card_3_imageEl.style.display = "inline";
        buy_card_1El.style.display = "inline";
        buy_card_2El.style.display = "inline";
        buy_card_3El.style.display = "inline";
        buy_noneEl.style.display = "inline";
    } else if (cards.length == 2) {
        console.log(cards);

        random_card1 = cards.splice(0,1)[0];
        revealedCards.push(random_card1);

        random_card2 = cards.splice(0,1)[0];
        revealedCards.push(random_card2);

        random_card3 = false;
        card_1_imageEl.innerHTML = "<img src='images/all/" + random_card1 + ".jpg'>";
        card_2_imageEl.innerHTML = "<img src='images/all/" + random_card2 + ".jpg'>";
        card_1_spanEl.innerHTML = cardDict[random_card1];
        card_2_spanEl.innerHTML = cardDict[random_card2];
        draw_buttonEl.style.display = "none";
        card_1_imageEl.style.display = "inline";
        card_2_imageEl.style.display = "inline";
        buy_card_1El.style.display = "inline";
        buy_card_2El.style.display = "inline";
        buy_noneEl.style.display = "inline";
    } else if (cards.length == 1) {
        console.log(cards);
        random_card1 = cards.splice(0,1)[0];
        revealedCards.push(random_card1);

        random_card2 = false;
        random_card3 = false;
        card_1_imageEl.innerHTML = "<img src='images/all/" + random_card1 + ".jpg'>";
        card_1_spanEl.innerHTML = cardDict[random_card1];
        draw_buttonEl.style.display = "none";
        card_1_imageEl.style.display = "inline";
        buy_card_1El.style.display = "inline";
        buy_noneEl.style.display = "inline";
    } else {
        document.getElementById("deck_select").style.display = "none";
        document.getElementById("done").style.display = "block";
    }

    [].forEach.call(document.getElementsByClassName("cardRow"), function (el) {
        el.style.display= "inline";
    });  
}

function discardall() {

    cards = cards.concat(shuffle(revealedCards));
    revealedCards = [];

    draw_buttonEl.style.display = "inline";
    card_1_imageEl.style.display = "none";
    card_2_imageEl.style.display = "none";
    card_3_imageEl.style.display = "none";
    buy_card_1El.style.display = "none";
    buy_card_2El.style.display = "none";
    buy_card_3El.style.display = "none";
    buy_noneEl.style.display = "none";
    cardsLeftEl.innerHTML = "Cards Remaining:&nbsp;" + cards.length;
    [].forEach.call(document.getElementsByClassName("cardRow"), function (el) {
        el.style.display= "none";
    });  
}

function buy(card_to_buy) {
    card_to_buy--;
console.log('buying '+ revealedCards[card_to_buy])
    revealedCards.splice(card_to_buy,1);
    cards = cards.concat(shuffle(revealedCards));
    revealedCards = [];

    draw_buttonEl.style.display = "inline";
    card_1_imageEl.style.display = "none";
    card_2_imageEl.style.display = "none";
    card_3_imageEl.style.display = "none";
    buy_card_1El.style.display = "none";
    buy_card_2El.style.display = "none";
    buy_card_3El.style.display = "none";
    buy_noneEl.style.display = "none";
    cardsLeftEl.innerHTML = "Cards Remaining:&nbsp;" + cards.length;
    [].forEach.call(document.getElementsByClassName("cardRow"), function (el) {
        el.style.display= "none";
    });  

    
}