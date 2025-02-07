const animalData = [
  {
    Animal_ID: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG7P_zbxf-hSjclrAUCPnmPsCP3tMinccRw&s",
    name: "Atlas Moth (Philippine subspecies)",
    scientificName: "Attacus atlas",
    status: "Not Evaluated",
    size: "Wingspan: up to 30 cm",
    habitat: "Tropical and subtropical forests in the Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "One of the largest moths in the world, known for its large, striking wings with intricate patterns.",
  },
  {
    Animal_ID: 2,
    image:
      "https://files.worldwildlife.org/wwfcmsprod/images/Dugong_swimming/story_full_width/3q79r2m8gv_Medium_WW1221.jpg",
    name: "Dugong",
    scientificName: "Dugong dugon",
    status: "Vulnerable",
    features:
      "Large marine mammal, grayish skin, tail fluke, herbivorous, and slow-moving.",
    size: "Up to 4 meters long, weighing up to 400 kg",
    habitat: "Shallow coastal waters, seagrass beds",
    threats: "Habitat loss, hunting, entanglement in fishing gear",
    protection: "CITES Appendix I, national laws",
  },
  {
    Animal_ID: 3,
    image:
      "https://mytraveldigest.wordpress.com/wp-content/uploads/2015/09/crispy-fried-tawilis-nutrition-facts.jpg?w=1200",
    name: "Tawilis",
    scientificName: "Sardinella tawilis",
    status: "Endangered",
    features: "Small freshwater fish, silver-colored body, small fins.",
    size: "Up to 10 cm",
    habitat: "Taal Lake, Philippines",
    threats: "Pollution, invasive species, habitat destruction",
    protection: "Philippine law, IUCN Red List",
  },
  {
    Animal_ID: 4,
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/267125321/900",
    name: "Philippine Scops Owl",
    scientificName: "Otus megalotis",
    status: "Near Threatened",
    features:
      "A small owl endemic to the Philippines, typically found in lowland and montane forests.",
    size: "Length: 22 cm",
    habitat: "Lowland and montane forests in the Philippines",
    threats: "Habitat loss and fragmentation",
    protection: "Protected under Philippine law",
  },
  {
    Animal_ID: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpT-LdT0CCyrHpmodF3s0icTIcmVavtuBrA&s",
    name: "Negros Bleeding-Heart",
    scientificName: "Gallicolumba keayi",
    status: "Critically Endangered",
    features: "A rare and colorful pigeon native to Negros and Panay islands.",
    size: "Length: 26 cm",
    habitat: "Forests of Negros and Panay, Philippines",
    threats: "Habitat destruction, hunting",
    protection: "Strictly protected under Philippine law",
  },
  {
    Animal_ID: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FXSQhUPFAdAuzjgerljTQuSAXL-5Qw7pow&s",
    name: "Philippine Cockatoo",
    scientificName: "Cacatua haematuropygia",
    status: "Critically Endangered",
    features:
      "A small, white cockatoo with a pale yellow underwing and red-orange under-tail coverts, known for its loud calls.",
    size: "Length: 30-31 cm; Weight: 300-360 g",
    habitat:
      "Lowland primary and secondary forests, mangroves, and coastal areas",
    threats: "Habitat loss, illegal pet trade",
    protection: "Protected by law; conservation efforts ongoing in Palawan",
  },
  {
    Animal_ID: 7,
    image:
      "https://cdn.britannica.com/75/253875-050-8B6C565B/philippine-crocodile-Crocodylus-mindorensis-mindoro-crocodile-freshwater.jpg",
    name: "Philippine Crocodile",
    scientificName: "Crocodylus mindorensis",
    status: "Critically Endangered",
    size: "Length: up to 3 meters",
    habitat:
      "Freshwater habitats such as rivers, lakes, and marshes in the Philippines",
    threats: "Habitat loss, hunting, and entanglement in fishing nets",
    protection:
      "Protected under Philippine law; conservation programs in place",
    features:
      "A small freshwater crocodile endemic to the Philippines, known for its pale coloration and small size compared to other crocodiles.",
  },
  {
    Animal_ID: 8,
    image:
      "https://imgs.mongabay.com/wp-content/uploads/sites/20/2019/10/30041242/1Y1A9576.jpg",
    name: "Philippine Eagle",
    scientificName: "Pithecophaga jefferyi",
    status: "Critically Endangered",
    features:
      "Large raptor with a massive beak, long crest, and striking plumage, known for its power and agility.",
    size: "Up to 1 meter tall, with a wingspan of up to 2.2 meters",
    habitat: "Tropical rainforests in the Philippines",
    threats: "Deforestation, hunting, habitat destruction",
    protection: "Philippine law, IUCN Red List, CITES Appendix I",
  },
  {
    Animal_ID: 9,
    image: "https://www.ecoticias.com/wp-content/uploads/2024/01/Rana-filipina-Barbourula-busuangensis-1-1536x1024.jpg",
    name: "Philippine Flat-headed Frog",
    scientificName: "Barbourula busuangensis",
    status: "Vulnerable",
    size: "Up to 7 cm in length",
    habitat: "Clear, fast-flowing streams in lowland and montane forests of Palawan, Philippines",
    threats: "Habitat destruction due to deforestation, mining, and water pollution",
    protection: "Some protection within designated conservation areas in Palawan",
    features: "A fully aquatic, lungless frog with a flattened body adapted for life in swift-moving waters."
},
  {
    Animal_ID: 10,
    image:
      "https://www.rekoforest.org/wp-content/uploads/2021/09/rer-sunda-flying-lemur.jpg",
    name: "Philippine Flying Lemur",
    scientificName: "Cynocephalus volans",
    status: "Least Concern",
    features:
      "Large, gliding mammal with a membrane between limbs, used for flying. Short tail and nocturnal behavior.",
    size: "Length: 33-38 cm, Weight: 1-1.7 kg",
    habitat: "Forests of the Philippines",
    threats: "Deforestation, Hunting",
    protection: "--",
  },
  {
    Animal_ID: 11,
    image:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/66040756/original.jpeg",
    name: "Philippine Goby",
    scientificName: "Pandaka pygmaea",
    status: "Critically Endangered",
    features: "Smallest fish in the Philippines, translucent body, long fins.",
    size: "Up to 1.2 cm",
    habitat: "Freshwater streams, rivers",
    threats: "Water pollution, habitat destruction",
    protection: "Philippine law, IUCN Red List",
  },
  {
    Animal_ID: 12,
    image:
      "https://images.squarespace-cdn.com/content/v1/5734f2a086db43e3f6fb1bbc/1570730445121-2IL9CST07GC0PE6HAVQ2/Happy+together+-+Gino+Symus.jpg?format=1500w",
    name: "Philippine Seahorse",
    scientificName: "Hippocampus comes",
    status: "Vulnerable",
    features:
      "Small, elongated body with a horse-like head, prehensile tail, and spiny protrusions.",
    size: "Up to 20 cm",
    habitat: "Shallow coastal waters, seagrass beds",
    threats: "Habitat destruction, illegal trade",
    protection: "CITES Appendix II",
  },
  {
    Animal_ID: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-tEL-WZWOLnRpDIxGfnudh5XP5MEuaxaEQ&s",
    name: "Philippine Stag Beetle",
    scientificName: "Dorcus titanus palawanicus",
    status: "Not Evaluated",
    size: "Length: up to 9 cm",
    habitat: "Forests in Palawan, Philippines",
    threats: "Habitat loss and collection for trade",
    protection: "Not currently under specific protection measures",
    features: "A large beetle with prominent antler-like horns.",
  },
  {
    Animal_ID: 14,
    image: "https://cdn.britannica.com/26/155226-050-39CB355F/Tarsier.jpg",
    name: "Tarsier",
    scientificName: "Carlito syrichta",
    status: "Near Threatened",
    features:
      "Large eyes, long fingers, strong hind legs, rotatable head, soft fur, long tail, and sensitive hearing.",
    size: "85 to 160 mm, weighing 80 to 165 g",
    habitat: "Philippine rainforests",
    threats: "Habitat loss, Pet trade",
    protection: "Philippine law (Republic Act 9147), CITES Appendix II",
  },
  {
    Animal_ID: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKfaCIuCmtYYhRM3YaMTNP-Yt5Ke1SjobLw&s",
    name: "Philippine Tube-nosed Fruit Bat",
    scientificName: "Nyctimene rabori",
    status: "Endangered",
    features:
      "Medium-sized bat with distinctive tubular nostrils, primarily frugivorous.",
    size: "Wingspan: 0.5-0.6 m, Weight: 40-60 g",
    habitat: "Forests of the Philippines",
    threats: "Habitat destruction, Hunting",
    protection: "Protected by Philippine law, CITES Appendix II",
  },
  {
    Animal_ID: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Philippine_warty_pig_%28Sus_philippensis%29_in_Philippine_Eagle_Center%2C_Davao%2C_Philippines.jpg",
    name: "Philippine Warty Pig",
    scientificName: "Sus philippensis",
    status: "Vulnerable",
    features:
      "Medium-sized wild pig with warty facial lumps, dark coat, and curved tusks.",
    size: "Head-body length: 1-1.6 m, Weight: 40-80 kg",
    habitat: "Forests, grasslands, and agricultural areas",
    threats: "Habitat destruction, Hunting",
    protection: "Protected under Philippine law",
  },
  {
    Animal_ID: 17,
    image:
      "https://coffeeandcreatures.co.uk/wp-content/uploads/2019/09/visayan-spotted-deer-by-kevin.jpg",
    name: "Visayan Spotted Deer",
    scientificName: "Rusa alfredi",
    status: "Endangered",
    features:
      "Medium-sized deer with spotted fur and long legs, mainly active at dawn and dusk.",
    size: "Height: 70-80 cm, Weight: 25-80 kg",
    habitat: "Rainforests of Visayas",
    threats: "Hunting, Habitat loss",
    protection: "Philippine law (Republic Act 9147), CITES Appendix I",
  },
  {
    Animal_ID: 18,
    image:
      "https://png.pngtree.com/thumb_back/fw800/background/20240424/pngtree-whale-shark-open-mouth-close-up-portrait-underwater-image_15666716.jpg",
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    status: "Endangered",
    features:
      "Largest fish in the world, gentle filter feeder, wide mouth, distinctive white spots, and striped pattern.",
    size: "Up to 12 meters long, weighing up to 15 tons",
    habitat: "Tropical oceans",
    threats: "Overfishing, habitat degradation",
    protection: "CITES Appendix II, national laws in many countries",
  },
]

export default animalData;
