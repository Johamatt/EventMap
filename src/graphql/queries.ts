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
        country
      }
      category
      company {
        id
        email
        description {
          fi
          en
          sv
          jp
          es
        }
        logo
        categories
        phone
        name
        links {
          mainURL
          secondaryURL
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
        userFavouriteCompaniesId
      }
      mainPicture
      secondaryPictures
      description {
        fi
        en
        sv
        jp
        es
      }
      name {
        fi
        en
        sv
        jp
        es
      }
      Links {
        mainURL
        secondaryURL
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
          price
          currency
          available
          startSaleDate
          endSaleDate
          owner
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      FeedBack {
        items {
          id
          rating
          comment
          createdAt
          owner
          updatedAt
          eventFeedBackId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyEventsId
      userFavouriteEventsId
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
          country
        }
        category
        company {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        mainPicture
        secondaryPictures
        description {
          fi
          en
          sv
          jp
          es
        }
        name {
          fi
          en
          sv
          jp
          es
        }
        Links {
          mainURL
          secondaryURL
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
        FeedBack {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
        userFavouriteEventsId
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
          country
        }
        category
        company {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        mainPicture
        secondaryPictures
        description {
          fi
          en
          sv
          jp
          es
        }
        name {
          fi
          en
          sv
          jp
          es
        }
        Links {
          mainURL
          secondaryURL
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
        FeedBack {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
        userFavouriteEventsId
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
      description {
        fi
        en
        sv
        jp
        es
      }
      logo
      categories
      phone
      name
      links {
        mainURL
        secondaryURL
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
          category
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
        }
        nextToken
      }
      activities {
        items {
          id
          categories
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      userFavouriteCompaniesId
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
        description {
          fi
          en
          sv
          jp
          es
        }
        logo
        categories
        phone
        name
        links {
          mainURL
          secondaryURL
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
        userFavouriteCompaniesId
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      name {
        fi
        en
        sv
        jp
        es
      }
      price
      currency
      description {
        fi
        en
        sv
        jp
        es
      }
      available
      startSaleDate
      endSaleDate
      Offers {
        items {
          id
          type
          creditCost
          price
          currency
          discount
          bundleSize
          owner
          createdAt
          updatedAt
          ticketOffersId
        }
        nextToken
      }
      owner
      id
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
        name {
          fi
          en
          sv
          jp
          es
        }
        price
        currency
        description {
          fi
          en
          sv
          jp
          es
        }
        available
        startSaleDate
        endSaleDate
        Offers {
          nextToken
        }
        owner
        id
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
      name {
        fi
        en
        sv
        jp
        es
      }
      description {
        fi
        en
        sv
        jp
        es
      }
      type
      creditCost
      price
      currency
      discount
      bundleSize
      owner
      createdAt
      updatedAt
      ticketOffersId
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
        name {
          fi
          en
          sv
          jp
          es
        }
        description {
          fi
          en
          sv
          jp
          es
        }
        type
        creditCost
        price
        currency
        discount
        bundleSize
        owner
        createdAt
        updatedAt
        ticketOffersId
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
      profilePicture
      birthday
      favouriteEvents {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
        }
        nextToken
      }
      favouriteActivities {
        items {
          id
          categories
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
        }
        nextToken
      }
      favouriteCompanies {
        items {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        nextToken
      }
      preferences
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
        profilePicture
        birthday
        favouriteEvents {
          nextToken
        }
        favouriteActivities {
          nextToken
        }
        favouriteCompanies {
          nextToken
        }
        preferences
        credits
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
      name {
        fi
        en
        sv
        jp
        es
      }
      description {
        fi
        en
        sv
        jp
        es
      }
      company {
        id
        email
        description {
          fi
          en
          sv
          jp
          es
        }
        logo
        categories
        phone
        name
        links {
          mainURL
          secondaryURL
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
        userFavouriteCompaniesId
      }
      categories
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      mainPicture
      secondaryPictures
      Links {
        mainURL
        secondaryURL
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
          price
          currency
          available
          startSaleDate
          endSaleDate
          owner
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
        }
        nextToken
      }
      isFree
      FeedBack {
        items {
          id
          rating
          comment
          createdAt
          owner
          updatedAt
          activityFeedBackId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      companyActivitiesId
      userFavouriteActivitiesId
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
        name {
          fi
          en
          sv
          jp
          es
        }
        description {
          fi
          en
          sv
          jp
          es
        }
        company {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        categories
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
          country
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          secondaryURL
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
        FeedBack {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
        userFavouriteActivitiesId
      }
      nextToken
    }
  }
`;
export const getActivityFeedback = /* GraphQL */ `
  query GetActivityFeedback($id: ID!) {
    getActivityFeedback(id: $id) {
      id
      rating
      user {
        id
        name
        email
        profilePicture
        birthday
        favouriteEvents {
          nextToken
        }
        favouriteActivities {
          nextToken
        }
        favouriteCompanies {
          nextToken
        }
        preferences
        credits
        owner
        createdAt
        updatedAt
      }
      activity {
        id
        name {
          fi
          en
          sv
          jp
          es
        }
        description {
          fi
          en
          sv
          jp
          es
        }
        company {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        categories
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
          country
        }
        mainPicture
        secondaryPictures
        Links {
          mainURL
          secondaryURL
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
        FeedBack {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyActivitiesId
        userFavouriteActivitiesId
      }
      comment
      createdAt
      owner
      updatedAt
      activityFeedBackId
    }
  }
`;
export const listActivityFeedbacks = /* GraphQL */ `
  query ListActivityFeedbacks(
    $filter: ModelActivityFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        rating
        user {
          id
          name
          email
          profilePicture
          birthday
          preferences
          credits
          owner
          createdAt
          updatedAt
        }
        activity {
          id
          categories
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
        }
        comment
        createdAt
        owner
        updatedAt
        activityFeedBackId
      }
      nextToken
    }
  }
`;
export const getEventFeedback = /* GraphQL */ `
  query GetEventFeedback($id: ID!) {
    getEventFeedback(id: $id) {
      id
      rating
      user {
        id
        name
        email
        profilePicture
        birthday
        favouriteEvents {
          nextToken
        }
        favouriteActivities {
          nextToken
        }
        favouriteCompanies {
          nextToken
        }
        preferences
        credits
        owner
        createdAt
        updatedAt
      }
      event {
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
          country
        }
        category
        company {
          id
          email
          logo
          categories
          phone
          name
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        mainPicture
        secondaryPictures
        description {
          fi
          en
          sv
          jp
          es
        }
        name {
          fi
          en
          sv
          jp
          es
        }
        Links {
          mainURL
          secondaryURL
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
        FeedBack {
          nextToken
        }
        owner
        createdAt
        updatedAt
        companyEventsId
        userFavouriteEventsId
      }
      comment
      createdAt
      owner
      updatedAt
      eventFeedBackId
    }
  }
`;
export const listEventFeedbacks = /* GraphQL */ `
  query ListEventFeedbacks(
    $filter: ModelEventFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        user {
          id
          name
          email
          profilePicture
          birthday
          preferences
          credits
          owner
          createdAt
          updatedAt
        }
        event {
          id
          type
          startingDateTime
          endingDateTime
          category
          mainPicture
          secondaryPictures
          ageRestriction
          isFree
          owner
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
        }
        comment
        createdAt
        owner
        updatedAt
        eventFeedBackId
      }
      nextToken
    }
  }
`;
