const animalData = [
  {
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
    image:
      "https://i0.wp.com/ayej.org/wp-content/uploads/2021/06/kalibasib.jpeg?fit=960%2C701&ssl=1",
    name: "Tamaraw",
    scientificName: "Bubalus mindorensis",
    status: "Critically Endangered",
    features:
      "Small, stocky buffalo with a dark brown coat, small, forward-pointing horns, and a robust body.",
    size: "Up to 1.2 meters at the shoulder, weighing 250 to 300 kg",
    habitat: "Montane forests on Mindoro Island",
    threats: "Habitat loss, hunting, human-wildlife conflict",
    protection: "Philippine law, IUCN Red List",
  },
  {
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
  {
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
    image:
      "https://untamedscience.com/wp-content/uploads/2014/01/sus_barbatus.jpg",
    name: "Palawan Bearded Pig",
    scientificName: "Sus ahoenobarbus",
    status: "Vulnerable",
    features:
      "Wild pig with a distinct beard-like hair around its face and large tusks.",
    size: "Body length: 1-1.6 m, Weight: 40-80 kg",
    habitat: "Forests of Palawan",
    threats: "Deforestation, Hunting",
    protection: "Protected by Philippine law",
  },
  {
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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Visayan_Spotted_Deer_%28Rusa_alfredi%29.jpg/1200px-Visayan_Spotted_Deer_%28Rusa_alfredi%29.jpg",
    name: "Philippine Deer",
    scientificName: "Rusa marianna",
    status: "Vulnerable",
    features:
      "Medium-sized deer with brown fur and short antlers, often seen grazing in the early morning.",
    size: "Body length: 100-151 cm, Weight: 40-60 kg",
    habitat: "Forests, grasslands",
    threats: "Hunting, Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpYE5fAPNqf4zy3VhnVFsMAvMltUhytaOXCf_zVhnxl6f3aIfr6FVQmxkgSCGchBkq3KqA_kPVuKX-v0xtSnSPVecTaXxRTI6QVSBJFkKy5FFL_xWMgj7CPiZCeUIARdZasZZYFx7eGWys/s1600/palawan-stink-badger-wild-mydaus-marchei.jpg.jpg",
    name: "Palawan Stink Badger",
    scientificName: "Mydaus marchei",
    status: "Least Concern",
    features:
      "Small, stout, with a stinky odor for defense, covered in coarse fur with a white stripe down its back.",
    size: "Length: 32-46 cm, Weight: 1.4-3.6 kg",
    habitat: "Forests of Palawan",
    threats: "Deforestation, Hunting",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://nhmu.utah.edu/sites/default/files/styles/2x_small_320w/public/embedded_images/Striped%20rat%20%28Chrotomys%20whitehead%29i.jpg?itok=14QoPbmt",
    name: "Luzon Striped Rat",
    scientificName: "Chrotomys whiteheadi",
    status: "Least Concern",
    features:
      "Small rodent with a striped fur pattern on its back and short legs.",
    size: "Length: 20-25 cm",
    habitat: "Luzon forests",
    threats: "Deforestation, Predation",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3akcdaMKpeElfCkAzO7ctmPq_r3PG16ntA&s",
    name: "Luzon Giant Cloud Rat",
    scientificName: "Phloeomys cumingi",
    status: "Vulnerable",
    features:
      "Large rodent with dense fur, long tail, and prominent cheek pouches.",
    size: "Length: 75 cm, Weight: 1.5-2.5 kg",
    habitat: "Forests of Luzon",
    threats: "Deforestation, Hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudxpaGspedKWB6PL5LrPgloakpZAN6Tdmzw&s",
    name: "Giant Golden-crowned Flying Fox",
    scientificName: "Acerodon jubatus",
    status: "Endangered",
    features:
      "Large fruit bat with golden fur on its head and large wingspans, feeding primarily on fruit.",
    size: "Wingspan: 1.5-1.7 m, Weight: 0.7-1.2 kg",
    habitat: "Forests of the Philippines",
    threats: "Hunting, Habitat destruction",
    protection: "Protected by Philippine law, CITES Appendix I",
  },
];

export default animalData;
