/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null;
  infoURL?: string | null;
  startingDateTime: string;
  endingDateTime: string;
  source: string;
  location: LocationInput;
  category?: Array<CATEGORY> | null;
  format?: Array<FORMAT | null> | null;
  tags?: Array<string | null> | null;
  company?: CompanyInput | null;
  eventMedia?: Array<EventMediaInput | null> | null;
  Descriptions: DescriptionInput;
  name: NameInput;
  external_URL?: Array<string | null> | null;
};

export type LocationInput = {
  lat: number;
  lon: number;
  streetAddress?: string | null;
  postalCode?: string | null;
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

export enum FORMAT {
  SEMINARTALK = "SEMINARTALK",
  EXPO = "EXPO",
  PERFORMANCELIVESHOW = "PERFORMANCELIVESHOW",
  CLASSTRAINING = "CLASSTRAINING",
  NETWORKINGMEETING = "NETWORKINGMEETING",
  SOCIALGATHERING = "SOCIALGATHERING",
  TOURNAMENTCOMPETITION = "TOURNAMENTCOMPETITION",
  TOURSWALKS = "TOURSWALKS",
  CAMPTRIP = "CAMPTRIP",
  EXHIBITION = "EXHIBITION",
  LUXURY = "LUXURY",
  PARTICIPATION = "PARTICIPATION",
  OTHER = "OTHER",
}

export type CompanyInput = {
  businessId?: string | null;
  email?: string | null;
  phone?: string | null;
  name?: string | null;
};

export type EventMediaInput = {
  URL: string;
  lisenceType: number;
  lisenceName: string;
};

export type DescriptionInput = {
  fi: string;
  en?: string | null;
  sv?: string | null;
  ru?: string | null;
  jp?: string | null;
  de?: string | null;
  zh?: string | null;
  es?: string | null;
};

export type NameInput = {
  fi: string;
  en?: string | null;
  sv?: string | null;
  ru?: string | null;
  jp?: string | null;
  de?: string | null;
  zh?: string | null;
  es?: string | null;
};

export type ModelEventConditionInput = {
  infoURL?: ModelStringInput | null;
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  source?: ModelStringInput | null;
  category?: ModelCATEGORYListInput | null;
  format?: ModelFORMATListInput | null;
  tags?: ModelStringInput | null;
  external_URL?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
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

export type ModelFORMATListInput = {
  eq?: Array<FORMAT | null> | null;
  ne?: Array<FORMAT | null> | null;
  contains?: FORMAT | null;
  notContains?: FORMAT | null;
};

export type Event = {
  __typename: "Event";
  id: string;
  infoURL?: string | null;
  startingDateTime: string;
  endingDateTime: string;
  source: string;
  location: Location;
  category?: Array<CATEGORY> | null;
  format?: Array<FORMAT | null> | null;
  tags?: Array<string | null> | null;
  company?: Company | null;
  eventMedia?: Array<EventMedia | null> | null;
  Descriptions: Description;
  name: Name;
  external_URL?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Location = {
  __typename: "Location";
  lat: number;
  lon: number;
  streetAddress?: string | null;
  postalCode?: string | null;
};

export type Company = {
  __typename: "Company";
  businessId?: string | null;
  email?: string | null;
  phone?: string | null;
  name?: string | null;
};

export type EventMedia = {
  __typename: "EventMedia";
  URL: string;
  lisenceType: number;
  lisenceName: string;
};

export type Description = {
  __typename: "Description";
  fi: string;
  en?: string | null;
  sv?: string | null;
  ru?: string | null;
  jp?: string | null;
  de?: string | null;
  zh?: string | null;
  es?: string | null;
};

export type Name = {
  __typename: "Name";
  fi: string;
  en?: string | null;
  sv?: string | null;
  ru?: string | null;
  jp?: string | null;
  de?: string | null;
  zh?: string | null;
  es?: string | null;
};

export type UpdateEventInput = {
  id: string;
  infoURL?: string | null;
  startingDateTime?: string | null;
  endingDateTime?: string | null;
  source?: string | null;
  location?: LocationInput | null;
  category?: Array<CATEGORY> | null;
  format?: Array<FORMAT | null> | null;
  tags?: Array<string | null> | null;
  company?: CompanyInput | null;
  eventMedia?: Array<EventMediaInput | null> | null;
  Descriptions?: DescriptionInput | null;
  name?: NameInput | null;
  external_URL?: Array<string | null> | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateActivityInput = {
  id?: string | null;
  availableMonths?: Array<string | null> | null;
  openDays?: Array<OpenDaysInput> | null;
  categories?: Array<CATEGORY> | null;
  company?: CompanyInput | null;
  duration?: string | null;
  durationType?: string | null;
  meantFor?: Array<string | null> | null;
  priceEUR_From?: number | null;
  priceEUR_TO?: number | null;
  pricingType?: string | null;
  siteURL?: string | null;
  updated_at_LinkedEvent?: string | null;
  Location: LocationInput;
  activityMedia?: Array<ActivityMediaInput | null> | null;
  descriptions: DescriptionInput;
  names: NameInput;
  external_URL?: string | null;
};

export type OpenDaysInput = {
  day?: string | null;
  open?: boolean | null;
  from?: string | null;
  to?: string | null;
};

export type ActivityMediaInput = {
  kind?: string | null;
  copyright?: string | null;
  name?: string | null;
  URL: string;
};

export type ModelActivityConditionInput = {
  availableMonths?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  duration?: ModelStringInput | null;
  durationType?: ModelStringInput | null;
  meantFor?: ModelStringInput | null;
  priceEUR_From?: ModelFloatInput | null;
  priceEUR_TO?: ModelFloatInput | null;
  pricingType?: ModelStringInput | null;
  siteURL?: ModelStringInput | null;
  updated_at_LinkedEvent?: ModelStringInput | null;
  external_URL?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
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

export type Activity = {
  __typename: "Activity";
  id: string;
  availableMonths?: Array<string | null> | null;
  openDays: Array<OpenDays>; // never null, edit schema again... before =>  openDays?: Array<OpenDays> | null;
  categories?: Array<CATEGORY> | null;
  company?: Company | null;
  duration?: string | null;
  durationType?: string | null;
  meantFor?: Array<string | null> | null;
  priceEUR_From?: number | null;
  priceEUR_TO?: number | null;
  pricingType?: string | null;
  siteURL?: string | null;
  updated_at_LinkedEvent?: string | null;
  Location: Location;
  activityMedia?: Array<ActivityMedia | null> | null;
  descriptions: Description;
  names: Name;
  external_URL?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OpenDays = {
  __typename: "OpenDays";
  day?: string | null;
  open?: boolean | null;
  from?: string | null;
  to?: string | null;
};

export type ActivityMedia = {
  __typename: "ActivityMedia";
  kind?: string | null;
  copyright?: string | null;
  name?: string | null;
  URL: string;
};

export type UpdateActivityInput = {
  id: string;
  availableMonths?: Array<string | null> | null;
  openDays?: Array<OpenDaysInput> | null;
  categories?: Array<CATEGORY> | null;
  company?: CompanyInput | null;
  duration?: string | null;
  durationType?: string | null;
  meantFor?: Array<string | null> | null;
  priceEUR_From?: number | null;
  priceEUR_TO?: number | null;
  pricingType?: string | null;
  siteURL?: string | null;
  updated_at_LinkedEvent?: string | null;
  Location?: LocationInput | null;
  activityMedia?: Array<ActivityMediaInput | null> | null;
  descriptions?: DescriptionInput | null;
  names?: NameInput | null;
  external_URL?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  infoURL?: ModelStringInput | null;
  startingDateTime?: ModelStringInput | null;
  endingDateTime?: ModelStringInput | null;
  source?: ModelStringInput | null;
  category?: ModelCATEGORYListInput | null;
  format?: ModelFORMATListInput | null;
  tags?: ModelStringInput | null;
  external_URL?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
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

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event | null>;
  nextToken?: string | null;
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  availableMonths?: ModelStringInput | null;
  categories?: ModelCATEGORYListInput | null;
  duration?: ModelStringInput | null;
  durationType?: ModelStringInput | null;
  meantFor?: ModelStringInput | null;
  priceEUR_From?: ModelFloatInput | null;
  priceEUR_TO?: ModelFloatInput | null;
  pricingType?: ModelStringInput | null;
  siteURL?: ModelStringInput | null;
  updated_at_LinkedEvent?: ModelStringInput | null;
  external_URL?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection";
  items: Array<Activity | null>;
  nextToken?: string | null;
};

export type CreateEventMutationVariables = {
  input: CreateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type CreateEventMutation = {
  createEvent?: {
    __typename: "Event";
    id: string;
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetEventQueryVariables = {
  id: string;
};

export type GetEventQuery = {
  getEvent?: {
    __typename: "Event";
    id: string;
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
      infoURL?: string | null;
      startingDateTime: string;
      endingDateTime: string;
      source: string;
      location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
      };
      category?: Array<CATEGORY> | null;
      format?: Array<FORMAT | null> | null;
      tags?: Array<string | null> | null;
      company?: {
        __typename: "Company";
        businessId?: string | null;
        email?: string | null;
        phone?: string | null;
        name?: string | null;
      } | null;
      eventMedia?: Array<{
        __typename: "EventMedia";
        URL: string;
        lisenceType: number;
        lisenceName: string;
      } | null> | null;
      Descriptions: {
        __typename: "Description";
        fi: string;
        en?: string | null;
        sv?: string | null;
        ru?: string | null;
        jp?: string | null;
        de?: string | null;
        zh?: string | null;
        es?: string | null;
      };
      name: {
        __typename: "Name";
        fi: string;
        en?: string | null;
        sv?: string | null;
        ru?: string | null;
        jp?: string | null;
        de?: string | null;
        zh?: string | null;
        es?: string | null;
      };
      external_URL?: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
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
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
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
      availableMonths?: Array<string | null> | null;
      openDays?: Array<{
        __typename: "OpenDays";
        day?: string | null;
        open?: boolean | null;
        from?: string | null;
        to?: string | null;
      }> | null;
      categories?: Array<CATEGORY> | null;
      company?: {
        __typename: "Company";
        businessId?: string | null;
        email?: string | null;
        phone?: string | null;
        name?: string | null;
      } | null;
      duration?: string | null;
      durationType?: string | null;
      meantFor?: Array<string | null> | null;
      priceEUR_From?: number | null;
      priceEUR_TO?: number | null;
      pricingType?: string | null;
      siteURL?: string | null;
      updated_at_LinkedEvent?: string | null;
      Location: {
        __typename: "Location";
        lat: number;
        lon: number;
        streetAddress?: string | null;
        postalCode?: string | null;
      };
      activityMedia?: Array<{
        __typename: "ActivityMedia";
        kind?: string | null;
        copyright?: string | null;
        name?: string | null;
        URL: string;
      } | null> | null;
      descriptions: {
        __typename: "Description";
        fi: string;
        en?: string | null;
        sv?: string | null;
        ru?: string | null;
        jp?: string | null;
        de?: string | null;
        zh?: string | null;
        es?: string | null;
      };
      names: {
        __typename: "Name";
        fi: string;
        en?: string | null;
        sv?: string | null;
        ru?: string | null;
        jp?: string | null;
        de?: string | null;
        zh?: string | null;
        es?: string | null;
      };
      external_URL?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateEventSubscription = {
  onCreateEvent?: {
    __typename: "Event";
    id: string;
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?: {
    __typename: "Event";
    id: string;
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?: {
    __typename: "Event";
    id: string;
    infoURL?: string | null;
    startingDateTime: string;
    endingDateTime: string;
    source: string;
    location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    category?: Array<CATEGORY> | null;
    format?: Array<FORMAT | null> | null;
    tags?: Array<string | null> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    eventMedia?: Array<{
      __typename: "EventMedia";
      URL: string;
      lisenceType: number;
      lisenceName: string;
    } | null> | null;
    Descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    name: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateActivitySubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateActivitySubscription = {
  onCreateActivity?: {
    __typename: "Activity";
    id: string;
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateActivitySubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?: {
    __typename: "Activity";
    id: string;
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteActivitySubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?: {
    __typename: "Activity";
    id: string;
    availableMonths?: Array<string | null> | null;
    openDays?: Array<{
      __typename: "OpenDays";
      day?: string | null;
      open?: boolean | null;
      from?: string | null;
      to?: string | null;
    }> | null;
    categories?: Array<CATEGORY> | null;
    company?: {
      __typename: "Company";
      businessId?: string | null;
      email?: string | null;
      phone?: string | null;
      name?: string | null;
    } | null;
    duration?: string | null;
    durationType?: string | null;
    meantFor?: Array<string | null> | null;
    priceEUR_From?: number | null;
    priceEUR_TO?: number | null;
    pricingType?: string | null;
    siteURL?: string | null;
    updated_at_LinkedEvent?: string | null;
    Location: {
      __typename: "Location";
      lat: number;
      lon: number;
      streetAddress?: string | null;
      postalCode?: string | null;
    };
    activityMedia?: Array<{
      __typename: "ActivityMedia";
      kind?: string | null;
      copyright?: string | null;
      name?: string | null;
      URL: string;
    } | null> | null;
    descriptions: {
      __typename: "Description";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    names: {
      __typename: "Name";
      fi: string;
      en?: string | null;
      sv?: string | null;
      ru?: string | null;
      jp?: string | null;
      de?: string | null;
      zh?: string | null;
      es?: string | null;
    };
    external_URL?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
