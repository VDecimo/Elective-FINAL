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
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Crocidura_russula_%28Huisspitsmuis%29.jpg/640px-Crocidura_russula_%28Huisspitsmuis%29.jpg",
    name: "Negros Shrew",
    scientificName: "Crocidura negrina",
    status: "Critically Endangered",
    features:
      "Small insectivorous mammal with a pointed snout and short fur, endemic to Negros Island.",
    size: "Length: 10-12 cm, Weight: 20-30 g",
    habitat: "Negros Island, Philippines",
    threats: "Habitat loss, Limited range",
    protection: "Protected by Philippine law",
  },
  {
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
    image:
      "https://nhmu.utah.edu/sites/default/files/styles/2x_small_320w/public/embedded_images/Shrew%20rat%20%28Rhynchomys%20soricoides%29.jpg?itok=9pYkBYQl",
    name: "Luzon Shrew",
    scientificName: "Crocidura grayi",
    status: "Least Concern",
    features:
      "Small, insectivorous mammal with a slender body and elongated snout.",
    size: "Length: 8-10 cm, Weight: 15-25 g",
    habitat: "Luzon Island, Philippines",
    threats: "Habitat disturbance",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Common_Mindanao_shrew.jpg",
    name: "Panay Shrew",
    scientificName: "Crocidura panayensis",
    status: "Endangered",
    features:
      "Small, elusive shrew with a pointed nose and dark brown fur, endemic to Panay Island.",
    size: "Length: 9-11 cm, Weight: 18-28 g",
    habitat: "Panay Island, Philippines",
    threats: "Habitat destruction",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgqjy6eomr3iM7AoXIm4wmXsKgTM-4C1Lqw&s",
    name: "Mindanao Pygmy Fruit Bat",
    scientificName: "Alionycteris paucidentata",
    status: "Vulnerable",
    features:
      "Small fruit bat with a short snout and rounded ears, primarily feeds on soft fruits.",
    size: "Wingspan: 0.4-0.5 m, Weight: 30-50 g",
    habitat: "Forests of Mindanao, Philippines",
    threats: "Habitat destruction",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlbXkySAQbVRrgBW4E-TtC1E5aYHSA90m5A&s",
    name: "Dinagat Bushy-tailed Cloud Rat",
    scientificName: "Crateromys australis",
    status: "Endangered",
    features:
      "A rare nocturnal rodent with long, bushy fur, native to the forests of Dinagat Island.",
    size: "Length: 30-35 cm, Weight: 1-1.5 kg",
    habitat: "Dinagat Island, Philippines",
    threats: "Habitat loss, Hunting",
    protection: "Protected by Philippine law, CITES Appendix I",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKfH5eVdvGcULe-f6K1mFKZJqdTMs5fY5p3anIEef3B0HBSqrU8qzaBWkxhJZGqk1WtY&usqp=CAU",
    name: "Northern Luzon Giant Cloud Rat",
    scientificName: "Phloeomys pallidus",
    status: "Near Threatened",
    features:
      "A large, slow-moving rodent with thick fur, primarily active at night in Luzon forests.",
    size: "Length: 45-50 cm, Weight: 1.5-2.3 kg",
    habitat: "Northern Luzon, Philippines",
    threats: "Habitat destruction, Hunting",
    protection: "Protected by Philippine law",
  },
  {
    image:
      "https://i.pinimg.com/736x/01/b6/66/01b6667c510eb1cf6ba7bc95672c90c5.jpg",
    name: "Mindoro Tree Squirrel",
    scientificName: "Sundasciurus mindanensis",
    status: "Vulnerable",
    features:
      "A small, agile squirrel with sharp claws, adapted for life in tree canopies on Mindoro Island.",
    size: "Length: 20-25 cm, Weight: 200-300 g",
    habitat: "Mindoro Island, Philippines",
    threats: "Habitat destruction",
    protection: "Protected by Philippine law",
  },
  {
    image: "https://live.staticflickr.com/7153/6721548081_b678c19011_c.jpg",
    name: "Philippine Hawk-Eagle",
    scientificName: "Nisaetus philippensis",
    status: "Vulnerable",
    features:
      "A medium-sized raptor with sharp talons and keen eyesight, found in Philippine forests.",
    size: "Length: 65-70 cm; Weight: 1.8-2.3 kg",
    habitat:
      "Tropical moist lowland and montane forests in Luzon, Samar, Leyte, and Mindanao",
    threats: "Habitat loss due to deforestation",
    protection: "Protected under Philippine law; Listed in CITES Appendix II",
  },
  {
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
    image:
      "https://philippineendangered.wordpress.com/wp-content/uploads/2015/10/363380661_26ee0f3fa5.jpg",
    name: "Cebu Flowerpecker",
    scientificName: "Dicaeum quadricolor",
    status: "Critically Endangered",
    features:
      "A small songbird with a striking red, yellow, and black plumage, endemic to Cebu.",
    size: "Length: 11 cm",
    habitat: "Forest remnants in Cebu, Philippines",
    threats: "Habitat destruction due to deforestation",
    protection: "Protected by Philippine law; conservation efforts ongoing",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NOE6ZUyeP57lihDVfdKHZR-ADKw_AToH1Q&s",
    name: "Visayan Hornbill",
    scientificName: "Penelopides panini",
    status: "Endangered",
    features:
      "A medium-sized hornbill with a distinctive curved bill, primarily black with white and yellowish plumage.",
    size: "Length: 45 cm",
    habitat: "Forests of Negros and Panay, Philippines",
    threats: "Deforestation and hunting",
    protection:
      "Protected under Philippine law; conservation efforts in progress",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Palawan_Peacock_Pheasant_-_male.jpg",
    name: "Palawan Peacock-Pheasant",
    scientificName: "Polyplectron napoleonis",
    status: "Vulnerable",
    features:
      "A strikingly beautiful pheasant with iridescent blue and green feathers, endemic to Palawan.",
    size: "Length: 50 cm",
    habitat: "Forests of Palawan, Philippines",
    threats: "Habitat destruction and hunting",
    protection: "Protected by law; conservation breeding programs ongoing",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/267086761/900",
    name: "Rufous Hornbill",
    scientificName: "Buceros hydrocorax",
    status: "Vulnerable",
    features:
      "A large hornbill with a deep rufous body, black wings, and a massive red casque on its bill.",
    size: "Length: 65-80 cm",
    habitat: "Forests in Luzon, Samar, Leyte, and Mindanao",
    threats: "Deforestation, hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://ferrebeekeeper.wordpress.com/wp-content/uploads/2016/07/mindanao_bleeding_heart_dov-600x560.jpg?w=584",
    name: "Luzon Bleeding-Heart",
    scientificName: "Gallicolumba luzonica",
    status: "Near Threatened",
    features:
      "A pigeon species known for its distinctive bleeding heart-shaped markings.",
    size: "Length: 25-30 cm",
    habitat: "Forests of Luzon, Philippines",
    threats: "Habitat destruction, hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/345659135/medium.jpg",
    name: "Mindoro Bleeding-Heart",
    scientificName: "Gallicolumba platenae",
    status: "Endangered",
    features:
      "A critically endangered species with a striking red chest marking.",
    size: "Length: 25 cm",
    habitat: "Forests of Mindoro, Philippines",
    threats: "Deforestation, hunting",
    protection: "Protected under Philippine law",
  },
  {
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
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/395226051/320",
    name: "Flame-templed Babbler",
    scientificName: "Dasycrotapha speciosa",
    status: "Vulnerable",
    features:
      "A small songbird with bright orange plumage on its head and throat.",
    size: "Length: 14 cm",
    habitat: "Forests of Negros and Panay, Philippines",
    threats: "Deforestation",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCsMV_Js4hwI0JhC57FaFHp5vnmAQDkNcWA&s",
    name: "Mindanao Wattled Broadbill",
    scientificName: "Eurylaimus steerii",
    status: "Near Threatened",
    features:
      "A colorful broadbill bird native to Mindanao with distinct wattle features.",
    size: "Length: 15-17 cm",
    habitat: "Forests of Mindanao, Philippines",
    threats: "Habitat loss",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/267267151/900",
    name: "Philippine Frogmouth",
    scientificName: "Batrachostomus septimus",
    status: "Least Concern",
    features: "A nocturnal bird with a wide mouth, resembling a frog's.",
    size: "Length: 23 cm",
    habitat: "Forests of the Philippines",
    threats: "Habitat loss",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/334335371/320",
    name: "Yellow-breasted Fruit Dove",
    scientificName: "Ptilinopus occipitalis",
    status: "Near Threatened",
    features:
      "A brightly colored dove with a yellow breast, found in tropical forests.",
    size: "Length: 27 cm",
    habitat: "Forests of the Philippines",
    threats: "Deforestation, hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/348938501/900",
    name: "Black-hooded Coucal",
    scientificName: "Centropus steerii",
    status: "Endangered",
    features: "A medium-sized coucal with a black hood and distinctive calls.",
    size: "Length: 40 cm",
    habitat: "Forests of Mindoro, Philippines",
    threats: "Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngOTqmTvo-e0prTNNy3nfPMXKbOC3ygGABQ&s",
    name: "Blue-naped Parrot",
    scientificName: "Tanygnathus lucionensis",
    status: "Near Threatened",
    features:
      "A parrot species with a blue patch on its nape, native to the Philippines.",
    size: "Length: 31 cm",
    habitat: "Forests and mangroves of the Philippines",
    threats: "Habitat destruction, pet trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/374212881/900",
    name: "Whiskered Pitta",
    scientificName: "Erythropitta kochi",
    status: "Near Threatened",
    features: "A small, colorful bird with whiskers on its face.",
    size: "Length: 16 cm",
    habitat: "Forests of Luzon, Philippines",
    threats: "Deforestation",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/388691871/900",
    name: "Philippine Bulbul",
    scientificName: "Hypsipetes philippinus",
    status: "Least Concern",
    features:
      "A small, common songbird found in the Philippines, with an olive-green body.",
    size: "Length: 25 cm",
    habitat: "Forest edges and secondary growth in the Philippines",
    threats: "Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/379457731/320",
    name: "Balicassiao",
    scientificName: "Ixos philippinus",
    status: "Least Concern",
    features:
      "A small, active songbird commonly found in the forests of Luzon.",
    size: "Length: 24 cm",
    habitat: "Forests of Luzon and nearby islands",
    threats: "Habitat loss",
    protection: "Protected under Philippine law",
  },
  {
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
    image:
      "https://coffeeandcreatures.co.uk/wp-content/uploads/2019/02/90184023_m-1.jpg?w=1200",
    name: "Philippine Sailfin Lizard",
    scientificName: "Hydrosaurus pustulatus",
    status: "Least Concern",
    features:
      "A large, semi-aquatic lizard, commonly found in rivers and streams.",
    size: "Length: 1.5 m",
    habitat: "Rivers and streams in the Philippines",
    threats: "Habitat degradation and collection for trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnngU94SmpweZ34WHS-UVvawuxhS_V-w7Xg&s",
    name: "Gray’s Monitor Lizard (Butaan)",
    scientificName: "Varanus olivaceus",
    status: "Vulnerable",
    features: "A large, terrestrial lizard found in forests and grasslands.",
    size: "Length: 1.5 m",
    habitat: "Forests and grasslands of the Philippines",
    threats: "Illegal hunting and habitat loss",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/13483650/original.jpg",
    name: "Northern Sierra Madre Forest Monitor",
    scientificName: "Varanus bitatawa",
    status: "Endangered",
    features:
      "A rare species found in the rainforests of the Sierra Madre mountains.",
    size: "Length: 1.8 m",
    habitat: "Lowland rainforests of the Sierra Madre in Luzon",
    threats: "Deforestation and hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt7tRnRRRad2I4LYgrFcEonWCiyZNStZe4w&s",
    name: "Palawan Water Monitor",
    scientificName: "Varanus palawanensis",
    status: "Least Concern",
    features: "A semi-aquatic monitor lizard native to Palawan.",
    size: "Length: 1.5 m",
    habitat: "Rivers and streams in Palawan",
    threats: "Habitat loss and hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqq5C7xgBuFQ8YqdXO_ciIBZ8ScdF-WcNjQ&s",
    name: "Panay Monitor Lizard",
    scientificName: "Varanus mabitang",
    status: "Vulnerable",
    features: "A large monitor lizard found in rocky hills and forests.",
    size: "Length: 2 m",
    habitat: "Rocky hills and forests in Panay",
    threats: "Habitat loss and illegal trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhvLyQQDT-wFDBxFLKbwDtTb4o3z6Mee1Yg&s",
    name: "Samar Cobra",
    scientificName: "Naja samarensis",
    status: "Endangered",
    features: "A venomous snake endemic to Samar and nearby islands.",
    size: "Length: 1.5 m",
    habitat: "Forests of Samar and nearby islands",
    threats: "Habitat destruction and snakebite incidents",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPx_6Ri4IzNlgX0H1aCbq5wlz3eKm9_l72Q&s",
    name: "Marbled Water Monitor",
    scientificName: "Varanus marmoratus",
    status: "Least Concern",
    features: "A water-dwelling lizard with distinctive marbled patterns.",
    size: "Length: 1.5 m",
    habitat: "Rivers and forests of the Philippines",
    threats: "Habitat loss and illegal trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznwZTeF0IC6BVf3VK9WUktC1Ah9UeeMS5yg&s",
    name: "Philippine Pit Viper",
    scientificName: "Trimeresurus flavomaculatus",
    status: "Least Concern",
    features: "A venomous snake found in lowland forests and grasslands.",
    size: "Length: 1.2 m",
    habitat: "Lowland forests and grasslands in the Philippines",
    threats: "Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdfD8rit8iSZI2TyVpnuAiGnLeqD1HNGFnw&s",
    name: "Taylor’s Igorot Frog",
    scientificName: "Rana igorota",
    status: "Vulnerable",
    features: "A small frog found in mountain forests.",
    size: "Length: 6 cm",
    habitat: "Mountain forests in the Philippines",
    threats: "Habitat destruction and climate change",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMSN5tbF_bF0-t2qPxTT8D1uFiAUEjmCeEg&s",
    name: "Leyte Rough Gecko",
    scientificName: "Gekko cf. reevesii",
    status: "Endangered",
    features: "A small gecko native to the forests of Leyte.",
    size: "Length: 15 cm",
    habitat: "Forests of Leyte",
    threats: "Habitat loss and collection for the pet trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwdcw0RkNfIvYCs4FhlB8u1ZUFgJr9oCClw&s",
    name: "Philippine Bent-toed Gecko",
    scientificName: "Cyrtodactylus philippinensis",
    status: "Near Threatened",
    features:
      "A gecko found in various forest habitats across the Philippines.",
    size: "Length: 10 cm",
    habitat: "Forests of the Philippines",
    threats: "Habitat loss and illegal trade",
    protection: "Protected under Philippine law",
  },
  {
    image: "https://static.inaturalist.org/photos/29214589/medium.jpg",
    name: "Cebu Small Worm Gecko",
    scientificName: "Brachymeles cebuensis",
    status: "Endangered",
    features: "A small, nocturnal gecko endemic to Cebu.",
    size: "Length: 10 cm",
    habitat: "Forest and grasslands of Cebu",
    threats: "Habitat destruction and collection for trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9z-R_9hDvxqoWhbIABpMu5I4Wj1QiqKTHQ&s",
    name: "Philippine Flying Dragon",
    scientificName: "Draco philippinensis",
    status: "Least Concern",
    features: "A small flying lizard native to the forests of the Philippines.",
    size: "Length: 20 cm",
    habitat: "Forests in the Philippines",
    threats: "Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3UHUieEnsqUxteQlRMYMOnEFco-Yyma1xw&s",
    name: "Mindanao Water Skink",
    scientificName: "Tropidophorus mindanaoensis",
    status: "Least Concern",
    features: "A water skink found in rivers and streams of Mindanao.",
    size: "Length: 20 cm",
    habitat: "Rivers and streams in Mindanao",
    threats: "Habitat degradation",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://lh3.ggpht.com/Lo_uU-6DMETSVgUNY0z_u4IcUCwCBKRHxrV40q2_ABC15OqW_oVqBudhpiP8WT7xrVN2we78Obd8jbbfyCk=s985",
    name: "Negros Forest Dragon",
    scientificName: "Gonocephalus negrosensis",
    status: "Endangered",
    features: "A forest dragon found only in the mountain forests of Negros.",
    size: "Length: 50 cm",
    habitat: "Mountain forests of Negros",
    threats: "Deforestation and illegal hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvCaaegWr2V1f4A4jV_kv83LTYlKdFXqF5g&s",
    name: "Luzon Forest Dragon",
    scientificName: "Gonocephalus luzonensis",
    status: "Vulnerable",
    features: "A dragon species endemic to Luzon’s lowland forests.",
    size: "Length: 60 cm",
    habitat: "Lowland forests of Luzon",
    threats: "Habitat loss and hunting",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://i0.wp.com/gonefroggin.com/wp-content/uploads/2023/04/large.jpeg?fit=1024%2C768&ssl=1",
    name: "Sulu Horned Frog",
    scientificName: "Megophrys suluensis",
    status: "Endangered",
    features:
      "A small frog with distinctive horns, native to the Sulu Archipelago.",
    size: "Length: 10 cm",
    habitat: "Rainforests of Sulu",
    threats: "Habitat destruction",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg7i2HPxwq8yyA-xpXcqfqEz5EksdMZyGkA&s",
    name: "Mount Banahaw Forest Frog",
    scientificName: "Rana banahensis",
    status: "Endangered",
    features: "A forest frog found only in the Mount Banahaw region.",
    size: "Length: 7 cm",
    habitat: "Mount Banahaw forests",
    threats: "Habitat destruction and climate change",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibmLEhAqP1ZLJa1YFNG4cuSO1c-T1Xc7nCQ&s",
    name: "Polillo Island Skink",
    scientificName: "Brachymeles elerae",
    status: "Endangered",
    features: "A skink species found only in the forests of Polillo Island.",
    size: "Length: 20 cm",
    habitat: "Polillo Island's forests",
    threats: "Deforestation and illegal trade",
    protection: "Protected under Philippine law",
  },
  {
    image:
      "https://animalsoftanay.home.blog/wp-content/uploads/2019/05/common-sun-nueva-vizcaya-tony-gerard-3.jpg?w=1024",
    name: "Bicol Ground Skink",
    scientificName: "Brachymeles bicolandia",
    status: "Endangered",
    features:
      "A small skink species found in the Bicol region’s ground habitat.",
    size: "Length: 12 cm",
    habitat: "Ground in the Bicol region",
    threats: "Habitat loss and collection for trade",
    protection: "Protected under Philippine law",
  },
  {
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvenES4M9bbYmaXoEt6vNdP49UmDC6_YhDww&s",
    name: "Luzon Narrow-mouthed Frog",
    scientificName: "Kaloula conjuncta conjuncta",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry forests and moist lowland forests in Luzon, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, stout frog with a narrow mouth, often found in leaf litter in tropical forests.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcYnJzHW2X8E3gTSVhJfhy31nExcQxA_bUA&s",
    name: "Mindoro Tree Frog",
    scientificName: "Leptobrachium mangyanorum",
    status: "Vulnerable",
    size: "Males: 36 mm; Females: 46 mm",
    habitat:
      "Pristine higher elevation forests to disturbed, near coastal regions in Mindoro, Philippines",
    threats:
      "Habitat loss from agriculture and wood collection; tadpole harvesting",
    protection:
      "Present in Mount Calavite Wildlife Sanctuary and Mounts Iglit-Baco National Park",
    features:
      "A tree-dwelling frog with distinct, bright markings on its body, known for its ability to climb trees and shrubs.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZctFvzUIgKAIojXl6bATjT9YigqW9A2biwQ&s",
    name: "Panay Narrow-mouthed Frog",
    scientificName: "Kaloula conjuncta negrosensis",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry forests and moist lowland forests in Panay, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, dark-colored frog often found in moist areas within forests, with a distinctive narrow mouth.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8wzQWr2cL69M--kDrh51Y_xr9zkgfzKytg&s",
    name: "Visayan Warty Frog",
    scientificName: "Kaloula conjuncta negrosensis",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry forests and moist lowland forests in the Visayas region, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A stout, warty frog, typically found in leaf litter in humid environments.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0er2ez8-ho-pc8MwlCOg8ewXdghDAxoEC_Q&s",
    name: "Samar Stream Frog",
    scientificName: "Kaloula conjuncta stickeli",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry forests and moist lowland forests near streams in Samar, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, aquatic frog that inhabits stream edges and moist areas in forested regions.",
  },
  {
    image:
      "https://animalsoftanay.home.blog/wp-content/uploads/2019/08/highcompress-img_3650.jpg",
    name: "Philippine Tree Frog",
    scientificName: "Platymantis corrugatus",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Tropical moist lowland and montane forests throughout the Philippines except Palawan",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, tree-dwelling frog that thrives in moist, tropical forests across the Philippines.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpoeXyfQ5uF0wUgt9jm1VqLaLRk-mQgXepA&s",
    name: "Palawan Horned Frog",
    scientificName: "Megophrys ligayae",
    status: "Endangered",
    size: "Length: approximately 8 cm",
    habitat:
      "Subtropical or tropical moist lowland forests in Palawan, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Protected under Philippine law",
    features:
      "A horned, leaf-litter-dwelling frog known for its camouflaged appearance in its forest habitat.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGDf5kBjAR4s9uNGflL6ec33nPY4W1yMW2w&s",
    name: "Polillo Forest Frog",
    scientificName: "Platymantis polillensis",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry and moist lowland forests in Polillo Island and adjacent areas in Luzon, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, stout frog often found in dry forest areas, with a flattened body to aid in hiding under leaves.",
  },
  {
    image:
      "https://www.researchgate.net/publication/363486480/figure/fig9/AS:11431281084060405@1663002389778/Kaloula-conjuncta-negrosensis-UPLB-MNH-Z-NS-4533-found-in-the-trail-at-Location-4-1492.png",
    name: "Negros Narrow-mouthed Frog",
    scientificName: "Kaloula conjuncta negrosensis",
    status: "Least Concern",
    size: "Length: approximately 5 cm",
    habitat:
      "Subtropical or tropical dry forests and moist lowland forests in Negros, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A small, terrestrial frog with distinctive markings, found in moist lowland areas of Negros.",
  },
  {
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNHauPZ4X3S4_sQT7QsnUOfUjnxKwsvdynQ&s",
    name: "Magellan Birdwing Butterfly",
    scientificName: "Troides magellanus",
    status: "Not Evaluated",
    size: "Wingspan: approximately 18 cm",
    habitat: "Forests in the Philippines and Orchid Island, Taiwan",
    threats: "Habitat loss and collection for trade",
    protection: "Listed under CITES Appendix II",
    features:
      "A large, colorful butterfly species with black and yellow wings, known for its vibrant appearance.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKvc30GOew443e46LEyEdSGDBFNiJbD4x8Q&s",
    name: "Cebu Hawk Moth",
    scientificName: "Cephonodes hylas",
    status: "Not Evaluated",
    size: "Wingspan: approximately 4.5 cm",
    habitat:
      "Various habitats including gardens and forests in Cebu, Philippines",
    threats: "Not well-documented",
    protection: "Not currently under specific protection measures",
    features:
      "A small, active moth with a distinctive hawk-like flight pattern and vibrant green coloration.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgw6WCGj1OlnVyoqavEr1FUPe2U7qzgRmF-A&s",
    name: "Palawan Hornbill Moth",
    scientificName: "Lyssa zampa",
    status: "Not Evaluated",
    size: "Wingspan: up to 16 cm",
    habitat: "Forests in Palawan, Philippines",
    threats: "Not well-documented",
    protection: "Not currently under specific protection measures",
    features:
      "A large, striking moth with distinctive hornbill-like appearance.",
  },
  {
    image:
      "https://static.wixstatic.com/media/8b9765_15e28d6206ec40bf9fb73ce0d3ee8c1c~mv2.jpg/v1/fill/w_590,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8b9765_15e28d6206ec40bf9fb73ce0d3ee8c1c~mv2.jpg",
    name: "Giant Philippine Swallowtail Butterfly",
    scientificName: "Papilio chikae",
    status: "Endangered",
    size: "Wingspan: approximately 12 cm",
    habitat: "Montane forests in Luzon, Philippines",
    threats: "Habitat loss and collection for trade",
    protection: "Protected under Philippine law",
    features: "A large, majestic butterfly known for its vibrant colors.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iiWCaueW-tfNexJqc7ISv03bhPevLGxElg&s",
    name: "Luzon Tree Nymph Butterfly",
    scientificName: "Idea leuconoe",
    status: "Not Evaluated",
    size: "Wingspan: approximately 15 cm",
    habitat: "Forests in Luzon, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features:
      "A delicate butterfly with transparent wings and striking patterns.",
  },
  {
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOnbScLO7zjhj1Z9q34P1UB3bptciToEnXA&s",
    name: "Mindoro Jewel Beetle",
    scientificName: "Chrysochroa mindoroensis",
    status: "Not Evaluated",
    size: "Length: approximately 3 cm",
    habitat: "Forests in Mindoro, Philippines",
    threats: "Habitat loss due to deforestation",
    protection: "Not currently under specific protection measures",
    features: "A brilliantly colored beetle known for its jewel-like shine.",
  },
];

export default animalData;
