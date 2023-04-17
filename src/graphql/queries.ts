/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      type
      startingDateTime
      endingDateTime
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      categories
      mainCategory
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      mainPicture
      secondaryPictures
      description
      name
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      ageRestriction
      isFree
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyEventsId
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
        type
        startingDateTime
        endingDateTime
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      nextToken
    }
  }
`;
export const byStartingDateTime = /* GraphQL */ `
  query ByStartingDateTime(
    $type: String!
    $startingDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byStartingDateTime(
      type: $type
      startingDateTime: $startingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        startingDateTime
        endingDateTime
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      name
      description
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      categories
      mainCategory
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      mainPicture
      secondaryPictures
      Links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      OpenDays {
        day
        timeFrom
        timeTo
      }
      ageRestriction
      Ticket {
        items {
          id
          TicketName
          description
          Ticket
          currency
          available
          startSaleDate
          endSaleDate
          owner
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      isFree
      owner
      createdAt
      updatedAt
      companyActivitiesId
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
        name
        description
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        categories
        mainCategory
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        OpenDays {
          day
          timeFrom
          timeTo
        }
        ageRestriction
        Ticket {
          nextToken
        }
        isFree
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      email
      name
      description
      phone
      logo
      categories
      mainCategory
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      events {
        items {
          id
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
          description
          name
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          name
          description
          categories
          mainCategory
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      TicketName
      description
      Ticket
      currency
      available
      startSaleDate
      endSaleDate
      owner
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TicketName
        description
        Ticket
        currency
        available
        startSaleDate
        endSaleDate
        owner
        createdAt
        updatedAt
        eventTicketId
        activityTicketId
      }
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
      id
      name
      description
      type
      creditCost
      company {
        id
        email
        name
        description
        phone
        logo
        categories
        mainCategory
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        events {
          nextToken
        }
        activities {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      Event {
        id
        type
        startingDateTime
        endingDateTime
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        categories
        mainCategory
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        mainPicture
        secondaryPictures
        description
        name
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        ageRestriction
        isFree
        Ticket {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
      }
      Activity {
        id
        name
        description
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        categories
        mainCategory
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        OpenDays {
          day
          timeFrom
          timeTo
        }
        ageRestriction
        Ticket {
          nextToken
        }
        isFree
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      price
      currency
      discount
      bundleSize
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        creditCost
        company {
          id
          email
          name
          description
          phone
          logo
          categories
          mainCategory
          owner
          createdAt
          updatedAt
        }
        Event {
          id
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
          description
          name
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
        }
        Activity {
          id
          name
          description
          categories
          mainCategory
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
        price
        currency
        discount
        bundleSize
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      birthday
      credits
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        birthday
        credits
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
