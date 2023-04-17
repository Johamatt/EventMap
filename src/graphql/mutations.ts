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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
