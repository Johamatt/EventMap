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
    }
  }
`;
export const createImages = /* GraphQL */ `
  mutation CreateImages(
    $input: CreateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    createImages(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
    }
  }
`;
export const updateImages = /* GraphQL */ `
  mutation UpdateImages(
    $input: UpdateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    updateImages(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
    }
  }
`;
export const deleteImages = /* GraphQL */ `
  mutation DeleteImages(
    $input: DeleteImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    deleteImages(input: $input, condition: $condition) {
      id
      url
      lisenceType
      lisenceName
      eventID
      createdAt
      updatedAt
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
      name
      source
      infoUrl
      title
      description
      startingDatetime
      endingDatetime
      images
      category
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
      }
      Images {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
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
      name
      source
      infoUrl
      title
      description
      startingDatetime
      endingDatetime
      images
      category
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
      }
      Images {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
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
      name
      source
      infoUrl
      title
      description
      startingDatetime
      endingDatetime
      images
      category
      Location {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
      }
      Images {
        items {
          id
          url
          lisenceType
          lisenceName
          eventID
          createdAt
          updatedAt
        }
        nextToken
      }
      Category {
        id
        category
        format
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventLocationId
      eventCategoryId
    }
  }
`;
