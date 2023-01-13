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
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
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
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      companyEventsId
      userFavouriteEventsId
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
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
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
        createdAt
        updatedAt
        companyEventsId
        userFavouriteEventsId
        owner
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
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
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
        createdAt
        updatedAt
        companyEventsId
        userFavouriteEventsId
        owner
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
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
      owner
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
        id
        createdAt
        updatedAt
        eventTicketId
        activityTicketId
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
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
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
          eventPictures
          source
          website
          updated_at_Source
          attendees
          ageRestriction
          isFree
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavouriteCompaniesId
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
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
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
          createdAt
          updatedAt
          userFriendsId
          owner
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
          createdAt
          updatedAt
          companyEventsId
          userFavouriteEventsId
          owner
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
          createdAt
          updatedAt
          companyActivitiesId
          userFavouriteActivitiesId
          owner
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
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userFriendsId
      owner
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
        createdAt
        updatedAt
        userFriendsId
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
        createdAt
        updatedAt
        userFavouriteCompaniesId
        owner
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
          id
          createdAt
          updatedAt
          eventTicketId
          activityTicketId
          owner
        }
        nextToken
      }
      isFree
      priceRange
      createdAt
      updatedAt
      companyActivitiesId
      userFavouriteActivitiesId
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
          industry
          phone
          name
          website
          createdAt
          updatedAt
          userFavouriteCompaniesId
          owner
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
        createdAt
        updatedAt
        companyActivitiesId
        userFavouriteActivitiesId
        owner
      }
      nextToken
    }
  }
`;
