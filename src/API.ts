/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null;
  startingDateTime: string;
  endingDateTime: string;
  location: LocationInput;
  category?: Array<CATEGORY> | null;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description: DescriptionInput;
  name: NameInput;
  Links?: LinksInput | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyEventsId?: string | null;
  userFavouriteEventsId?: string | null;
};

export type LocationInput = {
  lat: number;
  lon: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
};

export enum CATEGORY {
  MUSIC = "MUSIC",
  FESTIVAL = "FESTIVAL",
  EXPO = "EXPO",
  SPORT = "SPORT",
  MOTORSPORTS = "MOTORSPORTS",
  GAMES = "GAMES",
  NIGHTLIFE = "NIGHTLIFE",
  FOODDRINKS = "FOODDRINKS",
  TECHNOLOGY = "TECHNOLOGY",
  TRIP = "TRIP",
  CONCERT = "CONCERT",
  STANDUP = "STANDUP",
  FAMILY = "FAMILY",
  HEALTH = "HEALTH",
  WORKSHOP = "WORKSHOP",
  EDUCATION = "EDUCATION",
  BUSINESS = "BUSINESS",
  PERFORMANCE = "PERFORMANCE",
  MUSEUM = "MUSEUM",
  NATURE = "NATURE",
  SCIENCE = "SCIENCE",
  BOARDGAMES = "BOARDGAMES",
  VIDEOGAMES = "VIDEOGAMES",
  GAMBLING = "GAMBLING",
  OTHER = "OTHER",
}

export type DescriptionInput = {
  fi?: string | null;
  en?: string | null;
  sv?: string | null;
  jp?: string | null;
  es?: string | null;
};

export type NameInput = {
  fi?: string | null;
  en?: string | null;
  sv?: string | null;
  jp?: string | null;
  es?: string | null;
};

export type LinksInput = {
  mainURL?: string | null;
  secondaryURL?: string | null;
  storeURL?: string | null;
  facebookURL?: string | null;
  twitterURL?: string | null;
  instagramURL?: string | null;
  youtubeURL?: string | null;
};

export type ModelEventConditionInput = {
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  category?: ModelCATEGORYListInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
  companyEventsId?: ModelIDInput | null;
  userFavouriteEventsId?: ModelIDInput | null;
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
  startingDateTime: string;
  endingDateTime: string;
  location: Location;
  category?: Array<CATEGORY> | null;
  company: Company;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description: Description;
  name: Name;
  Links?: Links | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  Ticket?: ModelTicketConnection | null;
  FeedBack?: ModelEventFeedbackConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  companyEventsId?: string | null;
  userFavouriteEventsId?: string | null;
};

export type Location = {
  __typename: "Location";
  lat: number;
  lon: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  email?: string | null;
  description?: Description | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  phone?: string | null;
  name?: string | null;
  links?: Links | null;
  events?: ModelEventConnection | null;
  activities?: ModelActivityConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  userFavouriteCompaniesId?: string | null;
};

export type Description = {
  __typename: "Description";
  fi?: string | null;
  en?: string | null;
  sv?: string | null;
  jp?: string | null;
  es?: string | null;
};

export type Links = {
  __typename: "Links";
  mainURL?: string | null;
  secondaryURL?: string | null;
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
  name: Name;
  description: Description;
  company: Company;
  categories?: Array<CATEGORY> | null;
  Location: Location;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: Links | null;
  OpenDays?: Array<OpenDays> | null;
  ageRestriction?: string | null;
  Ticket?: ModelTicketConnection | null;
  isFree?: boolean | null;
  FeedBack?: ModelActivityFeedbackConnection | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  companyActivitiesId?: string | null;
  userFavouriteActivitiesId?: string | null;
};

export type Name = {
  __typename: "Name";
  fi?: string | null;
  en?: string | null;
  sv?: string | null;
  jp?: string | null;
  es?: string | null;
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
  name?: Name | null;
  price?: number | null;
  currency?: string | null;
  description?: Description | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  Offers?: ModelOfferConnection | null;
  owner?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection";
  items: Array<Offer | null>;
  nextToken?: string | null;
};

export type Offer = {
  __typename: "Offer";
  id: string;
  name?: Name | null;
  description?: Description | null;
  type: OfferType;
  creditCost: number;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  ticketOffersId?: string | null;
};

export enum OfferType {
  DISCOUNT = "DISCOUNT",
  BUNDLE = "BUNDLE",
  GIFT = "GIFT",
}

export type ModelActivityFeedbackConnection = {
  __typename: "ModelActivityFeedbackConnection";
  items: Array<ActivityFeedback | null>;
  nextToken?: string | null;
};

export type ActivityFeedback = {
  __typename: "ActivityFeedback";
  id: string;
  rating: number;
  user: User;
  activity: Activity;
  comment?: string | null;
  createdAt: string;
  owner?: string | null;
  updatedAt: string;
  activityFeedBackId?: string | null;
};

export type User = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePicture?: string | null;
  birthday?: string | null;
  favouriteEvents?: ModelEventConnection | null;
  favouriteActivities?: ModelActivityConnection | null;
  favouriteCompanies?: ModelCompanyConnection | null;
  preferences?: Array<CATEGORY | null> | null;
  credits?: number | null;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
};

export type ModelEventFeedbackConnection = {
  __typename: "ModelEventFeedbackConnection";
  items: Array<EventFeedback | null>;
  nextToken?: string | null;
};

export type EventFeedback = {
  __typename: "EventFeedback";
  id: string;
  rating: number;
  user: User;
  event: Event;
  comment?: string | null;
  createdAt: string;
  owner?: string | null;
  updatedAt: string;
  eventFeedBackId?: string | null;
};

export type UpdateEventInput = {
  id: string;
  startingDateTime?: string | null;
  endingDateTime?: string | null;
  location?: LocationInput | null;
  category?: Array<CATEGORY> | null;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  description?: DescriptionInput | null;
  name?: NameInput | null;
  Links?: LinksInput | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyEventsId?: string | null;
  userFavouriteEventsId?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateTicketInput = {
  name?: NameInput | null;
  price?: number | null;
  currency?: string | null;
  description?: DescriptionInput | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  owner?: string | null;
  id?: string | null;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type ModelTicketConditionInput = {
  price?: ModelFloatInput | null;
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
  name?: NameInput | null;
  price?: number | null;
  currency?: string | null;
  description?: DescriptionInput | null;
  available?: boolean | null;
  startSaleDate?: string | null;
  endSaleDate?: string | null;
  owner?: string | null;
  id: string;
  eventTicketId?: string | null;
  activityTicketId?: string | null;
};

export type DeleteTicketInput = {
  id: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  email?: string | null;
  description?: DescriptionInput | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  phone?: string | null;
  name?: string | null;
  links?: LinksInput | null;
  owner?: string | null;
  userFavouriteCompaniesId?: string | null;
};

export type ModelCompanyConditionInput = {
  email?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  phone?: ModelStringInput | null;
  name?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
  userFavouriteCompaniesId?: ModelIDInput | null;
};

export type UpdateCompanyInput = {
  id: string;
  email?: string | null;
  description?: DescriptionInput | null;
  logo?: string | null;
  categories?: Array<CATEGORY | null> | null;
  phone?: string | null;
  name?: string | null;
  links?: LinksInput | null;
  owner?: string | null;
  userFavouriteCompaniesId?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateOfferInput = {
  id?: string | null;
  name?: NameInput | null;
  description?: DescriptionInput | null;
  type: OfferType;
  creditCost: number;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
  ticketOffersId?: string | null;
};

export type ModelOfferConditionInput = {
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
  ticketOffersId?: ModelIDInput | null;
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

export type UpdateOfferInput = {
  id: string;
  name?: NameInput | null;
  description?: DescriptionInput | null;
  type?: OfferType | null;
  creditCost?: number | null;
  price?: number | null;
  currency?: string | null;
  discount?: number | null;
  bundleSize?: number | null;
  owner?: string | null;
  ticketOffersId?: string | null;
};

export type DeleteOfferInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  email: string;
  profilePicture?: string | null;
  birthday?: string | null;
  preferences?: Array<CATEGORY | null> | null;
  credits?: number | null;
  owner?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePicture?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  preferences?: ModelCATEGORYListInput | null;
  credits?: ModelIntInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  profilePicture?: string | null;
  birthday?: string | null;
  preferences?: Array<CATEGORY | null> | null;
  credits?: number | null;
  owner?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateActivityInput = {
  id?: string | null;
  name: NameInput;
  description: DescriptionInput;
  categories?: Array<CATEGORY> | null;
  Location: LocationInput;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: LinksInput | null;
  OpenDays?: Array<OpenDaysInput> | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyActivitiesId?: string | null;
  userFavouriteActivitiesId?: string | null;
};

export type OpenDaysInput = {
  day?: number | null;
  timeFrom?: string | null;
  timeTo?: string | null;
};

export type ModelActivityConditionInput = {
  categories?: ModelCATEGORYListInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
  companyActivitiesId?: ModelIDInput | null;
  userFavouriteActivitiesId?: ModelIDInput | null;
};

export type UpdateActivityInput = {
  id: string;
  name?: NameInput | null;
  description?: DescriptionInput | null;
  categories?: Array<CATEGORY> | null;
  Location?: LocationInput | null;
  mainPicture?: string | null;
  secondaryPictures?: Array<string | null> | null;
  Links?: LinksInput | null;
  OpenDays?: Array<OpenDaysInput> | null;
  ageRestriction?: string | null;
  isFree?: boolean | null;
  owner?: string | null;
  companyActivitiesId?: string | null;
  userFavouriteActivitiesId?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type CreateActivityFeedbackInput = {
  id?: string | null;
  rating: number;
  comment?: string | null;
  createdAt?: string | null;
  owner?: string | null;
  activityFeedBackId?: string | null;
};

export type ModelActivityFeedbackConditionInput = {
  rating?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityFeedbackConditionInput | null> | null;
  or?: Array<ModelActivityFeedbackConditionInput | null> | null;
  not?: ModelActivityFeedbackConditionInput | null;
  activityFeedBackId?: ModelIDInput | null;
};

export type UpdateActivityFeedbackInput = {
  id: string;
  rating?: number | null;
  comment?: string | null;
  createdAt?: string | null;
  owner?: string | null;
  activityFeedBackId?: string | null;
};

export type DeleteActivityFeedbackInput = {
  id: string;
};

export type CreateEventFeedbackInput = {
  id?: string | null;
  rating: number;
  comment?: string | null;
  createdAt?: string | null;
  owner?: string | null;
  eventFeedBackId?: string | null;
};

export type ModelEventFeedbackConditionInput = {
  rating?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventFeedbackConditionInput | null> | null;
  or?: Array<ModelEventFeedbackConditionInput | null> | null;
  not?: ModelEventFeedbackConditionInput | null;
  eventFeedBackId?: ModelIDInput | null;
};

export type UpdateEventFeedbackInput = {
  id: string;
  rating?: number | null;
  comment?: string | null;
  createdAt?: string | null;
  owner?: string | null;
  eventFeedBackId?: string | null;
};

export type DeleteEventFeedbackInput = {
  id: string;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  category?: ModelCATEGORYListInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
  companyEventsId?: ModelIDInput | null;
  userFavouriteEventsId?: ModelIDInput | null;
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

export type ModelTicketFilterInput = {
  price?: ModelFloatInput | null;
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

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  logo?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  phone?: ModelStringInput | null;
  name?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
  userFavouriteCompaniesId?: ModelIDInput | null;
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null;
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
  ticketOffersId?: ModelIDInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePicture?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  preferences?: ModelCATEGORYListInput | null;
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

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  categories?: ModelCATEGORYListInput | null;
  mainPicture?: ModelStringInput | null;
  secondaryPictures?: ModelStringInput | null;
  ageRestriction?: ModelStringInput | null;
  isFree?: ModelBooleanInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
  companyActivitiesId?: ModelIDInput | null;
  userFavouriteActivitiesId?: ModelIDInput | null;
};

export type ModelActivityFeedbackFilterInput = {
  id?: ModelIDInput | null;
  rating?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelActivityFeedbackFilterInput | null> | null;
  or?: Array<ModelActivityFeedbackFilterInput | null> | null;
  not?: ModelActivityFeedbackFilterInput | null;
  activityFeedBackId?: ModelIDInput | null;
};

export type ModelEventFeedbackFilterInput = {
  id?: ModelIDInput | null;
  rating?: ModelIntInput | null;
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelEventFeedbackFilterInput | null> | null;
  or?: Array<ModelEventFeedbackFilterInput | null> | null;
  not?: ModelEventFeedbackFilterInput | null;
  eventFeedBackId?: ModelIDInput | null;
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  startingDateTime?: ModelSubscriptionStringInput | null;
  endingDateTime?: ModelSubscriptionStringInput | null;
  category?: ModelSubscriptionStringInput | null;
  mainPicture?: ModelSubscriptionStringInput | null;
  secondaryPictures?: ModelSubscriptionStringInput | null;
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

export type ModelSubscriptionTicketFilterInput = {
  price?: ModelSubscriptionFloatInput | null;
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

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  logo?: ModelSubscriptionStringInput | null;
  categories?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
  or?: Array<ModelSubscriptionCompanyFilterInput | null> | null;
};

export type ModelSubscriptionOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null;
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
  profilePicture?: ModelSubscriptionStringInput | null;
  birthday?: ModelSubscriptionStringInput | null;
  preferences?: ModelSubscriptionStringInput | null;
  credits?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  categories?: ModelSubscriptionStringInput | null;
  mainPicture?: ModelSubscriptionStringInput | null;
  secondaryPictures?: ModelSubscriptionStringInput | null;
  ageRestriction?: ModelSubscriptionStringInput | null;
  isFree?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionActivityFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityFilterInput | null> | null;
};

export type ModelSubscriptionActivityFeedbackFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  rating?: ModelSubscriptionIntInput | null;
  comment?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActivityFeedbackFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityFeedbackFilterInput | null> | null;
};

export type ModelSubscriptionEventFeedbackFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  rating?: ModelSubscriptionIntInput | null;
  comment?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEventFeedbackFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventFeedbackFilterInput | null> | null;
};

export type CreateEventMutationVariables = {
  input: CreateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type CreateEventMutation = {
  createEvent?: {
    __typename: "Event";
    id: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
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
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
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
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
  } | null;
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput;
  condition?: ModelTicketConditionInput | null;
};

export type CreateTicketMutation = {
  createTicket?: {
    __typename: "Ticket";
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
  } | null;
};

export type CreateActivityFeedbackMutationVariables = {
  input: CreateActivityFeedbackInput;
  condition?: ModelActivityFeedbackConditionInput | null;
};

export type CreateActivityFeedbackMutation = {
  createActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type UpdateActivityFeedbackMutationVariables = {
  input: UpdateActivityFeedbackInput;
  condition?: ModelActivityFeedbackConditionInput | null;
};

export type UpdateActivityFeedbackMutation = {
  updateActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type DeleteActivityFeedbackMutationVariables = {
  input: DeleteActivityFeedbackInput;
  condition?: ModelActivityFeedbackConditionInput | null;
};

export type DeleteActivityFeedbackMutation = {
  deleteActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type CreateEventFeedbackMutationVariables = {
  input: CreateEventFeedbackInput;
  condition?: ModelEventFeedbackConditionInput | null;
};

export type CreateEventFeedbackMutation = {
  createEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type UpdateEventFeedbackMutationVariables = {
  input: UpdateEventFeedbackInput;
  condition?: ModelEventFeedbackConditionInput | null;
};

export type UpdateEventFeedbackMutation = {
  updateEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type DeleteEventFeedbackMutationVariables = {
  input: DeleteEventFeedbackInput;
  condition?: ModelEventFeedbackConditionInput | null;
};

export type DeleteEventFeedbackMutation = {
  deleteEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type GetEventQueryVariables = {
  id: string;
};

export type GetEventQuery = {
  getEvent?: {
    __typename: "Event";
    id: string;
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
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
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type EventByDatesQueryVariables = {
  startingDateTime: string;
  endingDateTime?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelEventFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type EventByDatesQuery = {
  eventByDates?: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
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
      name?: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      price?: number | null;
      currency?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      available?: boolean | null;
      startSaleDate?: string | null;
      endSaleDate?: string | null;
      Offers?: {
        __typename: "ModelOfferConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      eventTicketId?: string | null;
      activityTicketId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
      name?: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      type: OfferType;
      creditCost: number;
      price?: number | null;
      currency?: string | null;
      discount?: number | null;
      bundleSize?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      ticketOffersId?: string | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
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
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
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
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetActivityFeedbackQueryVariables = {
  id: string;
};

export type GetActivityFeedbackQuery = {
  getActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type ListActivityFeedbacksQueryVariables = {
  filter?: ModelActivityFeedbackFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListActivityFeedbacksQuery = {
  listActivityFeedbacks?: {
    __typename: "ModelActivityFeedbackConnection";
    items: Array<{
      __typename: "ActivityFeedback";
      id: string;
      rating: number;
      user: {
        __typename: "User";
        id: string;
        name: string;
        email: string;
        profilePicture?: string | null;
        birthday?: string | null;
        preferences?: Array<CATEGORY | null> | null;
        credits?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      activity: {
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      };
      comment?: string | null;
      createdAt: string;
      owner?: string | null;
      updatedAt: string;
      activityFeedBackId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetEventFeedbackQueryVariables = {
  id: string;
};

export type GetEventFeedbackQuery = {
  getEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type ListEventFeedbacksQueryVariables = {
  filter?: ModelEventFeedbackFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEventFeedbacksQuery = {
  listEventFeedbacks?: {
    __typename: "ModelEventFeedbackConnection";
    items: Array<{
      __typename: "EventFeedback";
      id: string;
      rating: number;
      user: {
        __typename: "User";
        id: string;
        name: string;
        email: string;
        profilePicture?: string | null;
        birthday?: string | null;
        preferences?: Array<CATEGORY | null> | null;
        credits?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
      };
      event: {
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      };
      comment?: string | null;
      createdAt: string;
      owner?: string | null;
      updatedAt: string;
      eventFeedBackId?: string | null;
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
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
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
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
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
    startingDateTime: string;
    endingDateTime: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    category?: Array<CATEGORY> | null;
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
      storeURL?: string | null;
      facebookURL?: string | null;
      twitterURL?: string | null;
      instagramURL?: string | null;
      youtubeURL?: string | null;
    } | null;
    ageRestriction?: string | null;
    isFree?: boolean | null;
    Ticket?: {
      __typename: "ModelTicketConnection";
      items: Array<{
        __typename: "Ticket";
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    FeedBack?: {
      __typename: "ModelEventFeedbackConnection";
      items: Array<{
        __typename: "EventFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        eventFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyEventsId?: string | null;
    userFavouriteEventsId?: string | null;
  } | null;
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null;
  owner?: string | null;
};

export type OnCreateTicketSubscription = {
  onCreateTicket?: {
    __typename: "Ticket";
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    price?: number | null;
    currency?: string | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    available?: boolean | null;
    startSaleDate?: string | null;
    endSaleDate?: string | null;
    Offers?: {
      __typename: "ModelOfferConnection";
      items: Array<{
        __typename: "Offer";
        id: string;
        type: OfferType;
        creditCost: number;
        price?: number | null;
        currency?: string | null;
        discount?: number | null;
        bundleSize?: number | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        ticketOffersId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    eventTicketId?: string | null;
    activityTicketId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    logo?: string | null;
    categories?: Array<CATEGORY | null> | null;
    phone?: string | null;
    name?: string | null;
    links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    activities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    userFavouriteCompaniesId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name?: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    description?: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    } | null;
    type: OfferType;
    creditCost: number;
    price?: number | null;
    currency?: string | null;
    discount?: number | null;
    bundleSize?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    ticketOffersId?: string | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
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
    name: string;
    email: string;
    profilePicture?: string | null;
    birthday?: string | null;
    favouriteEvents?: {
      __typename: "ModelEventConnection";
      items: Array<{
        __typename: "Event";
        id: string;
        startingDateTime: string;
        endingDateTime: string;
        category?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyEventsId?: string | null;
        userFavouriteEventsId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteActivities?: {
      __typename: "ModelActivityConnection";
      items: Array<{
        __typename: "Activity";
        id: string;
        categories?: Array<CATEGORY> | null;
        mainPicture?: string | null;
        secondaryPictures?: Array<string | null> | null;
        ageRestriction?: string | null;
        isFree?: boolean | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        companyActivitiesId?: string | null;
        userFavouriteActivitiesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    favouriteCompanies?: {
      __typename: "ModelCompanyConnection";
      items: Array<{
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    preferences?: Array<CATEGORY | null> | null;
    credits?: number | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
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
    name: {
      __typename: "Name";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    description: {
      __typename: "Description";
      fi?: string | null;
      en?: string | null;
      sv?: string | null;
      jp?: string | null;
      es?: string | null;
    };
    company: {
      __typename: "Company";
      id: string;
      email?: string | null;
      description?: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      } | null;
      logo?: string | null;
      categories?: Array<CATEGORY | null> | null;
      phone?: string | null;
      name?: string | null;
      links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      userFavouriteCompaniesId?: string | null;
    };
    categories?: Array<CATEGORY> | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
      city?: string | null;
      country?: string | null;
    };
    mainPicture?: string | null;
    secondaryPictures?: Array<string | null> | null;
    Links?: {
      __typename: "Links";
      mainURL?: string | null;
      secondaryURL?: string | null;
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
        price?: number | null;
        currency?: string | null;
        available?: boolean | null;
        startSaleDate?: string | null;
        endSaleDate?: string | null;
        owner?: string | null;
        id: string;
        createdAt: string;
        updatedAt: string;
        eventTicketId?: string | null;
        activityTicketId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    isFree?: boolean | null;
    FeedBack?: {
      __typename: "ModelActivityFeedbackConnection";
      items: Array<{
        __typename: "ActivityFeedback";
        id: string;
        rating: number;
        comment?: string | null;
        createdAt: string;
        owner?: string | null;
        updatedAt: string;
        activityFeedBackId?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    companyActivitiesId?: string | null;
    userFavouriteActivitiesId?: string | null;
  } | null;
};

export type OnCreateActivityFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionActivityFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnCreateActivityFeedbackSubscription = {
  onCreateActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type OnUpdateActivityFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionActivityFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnUpdateActivityFeedbackSubscription = {
  onUpdateActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type OnDeleteActivityFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionActivityFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnDeleteActivityFeedbackSubscription = {
  onDeleteActivityFeedback?: {
    __typename: "ActivityFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    activity: {
      __typename: "Activity";
      id: string;
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      categories?: Array<CATEGORY> | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
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
      FeedBack?: {
        __typename: "ModelActivityFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyActivitiesId?: string | null;
      userFavouriteActivitiesId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    activityFeedBackId?: string | null;
  } | null;
};

export type OnCreateEventFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionEventFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnCreateEventFeedbackSubscription = {
  onCreateEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type OnUpdateEventFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionEventFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnUpdateEventFeedbackSubscription = {
  onUpdateEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};

export type OnDeleteEventFeedbackSubscriptionVariables = {
  filter?: ModelSubscriptionEventFeedbackFilterInput | null;
  owner?: string | null;
};

export type OnDeleteEventFeedbackSubscription = {
  onDeleteEventFeedback?: {
    __typename: "EventFeedback";
    id: string;
    rating: number;
    user: {
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePicture?: string | null;
      birthday?: string | null;
      favouriteEvents?: {
        __typename: "ModelEventConnection";
        nextToken?: string | null;
      } | null;
      favouriteActivities?: {
        __typename: "ModelActivityConnection";
        nextToken?: string | null;
      } | null;
      favouriteCompanies?: {
        __typename: "ModelCompanyConnection";
        nextToken?: string | null;
      } | null;
      preferences?: Array<CATEGORY | null> | null;
      credits?: number | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
    };
    event: {
      __typename: "Event";
      id: string;
      startingDateTime: string;
      endingDateTime: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
        city?: string | null;
        country?: string | null;
      };
      category?: Array<CATEGORY> | null;
      company: {
        __typename: "Company";
        id: string;
        email?: string | null;
        logo?: string | null;
        categories?: Array<CATEGORY | null> | null;
        phone?: string | null;
        name?: string | null;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        userFavouriteCompaniesId?: string | null;
      };
      mainPicture?: string | null;
      secondaryPictures?: Array<string | null> | null;
      description: {
        __typename: "Description";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi?: string | null;
        en?: string | null;
        sv?: string | null;
        jp?: string | null;
        es?: string | null;
      };
      Links?: {
        __typename: "Links";
        mainURL?: string | null;
        secondaryURL?: string | null;
        storeURL?: string | null;
        facebookURL?: string | null;
        twitterURL?: string | null;
        instagramURL?: string | null;
        youtubeURL?: string | null;
      } | null;
      ageRestriction?: string | null;
      isFree?: boolean | null;
      Ticket?: {
        __typename: "ModelTicketConnection";
        nextToken?: string | null;
      } | null;
      FeedBack?: {
        __typename: "ModelEventFeedbackConnection";
        nextToken?: string | null;
      } | null;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      companyEventsId?: string | null;
      userFavouriteEventsId?: string | null;
    };
    comment?: string | null;
    createdAt: string;
    owner?: string | null;
    updatedAt: string;
    eventFeedBackId?: string | null;
  } | null;
};
