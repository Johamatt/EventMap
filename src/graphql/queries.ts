/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
      id
      name
      description
      type
      coinCost
      value
      discount
      bundleSize
      gift
      owner
      createdAt
      updatedAt
      ticketOfferId
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
        coinCost
        value
        discount
        bundleSize
        gift
        owner
        createdAt
        updatedAt
        ticketOfferId
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
          tokens
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
          MainPicture
          eventPictures
          source
          website
          updated_at_Source
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
      tokens
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
        favouriteCompanies {
          nextToken
        }
        tokens
        owner
        createdAt
        updatedAt
        userFriendsId
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
        events {
          nextToken
        }
        owner
        createdAt
        updatedAt
        userFavouriteCompaniesId
      }
      MainPicture
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
        MainPicture
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
        MainPicture
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
      Offer {
        items {
          id
          name
          description
          type
          coinCost
          value
          discount
          bundleSize
          gift
          owner
          createdAt
          updatedAt
          ticketOfferId
        }
        nextToken
      }
      owner
      id
      createdAt
      updatedAt
      eventTicketId
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
        Offer {
          nextToken
        }
        owner
        id
        createdAt
        updatedAt
        eventTicketId
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
      events {
        items {
          id
          startingDateTime
          endingDateTime
          category
          MainPicture
          eventPictures
          source
          website
          updated_at_Source
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
