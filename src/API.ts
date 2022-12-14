/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActivityMediaInput = {
  id?: string | null,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  URL: string,
  activityActivityMediaId?: string | null,
};

export type ModelActivityMediaConditionInput = {
  kind?: ModelStringInput | null,
  copyright?: ModelStringInput | null,
  name?: ModelStringInput | null,
  URL?: ModelStringInput | null,
  and?: Array< ModelActivityMediaConditionInput | null > | null,
  or?: Array< ModelActivityMediaConditionInput | null > | null,
  not?: ModelActivityMediaConditionInput | null,
  activityActivityMediaId?: ModelIDInput | null,
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

export type ActivityMedia = {
  __typename: "ActivityMedia",
  id: string,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  URL: string,
  createdAt: string,
  updatedAt: string,
  activityActivityMediaId?: string | null,
  owner?: string | null,
};

export type UpdateActivityMediaInput = {
  id: string,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  URL?: string | null,
  activityActivityMediaId?: string | null,
};

export type DeleteActivityMediaInput = {
  id: string,
};

export type CreateEventMediaInput = {
  id?: string | null,
  URL: string,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  eventEventMediaId?: string | null,
};

export type ModelEventMediaConditionInput = {
  URL?: ModelStringInput | null,
  kind?: ModelStringInput | null,
  copyright?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelEventMediaConditionInput | null > | null,
  or?: Array< ModelEventMediaConditionInput | null > | null,
  not?: ModelEventMediaConditionInput | null,
  eventEventMediaId?: ModelIDInput | null,
};

export type EventMedia = {
  __typename: "EventMedia",
  id: string,
  URL: string,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  eventEventMediaId?: string | null,
  owner?: string | null,
};

export type UpdateEventMediaInput = {
  id: string,
  URL?: string | null,
  kind?: string | null,
  copyright?: string | null,
  name?: string | null,
  eventEventMediaId?: string | null,
};

export type DeleteEventMediaInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  startingDateTime: string,
  endingDateTime: string,
  location: LocationInput,
  category?: Array< CATEGORY > | null,
  Descriptions: DescriptionInput,
  name: NameInput,
  Links?: LinksInput | null,
  source?: string | null,
  updated_at_Source?: string | null,
  companyEventsId?: string | null,
};

export type LocationInput = {
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: string | null,
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
  ru?: string | null,
  jp?: string | null,
  de?: string | null,
  zh?: string | null,
  es?: string | null,
};

export type NameInput = {
  fi: string,
  en?: string | null,
  sv?: string | null,
  ru?: string | null,
  jp?: string | null,
  de?: string | null,
  zh?: string | null,
  es?: string | null,
};

export type LinksInput = {
  siteURL?: string | null,
  otherURL?: string | null,
};

export type ModelEventConditionInput = {
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  category?: ModelCATEGORYListInput | null,
  source?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  companyEventsId?: ModelIDInput | null,
};

export type ModelCATEGORYListInput = {
  eq?: Array< CATEGORY | null > | null,
  ne?: Array< CATEGORY | null > | null,
  contains?: CATEGORY | null,
  notContains?: CATEGORY | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  startingDateTime: string,
  endingDateTime: string,
  location: Location,
  category?: Array< CATEGORY > | null,
  company?: Company | null,
  eventMedia?: ModelEventMediaConnection | null,
  Descriptions: Description,
  name: Name,
  Links?: Links | null,
  source?: string | null,
  updated_at_Source?: string | null,
  createdAt: string,
  updatedAt: string,
  companyEventsId?: string | null,
  owner?: string | null,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: string | null,
};

export type Company = {
  __typename: "Company",
  businessId: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
  activities?: ModelActivityConnection | null,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  company?: Company | null,
  duration?: string | null,
  durationType?: string | null,
  meantFor?: Array< string | null > | null,
  categories?: Array< CATEGORY > | null,
  price?: Price | null,
  Location: Location,
  activityMedia?: ModelActivityMediaConnection | null,
  Descriptions: Description,
  Names: Name,
  Links?: Links | null,
  source?: string | null,
  updated_at_Source?: string | null,
  OpenDays?:  Array<OpenDays > | null,
  availableDays?: Array< number | null > | null,
  availableMonths?: Array< number | null > | null,
  raiting?: number | null,
  user_raitings_total?: number | null,
  createdAt: string,
  updatedAt: string,
  companyActivitiesId?: string | null,
  owner?: string | null,
};

export type Price = {
  __typename: "Price",
  EurFrom?: number | null,
  EurTo?: number | null,
  pricingtype?: Array< PRICINGTYPE | null > | null,
};

export enum PRICINGTYPE {
  FREE = "FREE",
  CHARGEABLE = "CHARGEABLE",
}


export type ModelActivityMediaConnection = {
  __typename: "ModelActivityMediaConnection",
  items:  Array<ActivityMedia | null >,
  nextToken?: string | null,
};

export type Description = {
  __typename: "Description",
  fi: string,
  en?: string | null,
  sv?: string | null,
  ru?: string | null,
  jp?: string | null,
  de?: string | null,
  zh?: string | null,
  es?: string | null,
};

export type Name = {
  __typename: "Name",
  fi: string,
  en?: string | null,
  sv?: string | null,
  ru?: string | null,
  jp?: string | null,
  de?: string | null,
  zh?: string | null,
  es?: string | null,
};

export type Links = {
  __typename: "Links",
  siteURL?: string | null,
  otherURL?: string | null,
};

export type OpenDays = {
  __typename: "OpenDays",
  day?: number | null,
  timeFrom?: string | null,
  timeTo?: string | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelEventMediaConnection = {
  __typename: "ModelEventMediaConnection",
  items:  Array<EventMedia | null >,
  nextToken?: string | null,
};

export type UpdateEventInput = {
  id: string,
  startingDateTime?: string | null,
  endingDateTime?: string | null,
  location?: LocationInput | null,
  category?: Array< CATEGORY > | null,
  Descriptions?: DescriptionInput | null,
  name?: NameInput | null,
  Links?: LinksInput | null,
  source?: string | null,
  updated_at_Source?: string | null,
  companyEventsId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateCompanyInput = {
  businessId: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
};

export type ModelCompanyConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyInput = {
  businessId: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
};

export type DeleteCompanyInput = {
  businessId: string,
};

export type CreateActivityInput = {
  id?: string | null,
  duration?: string | null,
  durationType?: string | null,
  meantFor?: Array< string | null > | null,
  categories?: Array< CATEGORY > | null,
  price?: PriceInput | null,
  Location: LocationInput,
  Descriptions: DescriptionInput,
  Names: NameInput,
  Links?: LinksInput | null,
  source?: string | null,
  updated_at_Source?: string | null,
  OpenDays?: Array< OpenDaysInput > | null,
  availableDays?: Array< number | null > | null,
  availableMonths?: Array< number | null > | null,
  raiting?: number | null,
  user_raitings_total?: number | null,
  companyActivitiesId?: string | null,
};

export type PriceInput = {
  EurFrom?: number | null,
  EurTo?: number | null,
  pricingtype?: Array< PRICINGTYPE | null > | null,
};

export type OpenDaysInput = {
  day?: number | null,
  timeFrom?: string | null,
  timeTo?: string | null,
};

export type ModelActivityConditionInput = {
  duration?: ModelStringInput | null,
  durationType?: ModelStringInput | null,
  meantFor?: ModelStringInput | null,
  categories?: ModelCATEGORYListInput | null,
  source?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  availableDays?: ModelIntInput | null,
  availableMonths?: ModelIntInput | null,
  raiting?: ModelFloatInput | null,
  user_raitings_total?: ModelIntInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
  companyActivitiesId?: ModelIDInput | null,
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

export type UpdateActivityInput = {
  id: string,
  duration?: string | null,
  durationType?: string | null,
  meantFor?: Array< string | null > | null,
  categories?: Array< CATEGORY > | null,
  price?: PriceInput | null,
  Location?: LocationInput | null,
  Descriptions?: DescriptionInput | null,
  Names?: NameInput | null,
  Links?: LinksInput | null,
  source?: string | null,
  updated_at_Source?: string | null,
  OpenDays?: Array< OpenDaysInput > | null,
  availableDays?: Array< number | null > | null,
  availableMonths?: Array< number | null > | null,
  raiting?: number | null,
  user_raitings_total?: number | null,
  companyActivitiesId?: string | null,
};

export type DeleteActivityInput = {
  id: string,
};

export type ModelActivityMediaFilterInput = {
  id?: ModelIDInput | null,
  kind?: ModelStringInput | null,
  copyright?: ModelStringInput | null,
  name?: ModelStringInput | null,
  URL?: ModelStringInput | null,
  and?: Array< ModelActivityMediaFilterInput | null > | null,
  or?: Array< ModelActivityMediaFilterInput | null > | null,
  not?: ModelActivityMediaFilterInput | null,
  activityActivityMediaId?: ModelIDInput | null,
};

export type ModelEventMediaFilterInput = {
  id?: ModelIDInput | null,
  URL?: ModelStringInput | null,
  kind?: ModelStringInput | null,
  copyright?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelEventMediaFilterInput | null > | null,
  or?: Array< ModelEventMediaFilterInput | null > | null,
  not?: ModelEventMediaFilterInput | null,
  eventEventMediaId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  startingDateTime?: ModelStringInput | null,
  endingDateTime?: ModelStringInput | null,
  category?: ModelCATEGORYListInput | null,
  source?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  companyEventsId?: ModelIDInput | null,
};

export type ModelCompanyFilterInput = {
  businessId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  durationType?: ModelStringInput | null,
  meantFor?: ModelStringInput | null,
  categories?: ModelCATEGORYListInput | null,
  source?: ModelStringInput | null,
  updated_at_Source?: ModelStringInput | null,
  availableDays?: ModelIntInput | null,
  availableMonths?: ModelIntInput | null,
  raiting?: ModelFloatInput | null,
  user_raitings_total?: ModelIntInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
  companyActivitiesId?: ModelIDInput | null,
};

export type ModelSubscriptionActivityMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kind?: ModelSubscriptionStringInput | null,
  copyright?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  URL?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityMediaFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityMediaFilterInput | null > | null,
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

export type ModelSubscriptionEventMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  URL?: ModelSubscriptionStringInput | null,
  kind?: ModelSubscriptionStringInput | null,
  copyright?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventMediaFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventMediaFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startingDateTime?: ModelSubscriptionStringInput | null,
  endingDateTime?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  updated_at_Source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  businessId?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionStringInput | null,
  durationType?: ModelSubscriptionStringInput | null,
  meantFor?: ModelSubscriptionStringInput | null,
  categories?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  updated_at_Source?: ModelSubscriptionStringInput | null,
  availableDays?: ModelSubscriptionIntInput | null,
  availableMonths?: ModelSubscriptionIntInput | null,
  raiting?: ModelSubscriptionFloatInput | null,
  user_raitings_total?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
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

export type CreateActivityMediaMutationVariables = {
  input: CreateActivityMediaInput,
  condition?: ModelActivityMediaConditionInput | null,
};

export type CreateActivityMediaMutation = {
  createActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateActivityMediaMutationVariables = {
  input: UpdateActivityMediaInput,
  condition?: ModelActivityMediaConditionInput | null,
};

export type UpdateActivityMediaMutation = {
  updateActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteActivityMediaMutationVariables = {
  input: DeleteActivityMediaInput,
  condition?: ModelActivityMediaConditionInput | null,
};

export type DeleteActivityMediaMutation = {
  deleteActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateEventMediaMutationVariables = {
  input: CreateEventMediaInput,
  condition?: ModelEventMediaConditionInput | null,
};

export type CreateEventMediaMutation = {
  createEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEventMediaMutationVariables = {
  input: UpdateEventMediaInput,
  condition?: ModelEventMediaConditionInput | null,
};

export type UpdateEventMediaMutation = {
  updateEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEventMediaMutationVariables = {
  input: DeleteEventMediaInput,
  condition?: ModelEventMediaConditionInput | null,
};

export type DeleteEventMediaMutation = {
  deleteEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetActivityMediaQueryVariables = {
  id: string,
};

export type GetActivityMediaQuery = {
  getActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListActivityMediasQueryVariables = {
  filter?: ModelActivityMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivityMediasQuery = {
  listActivityMedias?:  {
    __typename: "ModelActivityMediaConnection",
    items:  Array< {
      __typename: "ActivityMedia",
      id: string,
      kind?: string | null,
      copyright?: string | null,
      name?: string | null,
      URL: string,
      createdAt: string,
      updatedAt: string,
      activityActivityMediaId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventMediaQueryVariables = {
  id: string,
};

export type GetEventMediaQuery = {
  getEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEventMediasQueryVariables = {
  filter?: ModelEventMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventMediasQuery = {
  listEventMedias?:  {
    __typename: "ModelEventMediaConnection",
    items:  Array< {
      __typename: "EventMedia",
      id: string,
      URL: string,
      kind?: string | null,
      copyright?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      eventEventMediaId?: string | null,
      owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
      },
      category?: Array< CATEGORY > | null,
      company?:  {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        phone?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      eventMedia?:  {
        __typename: "ModelEventMediaConnection",
        nextToken?: string | null,
      } | null,
      Descriptions:  {
        __typename: "Description",
        fi: string,
        en?: string | null,
        sv?: string | null,
        ru?: string | null,
        jp?: string | null,
        de?: string | null,
        zh?: string | null,
        es?: string | null,
      },
      name:  {
        __typename: "Name",
        fi: string,
        en?: string | null,
        sv?: string | null,
        ru?: string | null,
        jp?: string | null,
        de?: string | null,
        zh?: string | null,
        es?: string | null,
      },
      Links?:  {
        __typename: "Links",
        siteURL?: string | null,
        otherURL?: string | null,
      } | null,
      source?: string | null,
      updated_at_Source?: string | null,
      createdAt: string,
      updatedAt: string,
      companyEventsId?: string | null,
      owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      company?:  {
        __typename: "Company",
        businessId: string,
        email?: string | null,
        phone?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      duration?: string | null,
      durationType?: string | null,
      meantFor?: Array< string | null > | null,
      categories?: Array< CATEGORY > | null,
      price?:  {
        __typename: "Price",
        EurFrom?: number | null,
        EurTo?: number | null,
        pricingtype?: Array< PRICINGTYPE | null > | null,
      } | null,
      Location:  {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: string | null,
      },
      activityMedia?:  {
        __typename: "ModelActivityMediaConnection",
        nextToken?: string | null,
      } | null,
      Descriptions:  {
        __typename: "Description",
        fi: string,
        en?: string | null,
        sv?: string | null,
        ru?: string | null,
        jp?: string | null,
        de?: string | null,
        zh?: string | null,
        es?: string | null,
      },
      Names:  {
        __typename: "Name",
        fi: string,
        en?: string | null,
        sv?: string | null,
        ru?: string | null,
        jp?: string | null,
        de?: string | null,
        zh?: string | null,
        es?: string | null,
      },
      Links?:  {
        __typename: "Links",
        siteURL?: string | null,
        otherURL?: string | null,
      } | null,
      source?: string | null,
      updated_at_Source?: string | null,
      OpenDays?:  Array< {
        __typename: "OpenDays",
        day?: number | null,
        timeFrom?: string | null,
        timeTo?: string | null,
      } > | null,
      availableDays?: Array< number | null > | null,
      availableMonths?: Array< number | null > | null,
      raiting?: number | null,
      user_raitings_total?: number | null,
      createdAt: string,
      updatedAt: string,
      companyActivitiesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActivityMediaSubscriptionVariables = {
  filter?: ModelSubscriptionActivityMediaFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivityMediaSubscription = {
  onCreateActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivityMediaSubscriptionVariables = {
  filter?: ModelSubscriptionActivityMediaFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivityMediaSubscription = {
  onUpdateActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivityMediaSubscriptionVariables = {
  filter?: ModelSubscriptionActivityMediaFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivityMediaSubscription = {
  onDeleteActivityMedia?:  {
    __typename: "ActivityMedia",
    id: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    URL: string,
    createdAt: string,
    updatedAt: string,
    activityActivityMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateEventMediaSubscriptionVariables = {
  filter?: ModelSubscriptionEventMediaFilterInput | null,
  owner?: string | null,
};

export type OnCreateEventMediaSubscription = {
  onCreateEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEventMediaSubscriptionVariables = {
  filter?: ModelSubscriptionEventMediaFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEventMediaSubscription = {
  onUpdateEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEventMediaSubscriptionVariables = {
  filter?: ModelSubscriptionEventMediaFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEventMediaSubscription = {
  onDeleteEventMedia?:  {
    __typename: "EventMedia",
    id: string,
    URL: string,
    kind?: string | null,
    copyright?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    eventEventMediaId?: string | null,
    owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    },
    category?: Array< CATEGORY > | null,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    eventMedia?:  {
      __typename: "ModelEventMediaConnection",
      items:  Array< {
        __typename: "EventMedia",
        id: string,
        URL: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventEventMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    name:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    createdAt: string,
    updatedAt: string,
    companyEventsId?: string | null,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    phone?: string | null,
    name?: string | null,
    activities?:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        duration?: string | null,
        durationType?: string | null,
        meantFor?: Array< string | null > | null,
        categories?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        availableDays?: Array< number | null > | null,
        availableMonths?: Array< number | null > | null,
        raiting?: number | null,
        user_raitings_total?: number | null,
        createdAt: string,
        updatedAt: string,
        companyActivitiesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        startingDateTime: string,
        endingDateTime: string,
        category?: Array< CATEGORY > | null,
        source?: string | null,
        updated_at_Source?: string | null,
        createdAt: string,
        updatedAt: string,
        companyEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    company?:  {
      __typename: "Company",
      businessId: string,
      email?: string | null,
      phone?: string | null,
      name?: string | null,
      activities?:  {
        __typename: "ModelActivityConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    duration?: string | null,
    durationType?: string | null,
    meantFor?: Array< string | null > | null,
    categories?: Array< CATEGORY > | null,
    price?:  {
      __typename: "Price",
      EurFrom?: number | null,
      EurTo?: number | null,
      pricingtype?: Array< PRICINGTYPE | null > | null,
    } | null,
    Location:  {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: string | null,
    },
    activityMedia?:  {
      __typename: "ModelActivityMediaConnection",
      items:  Array< {
        __typename: "ActivityMedia",
        id: string,
        kind?: string | null,
        copyright?: string | null,
        name?: string | null,
        URL: string,
        createdAt: string,
        updatedAt: string,
        activityActivityMediaId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Descriptions:  {
      __typename: "Description",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Names:  {
      __typename: "Name",
      fi: string,
      en?: string | null,
      sv?: string | null,
      ru?: string | null,
      jp?: string | null,
      de?: string | null,
      zh?: string | null,
      es?: string | null,
    },
    Links?:  {
      __typename: "Links",
      siteURL?: string | null,
      otherURL?: string | null,
    } | null,
    source?: string | null,
    updated_at_Source?: string | null,
    OpenDays?:  Array< {
      __typename: "OpenDays",
      day?: number | null,
      timeFrom?: string | null,
      timeTo?: string | null,
    } > | null,
    availableDays?: Array< number | null > | null,
    availableMonths?: Array< number | null > | null,
    raiting?: number | null,
    user_raitings_total?: number | null,
    createdAt: string,
    updatedAt: string,
    companyActivitiesId?: string | null,
    owner?: string | null,
  } | null,
};
