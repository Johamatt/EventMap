/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      format
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        format
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImages = /* GraphQL */ `
  query GetImages($id: ID!) {
    getImages(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lat
        lon
        streetAddess
        postalCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
