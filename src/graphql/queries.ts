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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getEventImage = /* GraphQL */ `
  query GetEventImage($id: ID!) {
    getEventImage(id: $id) {
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
export const listEventImages = /* GraphQL */ `
  query ListEventImages(
    $filter: ModelEventImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
        eventLocationId
        eventCategoryId
        owner
      }
      nextToken
    }
  }
`;
