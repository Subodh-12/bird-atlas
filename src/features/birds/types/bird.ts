/**
 * Supported habitat categories for Bird Atlas.
 */
export type BirdHabitat =
  | "forest"
  | "woodland"
  | "grassland"
  | "open-country"
  | "wetland"
  | "coastal"
  | "scrubland"
  | "agricultural"
  | "urban"
  | "desert"
  | "montane";

/**
 * IUCN Red List category codes.
 */
export type IucnCategory =
  "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX" | "DD" | "NE";

/**
 * A conservation assessment must retain
 * its source and assessment year.
 */
export interface ConservationAssessment {
  category: IucnCategory;
  assessedYear: number;
  sourceUrl: string;
}

/**
 * Metadata for an appropriately licensed
 * bird photograph or illustration.
 */
export interface BirdImage {
  src: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
  license: string;
}

/**
 * Scientific or educational source
 * associated with a bird record.
 */
export interface BirdReference {
  title: string;
  publisher: string;
  url: string;
}

/**
 * Canonical Bird Atlas species record.
 */
export interface Bird {
  id: string;
  slug: string;

  commonName: string;
  scientificName: string;

  order: string;
  family: string;

  description: string;

  habitats: BirdHabitat[];
  nativeRange: string[];

  conservationStatus: ConservationAssessment | null;

  image: BirdImage | null;

  references: BirdReference[];
}
