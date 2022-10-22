/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages {
    onCreateImages {
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
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages {
    onUpdateImages {
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
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages {
    onDeleteImages {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
