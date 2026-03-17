import { 
  Music, 
  Sparkles, 
  Zap, 
  PartyPopper, 
  Megaphone, 
  Monitor, 
  Radio, 
  Dice5,
  Mic2,
  Wind,
  Snowflake,
  Flame,
  Waves,
  Pointer,
  CircleDot,
  Layers,
  Dices,
  Ghost,
  Utensils,
  Camera,
  Heart,
  Star,
  Trophy,
  Gamepad2,
  Puzzle,
  Settings,
  Target,
  Gift,
  Palette,
  Tent,
  LayoutGrid,
  Smile
} from "lucide-react";

export const SERVICES_DATA: Record<string, {
  title: string;
  category: string | string[];
  description: string;
  icon: any;
}> = {
  // Format
  "photobooth": {
    title: "Photobooth",
    category: "Format",
    description: "Cattura i momenti più divertenti del tuo evento con i nostri set photobooth professionali. Accessori a tema, stampe istantanee e condivisione social per un'esperienza indimenticabile.",
    icon: Camera
  },
  "silent-disco": {
    title: "Silent Disco / Silent Party",
    category: "Format",
    description: "Porta la musica dove vuoi senza disturbare nessuno! Tre canali musicali simultanei su cuffie wireless ad alta fedeltà per un party esclusivo e coinvolgente.",
    icon: Music
  },
  "villaggio-sport": {
    title: "Villaggio dello Sport",
    category: "Format",
    description: "Uno spazio dinamico dedicato alle attività sportive per grandi e piccini. Percorsi fitness, sfide a squadre e tanto divertimento all'aria aperta o indoor.",
    icon: Trophy
  },
  "luna-park": {
    title: "Luna Park",
    category: "Format",
    description: "Rivivi l'atmosfera magica delle fiere classiche con il nostro luna park portatile. Giochi di abilità, attrazioni iconiche e profumo di festa per un evento dal sapore vintage.",
    icon: Tent
  },
  "sala-giochi-arcade": {
    title: "Sala Giochi Arcade",
    category: "Format",
    description: "Un tuffo nel passato con i cabinati arcade più famosi. Da Pac-Man a Street Fighter, offriamo il noleggio di postazioni retrogaming originali per un tocco nerd al tuo party.",
    icon: Gamepad2
  },
  "calcio-biliardo": {
    title: "Calcio Biliardo",
    category: "Format",
    description: "L'unione perfetta tra il biliardo e il calcio! Una sfida originale su una pedana gigante dove i piedi prendono il posto della stecca e le palline da calcio delle boccette.",
    icon: CircleDot
  },
  "calcio-balilla": {
    title: "Calcio Balilla",
    category: "Format",
    description: "L'intramontabile classico dei bar e degli oratori. Noleggiamo biliardini professionali per tornei agguerriti e momenti di pura aggregazione durante ogni tipo di festa.",
    icon: Smile
  },
  "giochi-quartiere": {
    title: "Giochi di Quartiere",
    category: "Format",
    description: "I giochi di una volta tornano protagonisti. Tiro alla fune, corsa nei sacchi e giochi in legno della tradizione per riscoprire il piacere dello stare insieme.",
    icon: Puzzle
  },
  "gli-impiantati": {
    title: "Gli impiantati",
    category: "Format",
    description: "Installazioni e allestimenti unici che trasformano lo spazio. Soluzioni scenografiche originali pensate per dare un carattere forte e distintivo al tuo evento.",
    icon: Settings
  },
  "scacchiera-gigante": {
    title: "Scacchiera Gigante",
    category: "Format",
    description: "Sfida il tuo avversario su una scala monumentale. I pezzi giganti aggiungono una dimensione fisica e divertente al gioco della strategia per eccellenza.",
    icon: LayoutGrid
  },
  "porta-rigori": {
    title: "Porta rigori",
    category: "Format",
    description: "Metti alla prova la tua precisione dal dischetto! Una porta gonfiabile o professionale dotata di sensori o teloni per sfide ai rigori adrenaliniche e divertenti.",
    icon: Target
  },
  "laboratori": {
    title: "Laboratori",
    category: "Format",
    description: "Esperienze creative e coinvolgenti per bambini, con attività originali pensate per divertire, stimolare la fantasia e rendere ogni evento ancora più speciale.",
    icon: Palette
  },
  "villaggio-babbo-natale": {
    title: "Villaggio di Babbo Natale",
    category: "Format",
    description: "Tutta la magia del Natale racchiusa in un villaggio incantato. Casa di Babbo Natale, ufficio postale degli elfi e laboratori a tema per un'esperienza polare indimenticabile.",
    icon: Gift
  },
  // Matrimoni
  "musica-in-chiesa": {
    title: "Musica in chiesa",
    category: "Matrimoni",
    description: "Accompagnamento musicale solenne e raffinato per la cerimonia religiosa, con musicisti professionisti e repertorio sacro o moderno.",
    icon: Music
  },
  "musica-in-sala": {
    title: "Musica in sala",
    category: "Matrimoni",
    description: "Intrattenimento musicale per il ricevimento, dal jazz d'ascolto alla dance più coinvolgente, per accompagnare ogni momento della festa.",
    icon: Mic2
  },
  "casino-tavoli-gioco": {
    title: "Casinò tavoli da gioco",
    category: ["Matrimoni", "Format"],
    description: "Un angolo di divertimento con tavoli da gioco professionali (Roulotte, Blackjack, Poker) e croupier per intrattenere gli ospiti con eleganza.",
    icon: Dices
  },
  "effetti-speciali": {
    title: "Effetti speciali",
    category: "Matrimoni",
    description: "Momenti magici creati con macchine del fumo, fontane fredde e scintille per sottolineare i momenti più importanti come il taglio della torta.",
    icon: Zap
  },
  "illuminazione": {
    title: "Illuminazione",
    category: "Matrimoni",
    description: "Light design architettonico e decorativo per trasformare la location e creare l'atmosfera perfetta per il tuo giorno speciale.",
    icon: Sparkles
  },
  "spettacoli-intrattenimento": {
    title: "Spettacoli e intrattenimento",
    category: "Matrimoni",
    description: "Dagli artisti di strada ai cabarettisti, offriamo una vasta gamma di spettacoli per sorprendere e divertire i tuoi invitati.",
    icon: Star
  },
  // Effetti Speciali
  "schiuma-party": {
    title: "Schiuma Party Cannone",
    category: "Effetti Speciali",
    description: "Divertimento allo stato puro con i nostri cannoni sparachiuma ad alta potenza, ideali per eventi estivi e feste in piscina.",
    icon: Waves
  },
  "nevicata-artificiale": {
    title: "Nevicata Artificiale Cannone Neve",
    category: "Effetti Speciali",
    description: "Crea un'atmosfera invernale magica in qualsiasi momento dell'anno con i nostri cannoni sparaneve professionale.",
    icon: Snowflake
  },
  "spara-coriandoli": {
    title: "Spara coriandoli a CO2",
    category: "Effetti Speciali",
    description: "Esplosioni scenografiche di colori per premiazioni, tagli della torta o finali di festa con cannoni a CO2 di grande impatto.",
    icon: PartyPopper
  },
  "spara-fiamme": {
    title: "Spara fiamme",
    category: "Effetti Speciali",
    description: "Effetti di fuoco controllato sincronizzati con la musica, ideali per palchi, festival ed eventi ad alta energia.",
    icon: Flame
  },
  "geyser-co2": {
    title: "Geyser CO2 Blaster",
    category: "Effetti Speciali",
    description: "Colonne di fumo bianco a scomparsa immediata, cariche di energia, perfette per i momenti drop dei DJ set.",
    icon: Wind
  },
  "bazooka-co2": {
    title: "Bazooka CO2 Cannone CO2",
    category: "Effetti Speciali",
    description: "Effetto CO2 mobile gestito direttamente dagli animatori o dai DJ per un'interazione diretta con il pubblico.",
    icon: Wind
  },
  "sparkular": {
    title: "Sparkular",
    category: "Effetti Speciali",
    description: "Fontane di scintille fredde sicure anche per interni, senza fumo né odore, per un effetto Hollywoodiano garantito.",
    icon: Zap
  },
  "fumo-basso": {
    title: "Fumo basso",
    category: "Effetti Speciali",
    description: "L'effetto 'camminata sulle nuvole' perfetto per il primo ballo degli sposi o ingressi trionfali.",
    icon: Wind
  },
  "fontane-fredde": {
    title: "Fontane fredde / fuochi freddi",
    category: "Effetti Speciali",
    description: "Scenografie luminose eleganti e sicure, ideali per sottolineare i momenti clou di matrimoni ed eventi aziendali.",
    icon: Zap
  },
  "cascata-palloni": {
    title: "Cascata palloni",
    category: "Effetti Speciali",
    description: "Una pioggia gioiosa di palloncini colorati che scende dall'alto per chiudere in bellezza cerimonie e inaugurazioni.",
    icon: CircleDot
  },
  "laser-show": {
    title: "Laser show",
    category: "Effetti Speciali",
    description: "Proiezioni laser professionali e volumetriche per creare coreografie di luce spettacolari e futuristiche.",
    icon: Pointer
  },
  "bolle-sapone": {
    title: "Bolle di sapone",
    category: "Effetti Speciali",
    description: "Macchine professionali per bolle di sapone, per un tocco di leggerezza e magia a matrimoni e feste per bambini.",
    icon: Waves
  },
  "dance-floor": {
    title: "Dance floor / pedana",
    category: "Effetti Speciali",
    description: "Piste da ballo professionali, pedane luminose e moduli per creare l'area dance perfetta per qualsiasi location.",
    icon: Layers
  },
  // Gonfiabili
  "gonfiabili": {
    title: "Gonfiabili",
    category: "Gonfiabili",
    description: "Noleggio di strutture gonfiabili per bambini e adulti: scivoli, percorsi a ostacoli e castelli per un divertimento in totale sicurezza.",
    icon: PartyPopper
  },
  // Service
  "attrezzature-dj": {
    title: "Attrezzature per DJ / Consolle",
    category: "Service",
    description: "Noleggio strumentazione professionale per DJ (Pioneer, Allen & Heath) e setup completi per ogni tipo di performance.",
    icon: Music
  },
  "impianti-audio": {
    title: "Impianti audio",
    category: "Service",
    description: "Sistemi audio professionali per piccoli eventi o grandi spazi, configurazioni line array e assistenza tecnica dedicata.",
    icon: Radio
  },
  "ledwall": {
    title: "Ledwall maxischermo",
    category: "Service",
    description: "Schermi LED ad alta risoluzione per proiezioni video, dirette streaming e contenuti spettacolari, modulari per ogni dimensione.",
    icon: Monitor
  },
  "video-proiezioni": {
    title: "Video proiezioni",
    category: "Service",
    description: "Proiettori ad alta luminosità e schermi per presentazioni aziendali, cinema all'aperto o proiezione di contenuti emozionali.",
    icon: Monitor
  },
  "pedane-palchi": {
    title: "Pedane palchi passerelle",
    category: "Service",
    description: "Strutture modulari certificate per la creazione di palcoscenici, passerelle per sfilate e aree rialzate sicure ed eleganti.",
    icon: Layers
  },
  "service-illuminazione": {
    title: "Illuminazione Technical",
    category: "Service",
    description: "Illuminazione tecnica per concerti, sfilate ed eventi aziendali, con fari motorizzati, sagomatori e regie luci professionali.",
    icon: Zap
  },
  "service-dance-floor": {
    title: "Dance floor / pedana Technical",
    category: "Service",
    description: "Strutture tecniche per piste da ballo modulari, pavimentazioni per eventi e palcoscenici per sfilate.",
    icon: Layers
  },
  // Comunicazione
  "volantinaggio": {
    title: "Volantinaggio",
    category: "Comunicazione",
    description: "Distribuzione professionale di materiale pubblicitario door-to-door o in punti strategici per massimizzare la visibilità del brand.",
    icon: Megaphone
  },
  "campagne-pubblicitarie": {
    title: "Campagne pubblicitarie",
    category: "Comunicazione",
    description: "Pianificazione e gestione di campagne pubblicitarie integrate per promuovere il tuo business o evento con efficacia.",
    icon: Megaphone
  },
  "servizio-hostess": {
    title: "Servizio hostess",
    category: "Comunicazione",
    description: "Staff professionale e multilingua per accoglienza ospiti, stand fieristici, congressi ed eventi istituzionali.",
    icon: Heart
  },
  "roller-girls": {
    title: "Roller girls",
    category: "Comunicazione",
    description: "Un tocco di originalità e dinamismo: hostess sui pattini per distribuzione gadget, flyer o accoglienza animata.",
    icon: Zap
  },
};
