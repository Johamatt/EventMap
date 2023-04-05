/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $owner: String
  ) {
    onCreateEvent(filter: $filter, owner: $owner) {
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
      primaryCategory
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
      primaryCategory
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
      primaryCategory
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onCreateActivity(filter: $filter, owner: $owner) {
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onUpdateActivity(filter: $filter, owner: $owner) {
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity(
    $filter: ModelSubscriptionActivityFilterInput
    $owner: String
  ) {
    onDeleteActivity(filter: $filter, owner: $owner) {
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
          tiktokURL
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
        tiktokURL
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
          eventOffersId
          activityOffersId
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
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
        tiktokURL
      }
      events {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
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
        tiktokURL
      }
      events {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
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
        tiktokURL
      }
      events {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onCreateTicket(filter: $filter, owner: $owner) {
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
      owner
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onUpdateTicket(filter: $filter, owner: $owner) {
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
      owner
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket(
    $filter: ModelSubscriptionTicketFilterInput
    $owner: String
  ) {
    onDeleteTicket(filter: $filter, owner: $owner) {
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
      owner
      id
      createdAt
      updatedAt
      eventTicketId
      activityTicketId
    }
  }
`;
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer(
    $filter: ModelSubscriptionOfferFilterInput
    $owner: String
  ) {
    onCreateOffer(filter: $filter, owner: $owner) {
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
      eventOffersId
      activityOffersId
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
      eventOffersId
      activityOffersId
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
      eventOffersId
      activityOffersId
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
      favouriteEvents {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
      favouriteEvents {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
      favouriteEvents {
        items {
          id
          type
          startingDateTime
          endingDateTime
          category
          primaryCategory
          mainPicture
          secondaryPictures
          ageRestriction
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
