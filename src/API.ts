/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  name?: string | null,
  source?: string | null,
  infoUrl?: string | null,
  title: string,
  description: string,
  startingDay: string,
  endingDay: string,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  infoUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingDay?: ModelStringInput | null,
  endingDay?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
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

export type Event = {
  __typename: "Event",
  id: string,
  name?: string | null,
  source?: string | null,
  infoUrl?: string | null,
  title: string,
  description: string,
  startingDay: string,
  endingDay: string,
  location:  Array<Location | null >,
  images?: ModelImagesConnection | null,
  Category?: ModelCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelImagesConnection = {
  __typename: "ModelImagesConnection",
  items:  Array<Images | null >,
  nextToken?: string | null,
};

export type Images = {
  __typename: "Images",
  id: string,
  url: string,
  license_type?: number | null,
  license_name?: string | null,
  event?: Event | null,
  createdAt: string,
  updatedAt: string,
  eventImagesId?: string | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  event?: Event | null,
  category: Array< string | null >,
  format: Array< string | null >,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  eventCategoryId: string,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  source?: string | null,
  infoUrl?: string | null,
  title?: string | null,
  description?: string | null,
  startingDay?: string | null,
  endingDay?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateLocationInput = {
  lat: number,
  lon: number,
  streetAddress?: string | null,
  postalCode?: number | null,
  id?: string | null,
};

export type ModelLocationConditionInput = {
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  streetAddress?: ModelStringInput | null,
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

export type UpdateLocationInput = {
  lat?: number | null,
  lon?: number | null,
  streetAddress?: string | null,
  postalCode?: number | null,
  id: string,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateImagesInput = {
  id?: string | null,
  url: string,
  license_type?: number | null,
  license_name?: string | null,
  eventImagesId?: string | null,
};

export type ModelImagesConditionInput = {
  url?: ModelStringInput | null,
  license_type?: ModelIntInput | null,
  license_name?: ModelStringInput | null,
  and?: Array< ModelImagesConditionInput | null > | null,
  or?: Array< ModelImagesConditionInput | null > | null,
  not?: ModelImagesConditionInput | null,
  eventImagesId?: ModelIDInput | null,
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

export type UpdateImagesInput = {
  id: string,
  url?: string | null,
  license_type?: number | null,
  license_name?: string | null,
  eventImagesId?: string | null,
};

export type DeleteImagesInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  category: Array< string | null >,
  format: Array< string | null >,
  tags?: Array< string | null > | null,
  eventCategoryId: string,
};

export type ModelCategoryConditionInput = {
  category?: ModelStringInput | null,
  format?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  eventCategoryId?: ModelIDInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  category?: Array< string | null > | null,
  format?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  eventCategoryId: string,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  source?: ModelStringInput | null,
  infoUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startingDay?: ModelStringInput | null,
  endingDay?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelLocationFilterInput = {
  lat?: ModelFloatInput | null,
  lon?: ModelFloatInput | null,
  streetAddress?: ModelStringInput | null,
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

export type ModelImagesFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  license_type?: ModelIntInput | null,
  license_name?: ModelStringInput | null,
  and?: Array< ModelImagesFilterInput | null > | null,
  or?: Array< ModelImagesFilterInput | null > | null,
  not?: ModelImagesFilterInput | null,
  eventImagesId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  category?: ModelStringInput | null,
  format?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  eventCategoryId?: ModelIDInput | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
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
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
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
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
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
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
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
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
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
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
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
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
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
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
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
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
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
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
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
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
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
      license_type?: number | null,
      license_name?: string | null,
      event?:  {
        __typename: "Event",
        id: string,
        name?: string | null,
        source?: string | null,
        infoUrl?: string | null,
        title: string,
        description: string,
        startingDay: string,
        endingDay: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      eventImagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
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
      event?:  {
        __typename: "Event",
        id: string,
        name?: string | null,
        source?: string | null,
        infoUrl?: string | null,
        title: string,
        description: string,
        startingDay: string,
        endingDay: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      category: Array< string | null >,
      format: Array< string | null >,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      eventCategoryId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    source?: string | null,
    infoUrl?: string | null,
    title: string,
    description: string,
    startingDay: string,
    endingDay: string,
    location:  Array< {
      __typename: "Location",
      lat: number,
      lon: number,
      streetAddress?: string | null,
      postalCode?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    images?:  {
      __typename: "ModelImagesConnection",
      items:  Array< {
        __typename: "Images",
        id: string,
        url: string,
        license_type?: number | null,
        license_name?: string | null,
        createdAt: string,
        updatedAt: string,
        eventImagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        category: Array< string | null >,
        format: Array< string | null >,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        eventCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    lat: number,
    lon: number,
    streetAddress?: string | null,
    postalCode?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImagesSubscription = {
  onCreateImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
  } | null,
};

export type OnUpdateImagesSubscription = {
  onUpdateImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
  } | null,
};

export type OnDeleteImagesSubscription = {
  onDeleteImages?:  {
    __typename: "Images",
    id: string,
    url: string,
    license_type?: number | null,
    license_name?: string | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    eventImagesId?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      source?: string | null,
      infoUrl?: string | null,
      title: string,
      description: string,
      startingDay: string,
      endingDay: string,
      location:  Array< {
        __typename: "Location",
        lat: number,
        lon: number,
        streetAddress?: string | null,
        postalCode?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      images?:  {
        __typename: "ModelImagesConnection",
        nextToken?: string | null,
      } | null,
      Category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    category: Array< string | null >,
    format: Array< string | null >,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    eventCategoryId: string,
  } | null,
};
