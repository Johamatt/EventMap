/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        city
        country
      }
      category
      company {
        businessId
        email
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        owner
        createdAt
        updatedAt
        userFavouriteCompaniesId
      }
      eventPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      name {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
      }
      source
      website
      updated_at_Source
      attendees
      ageRestriction
      isFree
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
          owner
          id
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
          businessId
          email
          industry
          phone
          name
          website
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        eventPictures
        Descriptions {
          fi
          en
          sv
          jp
          es
          de
        }
        name {
          fi
          en
          sv
          jp
          es
          de
        }
        Links {
          eventURL
          otherURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        source
        website
        updated_at_Source
        attendees
        ageRestriction
        isFree
        Ticket {
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
export const eventByDates = /* GraphQL */ `
  query EventByDates(
    $startingDateTime: String!
    $endingDateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventByDates(
      startingDateTime: $startingDateTime
      endingDateTime: $endingDateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
          businessId
          email
          industry
          phone
          name
          website
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        eventPictures
        Descriptions {
          fi
          en
          sv
          jp
          es
          de
        }
        name {
          fi
          en
          sv
          jp
          es
          de
        }
        Links {
          eventURL
          otherURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
        }
        source
        website
        updated_at_Source
        attendees
        ageRestriction
        isFree
        Ticket {
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
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      name
      price
      currency
      description
      available
      startSaleDate
      endSaleDate
      type
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
        name
        price
        currency
        description
        available
        startSaleDate
        endSaleDate
        type
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
export const getCompany = /* GraphQL */ `
  query GetCompany($businessId: ID!) {
    getCompany(businessId: $businessId) {
      businessId
      email
      industry
      phone
      name
      website
      activities {
        items {
          id
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
          owner
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
        }
        nextToken
      }
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          eventPictures
          source
          website
          updated_at_Source
          attendees
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
      owner
      createdAt
      updatedAt
      userFavouriteCompaniesId
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
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      profilePicture
      birthday
      friends {
        items {
          id
          name
          email
          profilePicture
          birthday
          owner
          createdAt
          updatedAt
          userFriendsId
        }
        nextToken
      }
      favouriteEvents {
        items {
          id
          startingDateTime
          endingDateTime
          category
          eventPictures
          source
          website
          updated_at_Source
          attendees
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
          duration
          durationType
          categories
          activityPictures
          source
          updated_at_Source
          availableDays
          availableMonths
          raiting
          user_raitings_total
          ageRestriction
          isFree
          priceRange
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
          businessId
          email
          industry
          phone
          name
          website
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      userFriendsId
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
        friends {
          nextToken
        }
        favouriteEvents {
          nextToken
        }
        favouriteActivities {
          nextToken
        }
        favouriteCompanies {
          nextToken
        }
        owner
        createdAt
        updatedAt
        userFriendsId
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
        industry
        phone
        name
        website
        activities {
          nextToken
        }
        events {
          nextToken
        }
        owner
        createdAt
        updatedAt
        userFavouriteCompaniesId
      }
      duration
      durationType
      categories
      Location {
        lat
        lon
        streetAddress
        postalCode
        city
        country
      }
      activityPictures
      Descriptions {
        fi
        en
        sv
        jp
        es
        de
      }
      Names {
        fi
        en
        sv
        jp
        es
        de
      }
      Links {
        eventURL
        otherURL
        storeURL
        facebookURL
        twitterURL
        instagramURL
        youtubeURL
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
      ageRestriction
      Ticket {
        items {
          name
          price
          currency
          description
          available
          startSaleDate
          endSaleDate
          type
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
      priceRange
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
        company {
          businessId
          email
          industry
          phone
          name
          website
          owner
          createdAt
          updatedAt
          userFavouriteCompaniesId
        }
        duration
        durationType
        categories
        Location {
          lat
          lon
          streetAddress
          postalCode
          city
          country
        }
        activityPictures
        Descriptions {
          fi
          en
          sv
          jp
          es
          de
        }
        Names {
          fi
          en
          sv
          jp
          es
          de
        }
        Links {
          eventURL
          otherURL
          storeURL
          facebookURL
          twitterURL
          instagramURL
          youtubeURL
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
        ageRestriction
        Ticket {
          nextToken
        }
        isFree
        priceRange
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
