/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      category
      format
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      category
      format
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      category
      format
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages {
    onCreateImages {
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
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages {
    onUpdateImages {
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
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages {
    onDeleteImages {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
