/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onCreateOffer(filter: $filter, owner: $owner) {
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
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onUpdateOffer(filter: $filter, owner: $owner) {
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
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onDeleteOffer(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onUpdateEvent(filter: $filter, owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onDeleteEvent(filter: $filter, owner: $owner) {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onCreateTicket(filter: $filter, owner: $owner) {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onUpdateTicket(filter: $filter, owner: $owner) {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onDeleteTicket(filter: $filter, owner: $owner) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
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
