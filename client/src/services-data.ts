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
    description: `Organizza il tuo Silent Party
Vuoi organizzare un party in un centro storico dove la musica ad alto volume potrebbe disturbare? Noleggia le nostre cuffie wireless e risolvi il problema.

Caratteristiche del sistema
Le cuffie hanno 3 frequenze: possono suonare 3 DJ in contemporanea e gli ospiti scelgono chi ascoltare.

Ideale per molti contesti:
Guide turistiche
Meeting e Convegni
Eventi aziendali
Cinema all’aperto
Matrimoni e 18 anni
Party per bambini

Servizi inclusi
Possibilità di noleggiare il kit con ritiro in deposito o scegliere il pacchetto completo con DJ.`,
    icon: Music
  },
  "villaggio-sport": {
    title: "Villaggio dello Sport",
    category: "Format",
    description: `Villaggio dello Sport
Un progetto di animazione sportiva collaudato per centri commerciali, feste private o eventi in piazza.

Il format prevede l'allestimento di uno spazio con diverse postazioni sportive:

Postazioni incluse:
Porta per rigori (6x4 mt) con recinzione
Basket game per tiri liberi
Tennis da tavolo (2 postazioni)
Tiro con l'arco Soft
Campo Badminton (13x6 mt)
Scacchiera gigante (5x5 mt)
Calcio Balilla Umano (20x10 mt)
Calcio Saponato (20x10 mt)
Mini golf e Foot golf

Allestimento e Premiazioni
All'ingresso troverai un arco gonfiabile, un podio olimpico per le premiazioni e musica di sottofondo.

Personalizzazione
È possibile scegliere il numero di postazioni desiderate. Il villaggio può essere delimitato con reti di recinzione.`,
    icon: Trophy
  },
  "luna-park": {
    title: "Luna Park",
    category: "Format",
    description: `Luna Park itinerante
Il nostro Luna Park mobile è ideale per feste a tema, serate disco a tema luna park, eventi e cerimonie, feste di piazza e intrattenimento per centri commerciali.

Giochi artigianali in legno
Il format prevede l'installazione di tipici giochi realizzati completamente in legno e cartapesta, dipinti a mano.

Giochi disponibili:
LANCIO DEI BARATTOLI
TIRO AL SEGNO E AL BERSAGLIO
LANCIO DEGLI ANELLI
PESCA DEI PESCIOLINI
BOWLING IN LEGNO

Animazione e Sweet Food
Personale in abiti tipici gestisce i giochi consegnando gadget. Possiamo integrare carrettini di pop corn, zucchero filato, hot dog e crepes.`,
    icon: Tent
  },
  "sala-giochi-arcade": {
    title: "Sala Giochi Arcade",
    category: "Format",
    description: `Party a Tema Arcade
Ricrea una vera sala giochi ambientandola nell’epoca che più ti piace.

Attrezzature a noleggio:
N° 1 Videogiochi Cabinato Arcade (1000+ giochi)
Cabinati PlayStation
Calcio balilla professionale Garlando
Tavolo da ping pong
Basket Game
Hokey da tavolo ad aria

Mini Tornei e Divertimento
Gli ospiti possono utilizzare liberamente tutti i giochi e organizzare tornei. Ideale per adulti e bambini.

Un tuffo nel passato
Dai classici Pacman e Super Mario fino ai titoli per PlayStation 1, 2 e 3. Rivivi l’emozionante mondo arcade.`,
    icon: Gamepad2
  },
  "calcio-biliardo": {
    title: "Calcio Biliardo",
    category: "Format",
    description: `Calcio Biliardo Snook Ball
Il fenomeno virale dello Snook Ball arriva al tuo evento nella versione italianizzata: il Calcio Biliardo.

Come si gioca
Un tavolo da biliardo 7x4 mt dove, invece delle stecche, si usano i piedi. Si gioca alla carambola classica o a Palla 8.

Noleggio professionale
Ideale per eventi sportivi, piazze e centri commerciali.

Sito di riferimento
Per maggiori dettagli visita: www.calciobiliardo.com`,
    icon: CircleDot
  },
  "calcio-balilla": {
    title: "Calcio Balilla",
    category: "Format",
    description: `Noleggio Calcio Balilla Professionale
Noleggiamo biliardini Garlando professionali in tutta Italia per eventi privati e pubblici.

Modello Garlando G-500 Weatherproof
Adatto per uso esterno, realizzato con materiali resistenti agli agenti atmosferici e umidità.

Caratteristiche tecniche:
Compensato multistrati resistente all'acqua
Gambe regolabili per terreni irregolari
Aste rientranti di sicurezza (ideali per bambini)
Dimensioni aperto: 143 x 110 x 88 cm
Peso: 60 Kg

Sicurezza e Qualità
Le aste rientranti evitano colpi accidentali al viso, rendendo il gioco sicuro per i più piccoli. Conforme alle norme europee.`,
    icon: Smile
  },
  "giochi-quartiere": {
    title: "Giochi di Quartiere",
    category: "Format",
    description: `Giochi di Quartiere della Tradizione
Un format con 5 postazioni in legno dipinte a mano per riscoprire la bellezza dei giochi di una volta.

I giochi inclusi:
La grovigliera
N° 2 Labirinti
Lancio ai barattoli in latta
Lancio nel barile
Binario, pallina e Barattoli

Aggregazione e Famiglia
Il format prevede il coinvolgimento di adulti e bambini, creando veri momenti di condivisione durante tutta la cerimonia.

Atmosfera Napoli Antica
Abbinabile a figuranti della tradizione napoletana come Pulcinella, Totò e Lo scartellato.`,
    icon: Puzzle
  },
  "gli-impiantati": {
    title: "Gli impiantati",
    category: "Format",
    description: `Gli Impiantati - Candid Camera
Vuoi far ridere (o spaventare) i tuoi ospiti? Simpaticissime piante animate pronte a sorprendere chiunque.

Cosa sono?
All'apparenza sembrano normali piante finte, ma all'interno si nasconde un attore pronto ad agire al momento giusto.

Contesti ideali:
Centri Commerciali
Eventi in piazza
Meeting aziendali
Feste private originali

Disponibile in tutta Italia basati in Campania.`,
    icon: Settings
  },
  "scacchiera-gigante": {
    title: "Scacchiera Gigante",
    category: "Format",
    description: `Scacchiera e Dama Gigante
Noleggio scacchiera monumentale per centri commerciali, tornei, piazze e cerimonie private.

Specifiche tecniche
La scacchiera misura 5x5 mt con pezzi alti fino a 64 cm (il Re), circondata da uno steccato di un metro.

Due giochi in uno
Possibilità di configurare la base per giocare sia a scacchi che a dama.`,
    icon: LayoutGrid
  },
  "porta-rigori": {
    title: "Porta rigori",
    category: "Format",
    description: `Porta per Rigori con Gabbia
Postazione professionale per eventi sportivi, piazze o serate disco a tema.

Dimensioni e Struttura
Gabbia in ferro 6x4 mt con porta regolamentare 3x2 mt.

Modalità di gioco
Sfida con telo forato di precisione o con portiere reale. Chi segna vince un premio!

Incluso nel Villaggio dello Sport
Questa struttura fa parte anche del format completo dedicato alle attività olimpiche.`,
    icon: Target
  },
  "villaggio-babbo-natale": {
    title: "Villaggio di Babbo Natale",
    category: "Format",
    description: `Villaggio di Babbo Natale
Realizziamo scenografie natalizie complete di qualsiasi dimensione e stile in tutta Italia.

Temi disponibili:
Villaggio Classico Tradizionale
Stile Marzapane e Dolciumi
Stile Glaciale e Polare
La Fabbrica dei Giocattoli

Elementi scenografici inclusi:
Soldatini Schiaccianoci ad altezza uomo
Slitta in legno e Renne in cartapesta
Trono e mobili casa di Babbo Natale
Albero di Natale (5 mt)
Postazioni laboratori elfi
Caselle postali e finto innevamento`,
    icon: Gift
  },
  // Matrimoni
  "musica-in-chiesa": {
    title: "Musica in chiesa",
    category: "Matrimoni",
    description: `Formazione base
Organo e Voce (Soprano o Tenore)
Chitarra e Voce (voce Femminile di musica leggera “NO LIRICA SOPRANO”)

Strumenti aggiuntivi:
Violino
Violoncello
Tromba
Arpa
Flauto

Formazione strumentale
Arpa e Violino

Gospel e Organo
Canti popolari dei neri d’America coro con 8 voci

Quartetto d’Archi
I Violino + II Violino + Viola + Violoncello`,
    icon: Music
  },
  "musica-in-sala": {
    title: "Musica in sala",
    category: "Matrimoni",
    description: `Disponiamo di tantissime soluzioni per l’intrattenimento musicale in sala, in base al gusto e allo stile che si vuole dare alla cerimonia.

Pop Band – Gruppi di Musica Live
(da 3 a 5 elementi – Musica dal vivo con repertorio internazionale)

Band Revival
(da 3 a 5 elementi – Musica dal vivo con repertorio internazionale, musica revival anni 60/70/80 – Musica dance, colonne sonore)

Piano Show
(Repertorio internazionale, musica classica napoletana, musica pop, revival anni 70/80/90, musica dance)
Formazione: Duo o trio

Trio Jazz (Basso, Pianoforte, batteria)
(repertorio jazz solo musicale)

Tiro Jazz + Voce
(4 elementi – Standard jazz, canzoni arrangiante in chiave jazz)

Swing e Jazz Band
(7 elementi – jazz, Chorus e standard americani anni 30- 40, musica leggera)

Blues Band
(chitarra, basso, batteria)

Piano Bar Classico
(Repertorio internazionale, musica classica napoletana, musica pop)
Formazione: Duo o trio

Duo o Trio Acustico
(colonne sonore, musica internazionale, musica classica napoletana, jazz)

Deejay in sala
(selezione di musica pop, deep, lounge, revival, standard, anni 60, 70, 80, 90)

Posteggia
Formazioni: – Chitarra/voce e mandolino o – Chitarra/voce, mandolino e voce femminile
(Musica Classica Napoletana)

Tamburriata
(tamburriata, canti popolari)

Interventi musicali
Da scegliere per Accoglienza Buffet iniziale e Buffe finale dolci e torta. Durata intervento 1,30 /2 ore

Sassofonista – Sax Bar
(colonne sonore, musica internazionale, musica classica napoletana)

Violinista
(colonne sonore, musica internazionale, musica classica)

Posteggia
Formazioni: – Chitarra/voce e mandolino o – Chitarra/voce, mandolino e voce femminile
(Musica Classica Napoletana)

Trombettista
(colonne sonore, musica internazionale, musica classica napoletana, jazz)

Deejay dopo nozze
(con impianto audio e Luci, Musica Dance, House, Revival, Anni 70/80/90, animazione disco, Disco Show)

Duo o Trio Acustico
(colonne sonore, musica internazionale, musica classica napoletana, jazz)`,
    icon: Mic2
  },
  "casino-tavoli-gioco": {
    title: "Casinò tavoli da gioco",
    category: ["Matrimoni", "Format"],
    description: `Noleggio Tavoli da Gioco Casinò professionali con Roulette, Black Jack e Poker
Noleggiamo per il tuo evento a tema casinò

Tavolo Roulette professionale con roulette 80 cm
Tavolo Poker texano
Tavolo Black jack
Tutti i tavoli possono essere noleggiati con il servizio Croupier

Possibilità di personalizzare fiches con il logo del tuo evento.

Un raffinato format di intrattenimento adatto ad ogni tipo di evento, dal party di compleanno al wedding party. L’eleganza dei tavoli, la qualità dei panni da gioco, la professionalità dei nostri croupier, sono gli elementi che mescolati insieme danno vita ad un party di gran classe.

Party A tema Casinò Las Vegas
Noleggio Slot machine vintage a rulli con gettoni.`,
    icon: Dices
  },
  "effetti-speciali": {
    title: "Effetti speciali",
    category: "Matrimoni",
    description: `Effetti speciali Matrimonio Napoli
Elenco dei possibili effetti speciali per stupire gli invitati del tuo matrimonio

Nevicata Artificale
(Riproduzione di una nevicata artificiale) Momenti: Fuori Chiesa, Fuori al locale

Sparo coriandoli
(Sparo coriandoli effetto mondiali)

Sparkular
(Effetto scintille non pirotecniche, per taglio torta nunziale)

Stelle filanti

Bolle di sapone
(Macchine per migliaia di bolle di sapone) – Momenti: Fuori chiesa, sulla torta nunziale

Fontane fredde
(Getti di fuoco) – Momenti: Fuori chiesa, sulla torta nunziale

Fumo basso
(Ambientazione al chiuso)

Schiuma party
(Una novità assoluta, una festa a tema sotto tanta schiuma insieme ai tuoi invitati)

Esplosione di palloni
(Esplosione di palloncini telecomandati da cui possono fuoriuscire palloncini più piccoli)

Spara fiamme
Spara fuoco vero`,
    icon: Zap
  },
  "illuminazione": {
    title: "Illuminazione",
    category: "Matrimoni",
    description: `Noleggio Impianto Luci professionale Napoli
Installazione Impianto Luci

Noleggiamo ed installiamo luci in discoteche, locali, piazze concerti, eventi privati, meeating, teatri, matrimoni a Napoli, Caserta, Salernio, Avellino in Campania e tutta Italia.

Inoltre ci occupiamo di:
Illuminazione luci concerti
Luci architettura
Illuminotecnica
Luci per matrimoni
Luci per teatro
Luci per feste discoteca
Illuminazione per sfilate di moda
Illuminazione palazzetti dello sport
Spettacolo di Luci per teatro
Luci a Batteria Par
Bat wosh a Batteria con calamita
Luci e illuminazione per tavoli
wedding light
Laser show

Attenti alle nuove tecnologie e alle esigenze sempre più ampie del mondo dello spettacolo.`,
    icon: Sparkles
  },
  "spettacoli-intrattenimento": {
    title: "Spettacoli e intrattenimento",
    category: "Matrimoni",
    description: `Spettacoli per matrimonio Napoli
La collaborazione decennale con i migliori artisti ci ha permesso di selezionare i migliori spettacoli.

Violinista con Pittore
Water Ball – Danzatrice in sfera trasparente
Trapezista e tessuto aereo (Spettacolo di contorsioni aeree)
Statue viventi
Caricaturista (2 ore circa 50 caricature)
Trampolieri Sposi (Travestiti da sposo e sposa)
Parata trampolieri
Farfalle con ali luminose (Butterfly Led)
Spettacolo di Danza con il fuoco
Pole Dance – Spettacolo
Sand Art – Spettacoli disegni con sabbia
Artisti circensi Giocolieri, Funabolo, Monociclo
Accoglienza con Artisti di Strada
Fachiro (fuoco, tappeto di chiodi, tappeto di vetro)
Camerieri finti (Coppia di attori molto sbadati)
Magia (Spettacolo per Adulti)
Ombre Cinesi
Illusionismo (Grandi illusioni: Es. donna tagliata a metà)
Magia Close-up (Tra i tavoli)
Ballerine/i brasiliane
Bolle di Sapone Giganti
Danza del ventre (Animazione orientale)
Drag Queen
Acro Yoga (Ginnastica acrobatica e yoga)
Ballerini latino americani
Spettacolo di animazione (Latino, show disco e revival)
Cabarettisti (Cabaret comico)
Macchiettisti (Macchiette napoletane)
La serenata di pulcinella
Tavolo per casinò – Roulette, black jack e Poker
Servizio foto istantanea con Polaroid`,
    icon: Star
  },
  // Effetti Speciali
  "schiuma-party": {
    title: "Schiuma Party Cannone",
    category: "Effetti Speciali",
    description: `Il Cannone più potente d'Italia
Fai il pieno di ragazzi pronti a divertirsi buttandosi nella schiuma. Ideale per grandi serate in disco e all'aperto.

Potenza e Gittata
Il nostro cannone raggiunge un getto di oltre 15 metri, garantendo una copertura massiccia dell'area interessata.

Due modalità in una
La macchina funziona sia come cannone che come generatore di schiuma: una caratteristica che permette di usarlo in due modi diversi nella stessa serata.`,
    icon: Waves
  },
  "nevicata-artificiale": {
    title: "Nevicata Artificiale Cannone Neve",
    category: "Effetti Speciali",
    description: `Effetto Nevicata Professionale
Disponiamo di macchine di diverse dimensioni per realizzare una nevicata artificiale perfetta in qualsiasi contesto.

Indoor e Outdoor
Le macchine piccole sono ideali per teatri, locali e sale al chiuso. Per spazi aperti usiamo i poderosi Cannoni Snow 500.

Cannone Snow 500
Progettato per piazze, set cinematografici e grandi discoteche. Riesce a far nevicare fino a 20 metri di distanza dall'installazione.`,
    icon: Snowflake
  },
  "spara-coriandoli": {
    title: "Spara coriandoli a CO2",
    category: "Effetti Speciali",
    description: `Caduta di Coriandoli Scenografica
Un magico effetto di mega caduta di coriandoli di qualsiasi forma e dimensione. Creiamo piogge colorate o nevicate artificiali lente.

Contesti d'uso
Ideale per premiazioni, grandi eventi all'aperto, matrimoni e comunioni. Un effetto di grande impatto visivo.

Personalizzazione unica
È possibile personalizzare i coriandoli stampando il nome dell'azienda o dei festeggiati per un tocco esclusivo.

Potenza CO2
Utilizziamo la forza del CO2 per lanciare i coriandoli fino a 20 metri di altezza. Per info e prezzi contatta lo 081 19802287.`,
    icon: PartyPopper
  },
  "spara-fiamme": {
    title: "Spara fiamme",
    category: "Effetti Speciali",
    description: `Spara Fiamme Coreografico
Macchine professionali capaci di generare fiamme reali alte fino a 3 metri per un effetto adrenalinico.

Sincronizzazione Musicale
Le macchine possono essere azionate singolarmente o in gruppi, sincronizzate con la musica o altri effetti speciali.

Fiamme colorate
Offriamo la possibilità di variare i colori delle fiamme per adattarle al tema del vostro spettacolo o evento.

Stupisci il tuo pubblico
Ideale per concerti, sfilate di moda, presentazioni aziendali e grandi eventi in piazza.`,
    icon: Flame
  },
  "geyser-co2": {
    title: "Geyser CO2 Blaster",
    category: "Effetti Speciali",
    description: `Getti di fumo ghiacciato Geyser
Effetto spettacolare di colonne di fumo bianco realizzate grazie al CO2 ad alta pressione.

Installazioni Blaster
Disponiamo dei poderosi BLASTER con una gettata reale di 30 metri, tra le macchine più potenti in Europa.

Automazione e Sincronia
Realizziamo installazioni fisse o mobili che possono essere centralizzate e sincronizzate perfettamente con la musica.

Noleggio e Service
Effettuiamo noleggio a freddo e installazioni professionali, anche per lunghi periodi in discoteche e club.`,
    icon: Wind
  },
  "bazooka-co2": {
    title: "Bazooka CO2 Cannone CO2",
    category: "Effetti Speciali",
    description: `Bazooka CO2 - Effetto Club
Lo spettacolare effetto visto nei migliori club internazionali, ora disponibile per il tuo party.

Interazione diretta
Un getto di fumo freddo sparato da DJ, ballerini o vocalist direttamente sul pubblico per caricare l'atmosfera.

Versatilità
Perfetto per locali e discoteche, sia al chiuso che all'aperto, per momenti di puro hype durante la serata.`,
    icon: Wind
  },
  "sparkular": {
    title: "Sparkular",
    category: "Effetti Speciali",
    description: `Sparkular - Scintille Fredde
Macchina innovativa che riproduce l'effetto delle fontane pirotecniche in modo totalmente sicuro e senza fuoco.

Sicurezza assoluta
Non brucia, non produce fumo né odore ed è atossico. Può essere usato liberamente in ambienti chiusi senza permessi speciali.

Specifiche tecniche
Uso indoor e outdoor
Nessun sistema pirotecnico o infiammabile
Fino a 3 minuti di autonomia per ricarica
Controllo professionale tramite DMX

Il tocco magico per cerimonie
Perfetto per il taglio della torta in matrimoni e cerimonie eleganti a Napoli e dintorni.`,
    icon: Zap
  },
  "fumo-basso": {
    title: "Fumo basso",
    category: "Effetti Speciali",
    description: `Effetto Paradiso - Fumo Basso
Il celebre effetto del fumo pesante che resta ancorato al pavimento, creando un'atmosfera magica "sulle nuvole".

Macchinari Professionali
Utilizziamo le celebri Le Maitre G300SMART con FREEZEFOG Pro, le eccellenze del mercato mondiale.

Potenza e Copertura
La macchina copre fino a 80 mq al minuto. L'effetto è di lunga durata, non lascia residui e non fa scivolare.

Ambiti d'uso
Ideale per il primo ballo degli sposi, produzioni televisive, teatri, set cinematografici e showroom.`,
    icon: Wind
  },
  "fontane-fredde": {
    title: "Fontane fredde / fuochi freddi",
    category: "Effetti Speciali",
    description: `Fontane Fredde e Scintille
Scenografie luminose eleganti con colonne di scintille di varie altezze, durata e intensità.

Sicuro in ogni location
La caratteristica di non bruciare permette l'installazione su palchi, teatri o anche vicino alla consolle DJ in sicurezza.

Controllo remoto
I fuochi sono gestiti tramite centraline radio-comandate per attivare scene sincronizzate con i momenti clou.`,
    icon: Zap
  },
  "cascata-palloni": {
    title: "Cascata palloni",
    category: "Effetti Speciali",
    description: `Cascata di Palloncini
Regala un'emozione gioiosa e colorata con una scenografica cascata di palloncini che scende dall'alto.

Dimensioni su misura
Possiamo realizzare cascate di qualsiasi dimensione, adattandoci alle altezze di qualsiasi location o centro commerciale.

Personalizzazione totale
I palloncini possono essere di qualsiasi misura e colore, con possibilità di stampa personalizzata con loghi o nomi.`,
    icon: CircleDot
  },
  "laser-show": {
    title: "Laser show",
    category: "Effetti Speciali",
    description: `Sistemi Laser Professionali
Proiezioni laser ad alta potenza per creare coreografie volumetriche o disegni su superfici.

Grafica e Testi
I nostri laser possono riprodurre loghi aziendali, scritte personalizzate e immagini vettoriali in 2D e 3D in movimento.

Grandi Spazi
Capaci di animare discoteche, grandi concerti in piazza e scenografie pubblicitarie di forte impatto.`,
    icon: Pointer
  },
  "bolle-sapone": {
    title: "Bolle di sapone",
    category: "Effetti Speciali",
    description: `Coreografie di Bolle di Sapone
Macchine professionali capaci di inondare palchi e aree sceniche con migliaia di bolle scintillanti.

Tecnologia DMX
Utilizziamo macchinari controllabili via DMX per integrare le bolle perfettamente con l'impianto luci e la musica.

Liquidi Atossici
Utilizziamo esclusivamente liquido speciale atossico ed anallergico che non macchia e non rovina i tessuti.

Ideale per:
Matrimoni e Comunioni
Eventi Teatrali
Sfilate e Inaugurazioni
Strutture turistiche`,
    icon: Waves
  },
  "dance-floor": {
    title: "Dance floor / pedana",
    category: "Effetti Speciali",
    description: `Pista da Ballo 3D
Noleggio di Dance Floor con effetto Mirror 3D per trasformare l'area ballo in un'esperienza visiva unica.

Varie metrature
Disponiamo di diverse configurazioni modulari per adattarci a ogni spazio, dal piccolo party al grande wedding.

Wedding & Club
Ideale per matrimoni, 18esimi ed eventi aziendali a Napoli e in tutta la Campania.

Personalizzazione
Possibilità di aggiungere pedane rialzate e strutture per delimitare l'area ballo professionale.`,
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
    description: `Noleggio Attrezzature professionali per DJ
Forniamo sia l'installazione che il noleggio con ritiro diretto nei nostri depositi.

MIXER disponibili:
PIONEER DJM 600/700/800/900 / 900 NXS
ALLEN & HEATH XONE 92
OUTLINE PRO 408

Lettori CDJ e Digitali:
PIONEER CDJ 350 / 400 / 2000 NEXUS 2
TECHNICS SL DZ 1200
Effetti Pioneer RMX 1000

Giradischi e Vinile:
Technics SL-1200 e SL-1210 (Il mito intramontabile)

Controller e Interfacce:
Native Instruments Traktor Kontrol X1 e S4
Schede audio e tastiere MIDI (Vari modelli Native Instruments e M-Audio)`,
    icon: Music
  },
  "impianti-audio": {
    title: "Impianti audio",
    category: "Service",
    description: `Service Audio e Impianti Professionali
Disponiamo di impianti audio e luci di vari marchi e tipologie per ogni tipo di applicazione ed evento.

Progettazione e Assistenza
Curiamo trasporto, installazione e gestione tecnica per:
Musica Live e Concerti
Serate Dance e DJ set
Sfilate di moda e Teatro
Manifestazioni e Convegni
Conferenze e Meeting aziendali

Noleggio Rapido (Dry Hire)
Puoi ritirare direttamente in deposito piccoli o medi impianti audio ideali per:
Feste private
Piano Bar
Potenziamento impianto esistente
Piccole manifestazioni`,
    icon: Radio
  },
  "ledwall": {
    title: "Ledwall maxischermo",
    category: "Service",
    description: `Noleggio Ledwall e Maxischermi
Installiamo Ledwall modulari ad alta risoluzione per eventi pubblici, privati, fiere e concerti.

Visibilità perfetta anche di giorno
I nostri schermi assicurano una visione cristallina anche all'aperto sotto la luce del sole.

Soluzioni per ogni esigenza:
Stand fieristici e sfilate di moda
Concerti live indoor e outdoor
Eventi disco e party privati
Meeting e convegni istituzionali
Campagne pubblicitarie dinamiche

Gestione Tecnica e VJ
Ci occupiamo di montaggio e assistenza. Su richiesta, un VJ professionista può creare effetti video live spettacolari. Disponibili anche per installazioni fisse in vetrine e locali.`,
    icon: Monitor
  },
  "video-proiezioni": {
    title: "Video proiezioni",
    category: "Service",
    description: `Video Proiezioni Professionali
Installazioni fisse e mobili con schermi di varie misure e tipologie. Noleggio con o senza operatore tecnico.

Tecnologia 2D e 3D
Videoproiettori multimediali ad alta luminosità per risultati spettacolari in ogni condizione di luce.

Ideale per:
Meeting e Congressi
Videoconferenze e Webinar
Rappresentazioni Teatrali
Visual per DJ set e Live Show
Dirette televisive e Pubblicità
Manifestazioni pubbliche`,
    icon: Monitor
  },
  "pedane-palchi": {
    title: "Pedane palchi passerelle",
    category: "Service",
    description: `Noleggio Palchi e Pedane Modulari
Strutture certificate e sicure per la creazione di aree rialzate, passerelle e palcoscenici professionali.

Pedane modulari (1x2 mt)
Altezze variabili: 20, 40, 60 o 80 cm. Ideali per piccole aree rialzate o passerelle per sfilate di moda.

Palchi certificati per grandi eventi
Installazioni di qualsiasi dimensione con moduli 2x2 mt, dotati di scale, protezioni laterali e opzione di copertura per sagre e concerti.`,
    icon: Layers
  },
  "service-illuminazione": {
    title: "Illuminazione Technical",
    category: "Service",
    description: `Service Illuminazione Professionale
Progettiamo e installiamo impianti luci per discoteche, locali, piazze e teatri in tutta Italia.

Illuminazione Tecnica e Creativa:
Luci per concerti e spettacoli teatrali
Illuminazione architettonica per esterni e facciate
Luci per matrimoni e wedding light design
Illuminotecnica per sfilate di moda e aree sportive
Laser Show e proiezioni dinamiche

Tecnologia Batteria Wireless
Disponiamo di fari a batteria (Par e Bat Wash) per illuminare location senza cavi a vista, con fissaggio a calamita.

Innovazione e Qualità
Sempre al passo con le nuove tecnologie per offrire scenografie luminose di massimo impatto visivo.`,
    icon: Zap
  },
  "service-dance-floor": {
    title: "Dance floor / pedana Technical",
    category: "Service",
    description: `Pista da Ballo Mirror 3D
Trasforma la tua zona dance con una pedana luminosa professionale dall'effetto profondità 3D unico.

Modularità e Dimensioni
Disponibile in diverse metrature per adattarsi a ogni tipo di sala, piazza o location all'aperto.

Noleggio Service Campania
Effettuiamo consegne e installazioni a Napoli e in tutta la regione per:
Matrimoni ed Eventi eleganti
Feste di 18 Anni e compleanni
Eventi aziendali e lanci di prodotto
Party in discoteca e locali`,
    icon: Layers
  },
  // Comunicazione
  "volantinaggio": {
    title: "Volantinaggio",
    category: "Comunicazione",
    description: `Volantinaggio Non Convenzionale
Usciamo dagli schemi classici per catturare l'attenzione con strumenti e figure inedite.

Le nostre proposte creative:
Volantinaggio con Trampolieri
Distribuzione con Mascotte Disney
Hostess, Ragazze Immagine e Ragazze Sexy
Babbo Natale e Babba Natale in minigonna
Roller Girls (Hostess sui pattini)

Guerrilla Marketing
Idee e strumenti inediti progettati per stupire il pubblico, generare passaparola e lasciare un segno.

Copertura Territoriale
Effettuiamo servizi di volantinaggio professionale a Napoli, Nola, Paesi Vesuviani, Salerno, Benevento, Caserta e in tutta la Campania.`,
    icon: Megaphone
  },
  "campagne-pubblicitarie": {
    title: "Campagne pubblicitarie",
    category: "Comunicazione",
    description: `Progettazione Campagne Pubblicitarie
Creare una campagna significa trovare il modo perfetto per suscitare interesse reale nel consumatore.

Attenzione e Curiosità
Il nostro studio realizza campagne inconsuete che catturano non solo il cliente interessato, ma anche il semplice curioso.

Piano di Comunicazione Aziendale
La campagna pubblicitaria è il cuore di ogni piano di crescita. Ci occupiamo della strategia dall'idea alla realizzazione.

Risultati Stupefacenti
Affidati alla nostra esperienza per proporre al mercato qualcosa che sappia davvero distinguersi dalla massa.`,
    icon: Megaphone
  },
  "servizio-hostess": {
    title: "Servizio hostess",
    category: "Comunicazione",
    description: `Servizio Hostess e Promoter
Forniamo staff qualificato per le aziende più note del panorama nazionale, garantendo professionalità e immagine.

Eventi e Congressi
Hostess specializzate per meeting, inaugurazioni, congressi istituzionali e feste private di alto livello.

Promozione di Prodotto
Staff promoter dedicato per centri commerciali e punti vendita, per valorizzare al meglio ogni articolo o servizio.

Staff a Tema e Costumi
Progettiamo l'immagine dello staff in base all'evento:
Hostess in costume Bavarese o Medievale
Abiti sportivi o Tailleur classici e moderni
Conigliette e abiti a tema personalizzati`,
    icon: Heart
  },
  "roller-girls": {
    title: "Roller girls",
    category: "Comunicazione",
    description: `Roller Girls - Hostess sui Pattini
Cambia il modo di comunicare! Attira l'attenzione distribuendo volantini con dinamismo grazie alle nostre Roller Girls.

Dinamismo Urbano
Un format perfetto per centri storici, piazze affollate e grandi centri commerciali dove la velocità e l'originalità fanno la differenza.

Attira il tuo pubblico
Le Roller Girls rappresentano un nuovo modo, fresco e divertente, per interagire con i potenziali clienti e farsi notare.`,
    icon: Zap
  },
};
