/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      type
      startingDateTime
      endingDateTime
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
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
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
      deals {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
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
        deals {
          nextToken
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
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      name
      description
      links {
        mainURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      location {
        lat
        lon
        streetAddress
        postalCode
        city
      }
      priceRange {
        min
        max
      }
      categories
      mainCategory
      mainPicture
      secondaryPictures
      openHours {
        day
        timeFrom
        timeTo
      }
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
        deals {
          nextToken
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
      Deal {
        items {
          id
          name
          description
          conditions
          redemptionInstructions
          expiresAt
          availableQuantity
          soldQuantity
          price
          currency
          discount
          owner
          createdAt
          updatedAt
          eventDealId
          companyDealsId
          activityDealId
        }
        nextToken
      }
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
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
        openHours {
          day
          timeFrom
          timeTo
        }
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
        Deal {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
      nextToken
    }
  }
`;
export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
      id
      name
      description
      conditions
      redemptionInstructions
      expiresAt
      redemptionTimes {
        day
        timeFrom
        timeTo
      }
      availableQuantity
      soldQuantity
      price
      currency
      discount
      Event {
        id
        name
        description
        type
        startingDateTime
        endingDateTime
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
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
        Deal {
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
        links {
          mainURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        location {
          lat
          lon
          streetAddress
          postalCode
          city
        }
        priceRange {
          min
          max
        }
        categories
        mainCategory
        mainPicture
        secondaryPictures
        openHours {
          day
          timeFrom
          timeTo
        }
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
        Deal {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
      }
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
        deals {
          nextToken
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
      owner
      createdAt
      updatedAt
      eventDealId
      companyDealsId
      activityDealId
    }
  }
`;
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: ModelDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        conditions
        redemptionInstructions
        expiresAt
        redemptionTimes {
          day
          timeFrom
          timeTo
        }
        availableQuantity
        soldQuantity
        price
        currency
        discount
        Event {
          id
          name
          description
          type
          startingDateTime
          endingDateTime
          categories
          mainCategory
          mainPicture
          secondaryPictures
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
          owner
          createdAt
          updatedAt
          companyActivitiesId
        }
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
        owner
        createdAt
        updatedAt
        eventDealId
        companyDealsId
        activityDealId
      }
      nextToken
    }
  }
`;
