/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        lat
        lon
        streetAddress
        postalCode
        id
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        eventImagesId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
