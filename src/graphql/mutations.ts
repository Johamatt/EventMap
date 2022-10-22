/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      startingDay
      endingDay
      location {
        lat
        lon
        streetAddress
        postalCode
        id
        createdAt
        updatedAt
      }
      images {
        items {
          id
          url
          license_type
          license_name
          createdAt
          updatedAt
          eventImagesId
        }
        nextToken
      }
      Category {
        items {
          id
          category
          format
          tags
          createdAt
          updatedAt
          eventCategoryId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      startingDay
      endingDay
      location {
        lat
        lon
        streetAddress
        postalCode
        id
        createdAt
        updatedAt
      }
      images {
        items {
          id
          url
          license_type
          license_name
          createdAt
          updatedAt
          eventImagesId
        }
        nextToken
      }
      Category {
        items {
          id
          category
          format
          tags
          createdAt
          updatedAt
          eventCategoryId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      startingDay
      endingDay
      location {
        lat
        lon
        streetAddress
        postalCode
        id
        createdAt
        updatedAt
      }
      images {
        items {
          id
          url
          license_type
          license_name
          createdAt
          updatedAt
          eventImagesId
        }
        nextToken
      }
      Category {
        items {
          id
          category
          format
          tags
          createdAt
          updatedAt
          eventCategoryId
        }
        nextToken
      }
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
      lat
      lon
      streetAddress
      postalCode
      id
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
      lat
      lon
      streetAddress
      postalCode
      id
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
      lat
      lon
      streetAddress
      postalCode
      id
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
      license_type
      license_name
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventImagesId
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
      license_type
      license_name
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventImagesId
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
      license_type
      license_name
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventImagesId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      category
      format
      tags
      createdAt
      updatedAt
      eventCategoryId
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
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      category
      format
      tags
      createdAt
      updatedAt
      eventCategoryId
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
      event {
        id
        name
        source
        infoUrl
        title
        description
        startingDay
        endingDay
        location {
          lat
          lon
          streetAddress
          postalCode
          id
          createdAt
          updatedAt
        }
        images {
          nextToken
        }
        Category {
          nextToken
        }
        createdAt
        updatedAt
      }
      category
      format
      tags
      createdAt
      updatedAt
      eventCategoryId
    }
  }
`;
