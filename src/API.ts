/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null;
  type: string;
  startingDateTime: string;
  endingDateTime: string;
  location: LocationInput;
  categories?: Array<CATEGORY> | null;
  mainCategory: CATEGORY;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description: string;
  name: string;
  Links?: LinksInput | null;
  ageRestriction: string;
  isFree?: boolean | null;
  owner?: string | null;
  companyEventsId?: string | null;
};

export type LocationInput = {
  lat: number;
  lon: number;
  streetAddress: string;
  postalCode?: string | null;
  city: string;
};

export enum CATEGORY {
  CONCERT = "CONCERT",
  FESTIVAL = "FESTIVAL",
  EXPO = "EXPO",
  SPORT = "SPORT",
  MOTORSPORTS = "MOTORSPORTS",
  GAMES = "GAMES",
  PARTY = "PARTY",
  FOODDRINKS = "FOODDRINKS",
  TRIP = "TRIP",
  STANDUP = "STANDUP",
  FAMILY = "FAMILY",
  HEALTH = "HEALTH",
  WORKSHOP = "WORKSHOP",
  THEATER = "THEATER",
  MUSEUM = "MUSEUM",
  CULTURE = "CULTURE",
  NATURE = "NATURE",
  OTHER = "OTHER",
}

export type LinksInput = {
  mainURL?: string | null;
  storeURL?: string | null;
  facebookURL?: string | null;
  twitterURL?: string | null;
  instagramURL?: string | null;
  youtubeURL?: string | null;
};

export type ModelEventConditionInput = {
  type?: ModelStringInput | null;
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  description?: ModelStringInput | null;
  name?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
  companyEventsId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelCATEGORYListInput = {
  eq?: Array<CATEGORY | null> | null;
  ne?: Array<CATEGORY | null> | null;
  contains?: CATEGORY | null;
  notContains?: CATEGORY | null;
};

export type ModelCATEGORYInput = {
  eq?: CATEGORY | null;
  ne?: CATEGORY | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Event = {
  __typename: "Event";
  id: string;
  type: string;
  startingDateTime: string;
  endingDateTime: string;
  location: Location;
  categories?: Array<CATEGORY> | null;
  mainCategory: CATEGORY;
  company: Company;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description: string;
  name: string;
  Links?: Links | null;
  ageRestriction: string;
  isFree?: boolean | null;
  Ticket?: ModelTicketConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  companyEventsId?: string | null;
};

export type Location = {
  __typename: "Location";
  lat: number;
  lon: number;
  streetAddress: string;
  postalCode?: string | null;
  city: string;
};

export type Company = {
  __typename: "Company";
  id: string;
  email?: string | null;
  name: string;
  description?: string | null;
  phone?: string | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  mainCategory?: CATEGORY | null;
  links?: Links | null;
  events?: ModelEventConnection | null;
  activities?: ModelActivityConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Links = {
  __typename: "Links";
  mainURL?: string | null;
  storeURL?: string | null;
  facebookURL?: string | null;
  twitterURL?: string | null;
  instagramURL?: string | null;
  youtubeURL?: string | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event | null>;
  nextToken?: string | null;
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection";
  items: Array<Activity | null>;
  nextToken?: string | null;
};

export type Activity = {
  __typename: "Activity";
  id: string;
  name: string;
  description: string;
  company?: Company | null;
  categories?: Array<CATEGORY> | null;
  mainCategory: CATEGORY;
  Location: Location;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: Links | null;
  OpenDays?: Array<OpenDays> | null;
  ageRestriction?: string | null;
  Ticket?: ModelTicketConnection | null;
  isFree?: boolean | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  companyActivitiesId?: string | null;
};

export type OpenDays = {
  __typename: "OpenDays";
  day?: number | null;
  timeFrom?: string | null;
  timeTo?: string | null;
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection";
  items: Array<Ticket | null>;
  nextToken?: string | null;
};

export type Ticket = {
  __typename: "Ticket";
  id: string;
  TicketName?: string | null;
  description?: string | null;
  Ticket?: number | null;
  currency?: string | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type UpdateEventInput = {
  id: string;
  type?: string | null;
  startingDateTime?: string | null;
  endingDateTime?: string | null;
  location?: LocationInput | null;
  categories?: Array<CATEGORY> | null;
  mainCategory?: CATEGORY | null;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description?: string | null;
  name?: string | null;
  Links?: LinksInput | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyEventsId?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateActivityInput = {
  id?: string | null;
  name: string;
  description: string;
  categories?: Array<CATEGORY> | null;
  mainCategory: CATEGORY;
  Location: LocationInput;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: LinksInput | null;
  OpenDays?: Array<OpenDaysInput> | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyActivitiesId?: string | null;
};

export type OpenDaysInput = {
  day?: number | null;
  timeFrom?: string | null;
  timeTo?: string | null;
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
  companyActivitiesId?: ModelIDInput | null;
};

export type UpdateActivityInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  categories?: Array<CATEGORY> | null;
  mainCategory?: CATEGORY | null;
  Location?: LocationInput | null;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: LinksInput | null;
  OpenDays?: Array<OpenDaysInput> | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyActivitiesId?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  email?: string | null;
  name: string;
  description?: string | null;
  phone?: string | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  mainCategory?: CATEGORY | null;
  links?: LinksInput | null;
  owner?: string | null;
};

export type ModelCompanyConditionInput = {
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyInput = {
  id: string;
  email?: string | null;
  name?: string | null;
  description?: string | null;
  phone?: string | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  mainCategory?: CATEGORY | null;
  links?: LinksInput | null;
  owner?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateTicketInput = {
  id?: string | null;
  TicketName?: string | null;
  description?: string | null;
  Ticket?: number | null;
  currency?: string | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  owner?: string | null;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type ModelTicketConditionInput = {
  TicketName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  Ticket?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  startSaleDate?: ModelStringInput | null;
  endSaleDate?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelTicketConditionInput | null> | null;
  or?: Array<ModelTicketConditionInput | null> | null;
  not?: ModelTicketConditionInput | null;
  eventTicketId?: ModelIDInput | null;
  activityTicketId?: ModelIDInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateTicketInput = {
  id: string;
  TicketName?: string | null;
  description?: string | null;
  Ticket?: number | null;
  currency?: string | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  owner?: string | null;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type DeleteTicketInput = {
  id: string;
};

export type CreateOfferInput = {
  id?: string | null;
  name: string;
  description: string;
  type?: OfferType | null;
  creditCost?: number | null;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
};

export enum OfferType {
  DISCOUNT = "DISCOUNT",
  BUNDLE = "BUNDLE",
  GIFT = "GIFT",
}

export type ModelOfferConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  type?: ModelOfferTypeInput | null;
  creditCost?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  discount?: ModelFloatInput | null;
  bundleSize?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelOfferConditionInput | null> | null;
  or?: Array<ModelOfferConditionInput | null> | null;
  not?: ModelOfferConditionInput | null;
};

export type ModelOfferTypeInput = {
  eq?: OfferType | null;
  ne?: OfferType | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Offer = {
  __typename: "Offer";
  id: string;
  name: string;
  description: string;
  type?: OfferType | null;
  creditCost?: number | null;
  company: Company;
  Event?: Event | null;
  Activity?: Activity | null;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOfferInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  type?: OfferType | null;
  creditCost?: number | null;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
};

export type DeleteOfferInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
  email: string;
  birthday?: string | null;
  credits?: number | null;
  owner?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  credits?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  name?: string | null;
  email: string;
  birthday?: string | null;
  credits?: number | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  birthday?: string | null;
  credits?: number | null;
  owner?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  description?: ModelStringInput | null;
  name?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
  companyEventsId?: ModelIDInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
  companyActivitiesId?: ModelIDInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainCategory?: ModelCATEGORYInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null;
  TicketName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  Ticket?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  startSaleDate?: ModelStringInput | null;
  endSaleDate?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelTicketFilterInput | null> | null;
  or?: Array<ModelTicketFilterInput | null> | null;
  not?: ModelTicketFilterInput | null;
  eventTicketId?: ModelIDInput | null;
  activityTicketId?: ModelIDInput | null;
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  type?: ModelOfferTypeInput | null;
  creditCost?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  discount?: ModelFloatInput | null;
  bundleSize?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelOfferFilterInput | null> | null;
  or?: Array<ModelOfferFilterInput | null> | null;
  not?: ModelOfferFilterInput | null;
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection";
  items: Array<Offer | null>;
  nextToken?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  credits?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  type?: ModelSubscriptionStringInput | null;
  startingDateTime?: ModelSubscriptionStringInput | null;
  endingDateTime?: ModelSubscriptionStringInput | null;
  categories?: ModelSubscriptionStringInput | null;
  mainCategory?: ModelSubscriptionStringInput | null;
  mainPicture?: ModelSubscriptionStringInput | null;
  secondaryPictures?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  ageRestriction?: ModelSubscriptionStringInput | null;
  isFree?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  categories?: ModelSubscriptionStringInput | null;
  mainCategory?: ModelSubscriptionStringInput | null;
  mainPicture?: ModelSubscriptionStringInput | null;
  secondaryPictures?: ModelSubscriptionStringInput | null;
  ageRestriction?: ModelSubscriptionStringInput | null;
  isFree?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionActivityFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityFilterInput | null> | null;
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  logo?: ModelSubscriptionStringInput | null;
  categories?: ModelSubscriptionStringInput | null;
  mainCategory?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
};

export type ModelSubscriptionTicketFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  TicketName?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  Ticket?: ModelSubscriptionFloatInput | null;
  currency?: ModelSubscriptionStringInput | null;
  available?: ModelSubscriptionBooleanInput | null;
  startSaleDate?: ModelSubscriptionStringInput | null;
  endSaleDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTicketFilterInput | null> | null;
  or?: Array<ModelSubscriptionTicketFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  creditCost?: ModelSubscriptionIntInput | null;
  price?: ModelSubscriptionFloatInput | null;
  currency?: ModelSubscriptionStringInput | null;
  discount?: ModelSubscriptionFloatInput | null;
  bundleSize?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionOfferFilterInput | null> | null;
  or?: Array<ModelSubscriptionOfferFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  birthday?: ModelSubscriptionStringInput | null;
  credits?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type CreateEventMutationVariables = {
  input: CreateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type CreateEventMutation = {
  createEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type UpdateEventMutation = {
  updateEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput;
  condition?: ModelEventConditionInput | null;
};

export type DeleteEventMutation = {
  deleteEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type CreateActivityMutation = {
  createActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type UpdateActivityMutation = {
  updateActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type DeleteActivityMutation = {
  deleteActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type CreateCompanyMutation = {
  createCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyMutation = {
  updateCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type DeleteCompanyMutation = {
  deleteCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput;
  condition?: ModelTicketConditionInput | null;
};

export type CreateTicketMutation = {
  createTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput;
  condition?: ModelTicketConditionInput | null;
};

export type UpdateTicketMutation = {
  updateTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput;
  condition?: ModelTicketConditionInput | null;
};

export type DeleteTicketMutation = {
  deleteTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput;
  condition?: ModelOfferConditionInput | null;
};

export type CreateOfferMutation = {
  createOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateOfferMutationVariables = {
  input: UpdateOfferInput;
  condition?: ModelOfferConditionInput | null;
};

export type UpdateOfferMutation = {
  updateOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteOfferMutationVariables = {
  input: DeleteOfferInput;
  condition?: ModelOfferConditionInput | null;
};

export type DeleteOfferMutation = {
  deleteOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetEventQueryVariables = {
  id: string;
};

export type GetEventQuery = {
  getEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEventsQuery = {
  listEvents?: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ByStartingDateTimeQueryVariables = {
  type: string;
  startingDateTime?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelEventFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ByStartingDateTimeQuery = {
  byStartingDateTime?: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetActivityQueryVariables = {
  id: string;
};

export type GetActivityQuery = {
  getActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListActivitiesQuery = {
  listActivities?: {
    __typename: "ModelActivityConnection";
    items: Array<{
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCompanyQueryVariables = {
  id: string;
};

export type GetCompanyQuery = {
  getCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompaniesQuery = {
  listCompanies?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetTicketQueryVariables = {
  id: string;
};

export type GetTicketQuery = {
  getTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTicketsQuery = {
  listTickets?: {
    __typename: "ModelTicketConnection";
    items: Array<{
      __typename: "Ticket";
      id: string;
      TicketName?: string | null;
      description?: string | null;
      Ticket?: number | null;
      currency?: string | null;
      available?: boolean | null;
      startSaleDate?: string | null;
      endSaleDate?: string | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      eventTicketId?: string | null;
      activityTicketId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetOfferQueryVariables = {
  id: string;
};

export type GetOfferQuery = {
  getOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOffersQuery = {
  listOffers?: {
    __typename: "ModelOfferConnection";
    items: Array<{
      __typename: "Offer";
      id: string;
      name: string;
      description: string;
      type?: OfferType | null;
      creditCost?: number | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      Event?: {
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null;
      Activity?: {
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null;
      price?: number | null;
      currency?: string | null;
      discount?: number | null;
      bundleSize?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email: string;
      birthday?: string | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
  owner?: string | null;
};

export type OnCreateEventSubscription = {
  onCreateEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
  owner?: string | null;
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
  owner?: string | null;
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?: {
    __typename: "Event";
    id: string;
    type: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: string;
    name: string;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction: string;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
  } | null;
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null;
  owner?: string | null;
};

export type OnCreateActivitySubscription = {
  onCreateActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null;
  owner?: string | null;
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null;
  owner?: string | null;
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?: {
    __typename: "Activity";
    id: string;
    name: string;
    description: string;
    company?: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    categories?: Array<CATEGORY> | null;
    mainCategory: CATEGORY;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress: string;
      postalCode?: string | null;
      city: string;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    OpenDays?: Array<{
      __typename: "OpenDays";
      day?: number | null;
      timeFrom?: string | null;
      timeTo?: string | null;
    }> | null;
    ageRestriction?: string | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        id: string;
        TicketName?: string | null;
        description?: string | null;
        Ticket?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
  } | null;
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
  owner?: string | null;
};

export type OnCreateCompanySubscription = {
  onCreateCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
  owner?: string | null;
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null;
  owner?: string | null;
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?: {
    __typename: "Company";
    id: string;
    email?: string | null;
    name: string;
    description?: string | null;
    phone?: string | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    mainCategory?: CATEGORY | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    events?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        type: string;
        startingDateTime: string;
        endingDateTime: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        description: string;
        name: string;
        ageRestriction: string;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        name: string;
        description: string;
        categories?: Array<CATEGORY> | null;
        mainCategory: CATEGORY;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null;
  owner?: string | null;
};

export type OnCreateTicketSubscription = {
  onCreateTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null;
  owner?: string | null;
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null;
  owner?: string | null;
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?: {
    __typename: "Ticket";
    id: string;
    TicketName?: string | null;
    description?: string | null;
    Ticket?: number | null;
    currency?: string | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
  } | null;
};

export type OnCreateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null;
  owner?: string | null;
};

export type OnCreateOfferSubscription = {
  onCreateOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null;
  owner?: string | null;
};

export type OnUpdateOfferSubscription = {
  onUpdateOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null;
  owner?: string | null;
};

export type OnDeleteOfferSubscription = {
  onDeleteOffer?: {
    __typename: "Offer";
    id: string;
    name: string;
    description: string;
    type?: OfferType | null;
    creditCost?: number | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      name: string;
      description?: string | null;
      phone?: string | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      mainCategory?: CATEGORY | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      events?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      activities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    Event?: {
      __typename: "Event";
      id: string;
      type: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: string;
      name: string;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction: string;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
    } | null;
    Activity?: {
      __typename: "Activity";
      id: string;
      name: string;
      description: string;
      company?: {
        __typename: "Company";
        id: string;
        email?: string | null;
        name: string;
        description?: string | null;
        phone?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        mainCategory?: CATEGORY | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      categories?: Array<CATEGORY> | null;
      mainCategory: CATEGORY;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress: string;
        postalCode?: string | null;
        city: string;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      OpenDays?: Array<{
        __typename: "OpenDays";
        day?: number | null;
        timeFrom?: string | null;
        timeTo?: string | null;
      }> | null;
      ageRestriction?: string | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      isFree?: boolean | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: "User";
    id: string;
    name?: string | null;
    email: string;
    birthday?: string | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
