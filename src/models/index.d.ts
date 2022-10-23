import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum Category {
  MUSIC = "MUSIC",
  FESTIVAL = "FESTIVAL",
  NIGHTLIFE = "NIGHTLIFE",
  SPORTFITNESS = "SPORTFITNESS",
  KIDS = "KIDS",
  HEALTH = "HEALTH",
  TRIP = "TRIP",
  WORKSHOPDIY = "WORKSHOPDIY",
  FOODDRINK = "FOODDRINK",
  BUSINESS = "BUSINESS",
  ACTIVITY = "ACTIVITY",
  CULTURE = "CULTURE",
  OTHER = "OTHER"
}

type OrganizerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Organizer {
  readonly id: string;
  readonly name: string;
  readonly Events?: (Event | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Organizer, OrganizerMetaData>);
  static copyOf(source: Organizer, mutator: (draft: MutableModel<Organizer, OrganizerMetaData>) => MutableModel<Organizer, OrganizerMetaData> | void): Organizer;
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly infoUrl?: string | null;
  readonly intro?: string | null;
  readonly description: string;
  readonly startingDatetime: string;
  readonly endingDatetime: string;
  readonly Location?: Location | null;
  readonly Images?: (Images | null)[] | null;
  readonly Category?: Category | null;
  readonly organizerID: string;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventLocationId?: string | null;
  readonly eventCategoryId?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Location {
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly streetAddess: string;
  readonly postalCode?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Images {
  readonly id: string;
  readonly url: string;
  readonly lisenceType?: number | null;
  readonly lisenceName?: string | null;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Images, ImagesMetaData>);
  static copyOf(source: Images, mutator: (draft: MutableModel<Images, ImagesMetaData>) => MutableModel<Images, ImagesMetaData> | void): Images;
}

export declare class Category {
  readonly id: string;
  readonly category?: Category[] | keyof typeof Category | null;
  readonly format?: string[] | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}