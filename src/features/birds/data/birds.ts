import type { Bird } from "../types/bird";

export const birds: readonly Bird[] = [
  {
    id: "pavo-cristatus",
    slug: "indian-peafowl",

    commonName: "Indian Peafowl",
    scientificName: "Pavo cristatus",

    order: "Galliformes",
    family: "Phasianidae",

    description:
      "A large pheasant native to the Indian subcontinent. Males are known for their iridescent blue plumage and elaborate trains displayed during courtship.",

    habitats: ["forest", "scrubland", "agricultural"],
    nativeRange: ["Indian subcontinent"],

    conservationStatus: null,
    image: null,

    references: [
      {
        title: "Indian Peafowl Overview",
        publisher: "Cornell Lab of Ornithology",
        url: "https://www.allaboutbirds.org/guide/Indian_Peafowl/overview",
      },
    ],
  },

  {
    id: "coracias-benghalensis",
    slug: "indian-roller",

    commonName: "Indian Roller",
    scientificName: "Coracias benghalensis",

    order: "Coraciiformes",
    family: "Coraciidae",

    description:
      "A colourful member of the roller family, recognized by its vivid blue plumage and striking wing colours.",

    habitats: ["open-country", "grassland", "agricultural"],
    nativeRange: ["Indian subcontinent"],

    conservationStatus: null,
    image: null,

    references: [
      {
        title: "Indian Roller Species Factsheet",
        publisher: "BirdLife International",
        url: "https://datazone.birdlife.org/species/factsheet/indian-roller-coracias-benghalensis",
      },
    ],
  },

  {
    id: "eudynamys-scolopaceus",
    slug: "asian-koel",

    commonName: "Asian Koel",
    scientificName: "Eudynamys scolopaceus",

    order: "Cuculiformes",
    family: "Cuculidae",

    description:
      "A large cuckoo found across the Indian subcontinent and surrounding Asian regions. It is a brood parasite, and adults feed mainly on fruit.",

    habitats: ["forest", "woodland", "urban", "agricultural"],
    nativeRange: ["Indian subcontinent", "China", "Southeast Asia"],

    conservationStatus: null,
    image: null,

    references: [
      {
        title: "Asian Koel Species Information",
        publisher: "Avibase",
        url: "https://avibase.bsc-eoc.org/species.jsp?avibaseid=6150358815172A12&lang=EN",
      },
    ],
  },

  {
    id: "psittacula-krameri",
    slug: "rose-ringed-parakeet",

    commonName: "Rose-ringed Parakeet",
    scientificName: "Psittacula krameri",

    order: "Psittaciformes",
    family: "Psittaculidae",

    description:
      "A vivid green parakeet with a coral-red bill and long tail. Adult males develop a distinctive black and pink neck ring.",

    habitats: ["woodland", "agricultural", "urban"],
    nativeRange: ["Indian subcontinent", "Africa"],

    conservationStatus: null,
    image: null,

    references: [
      {
        title: "Rose-ringed Parakeet Overview",
        publisher: "Cornell Lab of Ornithology",
        url: "https://www.allaboutbirds.org/guide/Rose-ringed_Parakeet",
      },
    ],
  },

  {
    id: "cinnyris-asiaticus",
    slug: "purple-sunbird",

    commonName: "Purple Sunbird",
    scientificName: "Cinnyris asiaticus",

    order: "Passeriformes",
    family: "Nectariniidae",

    description:
      "A small nectar-feeding bird. Breeding males display purple iridescence, while females have olive upperparts and yellowish underparts.",

    habitats: ["woodland", "scrubland", "urban", "agricultural"],
    nativeRange: ["South Asia", "Southeast Asia", "Arabian Peninsula"],

    conservationStatus: null,
    image: null,

    references: [
      {
        title: "Purple Sunbird Species Information",
        publisher: "Avibase",
        url: "https://avibase.bsc-eoc.org/species.jsp?avibaseid=E9BCF7640544FC7C&lang=EN",
      },
    ],
  },
];
