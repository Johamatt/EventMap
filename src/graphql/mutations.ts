/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      category
      format
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      category
      format
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      category
      format
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEventImage = /* GraphQL */ `
  mutation CreateEventImage(
    $input: CreateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    createEventImage(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateEventImage = /* GraphQL */ `
  mutation UpdateEventImage(
    $input: UpdateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    updateEventImage(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteEventImage = /* GraphQL */ `
  mutation DeleteEventImage(
    $input: DeleteEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    deleteEventImage(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      lat
      lon
      streetAddess
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      lat
      lon
      streetAddess
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      lat
      lon
      streetAddess
      postalCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      infoUrl
      intro
      description
      startingDatetime
      endingDatetime
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
        owner
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
        owner
      }
      source
      EventImage {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
      owner
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      infoUrl
      intro
      description
      startingDatetime
      endingDatetime
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
        owner
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
        owner
      }
      source
      EventImage {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
      owner
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      infoUrl
      intro
      description
      startingDatetime
      endingDatetime
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
        owner
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
        owner
      }
      source
      EventImage {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
      owner
    }
  }
`;
