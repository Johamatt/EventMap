/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
