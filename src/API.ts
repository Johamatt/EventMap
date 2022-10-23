/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  category?: Array< CATEGORY > | null,
  format?: Array< string > | null,
  tags?: Array< string | null > | null,
};

export enum CATEGORY {
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
  OTHER = "OTHER",
}


export type ModelCategoryConditionInput = {
  category?: ModelCATEGORYListInput | null,
  format?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelCATEGORYListInput = {
  eq?: Array< CATEGORY | null > | null,
  ne?: Array< CATEGORY | null > | null,
  contains?: CATEGORY | null,
  notContains?: CATEGORY | null,
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

export type Category = {
  __typename: "Category",
  id: string,
  category?: Array< CATEGORY > | null,
  format?: Array< string > | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  category?: Array< CATEGORY > | null,
  format?: Array< string > | null,
  tags?: Array< string | null > | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateImagesInput = {
  id?: string | null,
  url: string,
  lisenceType?: number | null,
  lisenceName?: string | null,
  eventID: string,
};

export type ModelImagesConditionInput = {
  url?: ModelStringInput | null,
  lisenceType?: ModelIntInput | null,
  lisenceName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelImagesConditionInput | null > | null,
  or?: Array< ModelImagesConditionInput | null > | null,
  not?: ModelImagesConditionInput | null,
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

export type Images = {
  __typename: "Images",
  id: string,
  url: string,
  lisenceType?: number | null,
  lisenceName?: string | null,
  eventID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateImagesInput = {
  id: string,
  url?: string | null,
  lisenceType?: number | null,
  lisenceName?: string | null,
  eventID?: string | null,
};

export type DeleteImagesInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  lat: number,
  lon: number,
  streetAddess: string,
  postalCode?: number | null,
};

export type ModelLocationConditionInput = {
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  streetAddess?: ModelStringInput | null,
  postalCode?: ModelIntInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
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

export type Location = {
  __typename: "Location",
  id: string,
  lat: number,
  lon: number,
  streetAddess: string,
  postalCode?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocationInput = {
  id: string,
  lat?: number | null,
  lon?: number | null,
  streetAddess?: string | null,
  postalCode?: number | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  source: string,
  infoUrl?: string | null,
  title: string,
  description: string,
  startingDatetime: string,
  endingDatetime: string,
  images?: string | null,
  category: string,
  eventLocationId?: string | null,
  eventCategoryId?: string | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  infoUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingDatetime?: ModelStringInput | null,
  endingDatetime?: ModelStringInput | null,
  images?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  eventLocationId?: ModelIDInput | null,
  eventCategoryId?: ModelIDInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  source: string,
  infoUrl?: string | null,
  title: string,
  description: string,
  startingDatetime: string,
  endingDatetime: string,
  images?: string | null,
  category: string,
  Location?: Location | null,
  Images?: ModelImagesConnection | null,
  Category?: Category | null,
  createdAt: string,
  updatedAt: string,
  eventLocationId?: string | null,
  eventCategoryId?: string | null,
};

export type ModelImagesConnection = {
  __typename: "ModelImagesConnection",
  items:  Array<Images | null >,
  nextToken?: string | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  source?: string | null,
  infoUrl?: string | null,
  title?: string | null,
  description?: string | null,
  startingDatetime?: string | null,
  endingDatetime?: string | null,
  images?: string | null,
  category?: string | null,
  eventLocationId?: string | null,
  eventCategoryId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelCATEGORYListInput | null,
  format?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelImagesFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  lisenceType?: ModelIntInput | null,
  lisenceName?: ModelStringInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelImagesFilterInput | null > | null,
  or?: Array< ModelImagesFilterInput | null > | null,
  not?: ModelImagesFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  streetAddess?: ModelStringInput | null,
  postalCode?: ModelIntInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  infoUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingDatetime?: ModelStringInput | null,
  endingDatetime?: ModelStringInput | null,
  images?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  eventLocationId?: ModelIDInput | null,
  eventCategoryId?: ModelIDInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImagesMutationVariables = {
  input: CreateImagesInput,
  condition?: ModelImagesConditionInput | null,
};

export type CreateImagesMutation = {
  createImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImagesMutationVariables = {
  input: UpdateImagesInput,
  condition?: ModelImagesConditionInput | null,
};

export type UpdateImagesMutation = {
  updateImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImagesMutationVariables = {
  input: DeleteImagesInput,
  condition?: ModelImagesConditionInput | null,
};

export type DeleteImagesMutation = {
  deleteImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
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
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
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
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImagesQueryVariables = {
  id: string,
};

export type GetImagesQuery = {
  getImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages?:  {
    __typename: "ModelImagesConnection",
    items:  Array< {
      __typename: "Images",
      id: string,
      url: string,
      lisenceType?: number | null,
      lisenceName?: string | null,
      eventID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
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
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
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
      name: string,
      source: string,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDatetime: string,
      endingDatetime: string,
      images?: string | null,
      category: string,
      Location?:  {
        __typename: "Location",
        id: string,
        lat: number,
        lon: number,
        streetAddess: string,
        postalCode?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      Images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "Category",
        id: string,
        category?: Array< CATEGORY > | null,
        format?: Array< string > | null,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      eventLocationId?: string | null,
      eventCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    category?: Array< CATEGORY > | null,
    format?: Array< string > | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImagesSubscription = {
  onCreateImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImagesSubscription = {
  onUpdateImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImagesSubscription = {
  onDeleteImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    lisenceType?: number | null,
    lisenceName?: string | null,
    eventID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    lat: number,
    lon: number,
    streetAddess: string,
    postalCode?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    source: string,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDatetime: string,
    endingDatetime: string,
    images?: string | null,
    category: string,
    Location?:  {
      __typename: "Location",
      id: string,
      lat: number,
      lon: number,
      streetAddess: string,
      postalCode?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    Images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        lisenceType?: number | null,
        lisenceName?: string | null,
        eventID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "Category",
      id: string,
      category?: Array< CATEGORY > | null,
      format?: Array< string > | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventLocationId?: string | null,
    eventCategoryId?: string | null,
  } | null,
};
