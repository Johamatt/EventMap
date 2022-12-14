/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivityMedia = /* GraphQL */ `
  query GetActivityMedia($id: ID!) {
    getActivityMedia(id: $id) {
      id
      kind
      copyright
      name
      URL
      createdAt
      updatedAt
      activityActivityMediaId
      owner
    }
  }
`;
export const listActivityMedias = /* GraphQL */ `
  query ListActivityMedias(
    $filter: ModelActivityMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        kind
        copyright
        name
        URL
        createdAt
        updatedAt
        activityActivityMediaId
        owner
      }
      nextToken
    }
  }
`;
export const getEventMedia = /* GraphQL */ `
  query GetEventMedia($id: ID!) {
    getEventMedia(id: $id) {
      id
      URL
      kind
      copyright
      name
      createdAt
      updatedAt
      eventEventMediaId
      owner
    }
  }
`;
export const listEventMedias = /* GraphQL */ `
  query ListEventMedias(
    $filter: ModelEventMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        URL
        kind
        copyright
        name
        createdAt
        updatedAt
        eventEventMediaId
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
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
      }
      category
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      eventMedia {
        items {
          id
          URL
          kind
          copyright
          name
          createdAt
          updatedAt
          eventEventMediaId
          owner
        }
        nextToken
      }
      Descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      name {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      createdAt
      updatedAt
      companyEventsId
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
        startingDateTime
        endingDateTime
        location {
          lat
          lon
          streetAddress
          postalCode
        }
        category
        company {
          businessId
          email
          phone
          name
          createdAt
          updatedAt
          owner
        }
        eventMedia {
          nextToken
        }
        Descriptions {
          fi
          en
          sv
          ru
          jp
          de
          zh
          es
        }
        name {
          fi
          en
          sv
          ru
          jp
          de
          zh
          es
        }
        Links {
          siteURL
          otherURL
        }
        source
        updated_at_Source
        createdAt
        updatedAt
        companyEventsId
        owner
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($businessId: ID!) {
    getCompany(businessId: $businessId) {
      businessId
      email
      phone
      name
      activities {
        items {
          id
          duration
          durationType
          meantFor
          categories
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          createdAt
          updatedAt
          companyActivitiesId
          owner
        }
        nextToken
      }
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          source
          updated_at_Source
          createdAt
          updatedAt
          companyEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $businessId: ID
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
      businessId: $businessId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      company {
        businessId
        email
        phone
        name
        activities {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      duration
      durationType
      meantFor
      categories
      price {
        EurFrom
        EurTo
        pricingtype
      }
      Location {
        lat
        lon
        streetAddress
        postalCode
      }
      activityMedia {
        items {
          id
          kind
          copyright
          name
          URL
          createdAt
          updatedAt
          activityActivityMediaId
          owner
        }
        nextToken
      }
      Descriptions {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Names {
        fi
        en
        sv
        ru
        jp
        de
        zh
        es
      }
      Links {
        siteURL
        otherURL
      }
      source
      updated_at_Source
      OpenDays {
        day
        timeFrom
        timeTo
      }
      availableDays
      availableMonths
      raiting
      user_raitings_total
      createdAt
      updatedAt
      companyActivitiesId
      owner
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company {
          businessId
          email
          phone
          name
          createdAt
          updatedAt
          owner
        }
        duration
        durationType
        meantFor
        categories
        price {
          EurFrom
          EurTo
          pricingtype
        }
        Location {
          lat
          lon
          streetAddress
          postalCode
        }
        activityMedia {
          nextToken
        }
        Descriptions {
          fi
          en
          sv
          ru
          jp
          de
          zh
          es
        }
        Names {
          fi
          en
          sv
          ru
          jp
          de
          zh
          es
        }
        Links {
          siteURL
          otherURL
        }
        source
        updated_at_Source
        OpenDays {
          day
          timeFrom
          timeTo
        }
        availableDays
        availableMonths
        raiting
        user_raitings_total
        createdAt
        updatedAt
        companyActivitiesId
        owner
      }
      nextToken
    }
  }
`;
