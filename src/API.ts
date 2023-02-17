/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  startingDateTime: string,
  endingDateTime: string,
  location: LocationInput,
  category?: Array< CATEGORY > | null,
  MainPicture?: string | null,
  eventPictures?: Array< string | null > | null,
  Descriptions: DescriptionInput,
  name: NameInput,
  Links?: LinksInput | null,
  source?: string | null,
  website?: string | null,
  updated_at_Source?: string | null,
  ageRestriction?: string | null,
  isFree?: boolean | null,
  owner?: string | null,
  companyEventsId?: string | null,
  userFavouriteEventsId?: string | null,
};

export type LocationInput = {
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: string | null,
  city?: string | null,
  country?: string | null,
};

export enum CATEGORY {
  MUSIC = "MUSIC",
  FESTIVAL = "FESTIVAL",
  SPORT = "SPORT",
  PARTIESNIGHTLIFE = "PARTIESNIGHTLIFE",
  KIDS = "KIDS",
  FAMILY = "FAMILY",
  HEALTH = "HEALTH",
  TRIP = "TRIP",
  FOOD = "FOOD",
  WORKSHOP = "WORKSHOP",
  COOKING = "COOKING",
  BUSINESS = "BUSINESS",
  ACTIVITY = "ACTIVITY",
  CULTURE = "CULTURE",
  COMEDY = "COMEDY",
  CONCERT = "CONCERT",
  PERFORMANCE = "PERFORMANCE",
  FINEARTS = "FINEARTS",
  THEATRE = "THEATRE",
  LITERATURE = "LITERATURE",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  TECHNOLOGY = "TECHNOLOGY",
  MARKET = "MARKET",
  SIGHTSEEING = "SIGHTSEEING",
  MUSEUM = "MUSEUM",
  OTHER = "OTHER",
  ACCOMMODATION = "ACCOMMODATION",
  NATURE = "NATURE",
  MOTORSPORTS = "MOTORSPORTS",
  LUXURY = "LUXURY",
  GUIDEDSERVICE = "GUIDEDSERVICE",
  SAUNA = "SAUNA",
  ANIMALS = "ANIMALS",
  EDUCATION = "EDUCATION",
  SCIENCE = "SCIENCE",
  FASHION = "FASHION",
  TOUR = "TOUR",
  DANCE = "DANCE",
  BOARDGAMES = "BOARDGAMES",
  VIDEOGAMES = "VIDEOGAMES",
  GAMBLING = "GAMBLING",
}


export type DescriptionInput = {
  fi: string,
  en?: string | null,
  sv?: string | null,
  jp?: string | null,
  es?: string | null,
  de?: string | null,
};

export type NameInput = {
  fi: string,
  en?: string | null,
  sv?: string | null,
  jp?: string | null,
  es?: string | null,
  de?: string | null,
};

export type LinksInput = {
  eventURL?: string | null,
  otherURL?: string | null,
  storeURL?: string | null,
  facebookURL?: string | null,
  twitterURL?: string | null,
  instagramURL?: string | null,
  youtubeURL?: string | null,
};

export type ModelEventConditionInput = {
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  category?: ModelCATEGORYListInput | null,
  MainPicture?: ModelStringInput | null,
  eventPictures?: ModelStringInput | null,
  source?: ModelStringInput | null,
  website?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  ageRestriction?: ModelStringInput | null,
  isFree?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  companyEventsId?: ModelIDInput | null,
  userFavouriteEventsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelCATEGORYListInput = {
  eq?: Array< CATEGORY | null > | null,
  ne?: Array< CATEGORY | null > | null,
  contains?: CATEGORY | null,
  notContains?: CATEGORY | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  startingDateTime: string,
  endingDateTime: string,
  location: Location,
  category?: Array< CATEGORY > | null,
  company?: Company | null,
  MainPicture?: string | null,
  eventPictures?: Array< string | null > | null,
  Descriptions: Description,
  name: Name,
  Links?: Links | null,
  source?: string | null,
  website?: string | null,
  updated_at_Source?: string | null,
  ageRestriction?: string | null,
  isFree?: boolean | null,
  Ticket?: ModelTicketConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  companyEventsId?: string | null,
  userFavouriteEventsId?: string | null,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: string | null,
  city?: string | null,
  country?: string | null,
};

export type Company = {
  __typename: "Company",
  businessId: string,
  email?: string | null,
  industry?: string | null,
  phone?: string | null,
  name?: string | null,
  website?: string | null,
  events?: ModelEventConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userFavouriteCompaniesId?: string | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Description = {
  __typename: "Description",
  fi: string,
  en?: string | null,
  sv?: string | null,
  jp?: string | null,
  es?: string | null,
  de?: string | null,
};

export type Name = {
  __typename: "Name",
  fi: string,
  en?: string | null,
  sv?: string | null,
  jp?: string | null,
  es?: string | null,
  de?: string | null,
};

export type Links = {
  __typename: "Links",
  eventURL?: string | null,
  otherURL?: string | null,
  storeURL?: string | null,
  facebookURL?: string | null,
  twitterURL?: string | null,
  instagramURL?: string | null,
  youtubeURL?: string | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type Ticket = {
  __typename: "Ticket",
  name?: string | null,
  price?: number | null,
  currency?: string | null,
  description?: string | null,
  available?: string | null,
  startSaleDate?: string | null,
  endSaleDate?: string | null,
  type?: string | null,
  Offer?: ModelOfferConnection | null,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  eventTicketId?: string | null,
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection",
  items:  Array<Offer | null >,
  nextToken?: string | null,
};

export type Offer = {
  __typename: "Offer",
  id: string,
  name: string,
  description?: string | null,
  type: OfferType,
  coinCost: number,
  value?: number | null,
  discount?: number | null,
  bundleSize?: number | null,
  gift?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  ticketOfferId?: string | null,
};

export enum OfferType {
  DISCOUNT = "DISCOUNT",
  BUNDLE = "BUNDLE",
  GIFT = "GIFT",
}


export type UpdateEventInput = {
  id: string,
  startingDateTime?: string | null,
  endingDateTime?: string | null,
  location?: LocationInput | null,
  category?: Array< CATEGORY > | null,
  MainPicture?: string | null,
  eventPictures?: Array< string | null > | null,
  Descriptions?: DescriptionInput | null,
  name?: NameInput | null,
  Links?: LinksInput | null,
  source?: string | null,
  website?: string | null,
  updated_at_Source?: string | null,
  ageRestriction?: string | null,
  isFree?: boolean | null,
  owner?: string | null,
  companyEventsId?: string | null,
  userFavouriteEventsId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateTicketInput = {
  name?: string | null,
  price?: number | null,
  currency?: string | null,
  description?: string | null,
  available?: string | null,
  startSaleDate?: string | null,
  endSaleDate?: string | null,
  type?: string | null,
  owner?: string | null,
  id?: string | null,
  eventTicketId?: string | null,
};

export type ModelTicketConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelStringInput | null,
  startSaleDate?: ModelStringInput | null,
  endSaleDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
  eventTicketId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTicketInput = {
  name?: string | null,
  price?: number | null,
  currency?: string | null,
  description?: string | null,
  available?: string | null,
  startSaleDate?: string | null,
  endSaleDate?: string | null,
  type?: string | null,
  owner?: string | null,
  id: string,
  eventTicketId?: string | null,
};

export type DeleteTicketInput = {
  id: string,
};

export type CreateCompanyInput = {
  businessId: string,
  email?: string | null,
  industry?: string | null,
  phone?: string | null,
  name?: string | null,
  website?: string | null,
  owner?: string | null,
  userFavouriteCompaniesId?: string | null,
};

export type ModelCompanyConditionInput = {
  email?: ModelStringInput | null,
  industry?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
  userFavouriteCompaniesId?: ModelIDInput | null,
};

export type UpdateCompanyInput = {
  businessId: string,
  email?: string | null,
  industry?: string | null,
  phone?: string | null,
  name?: string | null,
  website?: string | null,
  owner?: string | null,
  userFavouriteCompaniesId?: string | null,
};

export type DeleteCompanyInput = {
  businessId: string,
};

export type CreateOfferInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  type: OfferType,
  coinCost: number,
  value?: number | null,
  discount?: number | null,
  bundleSize?: number | null,
  gift?: string | null,
  owner?: string | null,
  ticketOfferId?: string | null,
};

export type ModelOfferConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelOfferTypeInput | null,
  coinCost?: ModelIntInput | null,
  value?: ModelFloatInput | null,
  discount?: ModelFloatInput | null,
  bundleSize?: ModelIntInput | null,
  gift?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelOfferConditionInput | null > | null,
  or?: Array< ModelOfferConditionInput | null > | null,
  not?: ModelOfferConditionInput | null,
  ticketOfferId?: ModelIDInput | null,
};

export type ModelOfferTypeInput = {
  eq?: OfferType | null,
  ne?: OfferType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOfferInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  type?: OfferType | null,
  coinCost?: number | null,
  value?: number | null,
  discount?: number | null,
  bundleSize?: number | null,
  gift?: string | null,
  owner?: string | null,
  ticketOfferId?: string | null,
};

export type DeleteOfferInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  profilePicture?: string | null,
  birthday?: string | null,
  tokens?: number | null,
  owner?: string | null,
  userFriendsId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  tokens?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userFriendsId?: ModelIDInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  profilePicture?: string | null,
  birthday?: string | null,
  friends?: ModelUserConnection | null,
  favouriteEvents?: ModelEventConnection | null,
  favouriteCompanies?: ModelCompanyConnection | null,
  tokens?: number | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  userFriendsId?: string | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  birthday?: string | null,
  tokens?: number | null,
  owner?: string | null,
  userFriendsId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelOfferTypeInput | null,
  coinCost?: ModelIntInput | null,
  value?: ModelFloatInput | null,
  discount?: ModelFloatInput | null,
  bundleSize?: ModelIntInput | null,
  gift?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelOfferFilterInput | null > | null,
  or?: Array< ModelOfferFilterInput | null > | null,
  not?: ModelOfferFilterInput | null,
  ticketOfferId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  tokens?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userFriendsId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  category?: ModelCATEGORYListInput | null,
  MainPicture?: ModelStringInput | null,
  eventPictures?: ModelStringInput | null,
  source?: ModelStringInput | null,
  website?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  ageRestriction?: ModelStringInput | null,
  isFree?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  companyEventsId?: ModelIDInput | null,
  userFavouriteEventsId?: ModelIDInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTicketFilterInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelStringInput | null,
  startSaleDate?: ModelStringInput | null,
  endSaleDate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
  eventTicketId?: ModelIDInput | null,
};

export type ModelCompanyFilterInput = {
  businessId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  industry?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  website?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
  userFavouriteCompaniesId?: ModelIDInput | null,
};

export type ModelSubscriptionOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  coinCost?: ModelSubscriptionIntInput | null,
  value?: ModelSubscriptionFloatInput | null,
  discount?: ModelSubscriptionFloatInput | null,
  bundleSize?: ModelSubscriptionIntInput | null,
  gift?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOfferFilterInput | null > | null,
  or?: Array< ModelSubscriptionOfferFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  tokens?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startingDateTime?: ModelSubscriptionStringInput | null,
  endingDateTime?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  MainPicture?: ModelSubscriptionStringInput | null,
  eventPictures?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  updated_at_Source?: ModelSubscriptionStringInput | null,
  ageRestriction?: ModelSubscriptionStringInput | null,
  isFree?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTicketFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  available?: ModelSubscriptionStringInput | null,
  startSaleDate?: ModelSubscriptionStringInput | null,
  endSaleDate?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketFilterInput | null > | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  businessId?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  industry?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type CreateOfferMutation = {
  createOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type UpdateOfferMutationVariables = {
  input: UpdateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type UpdateOfferMutation = {
  updateOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type DeleteOfferMutationVariables = {
  input: DeleteOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type DeleteOfferMutation = {
  deleteOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type GetOfferQueryVariables = {
  id: string,
};

export type GetOfferQuery = {
  getOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type ListOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOffersQuery = {
  listOffers?:  {
    __typename: "ModelOfferConnection",
    items:  Array< {
      __typename: "Offer",
      id: string,
      name: string,
      description?: string | null,
      type: OfferType,
      coinCost: number,
      value?: number | null,
      discount?: number | null,
      bundleSize?: number | null,
      gift?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      ticketOfferId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      profilePicture?: string | null,
      birthday?: string | null,
      friends?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      favouriteEvents?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      favouriteCompanies?:  {
        __typename: "ModelCompanyConnection",
        nextToken?: string | null,
      } | null,
      tokens?: number | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFriendsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      startingDateTime: string,
      endingDateTime: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: string | null,
        city?: string | null,
        country?: string | null,
      },
      category?: Array< CATEGORY > | null,
      company?:  {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null,
      MainPicture?: string | null,
      eventPictures?: Array< string | null > | null,
      Descriptions:  {
        __typename: "Description",
        fi: string,
        en?: string | null,
        sv?: string | null,
        jp?: string | null,
        es?: string | null,
        de?: string | null,
      },
      name:  {
        __typename: "Name",
        fi: string,
        en?: string | null,
        sv?: string | null,
        jp?: string | null,
        es?: string | null,
        de?: string | null,
      },
      Links?:  {
        __typename: "Links",
        eventURL?: string | null,
        otherURL?: string | null,
        storeURL?: string | null,
        facebookURL?: string | null,
        twitterURL?: string | null,
        instagramURL?: string | null,
        youtubeURL?: string | null,
      } | null,
      source?: string | null,
      website?: string | null,
      updated_at_Source?: string | null,
      ageRestriction?: string | null,
      isFree?: boolean | null,
      Ticket?:  {
        __typename: "ModelTicketConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      companyEventsId?: string | null,
      userFavouriteEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventByDatesQueryVariables = {
  startingDateTime: string,
  endingDateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventByDatesQuery = {
  eventByDates?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      startingDateTime: string,
      endingDateTime: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: string | null,
        city?: string | null,
        country?: string | null,
      },
      category?: Array< CATEGORY > | null,
      company?:  {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null,
      MainPicture?: string | null,
      eventPictures?: Array< string | null > | null,
      Descriptions:  {
        __typename: "Description",
        fi: string,
        en?: string | null,
        sv?: string | null,
        jp?: string | null,
        es?: string | null,
        de?: string | null,
      },
      name:  {
        __typename: "Name",
        fi: string,
        en?: string | null,
        sv?: string | null,
        jp?: string | null,
        es?: string | null,
        de?: string | null,
      },
      Links?:  {
        __typename: "Links",
        eventURL?: string | null,
        otherURL?: string | null,
        storeURL?: string | null,
        facebookURL?: string | null,
        twitterURL?: string | null,
        instagramURL?: string | null,
        youtubeURL?: string | null,
      } | null,
      source?: string | null,
      website?: string | null,
      updated_at_Source?: string | null,
      ageRestriction?: string | null,
      isFree?: boolean | null,
      Ticket?:  {
        __typename: "ModelTicketConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      companyEventsId?: string | null,
      userFavouriteEventsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      name?: string | null,
      price?: number | null,
      currency?: string | null,
      description?: string | null,
      available?: string | null,
      startSaleDate?: string | null,
      endSaleDate?: string | null,
      type?: string | null,
      Offer?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      eventTicketId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  businessId: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type ListCompaniesQueryVariables = {
  businessId?: string | null,
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnCreateOfferSubscription = {
  onCreateOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type OnUpdateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOfferSubscription = {
  onUpdateOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type OnDeleteOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOfferSubscription = {
  onDeleteOffer?:  {
    __typename: "Offer",
    id: string,
    name: string,
    description?: string | null,
    type: OfferType,
    coinCost: number,
    value?: number | null,
    discount?: number | null,
    bundleSize?: number | null,
    gift?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    ticketOfferId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    profilePicture?: string | null,
    birthday?: string | null,
    friends?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        profilePicture?: string | null,
        birthday?: string | null,
        tokens?: number | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFriendsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteEvents?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favouriteCompanies?:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        industry?: string | null,
        phone?: string | null,
        name?: string | null,
        website?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        userFavouriteCompaniesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    tokens?: number | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFriendsId?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    startingDateTime: string,
    endingDateTime: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
      city?: string | null,
      country?: string | null,
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      industry?: string | null,
      phone?: string | null,
      name?: string | null,
      website?: string | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      userFavouriteCompaniesId?: string | null,
    } | null,
    MainPicture?: string | null,
    eventPictures?: Array< string | null > | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      jp?: string | null,
      es?: string | null,
      de?: string | null,
    },
    Links?:  {
      __typename: "Links",
      eventURL?: string | null,
      otherURL?: string | null,
      storeURL?: string | null,
      facebookURL?: string | null,
      twitterURL?: string | null,
      instagramURL?: string | null,
      youtubeURL?: string | null,
    } | null,
    source?: string | null,
    website?: string | null,
    updated_at_Source?: string | null,
    ageRestriction?: string | null,
    isFree?: boolean | null,
    Ticket?:  {
      __typename: "ModelTicketConnection",
      items:  Array< {
        __typename: "Ticket",
        name?: string | null,
        price?: number | null,
        currency?: string | null,
        description?: string | null,
        available?: string | null,
        startSaleDate?: string | null,
        endSaleDate?: string | null,
        type?: string | null,
        owner?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        eventTicketId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    userFavouriteEventsId?: string | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    name?: string | null,
    price?: number | null,
    currency?: string | null,
    description?: string | null,
    available?: string | null,
    startSaleDate?: string | null,
    endSaleDate?: string | null,
    type?: string | null,
    Offer?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        name: string,
        description?: string | null,
        type: OfferType,
        coinCost: number,
        value?: number | null,
        discount?: number | null,
        bundleSize?: number | null,
        gift?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        ticketOfferId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    eventTicketId?: string | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
  owner?: string | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    businessId: string,
    email?: string | null,
    industry?: string | null,
    phone?: string | null,
    name?: string | null,
    website?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        MainPicture?: string | null,
        eventPictures?: Array< string | null > | null,
        source?: string | null,
        website?: string | null,
        updated_at_Source?: string | null,
        ageRestriction?: string | null,
        isFree?: boolean | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        userFavouriteEventsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    userFavouriteCompaniesId?: string | null,
  } | null,
};
