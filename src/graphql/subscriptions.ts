/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateEventImage = /* GraphQL */ `
  subscription OnCreateEventImage($owner: String) {
    onCreateEventImage(owner: $owner) {
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
export const onUpdateEventImage = /* GraphQL */ `
  subscription OnUpdateEventImage($owner: String) {
    onUpdateEventImage(owner: $owner) {
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
export const onDeleteEventImage = /* GraphQL */ `
  subscription OnDeleteEventImage($owner: String) {
    onDeleteEventImage(owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String) {
    onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($owner: String) {
    onUpdateLocation(owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($owner: String) {
    onDeleteLocation(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
